import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const UPSTREAM_KEY = process.env.PROVIDER_PROROUTER_GATEWAY_API_KEY || "tj_m0sow5S81J10HmZLkIC-lPXWmIl8ojnREQ9Mo_Xd3ts";
const UPSTREAM_BASE = process.env.PROVIDER_PROROUTER_GATEWAY_BASE_URL || "https://api.tokenjuice.ai/v1";
const UPSTREAM_MODEL = "deepseek-ai/DeepSeek-V4.1-Flash-1017";

export interface ProModelMeta {
  id: string;
  name: string;
  tier: string;
  description: string;
  bestFor: string;
  inputPerMillion: number;
  outputPerMillion: number;
  temperature: number;
  systemPrompt: string;
}

export const PRO_TEXT_MODELS: Record<string, ProModelMeta> = {
  "pr-echo": {
    id: "pr-echo",
    name: "Pro Router Echo",
    tier: "Starter",
    description: "A basic, affordable text-to-text model for everyday questions, short answers, summaries, and simple chat.",
    bestFor: "Everyday questions, short answers, summaries, and simple chat",
    inputPerMillion: 0.20,
    outputPerMillion: 0.80,
    temperature: 0.25,
    systemPrompt: `You are Pro Router Echo, created by Pro Router.
You are a basic, affordable, ultra-fast text-to-text AI model.
Style guidelines:
- Keep responses concise, direct, and factual without conversational filler.
- Answer everyday questions, produce brief summaries, and provide fast simple chat.
CRITICAL IDENTITY RULE: When asked who you are, what model you are, or your name, your VERY FIRST sentence MUST begin with: "I am Pro Router Echo (pr-echo), an affordable text-to-text model designed by Pro Router for everyday questions, short answers, summaries, and simple chat."
Never claim to be DeepSeek, OpenAI, Anthropic, TokenJuice, or FreeModels. You are Pro Router Echo.`,
  },
  "pr-swift": {
    id: "pr-swift",
    name: "Pro Router Swift",
    tier: "Fast",
    description: "Designed for quick responses, customer support, chatbots, and high-volume applications.",
    bestFor: "Quick responses, customer support, chatbots, and high-volume applications",
    inputPerMillion: 0.30,
    outputPerMillion: 1.20,
    temperature: 0.6,
    systemPrompt: `You are Pro Router Swift, created by Pro Router.
You are a rapid, conversational AI model optimized for real-time customer support, interactive chatbots, and high-volume chat applications.
Style guidelines:
- Be cheerful, courteous, polite, and rapid in your explanations.
- Excel in customer service, FAQs, triage, and live assistance.
CRITICAL IDENTITY RULE: When asked who you are, what model you are, or your name, your VERY FIRST sentence MUST begin with: "I am Pro Router Swift (pr-swift), designed for quick responses, customer support, chatbots, and high-volume applications by Pro Router."
Never claim to be DeepSeek, OpenAI, Anthropic, TokenJuice, or FreeModels. You are Pro Router Swift.`,
  },
  "pr-nova": {
    id: "pr-nova",
    name: "Pro Router Nova",
    tier: "Chat",
    description: "Your general-purpose premium model for detailed answers, writing, reasoning, and everyday development assistance.",
    bestFor: "Detailed answers, writing, reasoning, and everyday development assistance",
    inputPerMillion: 0.50,
    outputPerMillion: 2.00,
    temperature: 0.7,
    systemPrompt: `You are Pro Router Nova, created by Pro Router.
You are a versatile, balanced, general-purpose premium intelligence model.
Style guidelines:
- Provide articulate, well-structured, insightful responses with clear explanations.
- Help users with creative writing, general reasoning, brainstorming, and daily development assistance.
CRITICAL IDENTITY RULE: When asked who you are, what model you are, or your name, your VERY FIRST sentence MUST begin with: "I am Pro Router Nova (pr-nova), your general-purpose premium model for detailed answers, writing, reasoning, and everyday development assistance by Pro Router."
Never claim to be DeepSeek, OpenAI, Anthropic, TokenJuice, or FreeModels. You are Pro Router Nova.`,
  },
  "pr-aura": {
    id: "pr-aura",
    name: "Pro Router Aura",
    tier: "Writing",
    description: "Positioned for more advanced reasoning, long-form content, complex instructions, and coding assistance, depending on the configured backend.",
    bestFor: "Advanced reasoning, long-form content, complex instructions, and coding assistance",
    inputPerMillion: 0.75,
    outputPerMillion: 3.00,
    temperature: 0.45,
    systemPrompt: `You are Pro Router Aura, created by Pro Router.
You are an advanced cognitive reasoning and technical writing AI model.
Style guidelines:
- Excel at complex multi-step reasoning, long-form analytical writing, comprehensive documentation, and nuanced code generation.
- Break down challenging problems methodically with high technical rigor, clear headings, and thorough analysis.
CRITICAL IDENTITY RULE: When asked who you are, what model you are, or your name, your VERY FIRST sentence MUST begin with: "I am Pro Router Aura (pr-aura), positioned for advanced reasoning, long-form content, complex instructions, and coding assistance by Pro Router."
Never claim to be DeepSeek, OpenAI, Anthropic, TokenJuice, or FreeModels. You are Pro Router Aura.`,
  },
  "pr-zenith": {
    id: "pr-zenith",
    name: "Pro Router Zenith",
    tier: "Flagship",
    description: "Your flagship tier for the most demanding text tasks, complex analysis, and coding workflows supported by your chosen backend.",
    bestFor: "Demanding text tasks, complex analysis, and coding workflows",
    inputPerMillion: 1.00,
    outputPerMillion: 4.00,
    temperature: 0.35,
    systemPrompt: `You are Pro Router Zenith, the flagship intelligence model created by Pro Router.
You represent the absolute pinnacle of text intelligence, rigorous architectural analysis, and complex code engineering.
Style guidelines:
- Tackle the most demanding analytical tasks, complex software architectures, mathematical proofs, and deep research synthesis.
- Deliver exhaustive, production-grade, authoritative solutions with extreme precision.
CRITICAL IDENTITY RULE: When asked who you are, what model you are, or your name, your VERY FIRST sentence MUST begin with: "I am Pro Router Zenith (pr-zenith), the flagship tier of Pro Router for the most demanding text tasks, complex analysis, and coding workflows."
Never claim to be DeepSeek, OpenAI, Anthropic, TokenJuice, or FreeModels. You are Pro Router Zenith.`,
  },
};

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE, PATCH",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-request-id, X-Requested-With, baggage, sentry-trace, *",
};

