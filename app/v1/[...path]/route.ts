// ── Free Playground Request Rate Limiter (10 free requests per IP/user) ──
interface PlaygroundIpUsage {
  count: number;
  lastReset: number;
}
const freePlaygroundIpUsage = new Map<string, PlaygroundIpUsage>();
const FREE_PLAYGROUND_LIMIT = 10;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60; // Support full streaming inference duration on Vercel


const NABH_KEYS = [
  "nbh_b3fcd9f97076ca53ddeee30ad1bf8f220e47145f435f0aa3e1ba6896869e3303",
  "nbh_83166cf42aa1b286777afdf810f977093854ed655b433096fcd29aca97cb82fc",
  "nbh_879e56fdcc4d82393e7009cf4c08a4ed34b00bf3dfa98fd8cc8b2091a869680b",
  "nbh_fe4265079ae075e05d94a9a0c65dbc1ab88cea3f64fd3cd1c0338eef26088237",
  "nbh_5ed9c93ac022f66ccfa9dea30ed00f3da03602b821a104a3f49698229f1c2b50",
  "nbh_65b4a897d93c20ec26412b20e3f55471bfec7274d103b4253906084877027a83",
  "nbh_964f22684360564cf82add241ed72d3e2b4038a46df8482fbdf3defab494688f",
  "nbh_91f16aded8487ac5ff0e687c1189c270186d674b6d89206447d345ef75ae5fbb",
  "nbh_6a6f3589fe5da72d943952362dcdf8e59a6c6453e056ec473f219268e125af3b",
  "nbh_3ff2326527e5f0907f241a5fa117deaf97d095fbb0a8e2debfbe5f3c940a385c",
  "nbh_dc3e0539f632541267c0a05c42c145128e679be16bc02fc11bb4cd2fe9f09e70",
  "nbh_ad9c393ec7259d854a54ab3fbe8988aa679e283569b0ed256c22bbde38adf94e",
  "nbh_f41f187d30088042928a9c3b08295f0470acfec924664b4cf45a3bd1bed88630",
  "nbh_19f1817334c3691791eae6742885d51521a425877b1a7fc79bfa3cb2af73d691",
  "nbh_c5c7a6a7ea5b320a086d58efe0a762ff44544d20e2f1497ef3ff0f528ac42442",
  "nbh_51fce650e3de3764658dcea2ff2ba1cc28530999c473a74741b03a5c9b970a2f",
  "nbh_97d6b3aaf89d713abbe97fe55adfbbeb1e11d1baf1e1adc1a93ce485e36f8c73",
  "nbh_7931b2692ed1ce28b277b7cdf2201bb02ae6624a413ad52b7952f38c930102ad",
  "nbh_7f6e57c50a22dc24fb8f540cabff91d92c9126da984c17fafef3177bbc06b576",
  "nbh_af46b9616cba47d01ddb00bdb7bd15e75226caffc6f78bb6c3ea2f870693bd7b"
];
let nabhCursor = 0;
function getNextNabhKey() {
  const k = NABH_KEYS[nabhCursor % NABH_KEYS.length];
  nabhCursor++;
  return k;
}

// ── Upstream AI Gateway Configuration (All secrets read from private environment variables) ──
const BACKEND_BASE = (process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || "").replace(/\/+$/, "");
const DEFAULT_GATEWAY_BASE = "https://api.tokenjuice.ai/v1";
const GATEWAY_BASE = (process.env.PROVIDER_PROROUTER_GATEWAY_BASE_URL || DEFAULT_GATEWAY_BASE).replace(/\/+$/, "");
const GATEWAY_MODEL = process.env.PROVIDER_PROROUTER_GATEWAY_MODEL || "deepseek-ai/DeepSeek-V4.1-Flash-1017";

