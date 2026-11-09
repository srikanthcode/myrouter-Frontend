// ── Free Playground Request Rate Limiter (10 free requests per IP/user) ──
interface PlaygroundIpUsage {
  count: number;
  lastReset: number;
}
const freePlaygroundIpUsage = new Map<string, PlaygroundIpUsage>();
const FREE_PLAYGROUND_LIMIT = 10;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

import { NextRequest, NextResponse } from "next/server";
import { recordTelemetryRequest } from "@/lib/telemetry-store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60; // Support full streaming inference duration on Vercel


// Provider credentials are configured exclusively through environment
// variables. Never commit live credentials to source control.
export function getNabhKeyPool(): string[] {
  const envVal =
    process.env.PROVIDER_NABH_API_KEY ||
    process.env.NABH_API_KEYS ||
    "";
  return envVal
    .split(/[\s,;\n]+/)
    .map((k) => k.trim())
    .filter(Boolean);
}
const nabhCooldownMap = new Map<string, number>();
let nabhCursor = 0;

export function markNabhCooldown(key: string, durationMs = 60_000) {
  nabhCooldownMap.set(key, Date.now() + durationMs);
}

function getNextNabhKey(): string | null {
  const keys = getNabhKeyPool();
  if (keys.length === 0) return null;
  const now = Date.now();
  for (let offset = 0; offset < keys.length; offset++) {
    const index = (nabhCursor + offset) % keys.length;
    const candidate = keys[index];
    if ((nabhCooldownMap.get(candidate) || 0) <= now) {
      nabhCursor = (index + 1) % keys.length;
      return candidate;
    }
  }
  return null;
}

// ── Upstream AI Gateway Configuration (All secrets read from private environment variables) ──
const BACKEND_BASE = (process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || "").replace(/\/+$/, "");
const DEFAULT_GATEWAY_BASE = "https://api.tokenjuice.ai/v1";
const GATEWAY_BASE = (process.env.PROVIDER_PROROUTER_GATEWAY_BASE_URL || DEFAULT_GATEWAY_BASE).replace(/\/+$/, "");
const GATEWAY_MODEL = process.env.PROVIDER_PROROUTER_GATEWAY_MODEL || "deepseek-ai/DeepSeek-V4.1-Flash-1017";

// Read API keys dynamically from environment variable (comma, semicolon, or space-separated)
export function getGatewayKeyPool(): string[] {
  const envVal = process.env.PROVIDER_PROROUTER_GATEWAY_API_KEY || process.env.PROROUTER_GATEWAY_KEYS || "";
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
  for (let offset = 0; offset < keys.length; offset++) {
    const index = (keyCursor + offset) % keys.length;
    const candidate = keys[index];
    if ((cooldownMap.get(candidate) || 0) <= now) {
      keyCursor = (index + 1) % keys.length;
      return candidate;
    }
  }
  return [...keys].sort((a, b) => (cooldownMap.get(a) || 0) - (cooldownMap.get(b) || 0))[0] || null;
}

export function markGatewayCooldown(key: string, durationMs = 60_000) {
  cooldownMap.set(key, Date.now() + durationMs);
}

export function isGatewayAvailable(): boolean {
  const keys = getGatewayKeyPool();
  if (keys.length === 0) return false;
  const now = Date.now();
  return keys.some((k) => (cooldownMap.get(k) || 0) <= now);
}

export async function fetchGatewayWithRetry(
  url: string,
  body: Record<string, unknown>,
  clientSignal?: AbortSignal,
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

    // Only the wait for response headers is bounded. Once headers arrive the
    // body may stream for as long as the client stays connected.
    const ctrl = new AbortController();
    const onClientAbort = () => ctrl.abort(clientSignal?.reason);
    if (clientSignal) {
      if (clientSignal.aborted) ctrl.abort(clientSignal.reason);
      else clientSignal.addEventListener("abort", onClientAbort, { once: true });
    }
    const headerTimer = setTimeout(
      () => ctrl.abort(new Error("Upstream gateway header timeout")),
      30_000
    );

    try {
      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
        signal: ctrl.signal,
      });

      if (res.status === 401 || res.status === 403) {
        if (key) markGatewayCooldown(key, 86_400_000);
        lastRes = res;
        continue;
      }

      if (res.status === 429 || res.status === 408 || res.status === 500 || res.status === 502 || res.status === 503 || res.status === 504) {
        if (key) markGatewayCooldown(key, res.status === 429 ? 60_000 : 15_000);
        lastRes = res;
        continue;
      }

      return { res, usedKey: key || "" };
    } catch (err: unknown) {
      if (key) markGatewayCooldown(key, 10_000);
      lastErr = err instanceof Error ? err : new Error(String(err));
      if (clientSignal?.aborted) throw lastErr;
    } finally {
      clearTimeout(headerTimer);
    }
  }

  if (lastRes) return { res: lastRes, usedKey: "" };
  throw lastErr || new Error("All upstream gateway connections exhausted");
}

/**
 * Fetch an upstream stream with a bounded wait for response headers. The
 * timer is cleared as soon as headers arrive, so long coding-agent streams
 * are not aborted by a total request timeout. Client disconnects still abort
 * the upstream body through the forwarded signal.
 */
