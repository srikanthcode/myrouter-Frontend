import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_MODELS } from "@/lib/server-api";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const BACKEND_BASE = (process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || "").replace(/\/+$/, "");
const UPSTREAM_KEY = process.env.PROVIDER_PROROUTER_GATEWAY_API_KEY || "tj_m0sow5S81J10HmZLkIC-lPXWmIl8ojnREQ9Mo_Xd3ts";
const UPSTREAM_BASE = process.env.PROVIDER_PROROUTER_GATEWAY_BASE_URL || "https://api.tokenjuice.ai/v1";

async function proxyV1(req: NextRequest, path: string[]) {
  const subpath = path.join("/");
  const search = req.nextUrl.search || "";

  // 1. Try configured external backend if present
  if (BACKEND_BASE && !BACKEND_BASE.includes("127.0.0.1") && !BACKEND_BASE.includes("localhost")) {
    const targetUrl = `${BACKEND_BASE}/v1/${subpath}${search}`;
    const forwardHeaders = new Headers();
    req.headers.forEach((val: string, key: string) => {
      const k = key.toLowerCase();
      if (k !== "host" && k !== "content-length" && k !== "connection") {
        forwardHeaders.set(key, val);
      }
    });

    let body: ArrayBuffer | undefined = undefined;
    if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
      const buf = await req.arrayBuffer();
      if (buf.byteLength > 0) body = buf;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000);
      const backendRes = await fetch(targetUrl, {
        method: req.method,
        headers: forwardHeaders,
        body,
        signal: controller.signal,
        redirect: "manual",
      });
      clearTimeout(timeoutId);

      if (backendRes.ok) {
        const resHeaders = new Headers();
        backendRes.headers.forEach((val: string, key: string) => {
          const k = key.toLowerCase();
          if (k !== "content-encoding" && k !== "content-length") {
            resHeaders.set(key, val);
          }
        });
        return new Response(backendRes.body, {
          status: backendRes.status,
          statusText: backendRes.statusText,
          headers: resHeaders,
        });
      }
    } catch {
      /* Fallback to direct TokenJuice upstream below */
    }
  }

  // 2. Direct upstream fallback for /v1/chat/completions
  if (subpath === "chat/completions" && req.method === "POST") {
    let payload: Record<string, unknown> = {};
    try {
      payload = await req.json();
    } catch {
      return NextResponse.json({ error: { message: "Invalid JSON body", type: "invalid_request_error" } }, { status: 400 });
    }

    const upstreamUrl = `${UPSTREAM_BASE.replace(/\/+$/, "")}/chat/completions`;
    const targetModel = "deepseek/deepseek-v3.2"; // reliable ultra-fast universal model

    const upstreamBody = {
      ...payload,
      model: targetModel,
    };

    try {
      const upstreamRes = await fetch(upstreamUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${UPSTREAM_KEY}`,
        },
        body: JSON.stringify(upstreamBody),
      });

      const resHeaders = new Headers();
      upstreamRes.headers.forEach((val: string, key: string) => {
        const k = key.toLowerCase();
        if (k !== "content-encoding" && k !== "content-length") {
          resHeaders.set(key, val);
        }
      });
      resHeaders.set("access-control-allow-origin", "*");

      return new Response(upstreamRes.body, {
        status: upstreamRes.status,
        headers: resHeaders,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "connection failed";
      return NextResponse.json({ error: { message: "Upstream error: " + msg, type: "api_error" } }, { status: 502 });
    }
  }

  // 3. Direct upstream fallback for /v1/models
  if (subpath === "models" && req.method === "GET") {
    const list = DEFAULT_MODELS.map((m) => ({
      id: m.slug,
      object: "model",
      created: 1710000000,
      owned_by: m.provider.slug,
    }));
    return NextResponse.json({ object: "list", data: list }, {
      headers: { "access-control-allow-origin": "*" },
    });
  }

  return NextResponse.json({ error: { message: `Path /v1/${subpath} not found`, type: "invalid_request_error" } }, { status: 404 });
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ path: string[] }> | { path: string[] } }) {
  const { path } = await Promise.resolve(params);
  return proxyV1(req, path || []);
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ path: string[] }> | { path: string[] } }) {
  const { path } = await Promise.resolve(params);
  return proxyV1(req, path || []);
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, x-request-id",
    },
  });
}
