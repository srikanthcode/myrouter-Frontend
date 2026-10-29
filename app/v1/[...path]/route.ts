import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60; // Support full streaming inference duration on Vercel

const UPSTREAM_KEY = process.env.PROVIDER_PROROUTER_GATEWAY_API_KEY || "tj_m0sow5S81J10HmZLkIC-lPXWmIl8ojnREQ9Mo_Xd3ts";
const UPSTREAM_BASE = process.env.PROVIDER_PROROUTER_GATEWAY_BASE_URL || "https://api.tokenjuice.ai/v1";
const UPSTREAM_MODEL = "deepseek-ai/DeepSeek-V4.1-Flash-1017";

export interface ModelEntry {
  id: string;
  name: string;
  object: string;
  created: number;
  owned_by: string;
  tier?: string;
  description?: string;
  pricing?: {
    input_usd_per_million: number;
    output_usd_per_million: number;
  };
}

export const ALL_MODELS: ModelEntry[] = [
  // ── 1. DeepSeek Series (Primary TokenJuice Engine) ──
  {
    id: "deepseek-v4.1-flash",
    name: "DeepSeek V4.1 Flash",
    object: "model",
    created: 1710000000,
    owned_by: "deepseek",
    description: "DeepSeek V4.1 Flash — state-of-the-art high-speed reasoning, coding, and multilingual intelligence.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "deepseek-v4.1-flash-1017",
    name: "DeepSeek V4.1 Flash (1017)",
    object: "model",
    created: 1710000000,
    owned_by: "deepseek",
    description: "DeepSeek V4.1 Flash checkpoint 1017 — latest frontier open-weight reasoning model.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "0128000.1b",
    name: "DeepSeek V4.1 (128k context)",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    description: "DeepSeek V4.1 Flash with 128,000 token context window, optimized for Cline, Kilo Code, and Cursor.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "128000.1b",
    name: "DeepSeek V4.1 (128k context direct)",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    description: "DeepSeek V4.1 Flash direct 128k context alias for Cline and Kilo Code settings.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "0128000",
    name: "DeepSeek V4.1 (128k)",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    description: "DeepSeek V4.1 Flash standard 128k alias.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "128000",
    name: "DeepSeek V4.1 (128k alias)",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    description: "DeepSeek V4.1 Flash 128k alias.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "deepseek-chat",
    name: "DeepSeek Chat",
    object: "model",
    created: 1710000000,
    owned_by: "deepseek",
    description: "Universal DeepSeek chat endpoint compatible with standard OpenAI client tooling.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "deepseek-reasoner",
    name: "DeepSeek Reasoner",
    object: "model",
    created: 1710000000,
    owned_by: "deepseek",
    description: "DeepSeek reasoning model with chain-of-thought processing.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "deepseek-v3",
    name: "DeepSeek V3",
    object: "model",
    created: 1710000000,
    owned_by: "deepseek",
    description: "DeepSeek V3 foundational model alias.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "deepseek-r1",
    name: "DeepSeek R1",
    object: "model",
    created: 1710000000,
    owned_by: "deepseek",
    description: "DeepSeek R1 frontier reasoning model alias.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },

  // ── 2. Official Pro Router Text Models ──
  {
    id: "pr-echo",
    name: "Pro Router Echo",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    tier: "Starter",
    description: "A basic, affordable text-to-text model for everyday questions, short answers, summaries, and simple chat.",
    pricing: { input_usd_per_million: 0.20, output_usd_per_million: 0.80 },
  },
  {
    id: "pr-swift",
    name: "Pro Router Swift",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    tier: "Fast",
    description: "Designed for quick responses, customer support, chatbots, and high-volume applications.",
    pricing: { input_usd_per_million: 0.30, output_usd_per_million: 1.20 },
  },
  {
    id: "pr-nova",
    name: "Pro Router Nova",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    tier: "Chat",
    description: "Your general-purpose premium model for detailed answers, writing, reasoning, and everyday development assistance.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "pr-aura",
    name: "Pro Router Aura",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    tier: "Writing",
    description: "Positioned for more advanced reasoning, long-form content, complex instructions, and coding assistance.",
    pricing: { input_usd_per_million: 0.75, output_usd_per_million: 3.00 },
  },
  {
    id: "pr-zenith",
    name: "Pro Router Zenith",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    tier: "Flagship",
    description: "Your flagship tier for the most demanding text tasks, complex analysis, and coding workflows.",
    pricing: { input_usd_per_million: 1.00, output_usd_per_million: 4.00 },
  },

  // ── 3. Frontier Coding & Agent Aliases ──
  {
    id: "qwen3-coder-next",
    name: "Qwen3 Coder Next",
    object: "model",
    created: 1710000000,
    owned_by: "alibaba",
    description: "Specialized coding model for repository synthesis, refactoring, and multi-file debugging.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    object: "model",
    created: 1710000000,
    owned_by: "anthropic",
    description: "Anthropic Claude 3.5 Sonnet architecture alias for high-precision software engineering.",
    pricing: { input_usd_per_million: 0.75, output_usd_per_million: 3.00 },
  },
  {
    id: "claude-3-7-sonnet",
    name: "Claude 3.7 Sonnet",
    object: "model",
    created: 1710000000,
    owned_by: "anthropic",
    description: "Anthropic Claude 3.7 Sonnet hybrid reasoning architecture alias.",
    pricing: { input_usd_per_million: 0.75, output_usd_per_million: 3.00 },
  },
  {
    id: "claude-opus-5",
    name: "Claude Opus 5",
    object: "model",
    created: 1710000000,
    owned_by: "anthropic",
    description: "Frontier deep reasoning and architecture synthesis model.",
    pricing: { input_usd_per_million: 1.00, output_usd_per_million: 4.00 },
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    object: "model",
    created: 1710000000,
    owned_by: "openai",
    description: "OpenAI GPT-4o compatibility alias.",
    pricing: { input_usd_per_million: 0.75, output_usd_per_million: 3.00 },
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    object: "model",
    created: 1710000000,
    owned_by: "openai",
    description: "OpenAI GPT-4o Mini fast completion alias.",
    pricing: { input_usd_per_million: 0.30, output_usd_per_million: 1.20 },
  },
  {
    id: "o1",
    name: "o1",
    object: "model",
    created: 1710000000,
    owned_by: "openai",
    description: "OpenAI o1 reasoning model alias.",
    pricing: { input_usd_per_million: 1.00, output_usd_per_million: 4.00 },
  },
  {
    id: "o3-mini",
    name: "o3-mini",
    object: "model",
    created: 1710000000,
    owned_by: "openai",
    description: "OpenAI o3-mini fast reasoning model alias.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
];

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE, PATCH",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-request-id, X-Requested-With, baggage, sentry-trace, *",
};

export async function handleV1(req: NextRequest, rawPath: string[]) {
  // Strip any leading "v1"
  let path = [...rawPath];
  while (path.length > 0 && path[0] === "v1") {
    path.shift();
  }

  const subpath = path.join("/");

  // ── 1. GET /v1/models (Lists all available Pro Router models) ──
  if (subpath === "models" && req.method === "GET") {
    return NextResponse.json({ object: "list", data: ALL_MODELS }, { headers: CORS_HEADERS });
  }

  // ── 2. GET /v1/models/:modelId (Dynamic inspection for client tools) ──
  if (subpath.startsWith("models/") && req.method === "GET") {
    const requestedId = subpath.slice("models/".length).trim();
    const found = ALL_MODELS.find(
      (m) => m.id.toLowerCase() === requestedId.toLowerCase()
    ) || {
      id: requestedId || "deepseek-v4.1-flash",
      name: requestedId || "DeepSeek V4.1 Flash",
      object: "model",
      created: 1710000000,
      owned_by: "prorouter",
      description: `${requestedId} model endpoint`,
    };

    return NextResponse.json(found, { headers: CORS_HEADERS });
  }

  // ── 3. POST /v1/chat/completions (Natural, uncorrupted response pipeline) ──
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

    const requestedRawModel = typeof payload.model === "string" && payload.model.trim()
      ? payload.model.trim()
      : "deepseek-v4.1-flash";
    const isStreaming = payload.stream === true;
    const reqId = "chatcmpl-" + Math.random().toString(36).slice(2, 11);
    const createdTimestamp = Math.floor(Date.now() / 1000);

    // Pass client messages directly and faithfully — NEVER delete system prompt or inject robotic text!
    const upstreamUrl = `${UPSTREAM_BASE.replace(/\/+$/, "")}/chat/completions`;
    const upstreamBody = {
      ...payload,
      model: UPSTREAM_MODEL,
    };

    // ── A) STREAMING: Direct SSE pass-through with 0ms client connect flush ──
    if (isStreaming) {
      const stream = new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();
          const decoder = new TextDecoder();

          // Immediately send initial chunk so client connect timeout NEVER triggers
          const initialChunk = `data: ${JSON.stringify({
            id: reqId,
            object: "chat.completion.chunk",
            created: createdTimestamp,
            model: requestedRawModel,
            choices: [{ index: 0, delta: { role: "assistant", content: "" }, finish_reason: null }],
          })}\n\n`;
          controller.enqueue(encoder.encode(initialChunk));

          // Heartbeat keep-alive ping
          const pingInterval = setInterval(() => {
            try {
              controller.enqueue(encoder.encode(": keep-alive\n\n"));
            } catch {
              clearInterval(pingInterval);
            }
          }, 2000);

          try {
            const upstreamRes = await fetch(upstreamUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${UPSTREAM_KEY}`,
              },
              body: JSON.stringify(upstreamBody),
            });

            clearInterval(pingInterval);

            if (!upstreamRes.ok || !upstreamRes.body) {
              const errText = await upstreamRes.text().catch(() => "");
              const errChunk = `data: ${JSON.stringify({
                id: reqId,
                object: "chat.completion.chunk",
                created: createdTimestamp,
                model: requestedRawModel,
                choices: [{ index: 0, delta: { content: `Upstream error (${upstreamRes.status}): ${errText.slice(0, 120)}` }, finish_reason: "stop" }],
              })}\n\ndata: [DONE]\n\n`;
              controller.enqueue(encoder.encode(errChunk));
              controller.close();
              return;
            }

            const reader = upstreamRes.body.getReader();

            while (true) {
              const { done, value } = await reader.read();
              if (done) break;

              const raw = decoder.decode(value, { stream: true });
              // Map internal upstream model ID to what the client requested
              const mapped = raw.replaceAll(UPSTREAM_MODEL, requestedRawModel);
              controller.enqueue(encoder.encode(mapped));
            }

            controller.enqueue(encoder.encode("data: [DONE]\n\n"));
            controller.close();
          } catch (err: unknown) {
            clearInterval(pingInterval);
            const msg = err instanceof Error ? err.message : "Connection failed";
            const errChunk = `data: ${JSON.stringify({
              id: reqId,
              object: "chat.completion.chunk",
              created: createdTimestamp,
              model: requestedRawModel,
              choices: [{ index: 0, delta: { content: `Connection error: ${msg}. Please retry.` }, finish_reason: "stop" }],
            })}\n\ndata: [DONE]\n\n`;
            controller.enqueue(encoder.encode(errChunk));
            controller.close();
          }
        },
      });

      return new Response(stream, {
        status: 200,
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          Connection: "keep-alive",
          ...CORS_HEADERS,
        },
      });
    }

    // ── B) NON-STREAMING: Direct JSON response pass-through ──
    const abortCtrl = new AbortController();
    const timeoutId = setTimeout(() => abortCtrl.abort(), 55000);

    try {
      const upstreamRes = await fetch(upstreamUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${UPSTREAM_KEY}`,
        },
        body: JSON.stringify(upstreamBody),
        signal: abortCtrl.signal,
      });
      clearTimeout(timeoutId);

      if (upstreamRes.ok) {
        const data = await upstreamRes.json();
        if (data && typeof data === "object") {
          data.model = requestedRawModel;
        }
        return NextResponse.json(data, { status: 200, headers: CORS_HEADERS });
      }

      const errText = await upstreamRes.text().catch(() => "");
      return NextResponse.json(
        { error: { message: "Upstream error: " + errText, type: "api_error" } },
        { status: upstreamRes.status, headers: CORS_HEADERS }
      );
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      const msg = err instanceof Error ? err.message : "Connection timeout";
      return NextResponse.json(
        { error: { message: "Gateway error: " + msg, type: "api_error" } },
        { status: 504, headers: CORS_HEADERS }
      );
    }
  }

  // ── 4. Fallback for any other path ──
  return NextResponse.json(
    {
      error: {
        message: `Path /v1/${subpath} not found. Available endpoints: /v1/models, /v1/chat/completions`,
        type: "invalid_request_error",
      },
    },
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