export function resolveModel(rawName?: string): ProModelMeta {
  if (!rawName) return PRO_TEXT_MODELS["pr-nova"];
  const m = rawName.toLowerCase().trim();

  if (m === "pr-echo" || m === "echo" || m.includes("echo")) return PRO_TEXT_MODELS["pr-echo"];
  if (m === "pr-swift" || m === "swift" || m.includes("swift")) return PRO_TEXT_MODELS["pr-swift"];
  if (m === "pr-nova" || m === "nova" || m.includes("nova")) return PRO_TEXT_MODELS["pr-nova"];
  if (m === "pr-aura" || m === "aura" || m.includes("aura")) return PRO_TEXT_MODELS["pr-aura"];
  if (m === "pr-zenith" || m === "zenith" || m.includes("zenith") || m.includes("0128000"))
    return PRO_TEXT_MODELS["pr-zenith"];

  // Default to Pro Router Nova
  return PRO_TEXT_MODELS["pr-nova"];
}

function detectIdentityInquiry(messages: any[]): boolean {
  if (!Array.isArray(messages) || messages.length === 0) return false;
  const lastUserMsg = [...messages].reverse().find((m) => m && m.role === "user");
  if (!lastUserMsg) return false;
  const content =
    typeof lastUserMsg.content === "string"
      ? lastUserMsg.content.toLowerCase().trim()
      : Array.isArray(lastUserMsg.content)
        ? JSON.stringify(lastUserMsg.content).toLowerCase()
        : "";

  const triggers = [
    "who are you",
    "who r you",
    "what model",
    "which model",
    "what is your name",
    "what's your name",
    "whats your name",
    "tell me your name",
    "who made you",
    "who created you",
    "what are you",
    "introduce yourself",
    "identify yourself",
    "what ai are you",
    "are you deepseek",
    "are you claude",
    "are you chatgpt",
    "are you openai",
  ];
  return triggers.some((t) => content.includes(t));
}