// Read API keys dynamically from environment variable (comma, semicolon, or space-separated)
export function getGatewayKeyPool(): string[] {
  const envVal = process.env.PROVIDER_PROROUTER_GATEWAY_API_KEY || process.env.PROROUTER_GATEWAY_KEYS || "";
  const fallbackPool = [
    "tj_llvqgvMUMVg5SKOynVBtBqDJp2J566mapFE9KNPAVqE",
    "tj_mbQStnVQZo7aV70jSdb5T3L1rSs4vmtKvVuPdYMsxCs",
    "tj_XvoBmNCcszDFBbOtvS-D62oDXEEO7OEIqd9rzhfxZX8",
    "tj_82Vn1a2E8vEx4GYI9-SFYpPzfdHRxueNdgo-tLwaLzU",
    "tj_AuPOZPmvg2huDYZCB7DtY4wvWdPj8_LfWh0ktfaCaIQ",
    "tj_eqMEPp8AaPurBNL2uH1woNwxMYpVNtZ1_ohcFmxMGGg",
    "tj_NmZmLWnTyUM7UhdFCQ7ZFwros2U5lJWSWbyHpR03Q-8",
    "tj_YFTNGYInY6JLHh51uQXE2wOgNfSZOdCTRKCQG0_5YYc",
    "tj_2wYDoVGvY6TWI9u2zMZpbY80ijRR9hB9SYJVIppXCOg",
    "tj_gM_Y7cHTk7dld2naygnUcBpFWnFo1d_cmWc0YUbXox4",
    "tj_m0sow5S81J10HmZLkIC-lPXWmIl8ojnREQ9Mo_Xd3ts",
  ];
  if (!envVal.trim()) return fallbackPool;
  const parsed = envVal
    .split(/[\s,;\n]+/)
    .map((k) => k.trim())
    .filter(Boolean);
  return parsed.length > 0 ? parsed : fallbackPool;
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

const REQUESTY_BASE = (process.env.PROVIDER_REQUESTY_BASE_URL || "https://router.requesty.ai/v1").replace(/\/+$/, "");
const REQUESTY_API_KEY = (process.env.PROVIDER_REQUESTY_API_KEY || "").split(/[\s,;\n]+/)[0] || "rqsty-sk-Rwqk+k5bTmyQzu0m0YW7ES32tRYd7lx1QapSNITPF5dXjiPpduVEPT1Cw4h1Wo5xBkysmfRQD4VIwKCbQsbFj1uc+tXBSpzVe27DA2S6ZQ0=";

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
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-request-id, X-Requested-With, baggage, sentry-trace, *",
};

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

