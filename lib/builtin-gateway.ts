import { NextRequest, NextResponse } from "next/server";
import { Buffer } from "node:buffer";
import { createHash, createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { getAllActivity, getTelemetryOverview } from "@/lib/telemetry-store";
import { DEFAULT_MODELS, DEFAULT_PROVIDERS } from "./server-api";

const SESSION_COOKIE = "uno_session";
const SESSION_MAX_AGE_MS = 30 * 24 * 3600 * 1000;
const DEV_SESSION_SECRET = "prorouter-dev-fallback-session-secret";
const globalPromoActivations = new Map<string, number>();

interface FallbackTx {
  id: string;
  type: string;
  amountPaise: number;
  amountFormatted: string;
  balanceAfterPaise: number;
  reference: string | null;
  createdAt: string;
}

interface FallbackPayment {
  id: string;
  invoice: string;
  amountPaise: number;
  amountFormatted: string;
  gateway: string;
  status: string;
  createdAt: string;
}

interface FallbackPendingOrder {
  amountPaise: number;
  totalPaise: number;
  invoice: string;
  name: string;
  currency: string;
  createdAt: number;
}

interface FallbackCheckout {
  paymentId: string;
  invoice: string;
  amountPaise: number;
  currency: string;
  gatewayOrderId: string;
}

interface FallbackWallet {
  balancePaise: number;
  transactions: FallbackTx[];
  payments: FallbackPayment[];
  orders: Map<string, FallbackPendingOrder>;
  checkouts: Map<string, FallbackCheckout>;
  redeemedPromos: Set<string>;
  astraExpiresAt: number | null;
}

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: string;
  status: string;
  accountNumber: string;
}

const fallbackWallets = new Map<string, FallbackWallet>();
const demoUsers = new Map<string, { passwordHash: string; salt: string; name: string }>();

function walletFor(userId: string): FallbackWallet {
  let wallet = fallbackWallets.get(userId);
  if (!wallet) {
    wallet = {
      balancePaise: 0,
      transactions: [],
      payments: [],
      orders: new Map(),
      checkouts: new Map(),
      redeemedPromos: new Set(),
      astraExpiresAt: null,
    };
    fallbackWallets.set(userId, wallet);
  }
  return wallet;
}

export function isDemoFallbackEnabled(): boolean {
  const flag = process.env.PROROUTER_ENABLE_DEMO_FALLBACK;
  if (flag === "true") return true;
  if (flag === "false") return false;
  return process.env.NODE_ENV !== "production";
}

function sessionSecret(): string | null {
  const configured = process.env.SESSION_SECRET || process.env.PROROUTER_SESSION_SECRET;
  if (configured && configured.length >= 16) return configured;
  if (process.env.NODE_ENV !== "production") return DEV_SESSION_SECRET;
  return null;
}

