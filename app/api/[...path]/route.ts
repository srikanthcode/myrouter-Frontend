import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const BACKEND_FALLBACK = "https://myrouter-backend.onrender.com";

function getBackendBase(): string {
  const base = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || BACKEND_FALLBACK;
  return base.replace(/\/+$/, "");
}

async function proxyRequest(req: NextRequest, path: string[]) {
  const backendBase = getBackendBase();
  const subpath = path.join("/");
  const search = req.nextUrl.search || "";
  const targetUrl = `${backendBase}/${subpath}${search}`;

  const forwardHeaders = new Headers();
  req.headers.forEach((val: string, key: string) => {
    const k = key.toLowerCase();
    if (k !== "host" && k !== "content-length" && k !== "connection") {
      forwardHeaders.set(key, val);
    }
  });

  // Ensure origin is set for Fastify CSRF check
  if (!forwardHeaders.has("origin")) {
    forwardHeaders.set("origin", req.nextUrl.origin);
  }

  let body: ArrayBuffer | undefined = undefined;
  if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
    const buf = await req.arrayBuffer();
    if (buf.byteLength > 0) {
      body = buf;
    }
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 45000);

  try {
    const backendRes = await fetch(targetUrl, {
      method: req.method,
      headers: forwardHeaders,
      body,
      signal: controller.signal,
      redirect: "manual",
    });
    clearTimeout(timeoutId);

    const contentType = backendRes.headers.get("content-type") || "";

    // If backend returned non-JSON error (e.g. Render 502/503 HTML or waking up)
    if (!backendRes.ok && !contentType.includes("application/json")) {
      return NextResponse.json(
        {
          error: {
            code: "backend_initializing",
            message: "ProRouter backend service is currently waking up on Render. Please wait 15-30 seconds and try again.",
          },
        },
        { status: 503 }
      );
    }

    const resHeaders = new Headers();
    backendRes.headers.forEach((val: string, key: string) => {
      const k = key.toLowerCase();
      if (k !== "content-encoding" && k !== "content-length") {
        resHeaders.set(key, val);
      }
    });

    // Forward Set-Cookie headers properly
    const rawSetCookies = (backendRes.headers as unknown as { getSetCookie?: () => string[] }).getSetCookie?.() || [];
    if (rawSetCookies.length > 0) {
      resHeaders.delete("set-cookie");
      for (const sc of rawSetCookies) {
        resHeaders.append("set-cookie", sc);
      }
    }

    return new Response(backendRes.body, {
      status: backendRes.status,
      statusText: backendRes.statusText,
      headers: resHeaders,
    });
  } catch (err: unknown) {
    clearTimeout(timeoutId);
    const isTimeout = (err as { name?: string })?.name === "AbortError";
    return NextResponse.json(
      {
        error: {
          code: isTimeout ? "backend_timeout" : "backend_unavailable",
          message: isTimeout
            ? "The backend server took too long to wake up. Please retry in a few seconds."
            : "Connecting to ProRouter backend on Render... Free tier service may take 30-40 seconds to wake up from idle. Please try again in a moment.",
        },
      },
      { status: 503 }
    );
  }
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ path: string[] }> | { path: string[] } }) {
  const { path } = await Promise.resolve(params);
  return proxyRequest(req, path || []);
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ path: string[] }> | { path: string[] } }) {
  const { path } = await Promise.resolve(params);
  return proxyRequest(req, path || []);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ path: string[] }> | { path: string[] } }) {
  const { path } = await Promise.resolve(params);
  return proxyRequest(req, path || []);
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ path: string[] }> | { path: string[] } }) {
  const { path } = await Promise.resolve(params);
  return proxyRequest(req, path || []);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ path: string[] }> | { path: string[] } }) {
  const { path } = await Promise.resolve(params);
  return proxyRequest(req, path || []);
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, x-request-id",
    },
  });
}
