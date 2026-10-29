const API_BASE = process.env.API_BASE_URL || "http://127.0.0.1:4000";

/**
 * Server-side fetch for public pages. Returns null instead of throwing so a
 * cold or unreachable API degrades to fallback data rather than a 500 page.
 */
export async function fetchJson<T>(path: string): Promise<T | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`${API_BASE}${path}`, {
      cache: "no-store",
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export interface ModelSummary {
  id: string;
  slug: string;
  name: string;
  description: string;
  providerName: string;
  providerSlug: string;
  type: string;
  status: string;
  isFree: boolean;
  pricing: { inputPerMillion: number; outputPerMillion: number; cachedInputPerMillion?: number; currency: string };
  capabilities: {
    modalities: string[];
    streaming: boolean;
    toolCalls: boolean;
    structuredOutputs: boolean;
    reasoning: boolean;
    vision: boolean;
    imageGeneration: boolean;
    audio: boolean;
    jsonMode: boolean;
  };
  contextWindow: number;
  maxOutputTokens: number;
  rank: number;
  popularity: number;
  rating: number;
  latencyMs: number | null;
  available: boolean;
}

export interface PlanSummary {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  pricePaise: number;
  priceFormatted: string;
  currency: string;
  period: string;
  freeRpm: number;
  freeRph: number;
  freeRpd: number;
  concurrency: number;
  queuePriority: number;
  features: string[];
  sortOrder: number;
}

export interface ProviderSummary {
  id: string;
  slug: string;
  name: string;
  region: string;
  status: string;
  modelCount: number;
  uptimePercent: number | null;
  avgLatencyMs: number | null;
  priority: number;
  supportedCapabilities: string[];
  retentionPolicy: string;
  description: string;
}

export interface StatusResponse {
  services: Array<{ name: string; operational: boolean; status: string }>;
  providers: Array<{ slug: string; name: string; status: string; lastChecked: string | null; latencyMs: number | null; message: string | null }>;
  queue: Array<{ modelKey: string; running: number; waiting: number }>;
  incidents: Array<{ id: string; service: string; severity: string; status: string; title: string; body: string | null; startedAt: string; resolvedAt: string | null }>;
}

export function formatPerMillion(paise: number): string {
  return `₹${(paise / 100).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function compactNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1)}K`;
  return String(n);
}

// ── Default Built-in Catalog (Ensures catalog is never empty) ────────────────

export const DEFAULT_PROVIDERS: ProviderSummary[] = [
  { id: "p1", slug: "moonshot", name: "Moonshot AI", region: "global", status: "active", modelCount: 2, uptimePercent: 99.9, avgLatencyMs: 1700, priority: 1, supportedCapabilities: ["chat", "reasoning"], retentionPolicy: "zero_retention", description: "Creators of Kimi frontier reasoning models." },
  { id: "p2", slug: "anthropic", name: "Anthropic", region: "us", status: "active", modelCount: 3, uptimePercent: 99.9, avgLatencyMs: 1800, priority: 2, supportedCapabilities: ["chat", "vision", "reasoning"], retentionPolicy: "zero_retention", description: "Creators of Claude Sonnet and Claude Opus." },
  { id: "p3", slug: "google", name: "Google", region: "global", status: "active", modelCount: 1, uptimePercent: 99.9, avgLatencyMs: 1650, priority: 3, supportedCapabilities: ["chat", "vision", "reasoning"], retentionPolicy: "zero_retention", description: "Creators of Gemini multimodal models." },
  { id: "p4", slug: "xai", name: "xAI", region: "us", status: "active", modelCount: 1, uptimePercent: 99.8, avgLatencyMs: 1750, priority: 4, supportedCapabilities: ["chat", "reasoning"], retentionPolicy: "zero_retention", description: "Creators of Grok conversational models." },
  { id: "p5", slug: "deepseek", name: "DeepSeek", region: "global", status: "active", modelCount: 3, uptimePercent: 99.9, avgLatencyMs: 1600, priority: 5, supportedCapabilities: ["chat", "reasoning", "coding"], retentionPolicy: "zero_retention", description: "State-of-the-art open reasoning & coding models." },
  { id: "p6", slug: "alibaba", name: "Alibaba Cloud", region: "global", status: "active", modelCount: 2, uptimePercent: 99.9, avgLatencyMs: 1720, priority: 6, supportedCapabilities: ["chat", "coding", "reasoning"], retentionPolicy: "zero_retention", description: "Creators of Qwen multilingual & coding models." },
  { id: "p7", slug: "zhipu", name: "Zhipu AI", region: "global", status: "active", modelCount: 2, uptimePercent: 99.8, avgLatencyMs: 1800, priority: 7, supportedCapabilities: ["chat", "reasoning"], retentionPolicy: "zero_retention", description: "Flagship GLM reasoning and tool execution models." },
  { id: "p8", slug: "openai", name: "OpenAI", region: "us", status: "active", modelCount: 3, uptimePercent: 99.9, avgLatencyMs: 1850, priority: 8, supportedCapabilities: ["chat", "vision", "reasoning"], retentionPolicy: "zero_retention", description: "Frontier GPT model family." },
  { id: "p9", slug: "mistral", name: "Mistral AI", region: "eu", status: "active", modelCount: 2, uptimePercent: 99.9, avgLatencyMs: 1680, priority: 9, supportedCapabilities: ["chat", "coding"], retentionPolicy: "zero_retention", description: "Creators of Mistral Large and Devstral." },
  { id: "p10", slug: "xiaomi", name: "Xiaomi AI", region: "global", status: "active", modelCount: 2, uptimePercent: 99.8, avgLatencyMs: 1750, priority: 10, supportedCapabilities: ["chat", "vision"], retentionPolicy: "zero_retention", description: "MiMo multimodal reasoning series." },
];

export const DEFAULT_MODELS: ModelSummary[] = [
  {
    id: "m-kimi-k3",
    slug: "kimi-k3",
    name: "Kimi K3",
    description: "Moonshot Kimi K3 — ultra long-context frontier model with high-speed reasoning and deep comprehension.",
    providerName: "Moonshot AI",
    providerSlug: "moonshot",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 64000,
    rank: 1,
    popularity: 9950,
    rating: 99,
    latencyMs: 1720,
    available: true,
  },
  {
    id: "m-claude-sonnet",
    slug: "claude-sonnet",
    name: "Claude Sonnet",
    description: "Anthropic Claude Sonnet — balanced intelligence, high coding precision, and nuanced creative writing.",
    providerName: "Anthropic",
    providerSlug: "anthropic",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text", "image"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 64000,
    rank: 2,
    popularity: 9940,
    rating: 98,
    latencyMs: 1800,
    available: true,
  },
  {
    id: "m-gemini-pro",
    slug: "gemini-pro",
    name: "Gemini Pro",
    description: "Google Gemini Pro — powerful multimodal model with vast context window and world knowledge.",
    providerName: "Google",
    providerSlug: "google",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text", "image"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 1000000,
    maxOutputTokens: 64000,
    rank: 3,
    popularity: 9920,
    rating: 98,
    latencyMs: 1650,
    available: true,
  },
  {
    id: "m-grok",
    slug: "grok",
    name: "Grok",
    description: "xAI Grok — direct, truthful AI with real-time insight and witty demeanor.",
    providerName: "xAI",
    providerSlug: "xai",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 131072,
    maxOutputTokens: 64000,
    rank: 4,
    popularity: 9890,
    rating: 97,
    latencyMs: 1750,
    available: true,
  },
  {
    id: "m-qwen3.8-27b",
    slug: "qwen3.8-27b",
    name: "Qwen3.8-27B",
    description: "Alibaba Qwen3.8 27B — high-performance open-weight model with strong multilingual and reasoning abilities.",
    providerName: "Alibaba Cloud",
    providerSlug: "alibaba",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 131072,
    maxOutputTokens: 64000,
    rank: 5,
    popularity: 9860,
    rating: 96,
    latencyMs: 1700,
    available: true,
  },
  {
    id: "m-glm-5.3",
    slug: "glm-5.3",
    name: "GLM-5.3",
    description: "Zhipu GLM-5.3 — flagship bilingual reasoning, analytical thinking, and tool execution.",
    providerName: "Zhipu AI",
    providerSlug: "zhipu",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 128000,
    rank: 6,
    popularity: 9820,
    rating: 96,
    latencyMs: 1780,
    available: true,
  },
  {
    id: "m-deepseek-v4.1-flash-1017",
    slug: "deepseek-v4.1-flash-1017",
    name: "DeepSeek-V4.1-Flash-1017",
    description: "DeepSeek V4.1 Flash — state-of-the-art fast reasoning, coding, and multilingual intelligence.",
    providerName: "DeepSeek",
    providerSlug: "deepseek",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text", "image"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 262144,
    maxOutputTokens: 128000,
    rank: 7,
    popularity: 9980,
    rating: 99,
    latencyMs: 1600,
    available: true,
  },
  {
    id: "m-claude-opus",
    slug: "claude-opus",
    name: "Claude Opus",
    description: "Anthropic Claude Opus — deep analysis, nuanced reasoning, and complex task decomposition.",
    providerName: "Anthropic",
    providerSlug: "anthropic",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text", "image"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 64000,
    rank: 8,
    popularity: 9910,
    rating: 98,
    latencyMs: 1850,
    available: true,
  },
  {
    id: "m-gpt-6.1-sol",
    slug: "gpt-6.1-sol",
    name: "GPT-6.1 Sol",
    description: "OpenAI GPT-6.1 Sol — frontier cloud model optimized for high-speed reasoning and synthesis.",
    providerName: "OpenAI",
    providerSlug: "openai",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text", "image"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 256000,
    maxOutputTokens: 64000,
    rank: 9,
    popularity: 9970,
    rating: 99,
    latencyMs: 1800,
    available: true,
  },
  {
    id: "m-gpt-6.1-terra",
    slug: "gpt-6.1-terra",
    name: "GPT-6.1 Terra",
    description: "OpenAI GPT-6.1 Terra — flagship multimodal intelligence with deep scientific knowledge.",
    providerName: "OpenAI",
    providerSlug: "openai",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text", "image"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 256000,
    maxOutputTokens: 64000,
    rank: 10,
    popularity: 9960,
    rating: 99,
    latencyMs: 1820,
    available: true,
  },
  {
    id: "m-claude-opus-5",
    slug: "claude-opus-5",
    name: "Claude Opus 5",
    description: "Anthropic Claude Opus 5 — next-generation frontier intelligence for research and coding.",
    providerName: "Anthropic",
    providerSlug: "anthropic",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text", "image"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 250000,
    maxOutputTokens: 64000,
    rank: 11,
    popularity: 9990,
    rating: 100,
    latencyMs: 1900,
    available: true,
  },
  {
    id: "m-mimo-v2.6-pro",
    slug: "mimo-v2.6-pro",
    name: "MiMo-V2.6-Pro",
    description: "Xiaomi MiMo V2.6 Pro — flagship multimodal reasoning model for advanced synthesis and coding.",
    providerName: "Xiaomi AI",
    providerSlug: "xiaomi",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text", "image"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 1048576,
    maxOutputTokens: 131072,
    rank: 12,
    popularity: 9750,
    rating: 95,
    latencyMs: 1740,
    available: true,
  },
  {
    id: "m-minimax-m3.1-flash",
    slug: "minimax-m3.1-flash",
    name: "MiniMax M3.1 Flash",
    description: "MiniMax M3.1 Flash — fast multimodal model with reliable tool calling and low latency.",
    providerName: "MiniMax",
    providerSlug: "minimax",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 1000000,
    maxOutputTokens: 131072,
    rank: 13,
    popularity: 9700,
    rating: 94,
    latencyMs: 1690,
    available: true,
  },
  {
    id: "m-qwen3-coder-next",
    slug: "qwen3-coder-next",
    name: "Qwen3-Coder-Next",
    description: "Alibaba Qwen3 Coder Next — specialized coding model for repository synthesis and multi-file debugging.",
    providerName: "Alibaba Cloud",
    providerSlug: "alibaba",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 131072,
    maxOutputTokens: 64000,
    rank: 14,
    popularity: 9780,
    rating: 96,
    latencyMs: 1710,
    available: true,
  },
  {
    id: "m-deepseek-v4-pro-0813",
    slug: "deepseek-v4-pro-0813",
    name: "DeepSeek-V4-Pro-0813",
    description: "DeepSeek V4 Pro — high-throughput frontier reasoning and deep architectural coding.",
    providerName: "DeepSeek",
    providerSlug: "deepseek",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 262144,
    maxOutputTokens: 128000,
    rank: 15,
    popularity: 9720,
    rating: 95,
    latencyMs: 1680,
    available: true,
  },
  {
    id: "m-kimi-k2.7-code",
    slug: "kimi-k2.7-code",
    name: "Kimi K2.7 Code",
    description: "Moonshot Kimi K2.7 Code — specialized code intelligence and agentic workflow automation.",
    providerName: "Moonshot AI",
    providerSlug: "moonshot",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 64000,
    rank: 16,
    popularity: 9680,
    rating: 94,
    latencyMs: 1730,
    available: true,
  },
  {
    id: "m-devstral-24b",
    slug: "devstral-24b",
    name: "Devstral 24B",
    description: "Mistral Devstral 24B — developer-tuned open weights optimized for software engineering workflows.",
    providerName: "Mistral AI",
    providerSlug: "mistral",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 64000,
    rank: 17,
    popularity: 9650,
    rating: 93,
    latencyMs: 1670,
    available: true,
  },
  {
    id: "m-mistral-large",
    slug: "mistral-large",
    name: "Mistral Large",
    description: "Mistral Large — flagship model for complex multilingual reasoning and precise instruction following.",
    providerName: "Mistral AI",
    providerSlug: "mistral",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 64000,
    rank: 18,
    popularity: 9810,
    rating: 96,
    latencyMs: 1700,
    available: true,
  },
  {
    id: "m-glm-5.3-flash",
    slug: "glm-5.3-flash",
    name: "GLM-5.3-Flash",
    description: "Zhipu GLM 5.3 Flash — fast multilingual reasoning with high-speed tool execution.",
    providerName: "Zhipu AI",
    providerSlug: "zhipu",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 128000,
    rank: 19,
    popularity: 9790,
    rating: 95,
    latencyMs: 1640,
    available: true,
  },
  {
    id: "m-mimo-v2.6-flash",
    slug: "mimo-v2.6-flash",
    name: "MiMo-V2.6-Flash",
    description: "Xiaomi MiMo Flash — quick responses with solid reasoning.",
    providerName: "Xiaomi AI",
    providerSlug: "xiaomi",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 1048576,
    maxOutputTokens: 131072,
    rank: 20,
    popularity: 9760,
    rating: 94,
    latencyMs: 1620,
    available: true,
  },
  {
    id: "m-gpt-6-luna",
    slug: "gpt-6-luna",
    name: "GPT-6 Luna",
    description: "OpenAI GPT-6 Luna — low-latency next-gen assistant for rapid task execution.",
    providerName: "OpenAI",
    providerSlug: "openai",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 256000,
    maxOutputTokens: 64000,
    rank: 21,
    popularity: 9940,
    rating: 98,
    latencyMs: 1690,
    available: true,
  },
];

export function getFilteredDefaultModels(filters: {
  q?: string;
  provider?: string;
  free?: string;
  category?: string;
  sort?: string;
}): ModelSummary[] {
  let list = [...DEFAULT_MODELS];

  if (filters.q) {
    const qLower = filters.q.toLowerCase().trim();
    list = list.filter(
      (m) =>
        m.name.toLowerCase().includes(qLower) ||
        m.slug.toLowerCase().includes(qLower) ||
        m.description.toLowerCase().includes(qLower) ||
        m.providerName.toLowerCase().includes(qLower),
    );
  }

  if (filters.provider) {
    const pLower = filters.provider.toLowerCase().trim();
    list = list.filter(
      (m) => m.providerSlug.toLowerCase() === pLower || m.providerName.toLowerCase().includes(pLower),
    );
  }

  if (filters.free === "true") {
    list = list.filter((m) => m.isFree);
  }

  if (filters.category) {
    const cat = filters.category.toLowerCase();
    if (cat === "coding") {
      list = list.filter(
        (m) =>
          m.slug.includes("code") ||
          m.slug.includes("devstral") ||
          m.description.toLowerCase().includes("code") ||
          m.description.toLowerCase().includes("coding"),
      );
    } else if (cat === "reasoning") {
      list = list.filter((m) => m.capabilities.reasoning);
    } else if (cat === "vision") {
      list = list.filter((m) => m.capabilities.vision);
    } else if (cat === "tools") {
      list = list.filter((m) => m.capabilities.toolCalls);
    }
  }

  const sort = filters.sort || "popularity";
  if (sort === "popularity") {
    list.sort((a, b) => b.popularity - a.popularity);
  } else if (sort === "rank") {
    list.sort((a, b) => a.rank - b.rank);
  } else if (sort === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  } else if (sort === "price_asc") {
    list.sort((a, b) => a.pricing.inputPerMillion - b.pricing.inputPerMillion);
  } else if (sort === "price_desc") {
    list.sort((a, b) => b.pricing.inputPerMillion - a.pricing.inputPerMillion);
  }

  return list;
}

export function getDefaultModelDetail(slug: string) {
  const model = DEFAULT_MODELS.find(
    (m) => m.slug.toLowerCase() === slug.toLowerCase() || m.name.toLowerCase() === slug.toLowerCase(),
  );
  if (!model) return null;

  return {
    model,
    limits: { perMinute: 30, perHour: 300, perDay: 3000, concurrency: 5, queuePriority: 10 },
    routes: [
      {
        providerSlug: model.providerSlug,
        providerName: model.providerName,
        providerModelId: model.slug,
        priority: 10,
        status: "active",
        healthy: true,
      },
    ],
  };
}