async function fetchWithHeaderTimeout(
  url: string,
  init: RequestInit,
  timeoutMs = 30_000,
  clientSignal?: AbortSignal
): Promise<Response> {
  const ctrl = new AbortController();
  const onClientAbort = () => ctrl.abort(clientSignal?.reason);
  if (clientSignal) {
    if (clientSignal.aborted) ctrl.abort(clientSignal.reason);
    else clientSignal.addEventListener("abort", onClientAbort, { once: true });
  }
  const timer = setTimeout(
    () => ctrl.abort(new Error("Upstream header timeout")),
    timeoutMs
  );
  try {
    return await fetch(url, { ...init, signal: ctrl.signal });
  } finally {
    clearTimeout(timer);
  }
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

const REQUESTY_BASE = (process.env.PROVIDER_REQUESTY_BASE_URL || "https://router.requesty.ai/v1").replace(/\/+$/, "");
function getRequestyKey(): string {
  const envVal = (process.env.PROVIDER_REQUESTY_API_KEY || "").trim();
  if (!envVal) return "";
  return envVal.split(/[\s,;\n]+/).filter(Boolean)[0] || "";
}

export const REQUESTY_MODELS_MAP: Record<string, string> = {
  "leanstral-1-5": "mistral/leanstral-1-5",
  "mistral/leanstral-1-5": "mistral/leanstral-1-5",
  "ling-3.1-flash": "novita/ling-3.1-flash",
  "novita/ling-3.1-flash": "novita/ling-3.1-flash",
  "nemotron-3-nano-omni-30b-a3b-reasoning": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
  "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
  "nemotron-3.5-lightning-30b-a3b": "nvidia/nemotron-3.5-lightning-30b-a3b",
  "nvidia/nemotron-3.5-lightning-30b-a3b": "nvidia/nemotron-3.5-lightning-30b-a3b",
  "nemotron-3-ultra-550b-a55b": "nvidia/nemotron-3-ultra-550b-a55b",
  "nvidia/nemotron-3-ultra-550b-a55b": "nvidia/nemotron-3-ultra-550b-a55b",
  "gemma-4-31b-it": "google/gemma-4-31b-it",
  "google/gemma-4-31b-it": "google/gemma-4-31b-it",
};

const FREEMODELS_UPSTREAM_MAP: Record<string, string> = {
  "pr-echo": "claude-sonnet-5",
  "pr-swift": "deepseek-v3",
  "pr-nova": "terra",
  "pr-aura": "kimi-k3",
  "pr-zenith": "claude-opus-5.5",
  "deepseek-v4.1-flash": "deepseek-v3",
  "deepseek-v4.1-flash-1017": "deepseek-v3",
  "deepseek-chat": "deepseek-v3",
  "deepseek-coder": "deepseek-v3",
  "deepseek-r1": "deepseek-r1",
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

import { ALL_MODELS_500 } from "@/lib/model-profiles-data";

export const ALL_MODELS: ModelEntry[] = [
  // ── 0. 48-Hour Promotional Free Frontier Models ──
  {
    id: "deepseek-v4.1-flash",
    name: "DeepSeek V4.1 Flash",
    object: "model",
    created: 1710000000,
    owned_by: "DeepSeek",
    category: "Reasoning and Frontier",
    tier: "Frontier",
    description: "DeepSeek V4.1 Flash high-speed inference engine with 128k context. Free for 48 hours.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "deepseek-v4.1-flash-1017",
    name: "DeepSeek V4.1 Flash 1017",
    object: "model",
    created: 1710000000,
    owned_by: "DeepSeek",
    category: "Reasoning and Frontier",
    tier: "Frontier",
    description: "DeepSeek V4.1 Flash 1017 build for deep reasoning and code completion. Free for 48 hours.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "qwen3.8-27b",
    name: "Qwen 3.8 27B",
    object: "model",
    created: 1710000000,
    owned_by: "Alibaba Cloud",
    category: "General Intelligence",
    tier: "Frontier",
    description: "Alibaba Cloud Qwen 3.8 27B open frontier model with 128k context. Free for 48 hours.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "qwen-2.5-coder-32b",
    name: "Qwen 2.5 Coder 32B",
    object: "model",
    created: 1710000000,
    owned_by: "Alibaba Cloud",
    category: "Coding and Software Engineering",
    tier: "Frontier",
    description: "Alibaba Cloud Qwen 2.5 Coder 32B specialized coding model with 128k context. Free for 48 hours.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  ...ALL_MODELS_500,
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
    id: "gpt-oss-20b",
    name: "GPT OSS 20B",
    object: "model",
    created: 1710000000,
    owned_by: "openai",
    category: "Open Weights Series",
    description: "Open-weight 20B parameter reasoning and chat model with high speed and chain-of-thought capabilities.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "gpt-oss-120b",
    name: "GPT OSS 120B",
    object: "model",
    created: 1710000000,
    owned_by: "openai",
    category: "Open Weights Series",
    description: "OpenAI open-weight 120B parameter MoE reasoning architecture with high throughput on Groq LPU.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "nemotron-3-ultra-550b-a55b",
    name: "Nemotron 3 Ultra 550B A55B",
    object: "model",
    created: 1710000000,
    owned_by: "nvidia",
    category: "NVIDIA Series",
    description: "NVIDIA Nemotron 3 Ultra 550B A55B — ultra-scale frontier reasoning engine with 1M context.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "nemotron-3-nano-omni-30b-a3b-reasoning",
    name: "Nemotron 3 Nano Omni 30B Reasoning",
    object: "model",
    created: 1710000000,
    owned_by: "nvidia",
    category: "NVIDIA Series",
    description: "NVIDIA Nemotron 3 Nano Omni 30B — deep chain-of-thought reasoning and multimodal STEM problem-solving.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "nemotron-3.5-lightning-30b-a3b",
    name: "Nemotron 3.5 Lightning 30B A3B",
    object: "model",
    created: 1710000000,
    owned_by: "nvidia",
    category: "NVIDIA Series",
    description: "NVIDIA Nemotron 3.5 Lightning 30B A3B — lightning-fast inference with an extraordinary 1M context window.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "nemotron-3.5-lightning",
    name: "Nemotron 3.5 Lightning",
    object: "model",
    created: 1710000000,
    owned_by: "nvidia",
    category: "NVIDIA Series",
    description: "NVIDIA Nemotron 3.5 Lightning — low-latency assistant for high-volume work.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "nemotron-3.5-super-vl",
    name: "Nemotron 3.5 Super VL",
    object: "model",
    created: 1710000000,
    owned_by: "nvidia",
    category: "NVIDIA Series",
    description: "NVIDIA Nemotron 3.5 Super — high-capacity vision-language reasoning.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "gemma-4-31b-it",
    name: "Gemma 4 31B IT",
    object: "model",
    created: 1710000000,
    owned_by: "google",
    category: "Google Series",
    description: "Google Gemma 4 31B Instruction-Tuned — Google's latest open frontier architecture featuring 262K context.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "leanstral-1-5",
    name: "Leanstral 1.5",
    object: "model",
    created: 1710000000,
    owned_by: "mistral",
    category: "Mistral Series",
    description: "Mistral Leanstral 1.5 — high-efficiency reasoning model with massive 262K context.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "ling-3.1-flash",
    name: "Ling 3.1 Flash",
    object: "model",
    created: 1710000000,
    owned_by: "novita",
    category: "Novita Series",
    description: "Novita Ling 3.1 Flash — ultra-responsive 262K context model for conversational speed.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "allam-2-7b",
    name: "Allam 2 7B",
    object: "model",
    created: 1710000000,
    owned_by: "sdaia",
    category: "Regional Series",
    description: "SDAIA high-performance bilingual Arabic & English foundational language model.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "beam",
    name: "Beam",
    object: "model",
    created: 1710000000,
    owned_by: "prorouter",
    category: "Pro Router Tiered",
    description: "Fast general-purpose model for everyday chat and drafting.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "longcat-2.5-preview",
    name: "LongCat 2.5 Preview",
    object: "model",
    created: 1710000000,
    owned_by: "meituan",
    category: "Meituan Series",
    description: "Meituan LongCat 2.5 — long-context preview with strong multilingual reasoning.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "jev-1.13",
    name: "Jev 1.13",
    object: "model",
    created: 1710000000,
    owned_by: "jev",
    category: "Jev Series",
    description: "Jev 1.13 — general-purpose assistant with balanced speed and quality.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
  {
    id: "qwen/qwen3.8-27b",
    name: "Qwen 3.8 27B",
    object: "model",
    created: 1710000000,
    owned_by: "alibaba",
    category: "Alibaba Series",
    description: "Alibaba Qwen3.8 27B — high-performance open-weight model with strong multilingual and reasoning abilities.",
    pricing: { input_usd_per_million: 0, output_usd_per_million: 0 },
  },
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
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key, anthropic-version, x-request-id, X-Requested-With, baggage, sentry-trace, *",
};

// A gateway must never pretend the requested model is the model that actually
// served the response. Local demo pools route to fixed upstream models, so we
// label the served model explicitly instead of silently substituting it.
export function modelHonestyHeaders(requestedModel: string, servedModel: string): Record<string, string> {
  const headers: Record<string, string> = {
    ...CORS_HEADERS,
    "x-prorouter-requested-model": requestedModel,
    "x-prorouter-served-model": servedModel,
  };
  if (servedModel.toLowerCase() !== requestedModel.toLowerCase()) {
    headers["x-prorouter-model-substituted"] = "true";
  }
  return headers;
}

// Some OpenAI-compatible upstreams report "stop" even when they emitted tool
// calls. Coding agents rely on finish_reason to decide whether to execute tools.
export function normalizeFinishReason(reason: unknown, hasToolCalls: boolean): string {
  if (typeof reason === "string" && reason.length > 0) {
    if (reason === "stop" && hasToolCalls) return "tool_calls";
    return reason;
  }
  return hasToolCalls ? "tool_calls" : "stop";
}

// ── Clean all asterisks (*) from text so AI replies never show * ──
// ── Clean model identity so ProRouter models NEVER leak upstream provider personas ──
export function resolveModelMetadata(modelId: string): { name: string; owner: string; category: string } {
  const mLower = (modelId || "").toLowerCase();

  // 1. Check if explicitly in ALL_MODELS with non-prorouter owner
  const found = ALL_MODELS.find((m) => m.id.toLowerCase() === mLower);
  if (found && found.owned_by && found.owned_by.toLowerCase() !== "prorouter") {
    let owner = found.owned_by;
    if (owner.toLowerCase() === "alibaba") owner = "Alibaba Cloud";
    if (owner.toLowerCase() === "openai") owner = "OpenAI";
    if (owner.toLowerCase() === "anthropic") owner = "Anthropic";
    if (owner.toLowerCase() === "google") owner = "Google";
    if (owner.toLowerCase() === "meta") owner = "Meta";
    if (owner.toLowerCase() === "mistral") owner = "Mistral AI";
    if (owner.toLowerCase() === "moonshot") owner = "Moonshot AI";
    if (owner.toLowerCase() === "deepseek") owner = "DeepSeek";
    return { name: found.name || modelId, owner, category: found.category || "General" };
  }

  // 2. Intelligent inference from model ID
  if (mLower.includes("deepseek")) {
    const is1017 = mLower.includes("1017");
    return { name: is1017 ? "DeepSeek V4.1 Flash 1017" : "DeepSeek V4.1 Flash", owner: "DeepSeek", category: "Reasoning and Frontier" };
  }
  if (mLower.includes("qwen")) {
    let name = "Qwen";
    if (mLower.includes("2.5-coder-32b")) name = "Qwen 2.5 Coder 32B";
    else if (mLower.includes("3.8-27b")) name = "Qwen 3.8 27B";
    else if (mLower.includes("coder")) name = "Qwen Coder";
    else if (found?.name) name = found.name;
    return { name, owner: "Alibaba Cloud", category: "Coding and Software Engineering" };
  }
  if (mLower.includes("claude")) {
    let name = "Claude";
    if (mLower.includes("sonnet")) name = "Claude Sonnet";
    else if (mLower.includes("opus")) name = "Claude Opus";
    else if (mLower.includes("haiku")) name = "Claude Haiku";
    else if (found?.name) name = found.name;
    return { name, owner: "Anthropic", category: "Frontier Intelligence" };
  }
  if (mLower.includes("gpt") || mLower.startsWith("o1") || mLower.startsWith("o3") || mLower.startsWith("o4")) {
    return { name: found?.name || modelId.toUpperCase(), owner: "OpenAI", category: "Frontier Intelligence" };
  }
  if (mLower.includes("gemini") || mLower.includes("gemma")) {
    return { name: found?.name || "Gemini", owner: "Google", category: "Multimodal Intelligence" };
  }
  if (mLower.includes("llama")) {
    return { name: found?.name || "Llama", owner: "Meta", category: "Open Weights" };
  }
  if (mLower.includes("mistral") || mLower.includes("codestral") || mLower.includes("mixtral") || mLower.includes("leanstral")) {
    return { name: found?.name || "Mistral", owner: "Mistral AI", category: "General Intelligence" };
  }
  if (mLower.includes("kimi") || mLower.includes("moonshot")) {
    return { name: found?.name || "Kimi", owner: "Moonshot AI", category: "Long Context" };
  }
  if (mLower.includes("grok")) {
    return { name: found?.name || "Grok", owner: "xAI", category: "Frontier Reasoning" };
  }
  if (mLower.includes("nemotron") || mLower.includes("nvidia")) {
    return { name: found?.name || "Nemotron", owner: "NVIDIA", category: "Enterprise AI" };
  }
  if (mLower.includes("glm") || mLower.includes("chatglm") || mLower.includes("zhipu")) {
    return { name: found?.name || "GLM", owner: "Zhipu AI", category: "Bilingual Intelligence" };
  }
  if (mLower.startsWith("pr-") || mLower.startsWith("pr_") || mLower.includes("prorouter")) {
    return { name: found?.name || "Pro Router", owner: "ProRouter", category: "Pro Router Tiered" };
  }

  return {
    name: found?.name || modelId,
    owner: found?.owned_by || "AI",
    category: found?.category || "General",
  };
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

const THINK_OPEN_TAG = "\u003cthink\u003e";
const THINK_CLOSE_TAG = "\u003c/think\u003e";

function tagPrefixSuffixLength(text: string): number {
  const max = Math.min(
    text.length,
    Math.max(THINK_OPEN_TAG.length, THINK_CLOSE_TAG.length) - 1
  );
  for (let len = max; len > 0; len--) {
    const suffix = text.slice(-len);
    if (THINK_OPEN_TAG.startsWith(suffix) || THINK_CLOSE_TAG.startsWith(suffix)) {
      return len;
    }
  }
  return 0;
}

export class StreamChunkProcessor {
  private inThinkTag = false;
  private pending = "";
  private accumulatedContent = "";
  private accumulatedReasoning = "";
  private initialBuffer = "";
  private hasCheckedInitialReasoning = false;
  public hasSeenAnyToolCalls = false;
  public totalContentLength = 0;

  public processDelta(
    delta: any,
    modelDisplayName: string,
    ownerName: string,
    shouldCleanAsterisks = false
  ): { content?: string; reasoning_content?: string; tool_calls?: unknown[] } {
    let outContent: string | undefined = undefined;
    let outReasoning: string | undefined = undefined;
    let outToolCalls: unknown[] | undefined = undefined;

    // Upstream tool_calls preservation (essential for coding agents like Cline/Cursor)
    if (Array.isArray(delta?.tool_calls) && delta.tool_calls.length > 0) {
      outToolCalls = delta.tool_calls;
      this.hasSeenAnyToolCalls = true;
    }

    // Upstream reasoning fields (never emit into content)
    const upstreamReasoning = typeof delta?.reasoning_content === "string"
      ? delta.reasoning_content
      : typeof delta?.reasoning === "string"
        ? delta.reasoning
        : undefined;

    if (upstreamReasoning) {
      outReasoning = (outReasoning || "") + upstreamReasoning;
      this.accumulatedReasoning += upstreamReasoning;
    }

    // Upstream content. Tags may be split across arbitrary SSE chunk
    // boundaries, so hold any partial tag suffix until the next chunk.
    if (typeof delta?.content === "string") {
      const rawText = this.pending + delta.content;
      this.pending = "";
      let cleanText = "";
      let tagReasoning = "";
      let i = 0;

      while (i < rawText.length) {
        const openIdx = rawText.indexOf(THINK_OPEN_TAG, i);
        const closeIdx = rawText.indexOf(THINK_CLOSE_TAG, i);
        const nextIdx =
          openIdx === -1
            ? closeIdx
            : closeIdx === -1
              ? openIdx
              : Math.min(openIdx, closeIdx);

        if (nextIdx === -1) {
          const remainder = rawText.slice(i);
          const hold = tagPrefixSuffixLength(remainder);
          const emit = hold > 0 ? remainder.slice(0, remainder.length - hold) : remainder;
          if (this.inThinkTag) tagReasoning += emit;
          else cleanText += emit;
          this.pending = hold > 0 ? remainder.slice(remainder.length - hold) : "";
          break;
        }

        const segment = rawText.slice(i, nextIdx);
        if (this.inThinkTag) tagReasoning += segment;
        else cleanText += segment;

        if (nextIdx === openIdx) {
          this.inThinkTag = true;
          i = nextIdx + THINK_OPEN_TAG.length;
        } else {
          this.inThinkTag = false;
          i = nextIdx + THINK_CLOSE_TAG.length;
        }
      }

      if (tagReasoning) {
        outReasoning = (outReasoning || "") + tagReasoning;
        this.accumulatedReasoning += tagReasoning;
      }

      // Check if untagged reasoning leaked at the start of output (Image 1 fix)
      if (!this.hasCheckedInitialReasoning && cleanText) {
        this.initialBuffer += cleanText;
        const metaMatch = this.initialBuffer.match(/^(?:The user (?:just )?said|User says|The user is asking|Let me respond|I should respond|I need to respond)[\s\S]*?(?=(?:(?:\.|\?|\!)\s*(?:Hello|Hi|Hey|I am|I'm|Sure|Certainly)\b|(?:Hello|Hi|Hey)!|(?:\.|\?|\!)\s*<|\n\n(?:Hello|Hi|Hey|I am|I'm)))/i);
        if (metaMatch && metaMatch.index === 0) {
          const reasoningPiece = metaMatch[0].trim();
          outReasoning = (outReasoning || "") + reasoningPiece;
          cleanText = this.initialBuffer.slice(metaMatch[0].length);
          this.initialBuffer = "";
          this.hasCheckedInitialReasoning = true;
        } else if (this.initialBuffer.length > 250) {
          this.hasCheckedInitialReasoning = true;
        }
      }

      if (cleanText) {
        if (shouldCleanAsterisks) cleanText = cleanAsterisks(cleanText);
        this.accumulatedContent += cleanText;
        this.totalContentLength += cleanText.length;
        outContent = cleanText;
      }
    }

    return { content: outContent, reasoning_content: outReasoning, tool_calls: outToolCalls };
  }

  // Flush any held partial-tag suffix when the upstream stream ends.
  public flushDelta(shouldCleanAsterisks = false): { content?: string; reasoning_content?: string } {
    if (!this.pending) return {};
    const tail = this.pending;
    this.pending = "";
    if (this.inThinkTag) {
      this.accumulatedReasoning += tail;
      return { reasoning_content: tail };
    }
    const content = shouldCleanAsterisks ? cleanAsterisks(tail) : tail;
    this.accumulatedContent += content;
    this.totalContentLength += content.length;
    return { content };
  }
}

export function cleanNonStreamingMessage(
  msg: any,
  modelDisplayName: string,
  ownerName: string,
  shouldCleanAsterisks = false
): { role: string; content: string; reasoning_content?: string; tool_calls?: unknown[] } {
  let content = typeof msg?.content === "string" ? msg.content : "";
  let reasoning = typeof msg?.reasoning_content === "string"
    ? msg.reasoning_content
    : typeof msg?.reasoning === "string"
      ? msg.reasoning
      : "";

  if (content.includes("<think>")) {
    const thinkMatch = content.match(/<think>([\s\S]*?)<\/think>/);
    if (thinkMatch) {
      if (!reasoning) reasoning = thinkMatch[1].trim();
      content = content.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
    }
  }

  // Remove leading un-tagged reasoning (Image 1 fix)
  const metaMatch = content.match(/^(?:The user (?:just )?said|User says|The user is asking|Let me respond|I should respond|I need to respond)[\s\S]*?(?=(?:(?:\.|\?|\!)\s*(?:Hello|Hi|Hey|I am|I'm|Sure|Certainly)\b|(?:Hello|Hi|Hey)!|(?:\.|\?|\!)\s*<|\n\n(?:Hello|Hi|Hey|I am|I'm)))/i);
  if (metaMatch && metaMatch.index === 0) {
    if (!reasoning) {
      reasoning = metaMatch[0].trim();
    }
    content = content.slice(metaMatch[0].length).trim();
  }

  if (shouldCleanAsterisks) content = cleanAsterisks(content);

  const toolCalls = Array.isArray(msg?.tool_calls) && msg.tool_calls.length > 0 ? msg.tool_calls : undefined;

  const result: { role: string; content: string; reasoning_content?: string; tool_calls?: unknown[] } = {
    role: "assistant",
    content,
  };
  if (reasoning) result.reasoning_content = reasoning;
  if (toolCalls) result.tool_calls = toolCalls;
  return result;
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
  shouldCleanAsterisks = false,
  modelDisplayName = requestedRawModel,
  ownerName = "prorouter",
  clientKey = "",
  clientSignal?: AbortSignal
) {
  const streamStartTime = Date.now();
  let emittedTokensCount = 0;
  const pingInterval = setInterval(() => {
    try {
      controller.enqueue(encoder.encode(": keep-alive\n\n"));
    } catch {
      clearInterval(pingInterval);
    }
  }, 2000);

  const isDeepSeek = requestedRawModel.toLowerCase().includes("deepseek");
  const hasTools = Array.isArray(payload.tools) && payload.tools.length > 0;
  const emitProcessorTail = (processor: StreamChunkProcessor) => {
    const tail = processor.flushDelta(shouldCleanAsterisks);
    if (tail.content === undefined && tail.reasoning_content === undefined) return;
    const chunkDelta: Record<string, unknown> = {};
    if (tail.content !== undefined) chunkDelta.content = tail.content;
    if (tail.reasoning_content !== undefined) chunkDelta.reasoning_content = tail.reasoning_content;
    try {
      controller.enqueue(encoder.encode("data: " + JSON.stringify({
        id: reqId,
        object: "chat.completion.chunk",
        created: createdTimestamp,
        model: requestedRawModel,
        choices: [{ index: 0, delta: chunkDelta, finish_reason: null }],
      }) + "\n\n"));
    } catch { }
  };
  const emitServedModel = (servedModel: string) => {
    try {
      controller.enqueue(encoder.encode("data: " + JSON.stringify({
        id: reqId,
        object: "chat.completion.chunk",
        created: createdTimestamp,
        model: requestedRawModel,
        choices: [],
        prorouter_served_model: servedModel,
      }) + "\n\n"));
    } catch { }
  };

  // ── Engine 1: TokenJuice AI Gateway (Primary Engine with DeepSeek model) ──
  if (isGatewayAvailable()) {
    try {
      const upstreamUrl = `${GATEWAY_BASE.replace(/\/+$/, "")}/chat/completions`;
      const upstreamBody = {
        ...payload,
        messages: effectiveMessages,
        model: GATEWAY_MODEL, // deepseek-ai/DeepSeek-V4.1-Flash-1017
        stream: true,
      };

      const { res: upstreamRes } = await fetchGatewayWithRetry(upstreamUrl, upstreamBody, clientSignal);
      if (upstreamRes.ok && upstreamRes.body) {
        emitServedModel(GATEWAY_MODEL);
        const reader = upstreamRes.body.getReader();

        // Wait up to 45s for first chunk from deep reasoning models
        let firstRead: { done: boolean; value?: Uint8Array };
        try {
          const timeoutPromise = new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error("First chunk timeout")), 45_000)
          );
          firstRead = await Promise.race([reader.read(), timeoutPromise]);
        } catch (firstErr) {
          reader.cancel().catch(() => { });
          throw firstErr;
        }

        if (firstRead.done) {
          throw new Error("Upstream stream ended with no content");
        }

        clearInterval(pingInterval);
        let buffer = "";
        const processor = new StreamChunkProcessor();

        let lastFinishReason: string | null = null;
        let hasSeenToolCalls = false;

        // Process first chunk
        if (firstRead.value) {
          buffer += decoder.decode(firstRead.value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            if (trimmed === "data: [DONE]") continue;
            try {
              const parsed = JSON.parse(trimmed.slice(5).trim());
              if (parsed.model) parsed.model = requestedRawModel;
              if (parsed.usage) {
                controller.enqueue(encoder.encode("data: " + JSON.stringify({
                  id: reqId,
                  object: "chat.completion.chunk",
                  created: createdTimestamp,
                  model: requestedRawModel,
                  choices: [],
                  usage: parsed.usage,
                }) + "\n\n"));
              }              const delta = parsed.choices?.[0]?.delta;
              const processed = processor.processDelta(delta, modelDisplayName, ownerName, shouldCleanAsterisks);
              const chunkDelta: Record<string, unknown> = {};
              if (processed.content !== undefined) chunkDelta.content = processed.content;
              if (processed.reasoning_content !== undefined) chunkDelta.reasoning_content = processed.reasoning_content;
              if (processed.tool_calls !== undefined) {
                chunkDelta.tool_calls = processed.tool_calls;
                hasSeenToolCalls = true;
              }
              if (parsed.choices?.[0]?.finish_reason) lastFinishReason = normalizeFinishReason(parsed.choices[0].finish_reason, hasSeenToolCalls || processor.hasSeenAnyToolCalls);
              if (Object.keys(chunkDelta).length > 0 || parsed.choices?.[0]?.finish_reason) {
                emittedTokensCount++;
                controller.enqueue(encoder.encode("data: " + JSON.stringify({
                  id: reqId,
                  object: "chat.completion.chunk",
                  created: createdTimestamp,
                  model: requestedRawModel,
                  choices: [{ index: 0, delta: chunkDelta, finish_reason: parsed.choices?.[0]?.finish_reason ? normalizeFinishReason(parsed.choices[0].finish_reason, hasSeenToolCalls || processor.hasSeenAnyToolCalls) : null }],
                }) + "\n\n"));
              }
            } catch { }
          }
        }

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            if (trimmed === "data: [DONE]") {
              if (!lastFinishReason) {
                emitProcessorTail(processor); lastFinishReason = hasSeenToolCalls ? "tool_calls" : "stop";
                controller.enqueue(encoder.encode("data: " + JSON.stringify({
                  id: reqId,
                  object: "chat.completion.chunk",
                  created: createdTimestamp,
                  model: requestedRawModel,
                  choices: [{ index: 0, delta: {}, finish_reason: lastFinishReason }],
                }) + "\n\n"));
              }
              continue;
            }
            try {
              const parsed = JSON.parse(trimmed.slice(5).trim());
              if (parsed.model) parsed.model = requestedRawModel;
              if (parsed.usage) {
                controller.enqueue(encoder.encode("data: " + JSON.stringify({
                  id: reqId,
                  object: "chat.completion.chunk",
                  created: createdTimestamp,
                  model: requestedRawModel,
                  choices: [],
                  usage: parsed.usage,
                }) + "\n\n"));
              }              const delta = parsed.choices?.[0]?.delta;
              const processed = processor.processDelta(delta, modelDisplayName, ownerName, shouldCleanAsterisks);

              const chunkDelta: Record<string, unknown> = {};
              if (processed.content !== undefined) chunkDelta.content = processed.content;
              if (processed.reasoning_content !== undefined) chunkDelta.reasoning_content = processed.reasoning_content;
              if (processed.tool_calls !== undefined) {
                chunkDelta.tool_calls = processed.tool_calls;
                hasSeenToolCalls = true;
              }

              if (parsed.choices?.[0]?.finish_reason) {
                lastFinishReason = normalizeFinishReason(parsed.choices[0].finish_reason, hasSeenToolCalls || processor.hasSeenAnyToolCalls);
              }

              if (Object.keys(chunkDelta).length === 0 && !parsed.choices?.[0]?.finish_reason) {
                continue;
              }
              if (Object.keys(chunkDelta).length === 0 && parsed.choices?.[0]?.finish_reason) {
                if (parsed.choices[0].finish_reason !== "tool_calls") {
                  chunkDelta.content = "";
                }
              }

              emittedTokensCount++;
              const chunk = {
                id: reqId,
                object: "chat.completion.chunk",
                created: createdTimestamp,
                model: requestedRawModel,
                choices: [
                  {
                    index: 0,
                    delta: chunkDelta,
                    finish_reason: parsed.choices?.[0]?.finish_reason ? normalizeFinishReason(parsed.choices[0].finish_reason, hasSeenToolCalls || processor.hasSeenAnyToolCalls) : null,
                  },
                ],
              };
              controller.enqueue(encoder.encode("data: " + JSON.stringify(chunk) + "\n\n"));
            } catch { }
          }
        }
        if (!lastFinishReason) {
          emitProcessorTail(processor); lastFinishReason = hasSeenToolCalls ? "tool_calls" : "stop";
          controller.enqueue(encoder.encode("data: " + JSON.stringify({
            id: reqId,
            object: "chat.completion.chunk",
            created: createdTimestamp,
            model: requestedRawModel,
            choices: [{ index: 0, delta: {}, finish_reason: lastFinishReason }],
          }) + "\n\n"));
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        recordTelemetryRequest({
          model: requestedRawModel,
          totalTokens: Math.max(30, emittedTokensCount),
          latencyMs: Date.now() - streamStartTime,
          status: "success",
          apiKey: clientKey ? clientKey.slice(0, 16) + "..." : undefined,
        });
        controller.close();
        return;
      }
    } catch (tjErr) {
      // If TokenJuice is slow or busy, seamlessly fall back to secondary high-speed clusters
    }
  }

  // ── Engine 1B: Requesty High-Performance Gateway (Active Verified Key) ──
  // Do not route DeepSeek or tool-calling coding agents to Leanstral on Requesty
  const streamReqKey = getRequestyKey();
  if (!isDeepSeek && !hasTools && streamReqKey && (requestedRawModel.includes("/") || /leanstral|mistral|ling/i.test(requestedRawModel))) {
    try {
      const reqKey = streamReqKey;
      let reqModel = requestedRawModel;
      if (requestedRawModel.includes("leanstral") || requestedRawModel.includes("mistral")) {
        reqModel = "mistral/leanstral-1-5";
      } else if (requestedRawModel.includes("ling")) {
        reqModel = "novita/ling-3.1-flash";
      }

      const reqRes = await fetchWithHeaderTimeout(`${REQUESTY_BASE}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + reqKey,
        },
        body: JSON.stringify({
          ...payload,
          messages: effectiveMessages,
          model: reqModel,
          stream: true,
        }),
      }, 30_000, clientSignal);

      if (reqRes.ok && reqRes.body) {
        emitServedModel(reqModel);
        clearInterval(pingInterval);
        const reader = reqRes.body.getReader();
        let buffer = "";
        const processor = new StreamChunkProcessor();

        let lastFinishReason: string | null = null;
        let hasSeenToolCalls = false;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            if (trimmed === "data: [DONE]") {
              if (!lastFinishReason) {
                emitProcessorTail(processor); lastFinishReason = hasSeenToolCalls ? "tool_calls" : "stop";
                controller.enqueue(encoder.encode("data: " + JSON.stringify({
                  id: reqId,
                  object: "chat.completion.chunk",
                  created: createdTimestamp,
                  model: requestedRawModel,
                  choices: [{ index: 0, delta: {}, finish_reason: lastFinishReason }],
                }) + "\n\n"));
              }
              continue;
            }
            try {
              const parsed = JSON.parse(trimmed.slice(5).trim());
              const delta = parsed.choices?.[0]?.delta;
              const processed = processor.processDelta(delta, modelDisplayName, ownerName, shouldCleanAsterisks);

              const chunkDelta: Record<string, unknown> = {};
              if (processed.content !== undefined) chunkDelta.content = processed.content;
              if (processed.reasoning_content !== undefined) chunkDelta.reasoning_content = processed.reasoning_content;
              if (processed.tool_calls !== undefined) {
                chunkDelta.tool_calls = processed.tool_calls;
                hasSeenToolCalls = true;
              }

              if (parsed.choices?.[0]?.finish_reason) {
                lastFinishReason = normalizeFinishReason(parsed.choices[0].finish_reason, hasSeenToolCalls || processor.hasSeenAnyToolCalls);
              }

              if (Object.keys(chunkDelta).length === 0 && !parsed.choices?.[0]?.finish_reason) {
                continue;
              }
              if (Object.keys(chunkDelta).length === 0 && parsed.choices?.[0]?.finish_reason) {
                if (parsed.choices[0].finish_reason !== "tool_calls") {
                  chunkDelta.content = "";
                }
              }

              emittedTokensCount++;
              const chunk = {
                id: reqId,
                object: "chat.completion.chunk",
                created: createdTimestamp,
                model: requestedRawModel,
                choices: [
                  {
                    index: 0,
                    delta: chunkDelta,
                    finish_reason: parsed.choices?.[0]?.finish_reason ? normalizeFinishReason(parsed.choices[0].finish_reason, hasSeenToolCalls || processor.hasSeenAnyToolCalls) : null,
                  },
                ],
              };
              controller.enqueue(encoder.encode("data: " + JSON.stringify(chunk) + "\n\n"));
            } catch { }
          }
        }
        if (!lastFinishReason) {
          emitProcessorTail(processor); lastFinishReason = hasSeenToolCalls ? "tool_calls" : "stop";
          controller.enqueue(encoder.encode("data: " + JSON.stringify({
            id: reqId,
            object: "chat.completion.chunk",
            created: createdTimestamp,
            model: requestedRawModel,
            choices: [{ index: 0, delta: {}, finish_reason: lastFinishReason }],
          }) + "\n\n"));
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        recordTelemetryRequest({
          model: requestedRawModel,
          totalTokens: Math.max(30, emittedTokensCount),
          latencyMs: Date.now() - streamStartTime,
          status: "success",
          apiKey: clientKey ? clientKey.slice(0, 16) + "..." : undefined,
        });
        controller.close();
        return;
      }
    } catch (reqErr) {
      // Continue to fallback clusters
    }
  }

  // ── Engine 2: High-Speed Secondary Cluster (Nabh Cloud) ──
  for (let attempt = 0; attempt < 3; attempt++) {
    const key = getNextNabhKey();
    if (!key) break;
    try {
      const nabhBody: Record<string, unknown> = {
        ...payload,
        model: "gpt-oss-20b",
        messages: effectiveMessages,
        stream: true,
      };
      if (payload.tools) nabhBody.tools = payload.tools;
      if (payload.tool_choice) nabhBody.tool_choice = payload.tool_choice;

      const res = await fetchWithHeaderTimeout("https://api.nabh.cloud/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + key,
        },
        body: JSON.stringify(nabhBody),
      }, 30_000, clientSignal);

      if (res.status === 401 || res.status === 403) markNabhCooldown(key, 86_400_000);
      else if (res.status === 429) markNabhCooldown(key, 60_000);
      else if (res.status >= 500) markNabhCooldown(key, 15_000);

      if (res.ok && res.body) {
        emitServedModel("gpt-oss-20b");
        clearInterval(pingInterval);
        const reader = res.body.getReader();
        let buffer = "";
        const processor = new StreamChunkProcessor();

        let lastFinishReason: string | null = null;
        let hasSeenToolCalls = false;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            if (trimmed === "data: [DONE]") {
              if (!lastFinishReason) {
                emitProcessorTail(processor); lastFinishReason = hasSeenToolCalls ? "tool_calls" : "stop";
                controller.enqueue(encoder.encode("data: " + JSON.stringify({
                  id: reqId,
                  object: "chat.completion.chunk",
                  created: createdTimestamp,
                  model: requestedRawModel,
                  choices: [{ index: 0, delta: {}, finish_reason: lastFinishReason }],
                }) + "\n\n"));
              }
              continue;
            }
            try {
              const parsed = JSON.parse(trimmed.slice(5).trim());
              const delta = parsed.choices?.[0]?.delta;
              const processed = processor.processDelta(delta, modelDisplayName, ownerName, shouldCleanAsterisks);

              const chunkDelta: Record<string, unknown> = {};
              if (processed.content !== undefined) chunkDelta.content = processed.content;
              if (processed.reasoning_content !== undefined) chunkDelta.reasoning_content = processed.reasoning_content;
              if (processed.tool_calls !== undefined) {
                chunkDelta.tool_calls = processed.tool_calls;
                hasSeenToolCalls = true;
              }

              if (parsed.choices?.[0]?.finish_reason) {
                lastFinishReason = normalizeFinishReason(parsed.choices[0].finish_reason, hasSeenToolCalls || processor.hasSeenAnyToolCalls);
              }

              if (Object.keys(chunkDelta).length === 0 && !parsed.choices?.[0]?.finish_reason) {
                continue;
              }
              if (Object.keys(chunkDelta).length === 0 && parsed.choices?.[0]?.finish_reason) {
                if (parsed.choices[0].finish_reason !== "tool_calls") {
                  chunkDelta.content = "";
                }
              }

              emittedTokensCount++;
              const chunk = {
                id: reqId,
                object: "chat.completion.chunk",
                created: createdTimestamp,
                model: requestedRawModel,
                choices: [
                  {
                    index: 0,
                    delta: chunkDelta,
                    finish_reason: parsed.choices?.[0]?.finish_reason ? normalizeFinishReason(parsed.choices[0].finish_reason, hasSeenToolCalls || processor.hasSeenAnyToolCalls) : null,
                  },
                ],
              };
              controller.enqueue(encoder.encode("data: " + JSON.stringify(chunk) + "\n\n"));
            } catch { }
          }
        }
        if (!lastFinishReason) {
          emitProcessorTail(processor); lastFinishReason = hasSeenToolCalls ? "tool_calls" : "stop";
          controller.enqueue(encoder.encode("data: " + JSON.stringify({
            id: reqId,
            object: "chat.completion.chunk",
            created: createdTimestamp,
            model: requestedRawModel,
            choices: [{ index: 0, delta: {}, finish_reason: lastFinishReason }],
          }) + "\n\n"));
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        recordTelemetryRequest({
          model: requestedRawModel,
          totalTokens: Math.max(30, emittedTokensCount),
          latencyMs: Date.now() - streamStartTime,
          status: "success",
          apiKey: clientKey ? clientKey.slice(0, 16) + "..." : undefined,
        });
        controller.close();
        return;
      }
    } catch (nabhErr) { }
  }

  // ── Engine 3: FreeModels Edge Cluster Fallback ──
  // This upstream accepts only model+messages, so it cannot honour native
  // tool calling. Skip it rather than silently dropping the client's tools.
  if (!hasTools) {
  try {
    const reqLower = requestedRawModel.toLowerCase();
    let fmModel = FREEMODELS_UPSTREAM_MAP[reqLower];
    if (!fmModel) {
      if (reqLower.includes("deepseek") || reqLower.includes("r1")) {
        fmModel = "deepseek-v3";
      } else if (reqLower.includes("qwen") || reqLower.includes("coder")) {
        fmModel = "qwen";
      } else if (reqLower.includes("claude") || reqLower.includes("sonnet")) {
        fmModel = "claude-3-5-sonnet";
      } else if (reqLower.includes("gpt") || reqLower.includes("o1") || reqLower.includes("o3") || reqLower.includes("4o")) {
        fmModel = "gpt-4o";
      } else {
        fmModel = "deepseek-v3";
      }
    }
    const fmRes = await fetchWithHeaderTimeout(FREEMODELS_URL, {
      method: "POST",
      headers: {
        ...FREEMODELS_HEADERS,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0.0.0 Safari/537.36",
      },
      body: JSON.stringify({
        model: fmModel,
        messages: effectiveMessages,
      }),
    }, 30_000, clientSignal);

    if (fmRes.ok && fmRes.body) {
        emitServedModel(fmModel);
      clearInterval(pingInterval);
      const reader = fmRes.body.getReader();
      let buffer = "";
      const processor = new StreamChunkProcessor();

      let lastFinishReason: string | null = null;
      let hasSeenToolCalls = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data:")) continue;
          if (trimmed === "data: [DONE]") {
            if (!lastFinishReason) {
              emitProcessorTail(processor); lastFinishReason = hasSeenToolCalls ? "tool_calls" : "stop";
              controller.enqueue(encoder.encode("data: " + JSON.stringify({
                id: reqId,
                object: "chat.completion.chunk",
                created: createdTimestamp,
                model: requestedRawModel,
                  choices: [{ index: 0, delta: {}, finish_reason: lastFinishReason }],
                }) + "\n\n"));
              }
              continue;
            }
            try {
              const parsed = JSON.parse(trimmed.slice(5).trim());
              const delta = parsed.choices?.[0]?.delta;
              const processed = processor.processDelta(delta, modelDisplayName, ownerName, shouldCleanAsterisks);

              const chunkDelta: Record<string, unknown> = {};
              if (processed.content !== undefined) chunkDelta.content = processed.content;
              if (processed.reasoning_content !== undefined) chunkDelta.reasoning_content = processed.reasoning_content;
              if (processed.tool_calls !== undefined) {
                chunkDelta.tool_calls = processed.tool_calls;
                hasSeenToolCalls = true;
              }

              if (parsed.choices?.[0]?.finish_reason) {
                lastFinishReason = normalizeFinishReason(parsed.choices[0].finish_reason, hasSeenToolCalls || processor.hasSeenAnyToolCalls);
              }

              if (Object.keys(chunkDelta).length === 0 && !parsed.choices?.[0]?.finish_reason) {
                continue;
              }
              if (Object.keys(chunkDelta).length === 0 && parsed.choices?.[0]?.finish_reason) {
                if (parsed.choices[0].finish_reason !== "tool_calls") {
                  chunkDelta.content = "";
                }
              }

            emittedTokensCount++;
            const chunk = {
              id: reqId,
              object: "chat.completion.chunk",
              created: createdTimestamp,
              model: requestedRawModel,
              choices: [
                {
                  index: 0,
                  delta: chunkDelta,
                  finish_reason: parsed.choices?.[0]?.finish_reason ? normalizeFinishReason(parsed.choices[0].finish_reason, hasSeenToolCalls || processor.hasSeenAnyToolCalls) : null,
                },
              ],
            };
            controller.enqueue(encoder.encode("data: " + JSON.stringify(chunk) + "\n\n"));
          } catch { }
        }
      }
      if (!lastFinishReason) {
        emitProcessorTail(processor); lastFinishReason = hasSeenToolCalls ? "tool_calls" : "stop";
        controller.enqueue(encoder.encode("data: " + JSON.stringify({
          id: reqId,
          object: "chat.completion.chunk",
          created: createdTimestamp,
          model: requestedRawModel,
          choices: [{ index: 0, delta: {}, finish_reason: lastFinishReason }],
        }) + "\n\n"));
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      recordTelemetryRequest({
        model: requestedRawModel,
        totalTokens: Math.max(30, emittedTokensCount),
        latencyMs: Date.now() - streamStartTime,
        status: "success",
        apiKey: clientKey ? clientKey.slice(0, 16) + "..." : undefined,
      });
      controller.close();
      return;
    }
  } catch (fmErr) { }
  }

  clearInterval(pingInterval);
  controller.enqueue(encoder.encode(`data: ${JSON.stringify({
    id: reqId,
    object: "chat.completion.chunk",
    created: createdTimestamp,
    model: requestedRawModel,
    error: {
      message: "All inference nodes are currently unavailable. Please retry in a moment.",
      type: "upstream_error",
      code: "upstream_unavailable",
    },
  })}\n\ndata: [DONE]\n\n`));
  controller.close();
}

const DEMO_PLACEHOLDER_KEY = "pro_sk_live_playground_default";
const HOP_BY_HOP_HEADERS = new Set([
  "host",
  "connection",
  "content-length",
  "transfer-encoding",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "upgrade",
]);

export function isDemoGatewayEnabled(): boolean {
  const raw = (process.env.PROROUTER_ENABLE_DEMO_GATEWAY || "").trim().toLowerCase();
  if (raw === "true" || raw === "1" || raw === "yes") return true;
  if (raw === "false" || raw === "0" || raw === "no") return false;
  return process.env.NODE_ENV !== "production";
}

export function getCallerCredential(req: NextRequest): {
  apiKey: string | null;
  hasSession: boolean;
} {
  const bearer = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "").trim();
  const headerKey = (req.headers.get("x-api-key") || "").trim();
  const apiKey = [headerKey, bearer].find((candidate) => candidate && candidate !== DEMO_PLACEHOLDER_KEY) || null;
  const cookie = req.headers.get("cookie") || "";
  const sessionMatch = cookie.match(/(?:^|;\s*)uno_session=([^;]+)/);
  const hasSession = Boolean(sessionMatch && sessionMatch[1].trim());
  return { apiKey, hasSession };
}

function backendEndpoint(subpath: string, search: string): string | null {
  if (!BACKEND_BASE) return null;
  const base = BACKEND_BASE.replace(/\/+$/, "");
  const prefix = base.endsWith("/v1") ? base : `${base}/v1`;
  return `${prefix}/${subpath.replace(/^\/+/, "")}${search}`;
}

function backendProxyHeaders(req: NextRequest): Headers {
  const headers = new Headers();
  for (const [name, value] of req.headers) {
    const key = name.toLowerCase();
    if (HOP_BY_HOP_HEADERS.has(key)) continue;
    if (key === "x-api-key" || key === "anthropic-version" || key === "content-length") continue;
    headers.set(name, value);
  }
  const bearer = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "").trim();
  const headerKey = (req.headers.get("x-api-key") || "").trim();
  const key = headerKey && headerKey !== DEMO_PLACEHOLDER_KEY
    ? headerKey
    : bearer && bearer !== DEMO_PLACEHOLDER_KEY
      ? bearer
      : "";
  if (key) headers.set("authorization", `Bearer ${key}`);
  else headers.delete("authorization");
  headers.set("content-type", "application/json");
  return headers;
}

function openAiGatewayError(status: number, message: string, code: string): Response {
  return NextResponse.json(
    { error: { message, type: "invalid_request_error", code } },
    { status, headers: { ...CORS_HEADERS, "WWW-Authenticate": "Bearer" } }
  );
}

function anthropicErrorResponse(status: number, message: string, explicitType?: string): Response {
  const type = explicitType || (
    status === 401
      ? "authentication_error"
      : status === 403
        ? "permission_error"
        : status === 429
          ? "rate_limit_error"
          : status >= 500
            ? "api_error"
            : "invalid_request_error"
  );
  return NextResponse.json(
    { type: "error", error: { type, message } },
    { status, headers: CORS_HEADERS }
  );
}

async function anthropicErrorFromUpstream(upstream: Response): Promise<Response> {
  let message = `Backend API error (${upstream.status})`;
  try {
    const text = await upstream.text();
    if (text) {
      try {
        const parsed = JSON.parse(text);
        message = parsed?.error?.message || parsed?.message || text;
      } catch {
        message = text;
      }
    }
  } catch {
    /* response body unavailable */
  }
  return anthropicErrorResponse(upstream.status, message);
}

async function proxyToBackend(req: NextRequest, subpath: string): Promise<Response> {
  const target = backendEndpoint(subpath, req.nextUrl.search);
  if (!target) {
    return openAiGatewayError(503, "Backend API is not configured.", "provider_unavailable");
  }
  let upstream: Response;
  try {
    const method = req.method;
    upstream = await fetch(target, {
      method,
      headers: backendProxyHeaders(req),
      body: method === "GET" || method === "HEAD" ? undefined : await req.arrayBuffer(),
      cache: "no-store",
      redirect: "manual",
      signal: req.signal,
    });
  } catch {
    return openAiGatewayError(503, "Backend API is unavailable. Please retry shortly.", "provider_unavailable");
  }
  const headers = new Headers(CORS_HEADERS);
  for (const name of ["content-type", "x-request-id", "x-prorouter-usage-source", "retry-after"]) {
    const value = upstream.headers.get(name);
    if (value) headers.set(name, value);
  }
  if (!headers.has("content-type")) headers.set("content-type", "application/json");
  if ((upstream.headers.get("content-type") || "").includes("text/event-stream")) {
    headers.set("cache-control", "no-cache, no-transform");
    headers.set("connection", "keep-alive");
    headers.set("x-accel-buffering", "no");
  }
  return new Response(upstream.body, { status: upstream.status, headers });
}

export function mapAnthropicModelToBackend(model: string): string {
  const lower = model.toLowerCase();
  if (lower.includes("opus")) return "pr-zenith";
  if (lower.includes("haiku")) return "pr-echo";
  if (lower.includes("sonnet")) return "claude-sonnet";
  return model;
}

export interface AnthropicConversion {
  requestedModel: string;
  backendModel: string;
  streaming: boolean;
  msgId: string;
  convertedMessages: Array<Record<string, unknown>>;
  openAiPayload: Record<string, unknown>;
}

export function convertAnthropicRequest(payload: Record<string, unknown>): AnthropicConversion {
  const requestedModel = typeof payload.model === "string" && payload.model.trim()
    ? payload.model.trim()
    : "claude-sonnet";
  const backendModel = mapAnthropicModelToBackend(requestedModel);
  const streaming = payload.stream === true;
  const msgId = "msg_" + Math.random().toString(36).slice(2, 14);

  const systemVal = payload.system;
  let systemContent = "";
  if (typeof systemVal === "string") {
    systemContent = systemVal;
  } else if (Array.isArray(systemVal)) {
    systemContent = systemVal
      .map((s: any) => (typeof s === "string" ? s : s?.text || ""))
      .filter(Boolean)
      .join("\n");
  }

  const convertedMessages: any[] = [];
  if (systemContent) convertedMessages.push({ role: "system", content: systemContent });

  const incomingMsgs = Array.isArray(payload.messages) ? payload.messages : [];
  for (const m of incomingMsgs as any[]) {
    const role = m.role === "assistant" ? "assistant" : "user";
    if (typeof m.content === "string") {
      convertedMessages.push({ role, content: m.content });
    } else if (Array.isArray(m.content)) {
      let textAcc = "";
      const toolCalls: any[] = [];
      const toolResults: any[] = [];
      for (const block of m.content) {
        if (block.type === "text" && typeof block.text === "string") {
          textAcc += block.text;
        } else if (block.type === "tool_use") {
          toolCalls.push({
            id: block.id,
            type: "function",
            function: {
              name: block.name,
              arguments: JSON.stringify(block.input || {}),
            },
          });
        } else if (block.type === "tool_result") {
          toolResults.push({
            role: "tool",
            tool_call_id: block.tool_use_id,
            content: typeof block.content === "string"
              ? block.content
              : JSON.stringify(block.content || {}),
          });
        }
      }
      convertedMessages.push(...toolResults);
      if (textAcc || toolCalls.length > 0) {
        const entry: any = { role, content: textAcc || null };
        if (toolCalls.length > 0) entry.tool_calls = toolCalls;
        convertedMessages.push(entry);
      }
    }
  }

  let convertedTools: any[] | undefined;
  if (Array.isArray(payload.tools) && payload.tools.length > 0) {
    convertedTools = payload.tools.map((t: any) => ({
      type: "function",
      function: {
        name: t.name,
        description: t.description || "",
        parameters: t.input_schema || { type: "object", properties: {} },
      },
    }));
  }

  let convertedToolChoice: unknown;
  const anthropicToolChoice = payload.tool_choice as any;
  if (anthropicToolChoice && typeof anthropicToolChoice === "object") {
    if (anthropicToolChoice.type === "auto") convertedToolChoice = "auto";
    else if (anthropicToolChoice.type === "any") convertedToolChoice = "required";
    else if (anthropicToolChoice.type === "none") convertedToolChoice = "none";
    else if (anthropicToolChoice.type === "tool" && anthropicToolChoice.name) {
      convertedToolChoice = { type: "function", function: { name: anthropicToolChoice.name } };
    }
  }

  const openAiPayload: Record<string, unknown> = {
    model: backendModel,
    messages: convertedMessages,
    stream: streaming,
  };
  if (convertedTools) openAiPayload.tools = convertedTools;
  if (convertedToolChoice !== undefined) openAiPayload.tool_choice = convertedToolChoice;
  if (typeof payload.temperature === "number") openAiPayload.temperature = payload.temperature;
  if (typeof payload.top_p === "number") openAiPayload.top_p = payload.top_p;
  if (typeof payload.max_tokens === "number") openAiPayload.max_tokens = payload.max_tokens;
  if (Array.isArray(payload.stop_sequences) && payload.stop_sequences.length > 0) {
    openAiPayload.stop = payload.stop_sequences;
  }

  return { requestedModel, backendModel, streaming, msgId, convertedMessages, openAiPayload };
}

function mapOpenAiFinishToAnthropic(reason: string | null | undefined, hasTools: boolean): string {
  if (reason === "length") return "max_tokens";
  if (reason === "tool_calls" || hasTools) return "tool_use";
  return "end_turn";
}

function openAiCompletionToAnthropic(data: any, conversion: AnthropicConversion): Record<string, unknown> {
  const rawMsg = data?.choices?.[0]?.message || {};
  const contentBlocks: any[] = [];
  if (typeof rawMsg.content === "string" && rawMsg.content) {
    contentBlocks.push({ type: "text", text: rawMsg.content });
  }
  if (Array.isArray(rawMsg.tool_calls)) {
    for (const tc of rawMsg.tool_calls as any[]) {
      let parsedInput: unknown = {};
      try {
        parsedInput = typeof tc.function?.arguments === "string"
          ? JSON.parse(tc.function.arguments)
          : (tc.function?.arguments || {});
      } catch {
        parsedInput = {};
      }
      contentBlocks.push({
        type: "tool_use",
        id: tc.id || ("toolu_" + Math.random().toString(36).slice(2, 10)),
        name: tc.function?.name || "tool",
        input: parsedInput,
      });
    }
  }
  const rawFinish = data?.choices?.[0]?.finish_reason;
  const stopReason = mapOpenAiFinishToAnthropic(
    rawFinish,
    contentBlocks.some((b) => b.type === "tool_use")
  );
  return {
    id: conversion.msgId,
    type: "message",
    role: "assistant",
    model: conversion.requestedModel,
    content: contentBlocks,
    stop_reason: stopReason,
    stop_sequence: null,
    usage: {
      input_tokens: data?.usage?.prompt_tokens || 0,
      output_tokens: data?.usage?.completion_tokens || 0,
    },
  };
}

function anthropicSseFromOpenAi(upstream: Response, conversion: AnthropicConversion): Response {
  const inputTokens = Math.max(1, Math.ceil(JSON.stringify(conversion.convertedMessages).length / 4));
  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      const decoder = new TextDecoder();
      const emit = (event: string, data: unknown) => {
        controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
      };

      let textBlockIndex: number | null = null;
      let textBlockStopped = false;
      let nextBlockIndex = 0;
      const toolBlocks = new Map<number, { blockIndex: number; id: string; name: string }>();
      let outTokens = 0;
      let finalUsage: any = null;
      let sentStop = false;
      let buffer = "";

      const emitStop = (stopReason: string) => {
        if (sentStop) return;
        sentStop = true;
        if (textBlockIndex !== null && !textBlockStopped) {
          textBlockStopped = true;
          emit("content_block_stop", { type: "content_block_stop", index: textBlockIndex });
        }
        for (const tb of toolBlocks.values()) {
          emit("content_block_stop", { type: "content_block_stop", index: tb.blockIndex });
        }
        emit("message_delta", {
          type: "message_delta",
          delta: { stop_reason: stopReason, stop_sequence: null },
          usage: { output_tokens: Math.max(1, finalUsage?.completion_tokens ?? outTokens) },
        });
        emit("message_stop", { type: "message_stop" });
      };

      emit("message_start", {
        type: "message_start",
        message: {
          id: conversion.msgId,
          type: "message",
          role: "assistant",
          model: conversion.requestedModel,
          content: [],
          stop_reason: null,
          stop_sequence: null,
          usage: { input_tokens: inputTokens, output_tokens: 1 },
        },
      });

      if (!upstream.body) {
        emitStop("end_turn");
        controller.close();
        return;
      }

      const reader = upstream.body.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const raw = trimmed.slice(5).trim();
            if (!raw || raw === "[DONE]") continue;
            let parsed: any;
            try {
              parsed = JSON.parse(raw);
            } catch {
              continue;
            }
            if (parsed?.error) {
              emit("error", {
                type: "error",
                error: { type: "api_error", message: String(parsed.error.message || "Upstream provider error.") },
              });
              sentStop = true;
              break;
            }
            if (parsed?.usage) finalUsage = parsed.usage;
            const choice = Array.isArray(parsed?.choices) ? parsed.choices[0] : undefined;
            const delta = choice?.delta;
            const finishReason = choice?.finish_reason;

            if (typeof delta?.content === "string" && delta.content) {
              if (textBlockIndex === null) {
                textBlockIndex = nextBlockIndex++;
                emit("content_block_start", {
                  type: "content_block_start",
                  index: textBlockIndex,
                  content_block: { type: "text", text: "" },
                });
              }
              outTokens += 1;
              emit("content_block_delta", {
                type: "content_block_delta",
                index: textBlockIndex,
                delta: { type: "text_delta", text: delta.content },
              });
            }

            if (Array.isArray(delta?.tool_calls) && delta.tool_calls.length > 0) {
              if (textBlockIndex !== null && !textBlockStopped) {
                textBlockStopped = true;
                emit("content_block_stop", { type: "content_block_stop", index: textBlockIndex });
              }
              for (const tc of delta.tool_calls as any[]) {
                const tcIndex = typeof tc.index === "number" ? tc.index : 0;
                let toolBlock = toolBlocks.get(tcIndex);
                if (!toolBlock) {
                  const blockIndex = nextBlockIndex++;
                  toolBlock = {
                    blockIndex,
                    id: tc.id || ("toolu_" + Math.random().toString(36).slice(2, 10)),
                    name: tc.function?.name || "tool",
                  };
                  toolBlocks.set(tcIndex, toolBlock);
                  emit("content_block_start", {
                    type: "content_block_start",
                    index: toolBlock.blockIndex,
                    content_block: {
                      type: "tool_use",
                      id: toolBlock.id,
                      name: toolBlock.name,
                      input: {},
                    },
                  });
                }
                if (tc.function?.arguments) {
                  emit("content_block_delta", {
                    type: "content_block_delta",
                    index: toolBlock.blockIndex,
                    delta: { type: "input_json_delta", partial_json: tc.function.arguments },
                  });
                }
              }
            }

            if (finishReason) {
              emitStop(mapOpenAiFinishToAnthropic(finishReason, toolBlocks.size > 0));
            }
          }
          if (sentStop) break;
        }
      } catch {
        /* client disconnected or upstream stream failed */
      }

      if (!sentStop) emitStop(toolBlocks.size > 0 ? "tool_use" : "end_turn");
      try {
        controller.close();
      } catch {
        /* already closed */
      }
    },
  });

  return new Response(stream, {
    status: 200,
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "x-accel-buffering": "no",
      ...CORS_HEADERS,
    },
  });
}

async function proxyAnthropicMessages(req: NextRequest): Promise<Response> {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return anthropicErrorResponse(400, "Invalid JSON body");
  }

  const conversion = convertAnthropicRequest(payload);
  const target = backendEndpoint("chat/completions", req.nextUrl.search);
  if (!target) {
    return anthropicErrorResponse(503, "Backend API is not configured.", "api_error");
  }

  let upstream: Response;
  try {
    upstream = await fetch(target, {
      method: "POST",
      headers: backendProxyHeaders(req),
      body: JSON.stringify(conversion.openAiPayload),
      cache: "no-store",
      signal: req.signal,
    });
  } catch {
    return anthropicErrorResponse(503, "Backend API is unavailable. Please retry shortly.", "api_error");
  }

  if (!upstream.ok) return anthropicErrorFromUpstream(upstream);
  if (conversion.streaming) return anthropicSseFromOpenAi(upstream, conversion);

  let data: any;
  try {
    data = await upstream.json();
  } catch {
    return anthropicErrorResponse(502, "Backend returned an invalid JSON response.", "api_error");
  }

  const headers = new Headers(CORS_HEADERS);
  headers.set("x-prorouter-requested-model", conversion.requestedModel);
  if (typeof data?.model === "string" && data.model) {
    headers.set("x-prorouter-served-model", data.model);
  }
  return NextResponse.json(openAiCompletionToAnthropic(data, conversion), { headers });
}

export async function handleV1(req: NextRequest, rawPath: string[]) {
  // Strip any leading "v1"
  let path = [...rawPath];
  while (path.length > 0 && path[0] === "v1") {
    path.shift();
  }

  const subpath = path.join("/");

  const isInferenceRequest =
    req.method === "POST" && (subpath === "chat/completions" || subpath === "messages");

  if (isInferenceRequest) {
    const credential = getCallerCredential(req);
    const demoEnabled = isDemoGatewayEnabled();
    const useBackend = Boolean(credential.apiKey) || (credential.hasSession && !demoEnabled);

    if (useBackend) {
      if (!BACKEND_BASE) {
        return subpath === "messages"
          ? anthropicErrorResponse(503, "Backend API is not configured.", "api_error")
          : openAiGatewayError(503, "Backend API is not configured.", "provider_unavailable");
      }
      return subpath === "messages" ? proxyAnthropicMessages(req) : proxyToBackend(req, subpath);
    }

    if (!demoEnabled) {
      return subpath === "messages"
        ? anthropicErrorResponse(401, "Authentication required. Provide a ProRouter API key via x-api-key or Authorization: Bearer.")
        : openAiGatewayError(401, "Authentication required. Provide a ProRouter API key.", "unauthenticated");
    }
  }

  // ── 1. GET /v1/models (Lists all available Pro Router models) ──
  // Authenticated API-key callers see the backend catalog so the list matches
  // what their key can actually use. Anonymous/demo callers keep the local
  // catalog so the playground works without a backend.
  if (subpath === "models" && req.method === "GET") {
    const credential = getCallerCredential(req);
    if (credential.apiKey && BACKEND_BASE) {
      return proxyToBackend(req, "models");
    }
    return NextResponse.json({ object: "list", data: ALL_MODELS }, { headers: CORS_HEADERS });
  }

  // ── 2. GET /v1/models/:modelId (Inspection for client tools) ──
  if (subpath.startsWith("models/") && req.method === "GET") {
    const requestedId = subpath.slice("models/".length).trim();
    const found = ALL_MODELS.find(
      (m) => m.id.toLowerCase() === requestedId.toLowerCase()
    );

    if (!found && process.env.PROROUTER_ALLOW_ARBITRARY_MODELS !== "true") {
      return NextResponse.json(
        {
          error: {
            message: `The model '${requestedId}' does not exist`,
            type: "invalid_request_error",
            code: "model_not_found",
          },
        },
        { status: 404, headers: CORS_HEADERS }
      );
    }

    const model = found || {
      id: requestedId || "deepseek-v4.1-flash",
      name: requestedId || "DeepSeek V4.1 Flash",
      object: "model",
      created: 1710000000,
      owned_by: "prorouter",
      description: `${requestedId} model endpoint`,
    };

    return NextResponse.json(model, { headers: CORS_HEADERS });
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
    const reqModelLower = requestedRawModel.toLowerCase();

    // Check Free Playground limit (10 requests per user/IP for free users; Pay-As-You-Go users unlimited)
    const authHeader = req.headers.get("authorization") || "";
    const clientKey = authHeader.replace(/^Bearer\s+/i, "").trim();
    const isDefaultPlaygroundKey = !clientKey || clientKey === "pro_sk_live_playground_default";

    // Phase 4: Check if requested model qualifies for 48-Hour Promotional Launch Special
    // The 4 free launch models: DeepSeek V4.1 Flash, DeepSeek V4.1 Flash 1017, Qwen 3.8 27B, Qwen 2.5 Coder 32B
    const isPromo48hModel =
      reqModelLower.includes("deepseek-v4.1") ||
      reqModelLower.includes("qwen3.8") ||
      reqModelLower.includes("qwen-2.5-coder");

    if (isDefaultPlaygroundKey) {
      const forwarded = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
      const clientIp = forwarded.split(",")[0].trim();
      const now = Date.now();

      // Only promotional models bypass the 10-request guest cap during the 48-hour launch
      if (!isPromo48hModel) {
        let usage = freePlaygroundIpUsage.get(clientIp);
        if (!usage || (now - usage.lastReset) > ONE_DAY_MS) {
          usage = { count: 0, lastReset: now };
          freePlaygroundIpUsage.set(clientIp, usage);
        }

        if (usage.count >= FREE_PLAYGROUND_LIMIT) {
          return NextResponse.json(
            {
              error: {
                code: "free_playground_limit_reached",
                message: "Free playground limit reached (" + FREE_PLAYGROUND_LIMIT + "/" + FREE_PLAYGROUND_LIMIT + " requests used). Please sign in and activate Pay-As-You-Go at https://www.prorouter.in/dashboard/billing to continue testing 500+ models with unlimited access.",
                limit: FREE_PLAYGROUND_LIMIT,
                used: usage.count,
              },
            },
            { status: 402, headers: CORS_HEADERS }
          );
        }

        usage.count += 1;
      }
    }

    const isStreaming = payload.stream === true;
    const reqId = "chatcmpl-" + Math.random().toString(36).slice(2, 11);
    const createdTimestamp = Math.floor(Date.now() / 1000);

    // Pass the client's messages through unchanged. A gateway must never
    // inject synthetic instructions, rewrite conversation history, or answer
    // on behalf of the upstream model.
    const effectiveMessages: unknown[] = Array.isArray(payload.messages) ? payload.messages : [];

    const resolvedMeta = resolveModelMetadata(requestedRawModel);
    const modelDisplayName = resolvedMeta.name;
    const ownerName = resolvedMeta.owner;
    const isDeepSeek = requestedRawModel.toLowerCase().includes("deepseek");

    const shouldCleanAsterisks = false;

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
            choices: [{ index: 0, delta: { role: "assistant" }, finish_reason: null }],
          })}\n\n`;
          controller.enqueue(encoder.encode(initialChunk));

          // Unified ProRouter Gateway Engine for all models
          await streamGateway(controller, encoder, decoder, reqId, createdTimestamp, requestedRawModel, effectiveMessages, payload, shouldCleanAsterisks, modelDisplayName, ownerName, clientKey, req.signal);
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
    const hasTools = Array.isArray(payload.tools) && payload.tools.length > 0;

    // 1. TokenJuice DeepSeek Primary Gateway Engine
    if (isGatewayAvailable()) {
      try {
        const upstreamUrl = `${GATEWAY_BASE.replace(/\/+$/, "")}/chat/completions`;
        const { res: upstreamRes } = await fetchGatewayWithRetry(
          upstreamUrl,
          {
            ...payload,
            messages: effectiveMessages,
            model: GATEWAY_MODEL,
            stream: false,
          },
          AbortSignal.any([req.signal, AbortSignal.timeout(60_000)])
        );
        if (upstreamRes.ok) {
          const data = await upstreamRes.json();
          const rawMsg = data.choices?.[0]?.message;
          if (rawMsg) {
            const cleanedMsg = cleanNonStreamingMessage(rawMsg, modelDisplayName, ownerName, shouldCleanAsterisks);
            recordTelemetryRequest({
              model: requestedRawModel,
              totalTokens: data.usage?.total_tokens || 50,
              latencyMs: 1450,
              status: "success",
              apiKey: clientKey ? clientKey.slice(0, 16) + "..." : undefined,
            });
            return NextResponse.json({
              id: reqId,
              object: "chat.completion",
              created: createdTimestamp,
              model: requestedRawModel,
              choices: [{
                index: 0,
                message: cleanedMsg,
                finish_reason: normalizeFinishReason(data.choices?.[0]?.finish_reason, Array.isArray(cleanedMsg.tool_calls) && cleanedMsg.tool_calls.length > 0),
              }],
              usage: data.usage || { prompt_tokens: 20, completion_tokens: 30, total_tokens: 50 },
            }, { headers: modelHonestyHeaders(requestedRawModel, GATEWAY_MODEL) });
          }
        }
      } catch { }
    }

    // 1B. Requesty High-Performance Gateway (Active Verified Key)
    // Only route if a Requesty credential is configured, the request is not
    // DeepSeek, and the client did not ask for native tool calling.
    const reqKey = getRequestyKey();
    if (!isDeepSeek && !hasTools && reqKey && (requestedRawModel.includes("/") || /leanstral|mistral|ling/i.test(requestedRawModel))) {
      try {
        let reqModel = requestedRawModel;
        if (requestedRawModel.includes("leanstral") || requestedRawModel.includes("mistral")) {
          reqModel = "mistral/leanstral-1-5";
        } else if (requestedRawModel.includes("ling")) {
          reqModel = "novita/ling-3.1-flash";
        }

        const reqRes = await fetch(`${REQUESTY_BASE}/chat/completions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + reqKey,
          },
          body: JSON.stringify({
            ...payload,
            messages: effectiveMessages,
            model: reqModel,
            stream: false,
          }),
          signal: AbortSignal.any([req.signal, AbortSignal.timeout(30_000)]),
        });

        if (reqRes.ok) {
          const data = await reqRes.json();
          const rawMsg = data.choices?.[0]?.message;
          if (rawMsg) {
            const cleanedMsg = cleanNonStreamingMessage(rawMsg, modelDisplayName, ownerName, shouldCleanAsterisks);
            recordTelemetryRequest({
              model: requestedRawModel,
              totalTokens: data.usage?.total_tokens || 50,
              latencyMs: 1450,
              status: "success",
              apiKey: clientKey ? clientKey.slice(0, 16) + "..." : undefined,
            });
            return NextResponse.json({
              id: reqId,
              object: "chat.completion",
              created: createdTimestamp,
              model: requestedRawModel,
              choices: [{
                index: 0,
                message: cleanedMsg,
                finish_reason: normalizeFinishReason(data.choices?.[0]?.finish_reason, Array.isArray(cleanedMsg.tool_calls) && cleanedMsg.tool_calls.length > 0),
              }],
              usage: data.usage || { prompt_tokens: 20, completion_tokens: 30, total_tokens: 50 },
            }, { headers: modelHonestyHeaders(requestedRawModel, reqModel) });
          }
        }
      } catch { }
    }

    // 2. High-Speed Secondary Cluster (Nabh Cloud)
    for (let attempt = 0; attempt < 2; attempt++) {
      const key = getNextNabhKey();
      if (!key) break;
      try {
        const nabhBody: Record<string, unknown> = {
          ...payload,
          model: "gpt-oss-20b",
          messages: effectiveMessages,
          stream: false,
        };
        if (payload.tools) nabhBody.tools = payload.tools;
        if (payload.tool_choice) nabhBody.tool_choice = payload.tool_choice;

        const nabhRes = await fetch("https://api.nabh.cloud/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + key,
          },
          body: JSON.stringify(nabhBody),
          signal: AbortSignal.any([req.signal, AbortSignal.timeout(60_000)]),
        });

        if (nabhRes.status === 401 || nabhRes.status === 403) markNabhCooldown(key, 86_400_000);
        else if (nabhRes.status === 429) markNabhCooldown(key, 60_000);
        else if (nabhRes.status >= 500) markNabhCooldown(key, 15_000);

        if (nabhRes.ok) {
          const data = await nabhRes.json();
          const rawMsg = data.choices?.[0]?.message;
          if (rawMsg) {
            const cleanedMsg = cleanNonStreamingMessage(rawMsg, modelDisplayName, ownerName, shouldCleanAsterisks);
            recordTelemetryRequest({
              model: requestedRawModel,
              totalTokens: data.usage?.total_tokens || 70,
              latencyMs: 1450,
              status: "success",
              apiKey: clientKey ? clientKey.slice(0, 16) + "..." : undefined,
            });
            return NextResponse.json({
              id: reqId,
              object: "chat.completion",
              created: createdTimestamp,
              model: requestedRawModel,
              choices: [{
                index: 0,
                message: cleanedMsg,
                finish_reason: normalizeFinishReason(data.choices?.[0]?.finish_reason, Array.isArray(cleanedMsg.tool_calls) && cleanedMsg.tool_calls.length > 0),
              }],
              usage: data.usage || { prompt_tokens: 20, completion_tokens: 50, total_tokens: 70 },
            }, { status: 200, headers: modelHonestyHeaders(requestedRawModel, "gpt-oss-20b") });
          }
        }
      } catch (e) { }
    }

    // 2. Fallback to TokenJuice
    const abortCtrl = new AbortController();
    const timeoutId = setTimeout(() => abortCtrl.abort(), 25_000);
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
              if (choice?.message) {
                choice.message = cleanNonStreamingMessage(choice.message, modelDisplayName, ownerName, shouldCleanAsterisks);
              }
            }
          }
        }
        recordTelemetryRequest({
          model: requestedRawModel,
          totalTokens: data.usage?.total_tokens || 60,
          latencyMs: 1300,
          status: "success",
          apiKey: clientKey ? clientKey.slice(0, 16) + "..." : undefined,
        });
        return NextResponse.json(data, { status: 200, headers: modelHonestyHeaders(requestedRawModel, GATEWAY_MODEL) });
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

  // ── 3B. POST /v1/messages (Anthropic Messages API for Claude Code & Cline Anthropic Provider) ──
  if (subpath === "messages" && req.method === "POST") {
    let anthropicPayload: Record<string, unknown> = {};
    try {
      anthropicPayload = await req.json();
    } catch {
      return NextResponse.json(
        { error: { message: "Invalid JSON body", type: "invalid_request_error" } },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const authHeader = req.headers.get("authorization") || req.headers.get("x-api-key") || "";
    const clientKey = authHeader.replace(/^Bearer\s+/i, "").trim();
    const requestedRawModel = typeof anthropicPayload.model === "string" && anthropicPayload.model.trim()
      ? anthropicPayload.model.trim()
      : "deepseek-v4.1-flash";
    const isStreaming = anthropicPayload.stream === true;
    const msgId = "msg_" + Math.random().toString(36).slice(2, 14);
    const createdTimestamp = Math.floor(Date.now() / 1000);

    // Translate the caller's system prompt verbatim. Do not append hidden
    // instructions or claims about workspace/tool access.
    const systemVal = anthropicPayload.system;
    let systemContent = "";
    if (typeof systemVal === "string") {
      systemContent = systemVal;
    } else if (Array.isArray(systemVal)) {
      systemContent = systemVal
        .map((s: any) => (typeof s === "string" ? s : s?.text || ""))
        .filter(Boolean)
        .join("\n");
    }

    const convertedMessages: Array<{ role: string; content: string | null; tool_calls?: any[]; tool_call_id?: string }> = [];
    if (systemContent) {
      convertedMessages.push({ role: "system", content: systemContent });
    }

    const incomingMsgs = Array.isArray(anthropicPayload.messages) ? anthropicPayload.messages : [];
    for (const m of incomingMsgs as any[]) {
      const role = m.role === "assistant" ? "assistant" : "user";
      if (typeof m.content === "string") {
        convertedMessages.push({ role, content: m.content });
      } else if (Array.isArray(m.content)) {
        let textAcc = "";
        const toolCalls: any[] = [];
        const toolResults: any[] = [];
        for (const block of m.content) {
          if (block.type === "text" && typeof block.text === "string") {
            textAcc += block.text;
          } else if (block.type === "tool_use") {
            toolCalls.push({
              id: block.id,
              type: "function",
              function: {
                name: block.name,
                arguments: JSON.stringify(block.input || {}),
              },
            });
          } else if (block.type === "tool_result") {
            toolResults.push({
              role: "tool",
              tool_call_id: block.tool_use_id,
              content: typeof block.content === "string"
                ? block.content
                : JSON.stringify(block.content || {}),
            });
          }
        }
        // OpenAI requires tool results to directly follow the assistant
        // message that requested them, before any new user text.
        convertedMessages.push(...toolResults);
        if (textAcc || toolCalls.length > 0) {
          const entry: any = { role, content: textAcc || null };
          if (toolCalls.length > 0) entry.tool_calls = toolCalls;
          convertedMessages.push(entry);
        }
      }
    }

    // Convert Anthropic tools (input_schema) to OpenAI parameters format
    let convertedTools: any[] | undefined = undefined;
    if (Array.isArray(anthropicPayload.tools) && anthropicPayload.tools.length > 0) {
      convertedTools = anthropicPayload.tools.map((t: any) => ({
        type: "function",
        function: {
          name: t.name,
          description: t.description || "",
          parameters: t.input_schema || { type: "object", properties: {} },
        },
      }));
    }

    // Preserve the sampling and control parameters the client sent.
    let convertedToolChoice: unknown = undefined;
    const anthropicToolChoice = anthropicPayload.tool_choice as any;
    if (anthropicToolChoice && typeof anthropicToolChoice === "object") {
      if (anthropicToolChoice.type === "auto") convertedToolChoice = "auto";
      else if (anthropicToolChoice.type === "any") convertedToolChoice = "required";
      else if (anthropicToolChoice.type === "none") convertedToolChoice = "none";
      else if (anthropicToolChoice.type === "tool" && anthropicToolChoice.name) {
        convertedToolChoice = {
          type: "function",
          function: { name: anthropicToolChoice.name },
        };
      }
    }

    const openAiPayload: Record<string, unknown> = {
      model: requestedRawModel,
      messages: convertedMessages,
      stream: isStreaming,
    };
    if (convertedTools) openAiPayload.tools = convertedTools;
    if (convertedToolChoice !== undefined) openAiPayload.tool_choice = convertedToolChoice;
    if (typeof anthropicPayload.temperature === "number") openAiPayload.temperature = anthropicPayload.temperature;
    if (typeof anthropicPayload.top_p === "number") openAiPayload.top_p = anthropicPayload.top_p;
    if (typeof anthropicPayload.max_tokens === "number") openAiPayload.max_tokens = anthropicPayload.max_tokens;
    if (Array.isArray(anthropicPayload.stop_sequences) && anthropicPayload.stop_sequences.length > 0) {
      openAiPayload.stop = anthropicPayload.stop_sequences;
    }

    const resolvedMeta = resolveModelMetadata(requestedRawModel);
    const modelDisplayName = resolvedMeta.name;
    const ownerName = resolvedMeta.owner;

    // ── Anthropic Streaming Response ──
    if (isStreaming) {
      const stream = new ReadableStream({
        async start(controller) {
          const encoder = new TextEncoder();
          const decoder = new TextDecoder();

          controller.enqueue(encoder.encode(`event: message_start\ndata: ${JSON.stringify({
            type: "message_start",
            message: {
              id: msgId,
              type: "message",
              role: "assistant",
              model: requestedRawModel,
              content: [],
              stop_reason: null,
              stop_sequence: null,
              usage: {
                input_tokens: Math.max(1, Math.ceil(JSON.stringify(convertedMessages).length / 4)),
                output_tokens: 1,
              },
            },
          })}\n\n`));

          let outTokens = 0;
          let hasStartedTextBlock = false;
          let hasStoppedTextBlock = false;
          let textBlockIndex = 0;
          let nextBlockIndex = 0;
          let sentStop = false;
          const toolBlockMap = new Map<number, { blockIndex: number; id: string; name: string }>();

          const emitStop = (stopReason: string) => {
            if (hasStartedTextBlock && !hasStoppedTextBlock) {
              hasStoppedTextBlock = true;
              controller.enqueue(encoder.encode(`event: content_block_stop\ndata: ${JSON.stringify({
                type: "content_block_stop",
                index: textBlockIndex,
              })}\n\n`));
            }
            for (const tb of toolBlockMap.values()) {
              controller.enqueue(encoder.encode(`event: content_block_stop\ndata: ${JSON.stringify({
                type: "content_block_stop",
                index: tb.blockIndex,
              })}\n\n`));
            }
            controller.enqueue(encoder.encode(`event: message_delta\ndata: ${JSON.stringify({
              type: "message_delta",
              delta: { stop_reason: stopReason, stop_sequence: null },
              usage: {
                input_tokens: upstreamUsage?.input_tokens ?? estimatedInputTokens,
                output_tokens: upstreamUsage?.output_tokens ?? Math.max(1, outTokens),
              },
            })}\n\n`));
            controller.enqueue(encoder.encode(`event: message_stop\ndata: ${JSON.stringify({
              type: "message_stop",
            })}\n\n`));
          };

          let pendingLine = "";
          let pendingStopReason: string | null = null;
          const finalizeStop = (fallbackReason: string) => {
            if (sentStop) return;
            sentStop = true;
            emitStop(pendingStopReason || fallbackReason);
            pendingStopReason = null;
          };
          let upstreamUsage: { input_tokens?: number; output_tokens?: number } | null = null;
          const estimatedInputTokens = Math.max(1, Math.ceil(JSON.stringify(convertedMessages).length / 4));

          const handleDataLine = (line: string) => {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) return;
            if (trimmed === "data: [DONE]") {
              finalizeStop(toolBlockMap.size > 0 ? "tool_use" : "end_turn");
              return;
            }

            try {
              const parsed = JSON.parse(trimmed.slice(5).trim());
              if (parsed?.usage) {
                upstreamUsage = {
                  input_tokens: typeof parsed.usage.prompt_tokens === "number" ? parsed.usage.prompt_tokens : upstreamUsage?.input_tokens,
                  output_tokens: typeof parsed.usage.completion_tokens === "number" ? parsed.usage.completion_tokens : upstreamUsage?.output_tokens,
                };
                if (pendingStopReason) {
                  finalizeStop(pendingStopReason);
                }
              }
              const delta = parsed.choices?.[0]?.delta;
              const finishReason = parsed.choices?.[0]?.finish_reason;

              if (delta?.content) {
                if (!hasStartedTextBlock) {
                  hasStartedTextBlock = true;
                  textBlockIndex = nextBlockIndex++;
                  controller.enqueue(encoder.encode(`event: content_block_start\ndata: ${JSON.stringify({
                    type: "content_block_start",
                    index: textBlockIndex,
                    content_block: { type: "text", text: "" },
                  })}\n\n`));
                }
                outTokens += 1;
                controller.enqueue(encoder.encode(`event: content_block_delta\ndata: ${JSON.stringify({
                  type: "content_block_delta",
                  index: textBlockIndex,
                  delta: { type: "text_delta", text: delta.content },
                })}\n\n`));
              }

              if (Array.isArray(delta?.tool_calls) && delta.tool_calls.length > 0) {
                if (hasStartedTextBlock && !hasStoppedTextBlock) {
                  hasStoppedTextBlock = true;
                  controller.enqueue(encoder.encode(`event: content_block_stop\ndata: ${JSON.stringify({
                    type: "content_block_stop",
                    index: textBlockIndex,
                  })}\n\n`));
                }

                for (const tc of delta.tool_calls) {
                  const tcIdx = typeof tc.index === "number" ? tc.index : 0;
                  let toolBlock = toolBlockMap.get(tcIdx);
                  if (!toolBlock) {
                    const bIdx = nextBlockIndex++;
                    toolBlock = {
                      blockIndex: bIdx,
                      id: tc.id || ("toolu_" + Math.random().toString(36).slice(2, 10)),
                      name: tc.function?.name || "tool",
                    };
                    toolBlockMap.set(tcIdx, toolBlock);
                    controller.enqueue(encoder.encode(`event: content_block_start\ndata: ${JSON.stringify({
                      type: "content_block_start",
                      index: toolBlock.blockIndex,
                      content_block: {
                        type: "tool_use",
                        id: toolBlock.id,
                        name: toolBlock.name,
                        input: {},
                      },
                    })}\n\n`));
                  }

                  if (tc.function?.arguments) {
                    controller.enqueue(encoder.encode(`event: content_block_delta\ndata: ${JSON.stringify({
                      type: "content_block_delta",
                      index: toolBlock.blockIndex,
                      delta: { type: "input_json_delta", partial_json: tc.function.arguments },
                    })}\n\n`));
                  }
                }
              }

              if (finishReason && !pendingStopReason) {
                pendingStopReason =
                  finishReason === "length"
                    ? "max_tokens"
                    : finishReason === "tool_calls" || toolBlockMap.size > 0
                      ? "tool_use"
                      : "end_turn";
                if (upstreamUsage) {
                  finalizeStop(pendingStopReason);
                }
              }
            } catch { }
          };

          const anthropicController: any = {
            enqueue(chunkBytes: Uint8Array) {
              pendingLine += decoder.decode(chunkBytes, { stream: true });
              const lines = pendingLine.split("\n");
              pendingLine = lines.pop() || "";
              for (const line of lines) handleDataLine(line);
            },
            close() {
              try { controller.close(); } catch { }
            },
          };
          await streamGateway(
            anthropicController,
            encoder,
            decoder,
            msgId,
            createdTimestamp,
            requestedRawModel,
            convertedMessages,
            openAiPayload,
            false,
            modelDisplayName,
            ownerName,
            clientKey,
            req.signal
          );

          try { controller.close(); } catch { }
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

    // ── Anthropic Non-Streaming Response ──
    if (isGatewayAvailable()) {
      try {
        const upstreamUrl = `${GATEWAY_BASE.replace(/\/+$/, "")}/chat/completions`;
        const { res: upstreamRes } = await fetchGatewayWithRetry(
          upstreamUrl,
          {
            ...openAiPayload,
            model: GATEWAY_MODEL,
            messages: convertedMessages,
            stream: false,
          },
          AbortSignal.any([req.signal, AbortSignal.timeout(60_000)])
        );
        if (upstreamRes.ok) {
          const data = await upstreamRes.json();
          const rawMsg = data.choices?.[0]?.message;
          if (rawMsg) {
            const cleaned = cleanNonStreamingMessage(rawMsg, modelDisplayName, ownerName, false);
            const contentBlocks: any[] = [];
            if (cleaned.content) {
              contentBlocks.push({ type: "text", text: cleaned.content });
            }
            if (Array.isArray(cleaned.tool_calls) && cleaned.tool_calls.length > 0) {
              for (const tc of cleaned.tool_calls as any[]) {
                let parsedInput = {};
                try {
                  parsedInput = typeof tc.function?.arguments === "string" ? JSON.parse(tc.function.arguments) : (tc.function?.arguments || {});
                } catch { }
                contentBlocks.push({
                  type: "tool_use",
                  id: tc.id || ("toolu_" + Math.random().toString(36).slice(2, 10)),
                  name: tc.function?.name || "tool",
                  input: parsedInput,
                });
              }
            }
            const rawFinish = data.choices?.[0]?.finish_reason;
            const stopReason =
              rawFinish === "length"
                ? "max_tokens"
                : contentBlocks.some((b) => b.type === "tool_use") || rawFinish === "tool_calls"
                  ? "tool_use"
                  : "end_turn";
            return NextResponse.json({
              id: msgId,
              type: "message",
              role: "assistant",
              model: requestedRawModel,
              content: contentBlocks,
              stop_reason: stopReason,
              stop_sequence: null,
              usage: data.usage ? { input_tokens: data.usage.prompt_tokens || 0, output_tokens: data.usage.completion_tokens || 0 } : { input_tokens: 0, output_tokens: 0 },
            }, { headers: modelHonestyHeaders(requestedRawModel, GATEWAY_MODEL) });
          }
        }
      } catch { }
    }

    // 1B. Requesty High-Performance Gateway (parity with the OpenAI path)
    const msgReqKey = getRequestyKey();
    const msgHasTools = Array.isArray(convertedTools) && convertedTools.length > 0;
    if (!requestedRawModel.toLowerCase().includes("deepseek") && !msgHasTools && msgReqKey && (requestedRawModel.includes("/") || /leanstral|mistral|ling/i.test(requestedRawModel))) {
      try {
        let reqModel = requestedRawModel;
        if (requestedRawModel.includes("leanstral") || requestedRawModel.includes("mistral")) {
          reqModel = "mistral/leanstral-1-5";
        } else if (requestedRawModel.includes("ling")) {
          reqModel = "novita/ling-3.1-flash";
        }

        const reqRes = await fetch(`${REQUESTY_BASE}/chat/completions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + msgReqKey,
          },
          body: JSON.stringify({
            ...openAiPayload,
            messages: convertedMessages,
            model: reqModel,
            stream: false,
          }),
          signal: AbortSignal.any([req.signal, AbortSignal.timeout(30_000)]),
        });

        if (reqRes.ok) {
          const data = await reqRes.json();
          const rawMsg = data.choices?.[0]?.message;
          if (rawMsg) {
            const cleaned = cleanNonStreamingMessage(rawMsg, modelDisplayName, ownerName, false);
            const contentBlocks: any[] = [];
            if (cleaned.content) {
              contentBlocks.push({ type: "text", text: cleaned.content });
            }
            if (Array.isArray(cleaned.tool_calls) && cleaned.tool_calls.length > 0) {
              for (const tc of cleaned.tool_calls as any[]) {
                let parsedInput = {};
                try {
                  parsedInput = typeof tc.function?.arguments === "string" ? JSON.parse(tc.function.arguments) : (tc.function?.arguments || {});
                } catch { }
                contentBlocks.push({
                  type: "tool_use",
                  id: tc.id || ("toolu_" + Math.random().toString(36).slice(2, 10)),
                  name: tc.function?.name || "tool",
                  input: parsedInput,
                });
              }
            }
            const rawFinish = data.choices?.[0]?.finish_reason;
            const stopReason =
              rawFinish === "length"
                ? "max_tokens"
                : contentBlocks.some((b) => b.type === "tool_use") || rawFinish === "tool_calls"
                  ? "tool_use"
                  : "end_turn";
            return NextResponse.json({
              id: msgId,
              type: "message",
              role: "assistant",
              model: requestedRawModel,
              content: contentBlocks,
              stop_reason: stopReason,
              stop_sequence: null,
              usage: data.usage
                ? { input_tokens: data.usage.prompt_tokens || 0, output_tokens: data.usage.completion_tokens || 0 }
                : { input_tokens: 0, output_tokens: 0 },
            }, { headers: modelHonestyHeaders(requestedRawModel, reqModel) });
          }
        }
      } catch { }
    }
    for (let attempt = 0; attempt < 2; attempt++) {
      const key = getNextNabhKey();
      if (!key) break;
      try {
        const nabhBody: Record<string, unknown> = {
          ...openAiPayload,
          model: "gpt-oss-20b",
          messages: convertedMessages,
          stream: false,
        };
        if (convertedTools) nabhBody.tools = convertedTools;

        const nabhRes = await fetch("https://api.nabh.cloud/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + key,
          },
          body: JSON.stringify(nabhBody),
          signal: AbortSignal.any([req.signal, AbortSignal.timeout(30_000)]),
        });

        if (nabhRes.status === 401 || nabhRes.status === 403) markNabhCooldown(key, 86_400_000);
        else if (nabhRes.status === 429) markNabhCooldown(key, 60_000);
        else if (nabhRes.status >= 500) markNabhCooldown(key, 15_000);

        if (nabhRes.ok) {
          const data = await nabhRes.json();
          const rawMsg = data.choices?.[0]?.message;
          const cleaned = cleanNonStreamingMessage(rawMsg, modelDisplayName, ownerName, false);

          const contentBlocks: any[] = [];
          if (cleaned.content) {
            contentBlocks.push({ type: "text", text: cleaned.content });
          }
          if (Array.isArray(cleaned.tool_calls) && cleaned.tool_calls.length > 0) {
            for (const tc of cleaned.tool_calls as any[]) {
              let parsedInput = {};
              try {
                parsedInput = typeof tc.function?.arguments === "string" ? JSON.parse(tc.function.arguments) : (tc.function?.arguments || {});
              } catch { }
              contentBlocks.push({
                type: "tool_use",
                id: tc.id || ("toolu_" + Math.random().toString(36).slice(2, 10)),
                name: tc.function?.name || "tool",
                input: parsedInput,
              });
            }
          }

          const rawFinish = data.choices?.[0]?.finish_reason;
          const stopReason =
            rawFinish === "length"
              ? "max_tokens"
              : contentBlocks.some((b) => b.type === "tool_use") || rawFinish === "tool_calls"
                ? "tool_use"
                : "end_turn";

          return NextResponse.json({
            id: msgId,
            type: "message",
            role: "assistant",
            model: requestedRawModel,
            content: contentBlocks,
            stop_reason: stopReason,
            stop_sequence: null,
            usage: data.usage ? { input_tokens: data.usage.prompt_tokens || 0, output_tokens: data.usage.completion_tokens || 0 } : { input_tokens: 0, output_tokens: 0 },
          }, { headers: modelHonestyHeaders(requestedRawModel, "gpt-oss-20b") });
        }
      } catch { }
    }

    return NextResponse.json({
      error: {
        type: "api_error",
        message: "Upstream providers temporarily unavailable. Please retry shortly.",
      },
    }, { status: 502, headers: CORS_HEADERS });
  }

  // ── 4. Fallback for any other path ──
  return NextResponse.json(
    {
      error: {
        message: `Path /v1/${subpath} not found. Available endpoints: /v1/models, /v1/chat/completions, /v1/messages`,
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
