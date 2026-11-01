import { NextRequest, NextResponse } from "next/server";
import { Buffer } from "node:buffer";
import { DEFAULT_MODELS, DEFAULT_PROVIDERS } from "./server-api";

interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: string;
  status: string;
}

function parseSessionCookie(req: NextRequest): SessionUser | null {
  const cookie = req.cookies.get("uno_session")?.value;
  if (!cookie) return null;
  try {
    const raw = Buffer.from(cookie, "base64url").toString("utf8");
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.email === "string") {
      return {
        id: parsed.id || "usr_" + Math.random().toString(36).slice(2, 10),
        email: parsed.email,
        name: parsed.name || parsed.email.split("@")[0],
        role: parsed.role || "user",
        status: "active",
      };
    }
  } catch {
    /* ignore invalid session */
  }
  return null;
}

function createSessionCookie(user: { id?: string; email: string; name?: string; role?: string }): string {
  const payload = {
    id: user.id || "usr_" + Math.random().toString(36).slice(2, 10),
    email: user.email.toLowerCase(),
    name: user.name || user.email.split("@")[0],
    role: user.role || "user",
    iat: Date.now(),
  };
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}

export async function handleFallback(req: NextRequest, path: string[]) {
  const subpath = "/" + path.join("/");
  const method = req.method;

  // ── Auth: Register ──
  if (subpath === "/auth/register" && method === "POST") {
    let body: any = {};
    try {
      body = await req.json();
    } catch {
      body = {};
    }
    const email = (body.email || "").trim().toLowerCase();
    const name = (body.name || "").trim() || email.split("@")[0] || "User";
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: { code: "invalid_request", message: "A valid email address is required." } }, { status: 400 });
    }
    const user = {
      id: "usr_" + Math.random().toString(36).slice(2, 10),
      email,
      name,
      role: "user",
      status: "active",
    };
    const token = createSessionCookie(user);
    const res = NextResponse.json({ user }, { status: 201 });
    res.cookies.set("uno_session", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 30 * 24 * 3600,
    });
    return res;
  }

  // ── Auth: Login ──
  if (subpath === "/auth/login" && method === "POST") {
    let body: any = {};
    try {
      body = await req.json();
    } catch {
      body = {};
    }
    const email = (body.email || "").trim().toLowerCase();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: { code: "invalid_request", message: "A valid email address is required." } }, { status: 400 });
    }
    const user = {
      id: "usr_" + Math.random().toString(36).slice(2, 10),
      email,
      name: email.split("@")[0],
      role: "user",
      status: "active",
    };
    const token = createSessionCookie(user);
    const res = NextResponse.json({ user }, { status: 200 });
    res.cookies.set("uno_session", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 30 * 24 * 3600,
    });
    return res;
  }

  // ── Auth: Logout ──
  if (subpath === "/auth/logout" && method === "POST") {
    const res = NextResponse.json({ ok: true });
    res.cookies.delete("uno_session");
    return res;
  }

  // ── Auth: Me ──
  if (subpath === "/auth/me" && method === "GET") {
    const user = parseSessionCookie(req);
    if (!user) {
      return NextResponse.json({ user: null }, { status: 401 });
    }
    return NextResponse.json({
      user,
      balancePaise: 25000,
      plan: { slug: "free", name: "Free Tier", pricePaise: 0, freeRpm: 20, queuePriority: 1 },
      astra: { active: true, expiresAt: null, daysLeft: 30 },
    });
  }

  // ── Auth: Profile Update ──
  if (subpath === "/auth/profile" && method === "PATCH") {
    return NextResponse.json({ ok: true });
  }

  // ── Auth: Password Change ──
  if (subpath === "/auth/password" && method === "POST") {
    return NextResponse.json({ ok: true });
  }

  // ── Keys ──
  if (subpath.startsWith("/keys")) {
    if (method === "GET") {
      return NextResponse.json({
        items: [
          {
            id: "key_live_default_user",
            name: "Default Key",
            prefix: "pr_live_",
            createdAt: new Date(Date.now() - 3600000).toISOString(),
            expiresAt: null,
            revokedAt: null,
            lastUsedAt: new Date().toISOString(),
            requestCount: 0,
            spendPaise: 0,
            spendingLimitPaise: null,
            allowedModels: null,
          },
        ],
      });
    }
    if (method === "POST") {
      let body: any = {};
      try { body = await req.json(); } catch { body = {}; }
      const secret = "pr_live_sk_" + Math.random().toString(36).slice(2, 14) + Math.random().toString(36).slice(2, 14);
      return NextResponse.json({
        key: {
          id: "key_live_" + Math.random().toString(36).slice(2, 8),
          name: body.name || "API Key",
          prefix: "pr_live_",
          createdAt: new Date().toISOString(),
          expiresAt: body.expiresAt || null,
          revokedAt: null,
          lastUsedAt: null,
          requestCount: 0,
          spendPaise: 0,
          spendingLimitPaise: body.spendingLimitPaise || null,
          allowedModels: body.allowedModels || null,
        },
        secret,
      }, { status: 201 });
    }
    if (method === "DELETE") {
      return NextResponse.json({ ok: true });
    }
  }

  // ── Dashboard Overview & Stats ──
  if (subpath === "/dashboard/overview") {
    return NextResponse.json({
      balancePaise: 25000,
      balanceFormatted: "₹250.00",
      today: {
        requests: 0,
        tokens: 0,
        costPaise: 0,
      },
      month: {
        requests: 0,
        tokens: 0,
        costPaise: 0,
      },
      activeKeys: 1,
      freeUsed: 0,
      plan: {
        slug: "free",
        name: "Free Tier",
        freeRpm: 20,
        queuePriority: 1,
      },
      astra: {
        active: true,
        expiresAt: null,
        daysLeft: 30,
      },
      queue: [],
    });
  }

  if (subpath.startsWith("/dashboard/activity")) {
    // If specific item requested: /dashboard/activity/:id
    if (subpath.length > "/dashboard/activity/".length && !subpath.includes("?")) {
      const id = subpath.slice("/dashboard/activity/".length);
      return NextResponse.json({
        request: {
          id,
          createdAt: new Date().toISOString(),
          model: "deepseek-v4.1-flash",
          modelName: "DeepSeek V4.1 Flash",
          provider: "DeepSeek",
          status: "success",
          httpStatus: 200,
          route: "direct",
          latencyMs: 380,
          ttftMs: 140,
          queueWaitMs: 0,
          inputTokens: 120,
          outputTokens: 280,
          totalTokens: 400,
          costPaise: 0,
          streaming: true,
          isFree: true,
          errorCode: null,
          errorMessage: null,
          apiKey: { name: "Default Key", prefix: "pr_live_" },
        },
        attempts: [],
        timeline: [],
      });
    }

    return NextResponse.json({
      total: 0,
      items: [],
    });
  }

  if (subpath.startsWith("/dashboard/series")) {
    const series = [];
    const now = Date.now();
    for (let i = 13; i >= 0; i--) {
      const d = new Date(now - i * 86400000);
      series.push({
        date: d.toISOString().split("T")[0],
        requests: 0,
        tokens: 0,
        costPaise: 0,
        errors: 0,
      });
    }
    return NextResponse.json({ items: series });
  }

  if (subpath.startsWith("/dashboard/usage")) {
    return NextResponse.json({
      byModel: [],
      byProvider: [],
    });
  }

  // ── Wallet ──
  if (subpath === "/wallet") {
    return NextResponse.json({
      balancePaise: 25000,
      balanceFormatted: "₹250.00",
      currency: "INR",
      transactions: [
        {
          id: "tx_welcome",
          type: "gift",
          amountPaise: 25000,
          amountFormatted: "₹250.00",
          balanceAfterPaise: 25000,
          reference: "Welcome bonus",
          createdAt: new Date().toISOString(),
        },
      ],
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
    const keyId = process.env.RAZORPAY_KEY_ID || "rzp_live_TDesBovNH5VpIY";
    const keySecret = process.env.RAZORPAY_KEY_SECRET || "Wuy0swzagPlGFXcW2j21p4Lm";
    let body: Record<string, any> = {};
    try {
      body = (await req.json()) || {};
    } catch {}

    interface GatewayPackage {
      priceMinor: number;
      name: string;
      bonusPaise: number;
      currency: "INR" | "USD";
    }

    const packageMap: Record<string, GatewayPackage> = {
      // INR Packages
      "starter-100": { priceMinor: 10000, name: "₹100 Starter Pack", bonusPaise: 0, currency: "INR" },
      "pro-500": { priceMinor: 50000, name: "₹500 Pro Pack", bonusPaise: 5000, currency: "INR" },
      "scale-1000": { priceMinor: 100000, name: "₹1,000 Scale Pack", bonusPaise: 20000, currency: "INR" },
      "power-2500": { priceMinor: 250000, name: "₹2,500 Power Pack", bonusPaise: 65000, currency: "INR" },
      "starter": { priceMinor: 49900, name: "Starter", bonusPaise: 0, currency: "INR" },
      "builder": { priceMinor: 99900, name: "Builder", bonusPaise: 5100, currency: "INR" },
      "pro": { priceMinor: 249900, name: "Pro", bonusPaise: 25100, currency: "INR" },
      "power": { priceMinor: 499900, name: "Power", bonusPaise: 75100, currency: "INR" },

      // USD Packages
      "starter-usd-5": { priceMinor: 500, name: "$5 Starter Pack", bonusPaise: 0, currency: "USD" },
      "pro-usd-10": { priceMinor: 1000, name: "$10 Pro Pack", bonusPaise: 150, currency: "USD" },
      "scale-usd-25": { priceMinor: 2500, name: "$25 Scale Pack", bonusPaise: 500, currency: "USD" },
      "power-usd-50": { priceMinor: 5000, name: "$50 Power Pack", bonusPaise: 1500, currency: "USD" },
      "builder-usd": { priceMinor: 1200, name: "Builder Plan", bonusPaise: 100, currency: "USD" },
      "pro-usd": { priceMinor: 2900, name: "Pro Plan", bonusPaise: 300, currency: "USD" },
    };

    const isUSD = (typeof body.currency === "string" && body.currency.toUpperCase() === "USD") || (typeof body.packageSlug === "string" && body.packageSlug.includes("usd"));
    const defaultCurrency: "INR" | "USD" = isUSD ? "USD" : "INR";
    const defaultMinor = isUSD ? 500 : 10000;
    const pkg: GatewayPackage = packageMap[body.packageSlug] || {
      priceMinor: defaultMinor,
      name: isUSD ? "$5.00 Credits" : "₹100 Credits",
      bonusPaise: 0,
      currency: defaultCurrency,
    };
    const invoice = "PRO-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).slice(2, 6).toUpperCase();
    const paymentId = "pay_" + Math.random().toString(36).slice(2, 14);

    let gatewayOrderId = "";
    try {
      const auth = Buffer.from(keyId + ":" + keySecret).toString("base64");
      const rzpRes = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          authorization: "Basic " + auth,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          amount: pkg.priceMinor,
          currency: pkg.currency,
          receipt: invoice,
          notes: { payment_id: paymentId, package: body.packageSlug, currency: pkg.currency },
        }),
      });
      if (rzpRes.ok) {
        const orderData = (await rzpRes.json()) as { id: string };
        gatewayOrderId = orderData.id;
      }
    } catch (e) {
      console.error("Razorpay order creation fallback error:", e);
    }

    if (!gatewayOrderId) {
      gatewayOrderId = "order_" + Math.random().toString(36).slice(2, 16);
    }

    return NextResponse.json({
      paymentId,
      invoice,
      amountPaise: pkg.priceMinor,
      currency: pkg.currency,
      gateway: "razorpay",
      gatewayOrderId,
      keyId,
    });
  }

  if (subpath === "/wallet/verify" && method === "POST") {
    const keySecret = process.env.RAZORPAY_KEY_SECRET || "Wuy0swzagPlGFXcW2j21p4Lm";
    let body: Record<string, any> = {};
    try {
      body = (await req.json()) || {};
    } catch {}

    const { razorpayPaymentId, razorpayOrderId, razorpaySignature } = body;
    if (razorpayPaymentId && razorpayOrderId && razorpaySignature) {
      const { createHmac } = await import("crypto");
      const expected = createHmac("sha256", keySecret)
        .update(String(razorpayOrderId) + "|" + String(razorpayPaymentId))
        .digest("hex");

      if (expected !== razorpaySignature) {
        return NextResponse.json({ error: { message: "Invalid payment signature" } }, { status: 403 });
      }
    }

    return NextResponse.json({
      success: true,
      status: "captured",
      paymentId: body.paymentId,
      gatewayPaymentId: razorpayPaymentId,
      credited: true,
    });
  }

  if (subpath === "/payments") {
    return NextResponse.json({
      items: [],
    });
  }

  // ── Notifications ──
  if (subpath === "/notifications") {
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
    return NextResponse.json({ ok: true });
  }

  // ── Promotions / Astra ──
  if (subpath === "/promotions/astra") {
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
      entitlement: {
        activatedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 30 * 86400000).toISOString(),
        daysLeft: 30,
      },
      myCode: "ASTRA-PRO",
    });
  }

  if (subpath === "/promotions/astra/referral") {
    return NextResponse.json({
      code: "ASTRA-PRO",
      sharePath: "/signup?ref=ASTRA-PRO",
      successfulRedemptions: 0,
      activeAstraUsers: 0,
      trialDays: 30,
    });
  }

  if (subpath === "/promotions/astra/redeem" && method === "POST") {
    return NextResponse.json({ ok: true, addedPaise: 5000 });
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

    // ── Keys Management Fallback ──
  if (subpath === "/keys" && method === "GET") {
    return NextResponse.json({
      items: [
        {
          id: "key_live_default_user",
          name: "Default Live Key",
          prefix: "pro_sk_live_play",
          createdAt: new Date(Date.now() - 7 * 86400000).toISOString(),
          expiresAt: null,
          revokedAt: null,
          lastUsedAt: new Date().toISOString(),
          requestCount: 42,
          spendPaise: 0,
          spendingLimitPaise: null,
          allowedModels: null,
        },
      ],
    });
  }

  if (subpath === "/keys" && method === "POST") {
    let body: Record<string, any> = {};
    try { body = await req.json(); } catch {}
    const keyName = body.name || "Production Key";
    const randPart = Math.random().toString(36).slice(2, 14) + Math.random().toString(36).slice(2, 14);
    const secret = "pro_sk_live_" + randPart;
    const prefix = secret.slice(0, 16);
    const key = {
      id: "key_" + Math.random().toString(36).slice(2, 10),
      name: keyName,
      prefix,
      createdAt: new Date().toISOString(),
      expiresAt: null,
      revokedAt: null,
      lastUsedAt: null,
      requestCount: 0,
      spendPaise: 0,
      spendingLimitPaise: body.spendingLimitPaise || null,
      allowedModels: body.allowedModels || null,
    };
    return NextResponse.json({ key, secret }, { status: 201 });
  }

  if (subpath.startsWith("/keys/") && subpath.endsWith("/rotate") && method === "POST") {
    const keyId = subpath.slice("/keys/".length, -"/rotate".length);
    const randPart = Math.random().toString(36).slice(2, 14) + Math.random().toString(36).slice(2, 14);
    const secret = "pro_sk_live_" + randPart;
    const prefix = secret.slice(0, 16);
    const key = {
      id: keyId,
      name: "Rotated Key",
      prefix,
      createdAt: new Date().toISOString(),
      expiresAt: null,
      revokedAt: null,
      lastUsedAt: new Date().toISOString(),
      requestCount: 0,
      spendPaise: 0,
      spendingLimitPaise: null,
      allowedModels: null,
    };
    return NextResponse.json({ key, secret });
  }

  if (subpath.startsWith("/keys/") && method === "DELETE") {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: { code: "not_found", message: `Route ${method} ${subpath} not found.` } }, { status: 404 });
}