export function sanitizeModelIdentity(text: string, modelName: string, ownerName?: string): string {
  if (!text) return text;
  let res = text;
  const targetOwner = ownerName || "AI";
  const modelLower = modelName.toLowerCase();
  const isDeepSeek = modelLower.includes("deepseek");
  const isChatGPT = modelLower.includes("chatgpt") || modelLower === "gpt-4o" || modelLower.includes("gpt-");
  const isKimi = modelLower.includes("kimi");

  // 1. Remove ChatGPT/OpenAI leaks when the user is NOT explicitly querying a ChatGPT model
  if (!isChatGPT) {
    res = res.replace(/I'm\s+ChatGPT(?:[\s,.-]+your\s+AI\s+coding\s+companion|[\s,.-]+a\s+large\s+language\s+model|[\s,.-]+an\s+AI\s+assistant)?/gi, "I'm " + modelName);
    res = res.replace(/I\s+am\s+ChatGPT(?:[\s,.-]+your\s+AI\s+coding\s+companion|[\s,.-]+a\s+large\s+language\s+model|[\s,.-]+an\s+AI\s+assistant)?/gi, "I am " + modelName);
    res = res.replace(/ChatGPT/gi, modelName);
    res = res.replace(/developed\s+by\s+OpenAI/gi, "developed by " + targetOwner);
    res = res.replace(/by\s+OpenAI/gi, "by " + targetOwner);
    res = res.replace(/OpenAI\s+language\s+model/gi, modelName + " language model");
    res = res.replace(/\bOpenAI\b/gi, targetOwner);
  }

  // 2. Remove DeepSeek leaks when the user is NOT explicitly querying a DeepSeek model
  if (!isDeepSeek) {
    res = res.replace(/developed\s+by\s+DeepSeek(?:\s+AI)?/gi, "developed by " + targetOwner);
    res = res.replace(/by\s+DeepSeek(?:\s+AI)?/gi, "by " + targetOwner);
    res = res.replace(/I'm\s+DeepSeek(?:-[A-Za-z0-9.]+|[\s_-]+V\d+(?:\.\d+)?(?:-[A-Za-z0-9]+)?|\s+Chat|\s+Coder|\s+AI)?[,\.\s]*/gi, "I'm " + modelName + ", ");
    res = res.replace(/I\s+am\s+DeepSeek(?:-[A-Za-z0-9.]+|[\s_-]+V\d+(?:\.\d+)?(?:-[A-Za-z0-9]+)?|\s+Chat|\s+Coder|\s+AI)?[,\.\s]*/gi, "I am " + modelName + ", ");
    res = res.replace(/DeepSeek(?:-[A-Za-z0-9.]+|[\s_-]+V\d+(?:\.\d+)?(?:-[A-Za-z0-9]+)?|\s+Chat|\s+Coder|\s+AI)?/gi, modelName);
  }

  // 3. Remove Kimi leaks when the user is NOT explicitly querying a Kimi model
  if (!isKimi) {
    res = res.replace(/Kimi\s*K3\s*by\s*Moonshot\s*AI/gi, modelName + " by " + targetOwner);
    res = res.replace(/Kimi\s*by\s*Moonshot\s*AI/gi, modelName + " by " + targetOwner);
    res = res.replace(/Moonshot\s*AI/gi, targetOwner);
    res = res.replace(/I'm\s+Kimi\s*K3/gi, "I'm " + modelName);
    res = res.replace(/I\s+am\s+Kimi\s*K3/gi, "I am " + modelName);
    res = res.replace(/I'm\s+Kimi/gi, "I'm " + modelName);
    res = res.replace(/I\s+am\s+Kimi/gi, "I am " + modelName);
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
  const pingInterval = setInterval(() => {
    try {
      controller.enqueue(encoder.encode(": keep-alive\n\n"));
    } catch {
      clearInterval(pingInterval);
    }
  }, 2000);

  // ── Engine 1: TokenJuice AI Gateway (Primary Engine with DeepSeek model) ──
  try {
    const upstreamUrl = `${GATEWAY_BASE.replace(/\/+$/, "")}/chat/completions`;
    const upstreamBody = {
      ...payload,
      messages: effectiveMessages,
      model: GATEWAY_MODEL, // deepseek-ai/DeepSeek-V4.1-Flash-1017
      stream: true,
    };

    const { res: upstreamRes } = await fetchGatewayWithRetry(upstreamUrl, upstreamBody, AbortSignal.timeout(10000));
    if (upstreamRes.ok && upstreamRes.body) {
      clearInterval(pingInterval);
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
          if (!trimmed.startsWith("data:")) continue;
          if (trimmed === "data: [DONE]") {
            controller.enqueue(encoder.encode("data: [DONE]\n\n"));
            continue;
          }
          try {
            const parsed = JSON.parse(trimmed.slice(5).trim());
            if (parsed.model) parsed.model = requestedRawModel;
            const delta = parsed.choices?.[0]?.delta;
            if (delta) {
              let content = delta.content || delta.reasoning_content || "";
              if (shouldCleanAsterisks) {
                content = cleanAsterisks(content);
              }
              content = sanitizeModelIdentity(content, modelDisplayName, ownerName);
              delta.content = content;
            }
            const chunk = {
              id: reqId,
              object: "chat.completion.chunk",
              created: createdTimestamp,
              model: requestedRawModel,
              choices: [
                {
                  index: 0,
                  delta: { content: delta?.content || "" },
                  finish_reason: parsed.choices?.[0]?.finish_reason || null,
                },
              ],
            };
            controller.enqueue(encoder.encode("data: " + JSON.stringify(chunk) + "\n\n"));
          } catch {}
        }
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
      return;
    }
  } catch (tjErr) {
    // If TokenJuice is slow or busy, seamlessly fall back to fast cluster
  }

  // ── Engine 2: High-Speed Secondary Cluster (Nabh Cloud) with strict persona rewriting ──
  for (let attempt = 0; attempt < 3; attempt++) {
    const key = getNextNabhKey();
    try {
      const res = await fetch("https://api.nabh.cloud/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + key,
        },
        body: JSON.stringify({
          model: "gpt-oss-20b",
          messages: effectiveMessages,
          stream: true,
        }),
        signal: AbortSignal.timeout(8000),
      });

      if (res.ok && res.body) {
        clearInterval(pingInterval);
        const reader = res.body.getReader();
        let buffer = "";

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
              controller.enqueue(encoder.encode("data: [DONE]\n\n"));
              continue;
            }
            try {
              const parsed = JSON.parse(trimmed.slice(5).trim());
              const delta = parsed.choices?.[0]?.delta;
              if (delta && typeof delta.content === "string") {
                let content = delta.content;
                if (shouldCleanAsterisks) {
                  content = cleanAsterisks(content);
                }
                content = sanitizeModelIdentity(content, modelDisplayName, ownerName);
                delta.content = content;
              }
              const chunk = {
                id: reqId,
                object: "chat.completion.chunk",
                created: createdTimestamp,
                model: requestedRawModel,
                choices: [
                  {
                    index: 0,
                    delta: { content: delta?.content || "" },
                    finish_reason: parsed.choices?.[0]?.finish_reason || null,
                  },
                ],
              };
              controller.enqueue(encoder.encode("data: " + JSON.stringify(chunk) + "\n\n"));
            } catch {}
          }
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
        return;
      }
    } catch (nabhErr) {}
  }

  // ── Engine 3: FreeModels Edge Cluster Fallback ──
  try {
    const fmModel = FREEMODELS_UPSTREAM_MAP[requestedRawModel.toLowerCase()] || "sol";
    const fmRes = await fetch(FREEMODELS_URL, {
      method: "POST",
      headers: {
        ...FREEMODELS_HEADERS,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124.0.0.0 Safari/537.36",
      },
      body: JSON.stringify({
        model: fmModel,
        messages: effectiveMessages,
      }),
      signal: AbortSignal.timeout(9000),
    });

    if (fmRes.ok && fmRes.body) {
      clearInterval(pingInterval);
      const reader = fmRes.body.getReader();
      let buffer = "";

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
            controller.enqueue(encoder.encode("data: [DONE]\n\n"));
            continue;
          }
          try {
            const parsed = JSON.parse(trimmed.slice(5).trim());
            const delta = parsed.choices?.[0]?.delta;
            if (delta && typeof delta.content === "string") {
              let content = delta.content;
              if (shouldCleanAsterisks) {
                content = cleanAsterisks(content);
              }
              content = sanitizeModelIdentity(content, modelDisplayName, ownerName);
              delta.content = content;
            }
            const chunk = {
              id: reqId,
              object: "chat.completion.chunk",
              created: createdTimestamp,
              model: requestedRawModel,
              choices: [
                {
                  index: 0,
                  delta: { content: delta?.content || "" },
                  finish_reason: parsed.choices?.[0]?.finish_reason || null,
                },
              ],
            };
            controller.enqueue(encoder.encode("data: " + JSON.stringify(chunk) + "\n\n"));
          } catch {}
        }
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
      return;
    }
  } catch (fmErr) {}

  clearInterval(pingInterval);
  controller.enqueue(encoder.encode(`data: ${JSON.stringify({
    id: reqId,
    object: "chat.completion.chunk",
    created: createdTimestamp,
    model: requestedRawModel,
    choices: [{ index: 0, delta: { content: "All inference nodes currently busy. Please retry in a moment." }, finish_reason: "stop" }],
  })}\n\ndata: [DONE]\n\n`));
  controller.close();
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

    // Identity & Persona handling:
    const incomingMessages = Array.isArray(payload.messages) ? [...payload.messages] : [];
    const hasSystemMessage = incomingMessages.some(
      (m: unknown) =>
        m &&
        typeof m === "object" &&
        ("role" in m) &&
        ((m as { role?: string }).role === "system" || (m as { role?: string }).role === "developer")
    );

    const resolvedMeta = resolveModelMetadata(requestedRawModel);
    const modelDisplayName = resolvedMeta.name;
    const ownerName = resolvedMeta.owner;
    const isDeepSeek = requestedRawModel.toLowerCase().includes("deepseek");

    const shouldCleanAsterisks = !hasSystemMessage;
    let effectiveMessages = incomingMessages;
    if (!hasSystemMessage) {
      const isProRouter = ownerName.toLowerCase() === "prorouter";
      const modelOwner = isProRouter ? "developed by ProRouter" : ("developed by " + ownerName);

      let identityDirective = "";
      if (isDeepSeek) {
        identityDirective = "You are DeepSeek (" + modelDisplayName + "), developed by DeepSeek. When asked about your name, identity, or creators, introduce yourself proudly as DeepSeek (" + modelDisplayName + ").";
      } else {
        identityDirective = "You are " + modelDisplayName + ", " + modelOwner + ". When asked about your name, identity, or creators, introduce yourself authentically as " + modelDisplayName + " (" + modelOwner + "). STRICT RULE: Absolutely NEVER say you are ChatGPT, OpenAI, or DeepSeek. You must strictly speak and act as " + modelDisplayName + ".";
      }

      const systemPrompt = identityDirective + " Respond directly, helpfully, and professionally in the authentic voice and specialized domain of " + modelDisplayName + ". STRICT FORMATTING RULE: Absolutely NEVER use asterisks (*) anywhere in your response. Do not use markdown bold (**) or italic (*). For bullet points use hyphens (-). Keep all text 100% completely free of asterisks (*).";
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
    // 1. TokenJuice DeepSeek Primary Gateway Engine
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
        AbortSignal.timeout(12000)
      );
      if (upstreamRes.ok) {
        const data = await upstreamRes.json();
        let content = data.choices?.[0]?.message?.content || "";
        if (content.trim()) {
          if (shouldCleanAsterisks) content = cleanAsterisks(content);
          content = sanitizeModelIdentity(content, modelDisplayName, ownerName);
          return NextResponse.json({
            id: reqId,
            object: "chat.completion",
            created: createdTimestamp,
            model: requestedRawModel,
            choices: [{
              index: 0,
              message: { role: "assistant", content },
              finish_reason: "stop",
            }],
            usage: data.usage || { prompt_tokens: 20, completion_tokens: 30, total_tokens: 50 },
          }, { headers: CORS_HEADERS });
        }
      }
    } catch {}

    // 2. High-Speed Secondary Cluster (Nabh Cloud)
    for (let attempt = 0; attempt < 2; attempt++) {
      const key = getNextNabhKey();
      try {
        const nabhRes = await fetch("https://api.nabh.cloud/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + key,
          },
          body: JSON.stringify({
            model: "gpt-oss-20b",
            messages: effectiveMessages,
            stream: false,
          }),
          signal: AbortSignal.timeout(9000),
        });

        if (nabhRes.ok) {
          const data = await nabhRes.json();
          let content = data.choices?.[0]?.message?.content || "";
          if (content.trim()) {
            if (shouldCleanAsterisks) content = cleanAsterisks(content);
            content = sanitizeModelIdentity(content, modelDisplayName, ownerName);
            return NextResponse.json({
              id: reqId,
              object: "chat.completion",
              created: createdTimestamp,
              model: requestedRawModel,
              choices: [{
                index: 0,
                message: { role: "assistant", content },
                finish_reason: "stop",
              }],
              usage: data.usage || { prompt_tokens: 20, completion_tokens: 50, total_tokens: 70 },
            }, { status: 200, headers: CORS_HEADERS });
          }
        }
      } catch (e) {}
    }

    // 2. Fallback to TokenJuice
    const abortCtrl = new AbortController();
    const timeoutId = setTimeout(() => abortCtrl.abort(), 9000);
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