function adminEmails(): string[] {
  return (process.env.PROROUTER_ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

function hashPassword(password: string, salt: string): string {
  return scryptSync(password, salt, 32).toString("hex");
}

function verifyPassword(password: string, salt: string, expectedHex: string): boolean {
  const actual = Buffer.from(hashPassword(password, salt), "hex");
  const expected = Buffer.from(expectedHex, "hex");
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

function passwordProblem(password: unknown): string | null {
  if (typeof password !== "string" || password.length < 8) return "Password must be at least 8 characters long.";
  if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) return "Password must include at least one letter and one number.";
  return null;
}

async function readJson(req: NextRequest): Promise<Record<string, any>> {
  try {
    const body = await req.json();
    return body && typeof body === "object" ? (body as Record<string, any>) : {};
  } catch {
    return {};
  }
}

function sessionUnavailable() {
  return NextResponse.json(
    { error: { code: "provider_unavailable", message: "Session signing is not configured. Set SESSION_SECRET (16+ characters) to enable demo authentication." } },
    { status: 503 },
  );
}

function signSession(encoded: string, secret: string): string {
  return createHmac("sha256", secret).update(encoded).digest("base64url");
}

function createSessionCookie(user: SessionUser): string | null {
  const secret = sessionSecret();
  if (!secret) return null;
  const payload = {
    id: user.id,
    email: user.email.toLowerCase(),
    name: user.name,
    accountNumber: user.accountNumber,
    iat: Date.now(),
  };
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${encoded}.${signSession(encoded, secret)}`;
}

function parseSessionCookie(req: NextRequest): SessionUser | null {
  const secret = sessionSecret();
  if (!secret) return null;
  const cookie = req.cookies.get(SESSION_COOKIE)?.value;
  if (!cookie) return null;
  const parts = cookie.split(".");
  if (parts.length !== 2) return null;
  const [encoded, signature] = parts;
  const expected = signSession(encoded, secret);
  const providedBuf = Buffer.from(signature);
  const expectedBuf = Buffer.from(expected);
  if (providedBuf.length !== expectedBuf.length || !timingSafeEqual(providedBuf, expectedBuf)) return null;
  try {
    const parsed = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8"));
    if (!parsed || typeof parsed.email !== "string") return null;
    if (typeof parsed.iat !== "number" || Date.now() - parsed.iat > SESSION_MAX_AGE_MS) return null;
    const email = parsed.email.toLowerCase();
    if (!isValidGmail(email)) return null;
    return {
      id: parsed.id && typeof parsed.id === "string" && parsed.id.startsWith("usr_pr_") ? parsed.id : generateDeterministicUserId(email),
      email,
      name: typeof parsed.name === "string" && parsed.name ? parsed.name : email.split("@")[0],
      role: adminEmails().includes(email) ? "admin" : "user",
      status: "active",
      accountNumber: typeof parsed.accountNumber === "string" && parsed.accountNumber ? parsed.accountNumber : generateDeterministicAccountNumber(email),
    };
  } catch {
    return null;
  }
}

function buildUser(email: string, name?: string): SessionUser {
  return {
    id: generateDeterministicUserId(email),
    email,
    name: name || email.split("@")[0],
    role: adminEmails().includes(email) ? "admin" : "user",
    status: "active",
    accountNumber: generateDeterministicAccountNumber(email),
  };
}

function sessionResponse(user: SessionUser, status: number) {
  const token = createSessionCookie(user);
  if (!token) return sessionUnavailable();
  const res = NextResponse.json({ user }, { status });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 30 * 24 * 3600,
  });
  return res;
}

function requireSession(req: NextRequest): { user: SessionUser } | { response: NextResponse } {
  const user = parseSessionCookie(req);
  if (!user) {
    return {
      response: NextResponse.json({ error: { code: "unauthenticated", message: "Sign in to continue." } }, { status: 401 }),
    };
  }
  return { user };
}

function astraState(wallet: FallbackWallet) {
  const expiresAt = wallet.astraExpiresAt;
  const active = Boolean(expiresAt && expiresAt > Date.now());
  return {
    active,
    expiresAt: active && expiresAt ? new Date(expiresAt).toISOString() : null,
    daysLeft: active && expiresAt ? Math.ceil((expiresAt - Date.now()) / 86400000) : 0,
  };
}

export function isValidGmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  const trimmed = email.trim().toLowerCase();
  if ((process.env.NODE_ENV === "test" || process.env.VITEST) && trimmed.endsWith("@uno.test")) return true;
  if (trimmed.includes("+")) return false;
  if (!trimmed.endsWith("@gmail.com")) return false;
  const username = trimmed.slice(0, trimmed.length - "@gmail.com".length);
  const gmailRegex = /^[a-z0-9](?!.*\.\.)[a-z0-9.]{4,28}[a-z0-9]$/;
  return gmailRegex.test(username);
}

export function generateDeterministicUserId(identifier: string): string {
  const clean = (identifier || "").trim().toLowerCase();
  return `usr_pr_${createHash("sha256").update(clean).digest("hex").slice(0, 16)}`;
}

export function generateDeterministicAccountNumber(identifier: string): string {
  const clean = (identifier || "").trim().toLowerCase();
  let hash1 = 5381;
  let hash2 = 52711;
  for (let i = 0; i < clean.length; i++) {
    const char = clean.charCodeAt(i);
    hash1 = (hash1 * 33) ^ char;
    hash2 = (hash2 * 33) ^ char;
  }
  const part1 = (Math.abs(hash1) % 9000 + 1000).toString();
  const part2 = (Math.abs(hash2) % 9000 + 1000).toString();
  return `PR-ACC-${part1}-${part2}`;
}

export async function handleFallback(req: NextRequest, path: string[]) {
  if (!isDemoFallbackEnabled()) {
    return NextResponse.json(
      { error: { code: "provider_unavailable", message: "The built-in demo gateway is disabled. Configure API_BASE_URL to reach the ProRouter backend." } },
      { status: 503 },
    );
  }

  const subpath = "/" + path.join("/");
  const method = req.method;

  // ── Auth: Register ──
  if (subpath === "/auth/register" && method === "POST") {
    if (!sessionSecret()) return sessionUnavailable();
    const body = await readJson(req);
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const name = typeof body.name === "string" ? body.name.trim() : "";
    if (!isValidGmail(email)) {
      return NextResponse.json({ error: { code: "invalid_request", message: "Only official standard Google Gmail accounts (@gmail.com) are allowed. Temporary emails and aliases with '+' are not permitted." } }, { status: 400 });
    }
    const problem = passwordProblem(body.password);
    if (problem) {
      return NextResponse.json({ error: { code: "invalid_request", message: problem } }, { status: 400 });
    }
    if (demoUsers.has(email)) {
      return NextResponse.json({ error: { code: "invalid_request", message: "An account with this Gmail already exists. Please sign in instead." } }, { status: 409 });
    }
    const salt = randomBytes(16).toString("hex");
    demoUsers.set(email, { passwordHash: hashPassword(body.password, salt), salt, name: name || email.split("@")[0] });
    return sessionResponse(buildUser(email, name), 201);
  }

  // ── Auth: Login ──
  if (subpath === "/auth/login" && method === "POST") {
    if (!sessionSecret()) return sessionUnavailable();
    const body = await readJson(req);
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    if (!isValidGmail(email)) {
      return NextResponse.json({ error: { code: "invalid_request", message: "Only official standard Google Gmail accounts (@gmail.com) are allowed. Temporary emails and aliases with '+' are not permitted." } }, { status: 400 });
    }
    const record = demoUsers.get(email);
    const password = typeof body.password === "string" ? body.password : "";
    if (!record || !verifyPassword(password, record.salt, record.passwordHash)) {
      return NextResponse.json({ error: { code: "unauthenticated", message: "Incorrect Gmail or password." } }, { status: 401 });
    }
    return sessionResponse(buildUser(email, record.name), 200);
  }

  // ── Auth: Logout ──
  if (subpath === "/auth/logout" && method === "POST") {
    const res = NextResponse.json({ ok: true });
    res.cookies.delete(SESSION_COOKIE);
    return res;
  }

  // ── Auth: Me ──
  if (subpath === "/auth/me" && method === "GET") {
    const auth = requireSession(req);
    if ("response" in auth) return auth.response;
    const wallet = walletFor(auth.user.id);
    return NextResponse.json({
      user: auth.user,
      balancePaise: wallet.balancePaise,
      plan: { slug: "free", name: "Free Tier", pricePaise: 0, freeRpm: 20, queuePriority: 1 },
      astra: astraState(wallet),
    });
  }

  // ── Auth: Profile Update ──
  if (subpath === "/auth/profile" && method === "PATCH") {
    const auth = requireSession(req);
    if ("response" in auth) return auth.response;
    const body = await readJson(req);
    const name = typeof body.name === "string" ? body.name.trim() : "";
    if (!name) {
      return NextResponse.json({ error: { code: "invalid_request", message: "Please provide a display name." } }, { status: 400 });
    }
    const record = demoUsers.get(auth.user.email);
    if (record) record.name = name;
    return sessionResponse({ ...auth.user, name }, 200);
  }

  // ── Auth: Password Change ──
  if (subpath === "/auth/password" && method === "POST") {
    const auth = requireSession(req);
    if ("response" in auth) return auth.response;
    const body = await readJson(req);
    const record = demoUsers.get(auth.user.email);
    if (!record) {
      return NextResponse.json({ error: { code: "invalid_request", message: "Password changes are only available for demo accounts created in this session." } }, { status: 400 });
    }
    const currentPassword = typeof body.currentPassword === "string" ? body.currentPassword : "";
    if (!verifyPassword(currentPassword, record.salt, record.passwordHash)) {
      return NextResponse.json({ error: { code: "invalid_request", message: "Current password is incorrect." } }, { status: 400 });
    }
    const problem = passwordProblem(body.newPassword);
    if (problem) {
      return NextResponse.json({ error: { code: "invalid_request", message: problem } }, { status: 400 });
    }
    const salt = randomBytes(16).toString("hex");
    record.salt = salt;
    record.passwordHash = hashPassword(body.newPassword, salt);
    return NextResponse.json({ ok: true });
  }

  // ── Keys ──
  if (subpath === "/keys" || subpath.startsWith("/keys/")) {
    return NextResponse.json(
      { error: { code: "provider_unavailable", message: "API keys are issued by the ProRouter backend and are not available in the built-in demo gateway." } },
      { status: 503 },
    );
  }

  // ── Dashboard Overview & Stats ──
  if (subpath.startsWith("/dashboard") || subpath === "/usage" || subpath.startsWith("/usage/")) {
    const auth = requireSession(req);
    if ("response" in auth) return auth.response;

    if (subpath === "/dashboard/overview") {
      const url = new URL(req.url);
      const timeFilter = url.searchParams.get("time") || "This month";
      const modelFilter = url.searchParams.get("model") || "By Model";
      const stats = getTelemetryOverview(timeFilter, modelFilter);

      return NextResponse.json({
        ...stats,
        activeKeys: 0,
        freeUsed: 0,
        plan: {
          slug: "free",
          name: "Free Tier",
          freeRpm: 20,
          queuePriority: 1,
        },
        queue: [],
      });
    }

    if (subpath.startsWith("/dashboard/activity")) {
      if (subpath.length > "/dashboard/activity/".length && !subpath.includes("?")) {
        const id = subpath.slice("/dashboard/activity/".length);
        const all = getAllActivity(100, 0);
        const found = all.items.find((item) => item.id === id) || all.items[0];
        return NextResponse.json({
          request: found,
          attempts: [],
          timeline: [],
        });
      }

      const all = getAllActivity(50, 0);
      return NextResponse.json(all);
    }

    if (subpath.startsWith("/dashboard/series")) {
      const overview = getTelemetryOverview();
      return NextResponse.json({ items: overview.dailySeries });
    }

    if (subpath.startsWith("/dashboard/usage") || subpath === "/usage" || subpath.startsWith("/usage/")) {
      const overview = getTelemetryOverview();
      return NextResponse.json({
        byModel: overview.models.map((m) => ({ model: m.id, n: m.requests, tokens: m.tokens, cost: m.spend })),
        byProvider: [],
      });
    }
  }

  // ── Wallet ──
  if (subpath === "/wallet" && method === "GET") {
    const auth = requireSession(req);
    if ("response" in auth) return auth.response;
    const wallet = walletFor(auth.user.id);
    return NextResponse.json({
      balancePaise: wallet.balancePaise,
      balanceFormatted: `₹${(wallet.balancePaise / 100).toFixed(2)}`,
      currency: "INR",
      transactions: wallet.transactions,
    });
  }

  if (subpath === "/wallet/packages") {
    const url = new URL(req.url);
    const curr = (url.searchParams.get("currency") || "INR").toUpperCase();
    if (curr === "USD") {
      return NextResponse.json({
        items: [
          {
            id: "pkg_usd_5",
            slug: "starter-usd-5",
            name: "$5 Starter Pack",
            pricePaise: 500,
            priceFormatted: "$5.00",
            bonusPaise: 0,
            totalPaise: 500,
            totalFormatted: "$5.00",
            currency: "USD",
          },
          {
            id: "pkg_usd_10",
            slug: "pro-usd-10",
            name: "$10 Pro Pack",
            pricePaise: 1000,
            priceFormatted: "$10.00",
            bonusPaise: 150,
            totalPaise: 1150,
            totalFormatted: "$11.50",
            currency: "USD",
          },
          {
            id: "pkg_usd_25",
            slug: "scale-usd-25",
            name: "$25 Scale Pack",
            pricePaise: 2500,
            priceFormatted: "$25.00",
            bonusPaise: 500,
            totalPaise: 3000,
            totalFormatted: "$30.00",
            currency: "USD",
          },
          {
            id: "pkg_usd_50",
            slug: "power-usd-50",
            name: "$50 Power Pack",
            pricePaise: 5000,
            priceFormatted: "$50.00",
            bonusPaise: 1500,
            totalPaise: 6500,
            totalFormatted: "$65.00",
            currency: "USD",
          },
        ],
      });
    }

    return NextResponse.json({
      items: [
        {
          id: "pkg_100",
          slug: "starter-100",
          name: "₹100 Starter Pack",
          pricePaise: 10000,
          priceFormatted: "₹100",
          bonusPaise: 0,
          totalPaise: 10000,
          totalFormatted: "₹100",
          currency: "INR",
        },
        {
          id: "pkg_500",
          slug: "pro-500",
          name: "₹500 Pro Pack",
          pricePaise: 50000,
          priceFormatted: "₹500",
          bonusPaise: 5000,
          totalPaise: 55000,
          totalFormatted: "₹550",
          currency: "INR",
        },
        {
          id: "pkg_1000",
          slug: "scale-1000",
          name: "₹1,000 Scale Pack",
          pricePaise: 100000,
          priceFormatted: "₹1,000",
          bonusPaise: 20000,
          totalPaise: 120000,
          totalFormatted: "₹1,200",
          currency: "INR",
        },
        {
          id: "pkg_2500",
          slug: "power-2500",
          name: "₹2,500 Power Pack",
          pricePaise: 250000,
          priceFormatted: "₹2,500",
          bonusPaise: 65000,
          totalPaise: 315000,
          totalFormatted: "₹3,150",
          currency: "INR",
        },
      ],
    });
  }

  if (subpath === "/wallet/checkout" && method === "POST") {
    const auth = requireSession(req);
    if ("response" in auth) return auth.response;

    const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
    const keySecret = process.env.RAZORPAY_KEY_SECRET || "";
    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: { code: "provider_unavailable", message: "Razorpay is not configured. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET." } },
        { status: 503 },
      );
    }

    interface GatewayPackage {
      priceMinor: number;
      name: string;
      bonusPaise: number;
      currency: "INR" | "USD";
    }

    const packageMap: Record<string, GatewayPackage> = {
      "starter-100": { priceMinor: 10000, name: "₹100 Starter Pack", bonusPaise: 0, currency: "INR" },
      "pro-500": { priceMinor: 50000, name: "₹500 Pro Pack", bonusPaise: 5000, currency: "INR" },
      "scale-1000": { priceMinor: 100000, name: "₹1,000 Scale Pack", bonusPaise: 20000, currency: "INR" },
      "power-2500": { priceMinor: 250000, name: "₹2,500 Power Pack", bonusPaise: 65000, currency: "INR" },
      starter: { priceMinor: 49900, name: "Starter", bonusPaise: 0, currency: "INR" },
      builder: { priceMinor: 99900, name: "Builder", bonusPaise: 5100, currency: "INR" },
      pro: { priceMinor: 249900, name: "Pro", bonusPaise: 25100, currency: "INR" },
      power: { priceMinor: 499900, name: "Power", bonusPaise: 75100, currency: "INR" },
      "starter-usd-5": { priceMinor: 500, name: "$5 Starter Pack", bonusPaise: 0, currency: "USD" },
      "pro-usd-10": { priceMinor: 1000, name: "$10 Pro Pack", bonusPaise: 150, currency: "USD" },
      "scale-usd-25": { priceMinor: 2500, name: "$25 Scale Pack", bonusPaise: 500, currency: "USD" },
      "power-usd-50": { priceMinor: 5000, name: "$50 Power Pack", bonusPaise: 1500, currency: "USD" },
      "builder-usd": { priceMinor: 1200, name: "Builder Plan", bonusPaise: 100, currency: "USD" },
      "pro-usd": { priceMinor: 2900, name: "Pro Plan", bonusPaise: 300, currency: "USD" },
    };

    const body = await readJson(req);
    const packageSlug = typeof body.packageSlug === "string" ? body.packageSlug : "";
    const pkg = packageMap[packageSlug];
    if (!pkg) {
      return NextResponse.json({ error: { code: "invalid_request", message: "Unknown wallet package." } }, { status: 400 });
    }

    const wallet = walletFor(auth.user.id);
    const idempotencyKey = typeof body.idempotencyKey === "string" ? body.idempotencyKey.trim() : "";
    if (idempotencyKey) {
      const prior = wallet.checkouts.get(idempotencyKey);
      if (prior) {
        return NextResponse.json({ ...prior, gateway: "razorpay", keyId });
      }
    }

    const invoice = "PRO-" + Date.now().toString(36).toUpperCase() + "-" + randomBytes(3).toString("hex").toUpperCase();
    const paymentId = "pay_" + randomBytes(8).toString("hex");
    const authHeader = Buffer.from(keyId + ":" + keySecret).toString("base64");

    let gatewayOrderId = "";
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const rzpRes = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          authorization: "Basic " + authHeader,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          amount: pkg.priceMinor,
          currency: pkg.currency,
          receipt: invoice,
          notes: { payment_id: paymentId, package: packageSlug, currency: pkg.currency },
        }),
        signal: controller.signal,
      });
      if (rzpRes.ok) {
        const orderData = (await rzpRes.json()) as { id?: unknown };
        if (typeof orderData.id === "string" && orderData.id) gatewayOrderId = orderData.id;
      }
    } catch (error) {
      console.error("Razorpay order creation failed:", error);
    } finally {
      clearTimeout(timer);
    }

    if (!gatewayOrderId) {
      return NextResponse.json({ error: { code: "provider_error", message: "Could not create a Razorpay order. Please try again." } }, { status: 502 });
    }

    wallet.orders.set(gatewayOrderId, {
      amountPaise: pkg.priceMinor,
      totalPaise: pkg.priceMinor + pkg.bonusPaise,
      invoice,
      name: pkg.name,
      currency: pkg.currency,
      createdAt: Date.now(),
    });
    while (wallet.orders.size > 20) {
      const oldest = wallet.orders.keys().next().value;
      if (oldest === undefined) break;
      wallet.orders.delete(oldest);
    }

    const checkout: FallbackCheckout = {
      paymentId,
      invoice,
      amountPaise: pkg.priceMinor,
      currency: pkg.currency,
      gatewayOrderId,
    };
    if (idempotencyKey) {
      wallet.checkouts.set(idempotencyKey, checkout);
      while (wallet.checkouts.size > 50) {
        const oldest = wallet.checkouts.keys().next().value;
        if (oldest === undefined) break;
        wallet.checkouts.delete(oldest);
      }
    }

    return NextResponse.json({ ...checkout, gateway: "razorpay", keyId });
  }

  if (subpath === "/wallet/verify" && method === "POST") {
    const auth = requireSession(req);
    if ("response" in auth) return auth.response;

    const keySecret = process.env.RAZORPAY_KEY_SECRET || "";
    if (!keySecret) {
      return NextResponse.json(
        { error: { code: "provider_unavailable", message: "Razorpay is not configured. Set RAZORPAY_KEY_SECRET." } },
        { status: 503 },
      );
    }

    const body = await readJson(req);
    const razorpayPaymentId = typeof body.razorpayPaymentId === "string" ? body.razorpayPaymentId : "";
    const razorpayOrderId = typeof body.razorpayOrderId === "string" ? body.razorpayOrderId : "";
    const razorpaySignature = typeof body.razorpaySignature === "string" ? body.razorpaySignature : "";
    if (!razorpayPaymentId || !razorpayOrderId || !razorpaySignature) {
      return NextResponse.json({ error: { code: "invalid_request", message: "Razorpay payment id, order id and signature are required." } }, { status: 400 });
    }

    const wallet = walletFor(auth.user.id);
    const existing = wallet.transactions.find((tx) => tx.id === "tx_" + razorpayPaymentId);
    if (existing) {
      return NextResponse.json({
        success: true,
        status: "captured",
        paymentId: typeof body.paymentId === "string" && body.paymentId ? body.paymentId : razorpayPaymentId,
        gatewayPaymentId: razorpayPaymentId,
        credited: false,
        deduped: true,
      });
    }

    const order = wallet.orders.get(razorpayOrderId);
    if (!order || Date.now() - order.createdAt > 60 * 60 * 1000) {
      wallet.orders.delete(razorpayOrderId);
      return NextResponse.json({ error: { code: "invalid_request", message: "Unknown or expired payment order for this account." } }, { status: 400 });
    }

    const expected = createHmac("sha256", keySecret).update(razorpayOrderId + "|" + razorpayPaymentId).digest("hex");
    const providedBuf = Buffer.from(razorpaySignature);
    const expectedBuf = Buffer.from(expected);
    if (providedBuf.length !== expectedBuf.length || !timingSafeEqual(providedBuf, expectedBuf)) {
      return NextResponse.json({ error: { code: "forbidden", message: "Invalid payment signature." } }, { status: 403 });
    }

    wallet.balancePaise += order.totalPaise;
    wallet.transactions.unshift({
      id: "tx_" + razorpayPaymentId,
      type: "topup",
      amountPaise: order.totalPaise,
      amountFormatted: "+₹" + (order.totalPaise / 100).toFixed(2),
      balanceAfterPaise: wallet.balancePaise,
      reference: order.invoice,
      createdAt: new Date().toISOString(),
    });
    wallet.payments.unshift({
      id: razorpayPaymentId,
      invoice: order.invoice,
      amountPaise: order.amountPaise,
      amountFormatted: "₹" + (order.amountPaise / 100).toFixed(2),
      gateway: "razorpay",
      status: "captured",
      createdAt: new Date().toISOString(),
    });
    wallet.orders.delete(razorpayOrderId);

    return NextResponse.json({
      success: true,
      status: "captured",
      paymentId: typeof body.paymentId === "string" && body.paymentId ? body.paymentId : razorpayPaymentId,
      gatewayPaymentId: razorpayPaymentId,
      credited: true,
    });
  }

  if (subpath === "/payments") {
    const auth = requireSession(req);
    if ("response" in auth) return auth.response;
    return NextResponse.json({
      items: walletFor(auth.user.id).payments,
    });
  }

  // ── Notifications ──
  if (subpath === "/notifications") {
    const auth = requireSession(req);
    if ("response" in auth) return auth.response;
    return NextResponse.json({
      items: [
        {
          id: "notif_welcome",
          title: "Welcome to ProRouter",
          body: "One API. Every Model. 27+ models ready with high speed and zero downtime.",
          readAt: null,
          createdAt: new Date().toISOString(),
        },
      ],
    });
  }

  if (subpath === "/notifications/read" && method === "POST") {
    const auth = requireSession(req);
    if ("response" in auth) return auth.response;
    return NextResponse.json({ ok: true });
  }

  // ── Promotions / Astra ──
  if (subpath === "/promotions/astra") {
    const user = parseSessionCookie(req);
    const wallet = user ? walletFor(user.id) : null;
    const astra = wallet ? astraState(wallet) : { active: false, expiresAt: null, daysLeft: 0 };
    return NextResponse.json({
      available: true,
      campaign: {
        name: "Astra Launch Offer",
        originalPricePaise: 299900,
        originalPriceFormatted: "₹2,999",
        discountPercent: 50,
        promoPricePaise: 149900,
        promoPriceFormatted: "₹1,499",
        trialDays: 30,
        endsAt: new Date(Date.now() + 30 * 86400000).toISOString(),
        active: true,
      },
      entitlement: astra.active ? { activatedAt: new Date().toISOString(), expiresAt: astra.expiresAt, daysLeft: astra.daysLeft } : null,
      myCode: user ? "ASTRA-PRO" : null,
    });
  }

  if (subpath === "/promotions/astra/referral") {
    const auth = requireSession(req);
    if ("response" in auth) return auth.response;
    return NextResponse.json({
      code: "ASTRA-PRO",
      sharePath: "/signup?ref=ASTRA-PRO",
      successfulRedemptions: 0,
      activeAstraUsers: 0,
      trialDays: 30,
    });
  }

  if (subpath === "/promotions/astra/redeem" && method === "POST") {
    const auth = requireSession(req);
    if ("response" in auth) return auth.response;
    const body = await readJson(req);
    const code = typeof body.code === "string" ? body.code.trim().toUpperCase() : "";
    if (!code) {
      return NextResponse.json({ error: { code: "invalid_request", message: "Please enter a referral or gift code." } }, { status: 400 });
    }
    if (!/^ASTRA-PRO$/.test(code) && !/^PRO-[A-Z0-9]{6}$/.test(code)) {
      return NextResponse.json({ error: { code: "invalid_code", message: "This code is not valid." } }, { status: 400 });
    }
    const wallet = walletFor(auth.user.id);
    if (wallet.redeemedPromos.has(code)) {
      return NextResponse.json({ error: { code: "already_redeemed", message: "This code has already been redeemed." } }, { status: 400 });
    }
    wallet.redeemedPromos.add(code);
    wallet.balancePaise += 5000;
    wallet.astraExpiresAt = Date.now() + 30 * 86400000;
    wallet.transactions.unshift({
      id: "tx_promo_" + code + "_" + Date.now(),
      type: "promo",
      amountPaise: 5000,
      amountFormatted: "+₹50.00",
      balanceAfterPaise: wallet.balancePaise,
      reference: code,
      createdAt: new Date().toISOString(),
    });
    return NextResponse.json({
      success: true,
      entitlement: {
        activatedAt: new Date().toISOString(),
        expiresAt: new Date(wallet.astraExpiresAt).toISOString(),
        daysLeft: 30,
      },
      message: "Astra access activated.",
    });
  }
  // ── 48-Hour Promotional Launch Special (§Phase 4) ──
  if (subpath === "/promotions/launch-48h") {
    const user = parseSessionCookie(req);
    const userId = user?.id || req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "guest-session";
    const storedStart = globalPromoActivations.get(userId);
    const now = Date.now();
    const duration = 48 * 3600 * 1000;
    const activated = Boolean(storedStart);
    const expiresAt = storedStart ? storedStart + duration : null;
    const remainingMs = expiresAt ? Math.max(0, expiresAt - now) : 0;
    const active = Boolean(expiresAt && remainingMs > 0);
    const hours = Math.floor(remainingMs / (1000 * 60 * 60));
    const mins = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));

    return NextResponse.json({
      campaign: "launch-48h-special",
      name: "Launch Special: 48 Hours Free",
      eligibleModels: ["deepseek-v4.1-flash", "qwen3.8-27b"],
      durationHours: 48,
      activated,
      active,
      remainingMs,
      remainingFormatted: active ? `${hours}h ${mins}m left` : (activated ? "Expired" : "Not activated"),
      expiresAt: expiresAt ? new Date(expiresAt).toISOString() : null,
    });
  }

  if (subpath === "/promotions/launch-48h/activate" && method === "POST") {
    const user = parseSessionCookie(req);
    const userId = user?.id || req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "guest-session";
    const duration = 48 * 3600 * 1000;
    let storedStart = globalPromoActivations.get(userId);
    let alreadyActivated = true;
    if (!storedStart) {
      storedStart = Date.now();
      globalPromoActivations.set(userId, storedStart);
      alreadyActivated = false;
    }
    const expiresAt = storedStart + duration;
    const remainingMs = Math.max(0, expiresAt - Date.now());
    const active = remainingMs > 0;
    const hours = Math.floor(remainingMs / (1000 * 60 * 60));
    const mins = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));

    return NextResponse.json({
      ok: true,
      alreadyActivated,
      active,
      remainingMs,
      remainingFormatted: `${hours}h ${mins}m left`,
      expiresAt: new Date(expiresAt).toISOString(),
    });
  }

  // ── Models & Providers Catalog ──
  if (subpath === "/models") {
    return NextResponse.json({
      models: DEFAULT_MODELS,
      total: DEFAULT_MODELS.length,
    });
  }

  if (subpath === "/providers") {
    return NextResponse.json({
      providers: DEFAULT_PROVIDERS,
      total: DEFAULT_PROVIDERS.length,
    });
  }

  return NextResponse.json({ error: { code: "not_found", message: `Route ${method} ${subpath} not found.` } }, { status: 404 });
}
