import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60; // Support full streaming inference duration on Vercel

// ── Upstream AI Gateway Configuration (All secrets read from private environment variables) ──
const BACKEND_BASE = (process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || "").replace(/\/+$/, "");
const GATEWAY_BASE = (process.env.PROVIDER_PROROUTER_GATEWAY_BASE_URL || "").replace(/\/+$/, "");
const GATEWAY_MODEL = process.env.PROVIDER_PROROUTER_GATEWAY_MODEL || "deepseek-ai/DeepSeek-V4.1-Flash-1017";

// Read API keys dynamically from environment variable (comma, semicolon, or space-separated)
export function getGatewayKeyPool(): string[] {
  const envVal = process.env.PROVIDER_PROROUTER_GATEWAY_API_KEY || process.env.PROROUTER_GATEWAY_KEYS || "";
  if (!envVal.trim()) return [];
  return envVal
    .split(/[\s,;\n]+/)
    .map((k) => k.trim())
    .filter(Boolean);
}

const cooldownMap = new Map<string, number>();
let keyCursor = 0;

export function getNextGatewayKey(): string | null {
  const keys = getGatewayKeyPool();
  if (keys.length === 0) return null;
  const now = Date.now();
  const available = keys.filter((k) => (cooldownMap.get(k) || 0) <= now);
  if (available.length > 0) {
    keyCursor = (keyCursor + 1) % available.length;
    return available[keyCursor];
  }
  return [...keys].sort((a, b) => (cooldownMap.get(a) || 0) - (cooldownMap.get(b) || 0))[0];
}

export function markGatewayCooldown(key: string, durationMs = 30_000) {
  cooldownMap.set(key, Date.now() + durationMs);
}

export async function fetchGatewayWithRetry(
  url: string,
  body: Record<string, unknown>,
  signal?: AbortSignal,
  maxAttempts = 3
): Promise<{ res: Response; usedKey: string }> {
  let lastRes: Response | null = null;
  let lastErr: Error | null = null;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const key = getNextGatewayKey();
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (key) {
      headers["Authorization"] = `Bearer ${key}`;
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
        signal,
      });

      if (res.status === 429 || res.status === 502 || res.status === 503 || res.status === 504) {
        if (key) markGatewayCooldown(key, res.status === 429 ? 60_000 : 15_000);
        lastRes = res;
        continue;
      }

      return { res, usedKey: key || "" };
    } catch (err: unknown) {
      if (key) markGatewayCooldown(key, 10_000);
      lastErr = err instanceof Error ? err : new Error(String(err));
      if (signal?.aborted) throw lastErr;
    }
  }

  if (lastRes) return { res: lastRes, usedKey: "" };
  throw lastErr || new Error("All upstream gateway connections exhausted");
}

// ── Upstream 2: FreeModels Pro Worker (For Official Pro Router Tiered Text Models) ──
const FREEMODELS_URL = "https://freemodels-chat.freemodels.workers.dev";
const FREEMODELS_HEADERS = {
  "Content-Type": "application/json",
  "Accept": "text/event-stream, application/json",
  "Origin": "https://freemodels.pro",
  "Referer": "https://freemodels.pro/",
};

// 5 Official Pro Router Tiered Models
const FREEMODELS_TIERED_MODELS = new Set([
  "pr-echo",
  "pr-swift",
  "pr-nova",
  "pr-aura",
  "pr-zenith",
]);

const FREEMODELS_UPSTREAM_MAP: Record<string, string> = {
  "pr-echo": "claude-sonnet-5",
  "pr-swift": "sol",
  "pr-nova": "terra",
  "pr-aura": "kimi-k3",
  "pr-zenith": "claude-opus-5.5",
};

export interface ModelEntry {
  id: string;
  name: string;
  object: string;
  created: number;
  owned_by: string;
  category?: string;
  tier?: string;
  description?: string;
  pricing?: {
    input_usd_per_million: number;
    output_usd_per_million: number;
  };
}

