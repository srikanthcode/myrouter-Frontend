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
      ],
    });
  }

  if (subpath === "/wallet/checkout" && method === "POST") {
    return NextResponse.json({
      paymentId: "pay_" + Math.random().toString(36).slice(2, 10),
      invoice: "INV-" + Math.floor(100000 + Math.random() * 900000),
      gatewayOrderId: "order_" + Math.random().toString(36).slice(2, 10),
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

  return NextResponse.json({ error: { code: "not_found", message: `Route ${method} ${subpath} not found.` } }, { status: 404 });
}
