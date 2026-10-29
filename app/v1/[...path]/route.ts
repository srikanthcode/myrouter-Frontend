import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const BACKEND_FALLBACK = "https://myrouter-backend.onrender.com";

function getBackendBase(): string {
  const base = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || BACKEND_FALLBACK;
  return base.replace(/\/+$/, "");
}

async function proxyV1(req: NextRequest, path: string[]) {
  const backendBase = getBackendBase();
  const subpath = path.join("/");
  const search = req.nextUrl.search || "";
  const targetUrl = `${backendBase}/v1/${subpath}${search}`;

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
    if (buf.byteLength > 0) {
      body = buf;
    }
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 90000); // 90s for AI completions

  try {
    const backendRes = await fetch(targetUrl, {
      method: req.method,
      headers: forwardHeaders,
      body,
      signal: controller.signal,
      redirect: "manual",
    });
    clearTimeout(timeoutId);

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
  } catch (err: unknown) {
    clearTimeout(timeoutId);
    const isTimeout = (err as { name?: string })?.name === "AbortError";
    return NextResponse.json(
      {
        error: {
          code: isTimeout ? "backend_timeout" : "backend_unavailable",
          message: isTimeout
            ? "The AI completion request timed out waiting for backend upstream."
            : "Could not reach ProRouter backend. Please try again shortly.",
        },
      },
      { status: 503 }
    );
  }
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