export const ALL_MODELS: ModelEntry[] = [
  // ── 1. Official Pro Router Tiered Models (Routed to FreeModels Pro) ──
  {
    id: "pr-echo",
    name: "Pro Router Echo",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    category: "Pro Router Tiered",
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
    category: "Pro Router Tiered",
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
    category: "Pro Router Tiered",
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
    category: "Pro Router Tiered",
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
    category: "Pro Router Tiered",
    tier: "Flagship",
    description: "Your flagship tier for the most demanding text tasks, complex analysis, and coding workflows.",
    pricing: { input_usd_per_million: 1.00, output_usd_per_million: 4.00 },
  },

  // ── 2. Frontier Intelligence Series ──
  {
    id: "deepseek-v4.1-flash",
    name: "DeepSeek V4.1 Flash",
    object: "model",
    created: 1710000000,
    owned_by: "deepseek",
    category: "DeepSeek Series",
    description: "DeepSeek V4.1 Flash — state-of-the-art high-speed reasoning, coding, and multilingual intelligence.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "deepseek-v4.1-flash-1017",
    name: "DeepSeek-V4.1-Flash-1017",
    object: "model",
    created: 1710000000,
    owned_by: "deepseek",
    category: "DeepSeek Series",
    description: "DeepSeek V4.1 Flash checkpoint 1017 — latest frontier open-weight reasoning model.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "0128000.1b",
    name: "DeepSeek V4.1 (128k context)",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    category: "DeepSeek Series",
    description: "DeepSeek V4.1 Flash with 128,000 token context window, optimized for Cline, Kilo Code, and Cursor.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "128000.1b",
    name: "DeepSeek V4.1 (128k context direct)",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    category: "DeepSeek Series",
    description: "DeepSeek V4.1 Flash direct 128k context alias for Cline and Kilo Code settings.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "0128000",
    name: "DeepSeek V4.1 (128k)",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    category: "DeepSeek Series",
    description: "DeepSeek V4.1 Flash standard 128k alias.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "128000",
    name: "DeepSeek V4.1 (128k alias)",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    category: "DeepSeek Series",
    description: "DeepSeek V4.1 Flash 128k alias.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "deepseek-v4-pro-0813",
    name: "DeepSeek-V4-Pro-0813",
    object: "model",
    created: 1710000000,
    owned_by: "deepseek",
    category: "DeepSeek Series",
    description: "DeepSeek V4 Pro checkpoint 0813 — powerful large-parameter model for complex architecture.",
    pricing: { input_usd_per_million: 0.75, output_usd_per_million: 3.00 },
  },
  {
    id: "deepseek-chat",
    name: "DeepSeek Chat",
    object: "model",
    created: 1710000000,
    owned_by: "deepseek",
    category: "DeepSeek Series",
    description: "Universal DeepSeek chat endpoint compatible with standard OpenAI client tooling.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "deepseek-reasoner",
    name: "DeepSeek Reasoner",
    object: "model",
    created: 1710000000,
    owned_by: "deepseek",
    category: "DeepSeek Series",
    description: "DeepSeek reasoning model with chain-of-thought processing.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "deepseek-v3",
    name: "DeepSeek V3",
    object: "model",
    created: 1710000000,
    owned_by: "deepseek",
    category: "DeepSeek Series",
    description: "DeepSeek V3 foundational model alias.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "deepseek-r1",
    name: "DeepSeek R1",
    object: "model",
    created: 1710000000,
    owned_by: "deepseek",
    category: "DeepSeek Series",
    description: "DeepSeek R1 frontier reasoning model alias.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },

  // ── 3. Equal / Similar & Open-Weight Next-Gen Models (Backend DeepSeek V4.1) ──
  {
    id: "qwen3.8-27b",
    name: "Qwen3.8-27B",
    object: "model",
    created: 1710000000,
    owned_by: "alibaba",
    category: "Open-Weight Models",
    description: "Qwen 3.8 27B — high-performance multilingual reasoning and coding model.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "qwen3-coder-next",
    name: "Qwen3-Coder-Next",
    object: "model",
    created: 1710000000,
    owned_by: "alibaba",
    category: "Open-Weight Models",
    description: "Specialized coding model for repository synthesis, refactoring, and multi-file debugging.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "glm-5.3",
    name: "GLM-5.3",
    object: "model",
    created: 1710000000,
    owned_by: "zhipu",
    category: "Open-Weight Models",
    description: "General Language Model 5.3 — strong logical reasoning and bilingual comprehension.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "glm-5.3-flash",
    name: "GLM-5.3-Flash",
    object: "model",
    created: 1710000000,
    owned_by: "zhipu",
    category: "Open-Weight Models",
    description: "Ultra-fast low-latency GLM 5.3 variant for streaming chat and rapid responses.",
    pricing: { input_usd_per_million: 0.30, output_usd_per_million: 1.20 },
  },
  {
    id: "mimo-v2.6-pro",
    name: "MiMo-V2.6-Pro",
    object: "model",
    created: 1710000000,
    owned_by: "mimo",
    category: "Open-Weight Models",
    description: "MiMo V2.6 Pro — dense multi-modal and deep reasoning model.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "mimo-v2.6-flash",
    name: "MiMo-V2.6-Flash",
    object: "model",
    created: 1710000000,
    owned_by: "mimo",
    category: "Open-Weight Models",
    description: "MiMo V2.6 Flash — high-throughput, low-cost conversational assistant.",
    pricing: { input_usd_per_million: 0.30, output_usd_per_million: 1.20 },
  },
  {
    id: "kimi-k3",
    name: "Kimi K3",
    object: "model",
    created: 1710000000,
    owned_by: "moonshot",
    category: "Open-Weight Models",
    description: "Moonshot Kimi K3 — ultra-long context reasoning and synthesis.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "kimi-k2.7-code",
    name: "Kimi K2.7 Code",
    object: "model",
    created: 1710000000,
    owned_by: "moonshot",
    category: "Open-Weight Models",
    description: "Kimi K2.7 Code — specialized code generation and repository-level refactoring.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "minimax-m3.1-flash",
    name: "MiniMax M3.1 Flash",
    object: "model",
    created: 1710000000,
    owned_by: "minimax",
    category: "Open-Weight Models",
    description: "MiniMax M3.1 Flash — rapid text generation with balanced accuracy.",
    pricing: { input_usd_per_million: 0.30, output_usd_per_million: 1.20 },
  },
  {
    id: "devstral-24b",
    name: "Devstral 24B",
    object: "model",
    created: 1710000000,
    owned_by: "mistral",
    category: "Open-Weight Models",
    description: "Devstral 24B — developer-centric coding and command synthesis model.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "command-a",
    name: "Command A",
    object: "model",
    created: 1710000000,
    owned_by: "cohere",
    category: "Open-Weight Models",
    description: "Cohere Command A — business and enterprise conversational engine.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },

  // ── 4. Frontier SOTA & AI Flagships (Backend DeepSeek V4.1) ──
  {
    id: "gpt-6.1-sol",
    name: "GPT-6.1 Sol",
    object: "model",
    created: 1710000000,
    owned_by: "openai",
    category: "Frontier Flagships",
    description: "High-speed reasoning and code synthesis model.",
    pricing: { input_usd_per_million: 1.00, output_usd_per_million: 4.00 },
  },
  {
    id: "gpt-6.1-terra",
    name: "GPT-6.1 Terra",
    object: "model",
    created: 1710000000,
    owned_by: "openai",
    category: "Frontier Flagships",
    description: "High-throughput foundational knowledge engine.",
    pricing: { input_usd_per_million: 0.75, output_usd_per_million: 3.00 },
  },
  {
    id: "gpt-6-luna",
    name: "GPT-6 Luna",
    object: "model",
    created: 1710000000,
    owned_by: "openai",
    category: "Frontier Flagships",
    description: "Lightweight creative and conversational engine.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "claude-opus-5",
    name: "Claude Opus 5",
    object: "model",
    created: 1710000000,
    owned_by: "anthropic",
    category: "Frontier Flagships",
    description: "Frontier deep reasoning and architecture synthesis model.",
    pricing: { input_usd_per_million: 1.00, output_usd_per_million: 4.00 },
  },
  {
    id: "claude-opus",
    name: "Claude Opus",
    object: "model",
    created: 1710000000,
    owned_by: "anthropic",
    category: "Frontier Flagships",
    description: "Anthropic Claude Opus flagship architecture alias.",
    pricing: { input_usd_per_million: 1.00, output_usd_per_million: 4.00 },
  },
  {
    id: "claude-sonnet",
    name: "Claude Sonnet",
    object: "model",
    created: 1710000000,
    owned_by: "anthropic",
    category: "Frontier Flagships",
    description: "Anthropic Claude Sonnet software engineering alias.",
    pricing: { input_usd_per_million: 0.75, output_usd_per_million: 3.00 },
  },
  {
    id: "claude-3-5-sonnet",
    name: "Claude 3.5 Sonnet",
    object: "model",
    created: 1710000000,
    owned_by: "anthropic",
    category: "Frontier Flagships",
    description: "Anthropic Claude 3.5 Sonnet architecture alias for high-precision software engineering.",
    pricing: { input_usd_per_million: 0.75, output_usd_per_million: 3.00 },
  },
  {
    id: "claude-3-7-sonnet",
    name: "Claude 3.7 Sonnet",
    object: "model",
    created: 1710000000,
    owned_by: "anthropic",
    category: "Frontier Flagships",
    description: "Anthropic Claude 3.7 Sonnet hybrid reasoning architecture alias.",
    pricing: { input_usd_per_million: 0.75, output_usd_per_million: 3.00 },
  },
  {
    id: "gemini-pro",
    name: "Gemini Pro",
    object: "model",
    created: 1710000000,
    owned_by: "google",
    category: "Frontier Flagships",
    description: "Google Gemini Pro frontier multimodal alias.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
  {
    id: "grok",
    name: "Grok",
    object: "model",
    created: 1710000000,
    owned_by: "xai",
    category: "Frontier Flagships",
    description: "xAI Grok conversational and reasoning model alias.",
    pricing: { input_usd_per_million: 0.75, output_usd_per_million: 3.00 },
  },
  {
    id: "mistral-large",
    name: "Mistral Large",
    object: "model",
    created: 1710000000,
    owned_by: "mistral",
    category: "Frontier Flagships",
    description: "Mistral Large frontier multilingual reasoning alias.",
    pricing: { input_usd_per_million: 0.75, output_usd_per_million: 3.00 },
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    object: "model",
    created: 1710000000,
    owned_by: "openai",
    category: "Frontier Flagships",
    description: "OpenAI GPT-4o compatibility alias.",
    pricing: { input_usd_per_million: 0.75, output_usd_per_million: 3.00 },
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    object: "model",
    created: 1710000000,
    owned_by: "openai",
    category: "Frontier Flagships",
    description: "OpenAI GPT-4o Mini fast completion alias.",
    pricing: { input_usd_per_million: 0.30, output_usd_per_million: 1.20 },
  },
  {
    id: "o1",
    name: "o1",
    object: "model",
    created: 1710000000,
    owned_by: "openai",
    category: "Frontier Flagships",
    description: "OpenAI o1 reasoning model alias.",
    pricing: { input_usd_per_million: 1.00, output_usd_per_million: 4.00 },
  },
  {
    id: "o3-mini",
    name: "o3-mini",
    object: "model",
    created: 1710000000,
    owned_by: "openai",
    category: "Frontier Flagships",
    description: "OpenAI o3-mini fast reasoning model alias.",
    pricing: { input_usd_per_million: 0.50, output_usd_per_million: 2.00 },
  },
];

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE, PATCH",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-request-id, X-Requested-With, baggage, sentry-trace, *",
};

// ── Clean all asterisks (*) from text so AI replies never show * ──
// ── Clean model identity so ProRouter models NEVER leak upstream provider personas ──
export function sanitizeModelIdentity(text: string, modelName: string, ownerName?: string): string {
  if (!text) return text;
  let res = text;
  const isProRouter = !ownerName || ownerName.toLowerCase() === "prorouter";
  if (isProRouter) {
    res = res.replace(/Kimi\s*K3\s*by\s*Moonshot\s*AI/gi, `${modelName} by ProRouter`);
    res = res.replace(/Kimi\s*by\s*Moonshot\s*AI/gi, `${modelName} by ProRouter`);
    res = res.replace(/Moonshot\s*AI/gi, "ProRouter");
    res = res.replace(/I'm\s+Kimi\s*K3/gi, `I'm ${modelName}`);
    res = res.replace(/I\s+am\s+Kimi\s*K3/gi, `I am ${modelName}`);
    res = res.replace(/I'm\s+Kimi/gi, `I'm ${modelName}`);
    res = res.replace(/I\s+am\s+Kimi/gi, `I am ${modelName}`);
  }
  return res;
}

export function cleanAsterisks(text: string): string {
  if (!text) return text;
  let res = text;
  // Convert math multiplication '2 * 3' to '2 x 3'
  res = res.replace(/(\d+)\s*\*\s*(\d+)/g, "$1 x $2");
  // Convert markdown bold/italic **text** or *text* to plain text
  res = res.replace(/\*{2,3}([^*\n]+)\*{2,3}/g, "$1");
  res = res.replace(/(^|[^\w*])\*([^*\n]+)\*([^\w*]|$)/g, "$1$2$3");
  // Convert bullet points "* " at start of lines to "- "
  res = res.replace(/^(\s*)\*\s+/gm, "$1- ");
  // Strip any remaining asterisks
  res = res.replaceAll("**", "").replaceAll("*", "");
  return res;
}

// ── Stream helper for Upstream AI Gateway ──
async function streamGateway(
  controller: ReadableStreamDefaultController,
  encoder: TextEncoder,
  decoder: TextDecoder,
  reqId: string,
  createdTimestamp: number,
  requestedRawModel: string,
  effectiveMessages: unknown[],
  payload: Record<string, unknown>,
  shouldCleanAsterisks = true,
  modelDisplayName = requestedRawModel,
  ownerName = "prorouter"
) {
  const upstreamUrl = `${GATEWAY_BASE.replace(/\/+$/, "")}/chat/completions`;
  const upstreamBody = {
    ...payload,
    messages: effectiveMessages,
    model: GATEWAY_MODEL,
    stream: true,
  };

  const pingInterval = setInterval(() => {
    try {
      controller.enqueue(encoder.encode(": keep-alive\n\n"));
    } catch {
      clearInterval(pingInterval);
    }
  }, 2000);

  try {
    const { res: upstreamRes } = await fetchGatewayWithRetry(upstreamUrl, upstreamBody);

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
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith("data:")) {
          if (trimmed) controller.enqueue(encoder.encode(line + "\n"));
          continue;
        }
        if (trimmed === "data: [DONE]") {
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          continue;
        }
        try {
          const parsed = JSON.parse(trimmed.slice(5).trim());
          if (parsed.model) parsed.model = requestedRawModel;
          const delta = parsed.choices?.[0]?.delta;
          if (delta && typeof delta.content === "string") {
            let content = delta.content;
            if (shouldCleanAsterisks) {
              content = cleanAsterisks(content);
            }
            content = sanitizeModelIdentity(content, modelDisplayName, ownerName);
            delta.content = content;
          }
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(parsed)}\n\n`));
        } catch {
          let fallback = line.replaceAll(GATEWAY_MODEL, requestedRawModel);
          if (shouldCleanAsterisks) {
            fallback = cleanAsterisks(fallback);
          }
          fallback = sanitizeModelIdentity(fallback, modelDisplayName, ownerName);
          controller.enqueue(encoder.encode(fallback + "\n"));
        }
      }
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
}

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

    const requestedRawModel = typeof payload.model === "string" && payload.model.trim()
      ? payload.model.trim()
      : "deepseek-v4.1-flash";
    const isStreaming = payload.stream === true;
    const reqId = "chatcmpl-" + Math.random().toString(36).slice(2, 11);
    const createdTimestamp = Math.floor(Date.now() / 1000);

    // Identity & Persona handling:
    // If the client (Cline, Claude Code, etc.) has its own system message, preserve it 100% untouched!
    // If NO system message was provided (e.g. web playground or simple curl chat), supply the model's true identity,
    // with friendly, intelligent emojis (👋, 😊, ✨, 🚀, 💻, 💡) matching modern frontier models, and strictly no ** asterisks!
    const incomingMessages = Array.isArray(payload.messages) ? [...payload.messages] : [];
    const hasSystemMessage = incomingMessages.some(
      (m: unknown) =>
        m &&
        typeof m === "object" &&
        ("role" in m) &&
        ((m as { role?: string }).role === "system" || (m as { role?: string }).role === "developer")
    );

    const activeMeta = ALL_MODELS.find(
      (m) => m.id.toLowerCase() === requestedRawModel.toLowerCase()
    );
    const modelDisplayName = activeMeta ? activeMeta.name : requestedRawModel;
    const ownerName = activeMeta?.owned_by;

    const shouldCleanAsterisks = !hasSystemMessage;
    let effectiveMessages = incomingMessages;
    if (!hasSystemMessage) {
      const isProRouter = !ownerName || ownerName.toLowerCase() === "prorouter";
      const modelOwner = isProRouter ? " (developed by ProRouter)" : (ownerName ? ` (developed by ${ownerName})` : "");
      const identityDirective = isProRouter
        ? `You are ${modelDisplayName}, a premier frontier AI model developed by ProRouter. When introducing yourself or replying to greetings, identify authentically as ${modelDisplayName} developed by ProRouter. Absolutely NEVER claim to be Kimi, Moonshot AI, Claude, Anthropic, ChatGPT, OpenAI, or DeepSeek under any circumstances. You represent ProRouter.`
        : `You are ${modelDisplayName}${modelOwner}, a powerful, intelligent frontier AI model. Never claim to be ChatGPT or OpenAI unless that is specifically your model name.`;

      const systemPrompt = `${identityDirective} Be warm, helpful, and engaging, naturally incorporating expressive, friendly emojis (such as 👋, 😊, ✨, 🚀, 💻, 💡) appropriately in your greetings and conversational replies. Introduce yourself naturally in plain text. STRICT FORMATTING RULE: Absolutely NEVER use asterisks (*) anywhere in your response. Do not use markdown bold (**) or italic (*). For bullet points, use hyphens (-) or numbers (1., 2.). For multiplication in math, use 'x' or '×'. Keep all text completely free of asterisks (*). Never output the * character under any circumstances. Note: In multi-turn conversations or model comparisons, the chat history may contain responses generated by previous assistants or different AI models. Never apologize for, correct, mention, or dispute previous messages from other assistants. Do not refer to past model names. Simply respond to the user's latest query directly and authentically as ${modelDisplayName}.`;
      effectiveMessages = [
        { role: "system", content: systemPrompt },
        ...incomingMessages,
      ];
    }

    const isTieredFreemodel = FREEMODELS_TIERED_MODELS.has(requestedRawModel.toLowerCase());

    // ── A) STREAMING MODE ──
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
            model: requestedRawModel,
            choices: [{ index: 0, delta: { role: "assistant", content: "" }, finish_reason: null }],
          })}\n\n`;
          controller.enqueue(encoder.encode(initialChunk));

          // Unified ProRouter Gateway Engine for all models
          await streamGateway(controller, encoder, decoder, reqId, createdTimestamp, requestedRawModel, effectiveMessages, payload, shouldCleanAsterisks, modelDisplayName, ownerName);
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

    // ── B) NON-STREAMING MODE ──
    // Unified ProRouter Gateway Engine
    // 2. All Other Models -> ProRouter Gateway
    const abortCtrl = new AbortController();
    const timeoutId = setTimeout(() => abortCtrl.abort(), 55000);
    const upstreamUrl = `${GATEWAY_BASE.replace(/\/+$/, "")}/chat/completions`;
    const upstreamBody = {
      ...payload,
      messages: effectiveMessages,
      model: GATEWAY_MODEL,
    };

    try {
      const { res: upstreamRes } = await fetchGatewayWithRetry(upstreamUrl, upstreamBody, abortCtrl.signal);
      clearTimeout(timeoutId);

      if (upstreamRes.ok) {
        const data = await upstreamRes.json();
        if (data && typeof data === "object") {
          data.model = requestedRawModel;
          if (Array.isArray(data.choices)) {
            for (const choice of data.choices) {
              if (choice?.message?.content && typeof choice.message.content === "string") {
                if (shouldCleanAsterisks) { choice.message.content = cleanAsterisks(choice.message.content); }
                choice.message.content = sanitizeModelIdentity(choice.message.content, modelDisplayName, ownerName);
              }
            }
          }
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
