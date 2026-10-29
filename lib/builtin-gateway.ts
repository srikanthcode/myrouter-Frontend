import { NextRequest, NextResponse } from "next/server";
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
      astra: { active: true, expiresAt: null },
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
      return NextResponse.json([
        {
          id: "key_live_default",
          name: "Default Key",
          key: "pr_live_sk_89f02b3a1c" + Math.random().toString(36).slice(2, 8),
          createdAt: new Date(Date.now() - 3600000).toISOString(),
          lastUsedAt: new Date().toISOString(),
        },
      ]);
    }
    if (method === "POST") {
      let body: any = {};
      try { body = await req.json(); } catch { body = {}; }
      return NextResponse.json({
        key: {
          id: "key_live_" + Math.random().toString(36).slice(2, 8),
          name: body.name || "API Key",
          key: "pr_live_sk_" + Math.random().toString(36).slice(2, 14) + Math.random().toString(36).slice(2, 14),
          createdAt: new Date().toISOString(),
        },
      }, { status: 201 });
    }
    if (method === "DELETE") {
      return NextResponse.json({ ok: true });
    }
  }

  // ── Dashboard Overview & Stats ──
  if (subpath === "/dashboard/overview") {
    return NextResponse.json({
      totalRequests: 84,
      totalCostPaise: 320,
      activeKeys: 1,
      rpmLimit: 20,
      queueLatencyMs: 42,
    });
  }

  if (subpath.startsWith("/dashboard/activity")) {
    return NextResponse.json([]);
  }

  if (subpath.startsWith("/dashboard/series")) {
    const series = [];
    const now = Date.now();
    for (let i = 13; i >= 0; i--) {
      const d = new Date(now - i * 86400000);
      series.push({
        date: d.toISOString().split("T")[0],
        requests: Math.floor(Math.random() * 8) + 2,
        tokens: Math.floor(Math.random() * 1200) + 300,
        costPaise: Math.floor(Math.random() * 40) + 10,
      });
    }
    return NextResponse.json(series);
  }

  if (subpath.startsWith("/dashboard/usage")) {
    return NextResponse.json({
      totalTokens: 14200,
      promptTokens: 4800,
      completionTokens: 9400,
      totalCostPaise: 320,
      activeRequests: 0,
    });
  }

  // ── Wallet ──
  if (subpath === "/wallet") {
    return NextResponse.json({
      balancePaise: 25000,
      currency: "INR",
      autoRecharge: false,
    });
  }

  if (subpath === "/wallet/packages") {
    return NextResponse.json([
      { id: "pkg_100", name: "₹100 Pack", paise: 10000, bonusPaise: 0 },
      { id: "pkg_500", name: "₹500 Pack", paise: 50000, bonusPaise: 2500 },
      { id: "pkg_1000", name: "₹1,000 Pack", paise: 100000, bonusPaise: 10000 },
    ]);
  }

  if (subpath === "/wallet/checkout" && method === "POST") {
    return NextResponse.json({
      orderId: "order_" + Math.random().toString(36).slice(2, 10),
      amountPaise: 10000,
      currency: "INR",
      paymentUrl: "/dashboard/wallet",
    });
  }

  if (subpath === "/payments") {
    return NextResponse.json([]);
  }

  // ── Notifications ──
  if (subpath === "/notifications") {
    return NextResponse.json([
      {
        id: "notif_welcome",
        type: "welcome",
        title: "Welcome to ProRouter!",
        body: "One API. Every Model. 27+ intelligence models are ready to serve your requests.",
        read: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  }

  if (subpath === "/notifications/read" && method === "POST") {
    return NextResponse.json({ ok: true });
  }

  // ── Promotions / Astra ──
  if (subpath === "/promotions/astra") {
    return NextResponse.json({
      active: true,
      eligible: true,
      expiresAt: null,
      message: "ProRouter Astra Early Access active on your account.",
    });
  }

  if (subpath === "/promotions/astra/referral") {
    return NextResponse.json({
      code: "PRO" + Math.random().toString(36).slice(2, 7).toUpperCase(),
      referralsCount: 0,
      creditsEarnedPaise: 0,
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