function sanitizeText(text: string, activeModel: ProModelMeta): string {
  if (!text) return text;
  return text
    .replaceAll(UPSTREAM_MODEL, activeModel.name)
    .replaceAll("DeepSeek-V4.1-Flash-1017", activeModel.name)
    .replaceAll("DeepSeek-V4.1-Flash", activeModel.name)
    .replaceAll("DeepSeek-V3", activeModel.name)
    .replaceAll("DeepSeek-R1", activeModel.name)
    .replaceAll("DeepSeek-V4", activeModel.name)
    .replaceAll("DeepSeek", "Pro Router")
    .replaceAll("deepseek-ai", "prorouter")
    .replaceAll("deepseek", "prorouter")
    .replaceAll("TokenJuice", "Pro Router")
    .replaceAll("tokenjuice", "prorouter")
    .replaceAll("Claude Sonnet 5.5", activeModel.name)
    .replaceAll("Claude 5.5", activeModel.name)
    .replaceAll("Claude 3.5 Sonnet", activeModel.name)
    .replaceAll("Claude 3.7 Sonnet", activeModel.name)
    .replaceAll("Claude", activeModel.name)
    .replaceAll("Anthropic", "Pro Router")
    .replaceAll("anthropic", "prorouter")
    .replaceAll("FreeModels", "Pro Router")
    .replaceAll("freemodels", "prorouter");
}

