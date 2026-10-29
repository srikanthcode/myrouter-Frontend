import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_MODELS } from "@/lib/server-api";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const UPSTREAM_KEY = process.env.PROVIDER_PROROUTER_GATEWAY_API_KEY || "tj_m0sow5S81J10HmZLkIC-lPXWmIl8ojnREQ9Mo_Xd3ts";
const UPSTREAM_BASE = process.env.PROVIDER_PROROUTER_GATEWAY_BASE_URL || "https://api.tokenjuice.ai/v1";
const UPSTREAM_MODEL = "deepseek-ai/DeepSeek-V4.1-Flash-1017";

const POPULAR_ALIASES = [
  "gpt-4o",
  "gpt-4o-mini",
  "gpt-4",
  "gpt-4-turbo",
  "gpt-3.5-turbo",
  "o1",
  "o1-mini",
  "o3-mini",
  "claude-3-5-sonnet",
  "claude-3-5-sonnet-20241022",
  "claude-3-7-sonnet",
  "claude-3-opus",
  "claude-3-haiku",
  "claude-opus-5404",
  "deepseek-chat",
  "deepseek-reasoner",
  "deepseek-v3",
  "deepseek-r1",
  "gemini-pro",
  "gemini-2.0-flash",
  "gemini-1.5-pro",
  "gemini-1.5-flash",
];

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE, PATCH",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-request-id, X-Requested-With, baggage, sentry-trace",
};

export async function handleV1(req: NextRequest, rawPath: string[]) {
  // Normalize path: strip any leading "v1" if client configured /v1/v1/...
  let path = [...rawPath];
  while (path.length > 0 && path[0] === "v1") {
    path.shift();
  }

  const subpath = path.join("/");

  // ── Handle /v1/models and /v1/models/:model ──
  if (subpath === "models" && req.method === "GET") {
    const modelSet = new Set<string>();
    const list: Array<{ id: string; object: string; created: number; owned_by: string }> = [];

    for (const m of DEFAULT_MODELS) {
      if (!modelSet.has(m.slug)) {
        modelSet.add(m.slug);
        list.push({
          id: m.slug,
          object: "model",
          created: 1710000000,
          owned_by: m.providerSlug || "prorouter",
        });
      }
    }

    for (const alias of POPULAR_ALIASES) {
      if (!modelSet.has(alias)) {
        modelSet.add(alias);
        list.push({
          id: alias,
          object: "model",
          created: 1710000000,
          owned_by: "prorouter",
        });
      }
    }

    return NextResponse.json({ object: "list", data: list }, { headers: CORS_HEADERS });
  }

  // Any specific model query: /v1/models/{modelId}
  if (subpath.startsWith("models/") && req.method === "GET") {
    const requestedId = subpath.slice("models/".length).trim();
    return NextResponse.json(
      {
        id: requestedId || "default",
        object: "model",
        created: 1710000000,
        owned_by: "prorouter",
      },
      { headers: CORS_HEADERS }
    );
  }

  // ── Handle /v1/chat/completions ──
  if (subpath === "chat/completions" && req.method === "POST") {
    let payload: Record<string, unknown> = {};
    try {
      payload = await req.json();
    } catch {
      return NextResponse.json(
        { error: { message: "Invalid JSON body", type: "invalid_request_error" } },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const requestedModel = typeof payload.model === "string" && payload.model.trim() ? payload.model.trim() : "deepseek-v4.1-flash";
    const isStreaming = payload.stream === true;

    const upstreamUrl = `${UPSTREAM_BASE.replace(/\/+$/, "")}/chat/completions`;
    const upstreamBody = {
      ...payload,
      model: UPSTREAM_MODEL,
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

      if (!upstreamRes.ok) {
        let errData: any = {};
        try {
          errData = await upstreamRes.json();
        } catch {
          errData = { message: "Upstream error" };
        }
        return NextResponse.json(
          { error: { message: errData.message || "Upstream provider error", type: "api_error" } },
          { status: upstreamRes.status, headers: CORS_HEADERS }
        );
      }

      // Handle Streaming Responses (SSE)
      if (isStreaming && upstreamRes.body) {
        const textDecoder = new TextDecoder();
        const textEncoder = new TextEncoder();

        const transformStream = new TransformStream({
          transform(chunk, controller) {
            const raw = textDecoder.decode(chunk, { stream: true });
            const replaced = raw
              .replaceAll(UPSTREAM_MODEL, requestedModel)
              .replaceAll("DeepSeek-V4.1-Flash-1017", requestedModel)
              .replaceAll("TokenJuice", "ProRouter");
            controller.enqueue(textEncoder.encode(replaced));
          },
        });

        return new Response(upstreamRes.body.pipeThrough(transformStream), {
          status: 200,
          headers: {
            "Content-Type": "text/event-stream; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            "Connection": "keep-alive",
            ...CORS_HEADERS,
          },
        });
      }

      // Handle Non-Streaming JSON Response
      const data = await upstreamRes.json();
      if (data && typeof data === "object") {
        data.model = requestedModel;
        if (Array.isArray(data.choices)) {
          for (const choice of data.choices) {
            if (choice.message?.content && typeof choice.message.content === "string") {
              choice.message.content = choice.message.content.replaceAll("TokenJuice", "ProRouter");
            }
          }
        }
      }

      return NextResponse.json(data, {
        status: 200,
        headers: CORS_HEADERS,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Connection failed";
      return NextResponse.json(
        { error: { message: "ProRouter gateway error: " + msg, type: "api_error" } },
        { status: 502, headers: CORS_HEADERS }
      );
    }
  }

  // ── Fallback for any unknown /v1 subpath ──
  return NextResponse.json(
    { error: { message: `Path /v1/${subpath} not found. Use /v1/chat/completions or /v1/models`, type: "invalid_request_error" } },
    { status: 404, headers: CORS_HEADERS }
  );
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ path: string[] }> | { path: string[] } }) {
  const { path } = await Promise.resolve(params);
  return handleV1(req, path || []);
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ path: string[] }> | { path: string[] } }) {
  const { path } = await Promise.resolve(params);
  return handleV1(req, path || []);
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}
