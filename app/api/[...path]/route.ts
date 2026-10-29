import { NextRequest, NextResponse } from "next/server";
import { handleFallback } from "@/lib/builtin-gateway";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const BACKEND_BASE = (process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || "").replace(/\/+$/, "");

let lastBackendFailureTime = 0;
const BACKEND_FAILURE_COOLDOWN_MS = 45_000; // 45 seconds cooldown after backend down/timeout
const PROXY_TIMEOUT_MS = 2500; // 2.5 seconds timeout

async function proxyRequest(req: NextRequest, path: string[]) {
  const isCooldownActive = Date.now() - lastBackendFailureTime < BACKEND_FAILURE_COOLDOWN_MS;

  // If an external backend is configured and cooldown is not active, try backend
  if (BACKEND_BASE && !BACKEND_BASE.includes("127.0.0.1") && !BACKEND_BASE.includes("localhost") && !isCooldownActive) {
    const subpath = path.join("/");
    const search = req.nextUrl.search || "";
    const targetUrl = `${BACKEND_BASE}/${subpath}${search}`;

    const forwardHeaders = new Headers();
    req.headers.forEach((val: string, key: string) => {
      const k = key.toLowerCase();
      if (k !== "host" && k !== "content-length" && k !== "connection") {
        forwardHeaders.set(key, val);
      }
    });

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
    const timeoutId = setTimeout(() => controller.abort(), PROXY_TIMEOUT_MS);

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

      // If backend responded with a healthy JSON response, return it directly!
      if (backendRes.ok && contentType.includes("application/json")) {
        lastBackendFailureTime = 0; // Backend is healthy
        const resHeaders = new Headers();
        backendRes.headers.forEach((val: string, key: string) => {
          const k = key.toLowerCase();
          if (k !== "content-encoding" && k !== "content-length") {
            resHeaders.set(key, val);
          }
        });

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
      } else if (backendRes.status >= 500) {
        // Backend returned 502/503/504
        lastBackendFailureTime = Date.now();
      }
    } catch {
      clearTimeout(timeoutId);
      lastBackendFailureTime = Date.now();
    }
  }

  // Built-in resilient fallback gateway
  return handleFallback(req, path);
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