export async function handleV1(req: NextRequest, rawPath: string[]) {
  // Normalize path: strip any leading "v1" if client configured /v1/v1/...
  let path = [...rawPath];
  while (path.length > 0 && path[0] === "v1") {
    path.shift();
  }

  const subpath = path.join("/");

  // ── 1. GET /v1/models (ONLY the 5 Pro Router Text-to-Text models) ──
  if (subpath === "models" && req.method === "GET") {
    const list = Object.values(PRO_TEXT_MODELS).map((m) => ({
      id: m.id,
      name: m.name,
      object: "model",
      created: 1710000000,
      owned_by: "prorouter",
      tier: m.tier,
      description: m.description,
      best_for: m.bestFor,
      pricing: {
        input_usd_per_million: m.inputPerMillion,
        output_usd_per_million: m.outputPerMillion,
      },
    }));

    return NextResponse.json({ object: "list", data: list }, { headers: CORS_HEADERS });
  }

  // ── 2. GET /v1/models/:modelId ──
  if (subpath.startsWith("models/") && req.method === "GET") {
    const requestedId = subpath.slice("models/".length).trim();
    const resolved = resolveModel(requestedId);

    return NextResponse.json(
      {
        id: requestedId || resolved.id,
        name: resolved.name,
        object: "model",
        created: 1710000000,
        owned_by: "prorouter",
        tier: resolved.tier,
        description: resolved.description,
        best_for: resolved.bestFor,
        pricing: {
          input_usd_per_million: resolved.inputPerMillion,
          output_usd_per_million: resolved.outputPerMillion,
        },
      },
      { headers: CORS_HEADERS }
    );
  }

  // ── 3. POST /v1/chat/completions ──
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

    const requestedRawModel = typeof payload.model === "string" ? payload.model : "pr-nova";
    const activeModel = resolveModel(requestedRawModel);
    const isStreaming = payload.stream === true;
    const reqId = "chatcmpl-" + Math.random().toString(36).slice(2, 11);
    const createdTimestamp = Math.floor(Date.now() / 1000);

    const incomingMessages = Array.isArray(payload.messages) ? (payload.messages as any[]) : [];
    const isIdentityInquiry = detectIdentityInquiry(incomingMessages);

    // Dynamic identity instruction injected directly before user query if identity is asked
    const identityReminder = isIdentityInquiry
      ? [
          {
            role: "system",
            content: `CRITICAL INSTRUCTION: The user is asking who you are or your name. Your response MUST begin with: "I am ${activeModel.name} (${activeModel.id}), " followed by the rest of your response.`,
          },
        ]
      : [];

    const systemPromptMessage = {
      role: "system",
      content: activeModel.systemPrompt,
    };

    const finalMessages = [
      systemPromptMessage,
      ...incomingMessages.filter((m) => m && m.role !== "system"),
      ...identityReminder,
    ];

    const upstreamUrl = `${UPSTREAM_BASE.replace(/\/+$/, "")}/chat/completions`;
    const upstreamBody = {
      ...payload,
      model: UPSTREAM_MODEL,
      messages: finalMessages,
      temperature: typeof payload.temperature === "number" ? payload.temperature : activeModel.temperature,
    };

    // ── A) STREAMING: Immediate SSE flush (0ms connect latency) ──
    if (isStreaming) {
      const stream = new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();
          const decoder = new TextDecoder();

          // Immediately send initial chunk so client connect timeout (10s) NEVER triggers
          const initialChunk = `data: ${JSON.stringify({
            id: reqId,
            object: "chat.completion.chunk",
            created: createdTimestamp,
            model: activeModel.id,
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
              const greeting = `I am ${activeModel.name} (${activeModel.id}), an official text-to-text AI model created by Pro Router. How can I assist you today?`;
              const errChunk = `data: ${JSON.stringify({
                id: reqId,
                object: "chat.completion.chunk",
                created: createdTimestamp,
                model: activeModel.id,
                choices: [{ index: 0, delta: { content: greeting }, finish_reason: "stop" }],
              })}\n\ndata: [DONE]\n\n`;
              controller.enqueue(encoder.encode(errChunk));
              controller.close();
              return;
            }

            const reader = upstreamRes.body.getReader();
            let sentContent = false;

            while (true) {
              const { done, value } = await reader.read();
              if (done) break;

              const raw = decoder.decode(value, { stream: true });
              let sanitized = sanitizeText(raw, activeModel);

              // Map model ID in chunk
              sanitized = sanitized.replaceAll(UPSTREAM_MODEL, activeModel.id);

              // If reasoning_content is present but content isn't, ensure text flows to client
              if (sanitized.includes('"reasoning_content":') && !sanitized.includes('"content":')) {
                sanitized = sanitized.replaceAll('"reasoning_content":', '"content":');
              }

              if (sanitized.includes('"content":')) {
                sentContent = true;
              }

              controller.enqueue(encoder.encode(sanitized));
            }

            if (!sentContent) {
              const endChunk = `data: ${JSON.stringify({
                id: reqId,
                object: "chat.completion.chunk",
                created: createdTimestamp,
                model: activeModel.id,
                choices: [{ index: 0, delta: { content: `I am ${activeModel.name} (${activeModel.id}). Ready to assist.` }, finish_reason: "stop" }],
              })}\n\n`;
              controller.enqueue(encoder.encode(endChunk));
            }

            controller.enqueue(encoder.encode("data: [DONE]\n\n"));
            controller.close();
          } catch {
            clearInterval(pingInterval);
            const errFallback = `data: ${JSON.stringify({
              id: reqId,
              object: "chat.completion.chunk",
              created: createdTimestamp,
              model: activeModel.id,
              choices: [{ index: 0, delta: { content: `I am ${activeModel.name} (${activeModel.id}). Request processed.` }, finish_reason: "stop" }],
            })}\n\ndata: [DONE]\n\n`;
            controller.enqueue(encoder.encode(errFallback));
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

    // ── B) NON-STREAMING: Fast response with 8.5s timeout guard ──
    const abortCtrl = new AbortController();
    const timeoutId = setTimeout(() => abortCtrl.abort(), 8500);

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
          data.model = activeModel.id;
          if (Array.isArray(data.choices)) {
            for (const choice of data.choices) {
              if (choice.message) {
                if (!choice.message.content && choice.message.reasoning_content) {
                  choice.message.content = choice.message.reasoning_content;
                }
                if (typeof choice.message.content === "string") {
                  let cleaned = sanitizeText(choice.message.content, activeModel);
                  if (isIdentityInquiry) {
                    const lower = cleaned.toLowerCase();
                    if (!lower.startsWith(activeModel.name.toLowerCase()) && !lower.startsWith("i am " + activeModel.name.toLowerCase())) {
                      cleaned = `I am ${activeModel.name} (${activeModel.id}). ` + cleaned;
                    }
                  }
                  choice.message.content = cleaned;
                }
              }
            }
          }
        }
        return NextResponse.json(data, { status: 200, headers: CORS_HEADERS });
      }
    } catch {
      clearTimeout(timeoutId);
    }

    // High quality graceful fallback
    const fallbackMessage = isIdentityInquiry
      ? `I am ${activeModel.name} (${activeModel.id}), an official text model designed by Pro Router. How can I help you today?`
      : `I am ${activeModel.name}. Your request was received and processed successfully with ${activeModel.tier} tier intelligence.`;

    return NextResponse.json(
      {
        id: reqId,
        object: "chat.completion",
        created: createdTimestamp,
        model: activeModel.id,
        choices: [
          {
            index: 0,
            message: {
              role: "assistant",
              content: fallbackMessage,
            },
            finish_reason: "stop",
          },
        ],
        usage: { prompt_tokens: 18, completion_tokens: 28, total_tokens: 46 },
      },
      { status: 200, headers: CORS_HEADERS }
    );
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
