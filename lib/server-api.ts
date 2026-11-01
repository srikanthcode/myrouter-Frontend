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

// ── Default Built-in Plans ───────────────────────────────────────────────────

export interface PackageSummary {
  id: string;
  slug: string;
  name: string;
  pricePaise: number;
  priceFormatted: string;
  bonusPaise: number;
  totalPaise: number;
  totalFormatted: string;
  currency: string;
}

export const DEFAULT_PACKAGES: PackageSummary[] = [
  {
    id: "pkg-starter-100",
    slug: "starter-100",
    name: "Starter Pack",
    pricePaise: 10000,
    priceFormatted: "₹100",
    bonusPaise: 0,
    totalPaise: 10000,
    totalFormatted: "₹100",
    currency: "INR",
  },
  {
    id: "pkg-pro-500",
    slug: "pro-500",
    name: "Pro Pack",
    pricePaise: 50000,
    priceFormatted: "₹500",
    bonusPaise: 5000,
    totalPaise: 55000,
    totalFormatted: "₹550",
    currency: "INR",
  },
  {
    id: "pkg-scale-1000",
    slug: "scale-1000",
    name: "Scale Pack",
    pricePaise: 100000,
    priceFormatted: "₹1,000",
    bonusPaise: 20000,
    totalPaise: 120000,
    totalFormatted: "₹1,200",
    currency: "INR",
  },
  {
    id: "pkg-power-2500",
    slug: "power-2500",
    name: "Power Pack",
    pricePaise: 250000,
    priceFormatted: "₹2,500",
    bonusPaise: 65000,
    totalPaise: 315000,
    totalFormatted: "₹3,150",
    currency: "INR",
  },
];

export const DEFAULT_PLANS: PlanSummary[] = [
  {
    id: "plan-free",
    slug: "free",
    name: "Free",
    tagline: "Explore frontier AI models with zero upfront commitment.",
    pricePaise: 0,
    priceFormatted: "₹0",
    currency: "INR",
    period: "forever",
    freeRpm: 10,
    freeRph: 100,
    freeRpd: 1000,
    concurrency: 2,
    queuePriority: 10,
    features: [
      "Access to all 21+ models",
      "Free daily quota on all models",
      "Standard queue priority",
      "Streaming SSE responses",
      "OpenAI SDK compatible endpoint",
    ],
    sortOrder: 10,
  },
  {
    id: "plan-builder",
    slug: "builder",
    name: "Builder",
    tagline: "For developers and early-stage products building with AI.",
    pricePaise: 99900,
    priceFormatted: "₹999",
    currency: "INR",
    period: "monthly",
    freeRpm: 30,
    freeRph: 500,
    freeRpd: 5000,
    concurrency: 5,
    queuePriority: 20,
    features: [
      "Higher rate limits (30 req/min)",
      "High-priority queue routing",
      "Pay-as-you-go balance rollover",
      "Multiple API keys",
      "Detailed latency & usage breakdown",
    ],
    sortOrder: 20,
  },
  {
    id: "plan-pro",
    slug: "pro",
    name: "Pro",
    tagline: "Maximum throughput, dedicated priority queue, and high concurrency.",
    pricePaise: 249900,
    priceFormatted: "₹2,499",
    currency: "INR",
    period: "monthly",
    freeRpm: 60,
    freeRph: 1500,
    freeRpd: 15000,
    concurrency: 15,
    queuePriority: 30,
    features: [
      "Ultra-high rate limits (60 req/min)",
      "VIP priority queue routing",
      "Unlimited API keys",
      "Reasoning & thought token support",
      "Priority customer support",
    ],
    sortOrder: 30,
  },
];

// ── Default Built-in Providers ───────────────────────────────────────────────

export const DEFAULT_PROVIDERS: ProviderSummary[] = [
  { id: "p-prorouter", slug: "prorouter", name: "Pro Router", region: "global", status: "active", modelCount: 6, uptimePercent: 99.99, avgLatencyMs: 350, priority: 1, supportedCapabilities: ["chat", "reasoning", "coding"], retentionPolicy: "zero_retention", description: "Official Pro Router optimized low-latency text models." },
  { id: "p-moonshot", slug: "moonshot", name: "Moonshot", region: "global", status: "active", modelCount: 2, uptimePercent: 99.95, avgLatencyMs: 420, priority: 2, supportedCapabilities: ["chat", "coding", "reasoning", "tool_calls"], retentionPolicy: "zero_retention", description: "Moonshot Kimi agentic coding and ultra-long context reasoning models." },
  { id: "p-anthropic", slug: "anthropic", name: "Anthropic", region: "us", status: "active", modelCount: 4, uptimePercent: 99.98, avgLatencyMs: 510, priority: 3, supportedCapabilities: ["chat", "reasoning", "vision", "coding", "tool_calls"], retentionPolicy: "zero_retention", description: "Anthropic Claude frontier software engineering and synthesis models." },
  { id: "p-deepseek", slug: "deepseek", name: "DeepSeek", region: "global", status: "active", modelCount: 6, uptimePercent: 99.96, avgLatencyMs: 290, priority: 4, supportedCapabilities: ["chat", "reasoning", "coding", "vision"], retentionPolicy: "zero_retention", description: "DeepSeek high-throughput reasoning and code generation models." },
  { id: "p-alibaba", slug: "alibaba", name: "Alibaba", region: "global", status: "active", modelCount: 2, uptimePercent: 99.92, avgLatencyMs: 440, priority: 5, supportedCapabilities: ["chat", "coding", "multilingual", "tool_calls"], retentionPolicy: "zero_retention", description: "Alibaba Qwen frontier open-weight reasoning and code models." },
  { id: "p-openai", slug: "openai", name: "OpenAI", region: "us", status: "active", modelCount: 6, uptimePercent: 99.95, avgLatencyMs: 550, priority: 6, supportedCapabilities: ["chat", "reasoning", "vision", "tool_calls"], retentionPolicy: "zero_retention", description: "OpenAI GPT-4o, o1, and o3 frontier reasoning models." },
  { id: "p-google", slug: "google", name: "Google", region: "us", status: "active", modelCount: 1, uptimePercent: 99.97, avgLatencyMs: 480, priority: 7, supportedCapabilities: ["chat", "vision", "multimodal", "tool_calls"], retentionPolicy: "zero_retention", description: "Google Gemini multimodal reasoning models." },
  { id: "p-mistral", slug: "mistral", name: "Mistral", region: "eu", status: "active", modelCount: 2, uptimePercent: 99.94, avgLatencyMs: 410, priority: 8, supportedCapabilities: ["chat", "coding", "reasoning"], retentionPolicy: "zero_retention", description: "Mistral European frontier open-weight models." },
  { id: "p-xai", slug: "xai", name: "xAI", region: "us", status: "active", modelCount: 1, uptimePercent: 99.91, avgLatencyMs: 530, priority: 9, supportedCapabilities: ["chat", "reasoning", "realtime"], retentionPolicy: "zero_retention", description: "xAI Grok conversational reasoning intelligence." },
  { id: "p-nvidia", slug: "nvidia", name: "NVIDIA", region: "us", status: "active", modelCount: 2, uptimePercent: 99.93, avgLatencyMs: 380, priority: 10, supportedCapabilities: ["chat", "vision", "reasoning"], retentionPolicy: "zero_retention", description: "NVIDIA Nemotron high-capacity and ultra-fast inference models." },
  { id: "p-zhipu", slug: "zhipu", name: "Zhipu AI", region: "global", status: "active", modelCount: 2, uptimePercent: 99.90, avgLatencyMs: 460, priority: 11, supportedCapabilities: ["chat", "reasoning", "coding"], retentionPolicy: "zero_retention", description: "GLM bilingual reasoning and agentic models." },
  { id: "p-mimo", slug: "mimo", name: "MiMo", region: "global", status: "active", modelCount: 2, uptimePercent: 99.90, avgLatencyMs: 390, priority: 12, supportedCapabilities: ["chat", "reasoning"], retentionPolicy: "zero_retention", description: "MiMo high-density reasoning models." },
  { id: "p-minimax", slug: "minimax", name: "MiniMax", region: "global", status: "active", modelCount: 1, uptimePercent: 99.90, avgLatencyMs: 370, priority: 13, supportedCapabilities: ["chat", "fast"], retentionPolicy: "zero_retention", description: "MiniMax low-latency conversational models." },
  { id: "p-meituan", slug: "meituan", name: "Meituan", region: "global", status: "active", modelCount: 1, uptimePercent: 99.89, avgLatencyMs: 580, priority: 14, supportedCapabilities: ["chat", "long_context"], retentionPolicy: "zero_retention", description: "LongCat ultra-long context reasoning models." },
  { id: "p-jev", slug: "jev", name: "Jev", region: "global", status: "active", modelCount: 1, uptimePercent: 99.90, avgLatencyMs: 430, priority: 15, supportedCapabilities: ["chat", "synthesis"], retentionPolicy: "zero_retention", description: "Jev multi-step reasoning variant." },
];

export const DEFAULT_MODELS: ModelSummary[] = [
  // ── Pro Router Tiered ──
  {
    id: "m-pr-zenith",
    slug: "pr-zenith",
    name: "Pro Router Zenith",
    description: "Flagship tier for complex analysis, architecture synthesis, and deep reasoning workflows.",
    providerName: "ProRouter",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 83, outputPerMillion: 333, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 64000,
    rank: 1,
    popularity: 9990,
    rating: 100,
    latencyMs: 380,
    available: true,
  },
  {
    id: "m-pr-aura",
    slug: "pr-aura",
    name: "Pro Router Aura",
    description: "Advanced reasoning, long-form content, complex instructions, and coding assistance.",
    providerName: "ProRouter",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 63, outputPerMillion: 250, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 2,
    popularity: 9970,
    rating: 99,
    latencyMs: 320,
    available: true,
  },
  {
    id: "m-pr-nova",
    slug: "pr-nova",
    name: "Pro Router Nova",
    description: "General-purpose premium model for detailed answers, writing, reasoning, and development.",
    providerName: "ProRouter",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 16384,
    rank: 3,
    popularity: 9950,
    rating: 98,
    latencyMs: 290,
    available: true,
  },
  {
    id: "m-pr-swift",
    slug: "pr-swift",
    name: "Pro Router Swift",
    description: "Ultra-fast low latency model designed for customer support, quick chat, and high-volume tasks.",
    providerName: "ProRouter",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 25, outputPerMillion: 100, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: false, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 8192,
    rank: 4,
    popularity: 9930,
    rating: 97,
    latencyMs: 180,
    available: true,
  },
  {
    id: "m-pr-echo",
    slug: "pr-echo",
    name: "Pro Router Echo",
    description: "Affordable model for everyday questions, short answers, summaries, and simple chat.",
    providerName: "ProRouter",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 17, outputPerMillion: 67, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: false, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 8192,
    rank: 5,
    popularity: 9900,
    rating: 96,
    latencyMs: 210,
    available: true,
  },
  {
    id: "m-beam",
    slug: "beam",
    name: "Beam",
    description: "ProRouter low-latency conversational routing pipeline.",
    providerName: "ProRouter",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 25, outputPerMillion: 100, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 32768,
    maxOutputTokens: 8192,
    rank: 6,
    popularity: 9880,
    rating: 96,
    latencyMs: 190,
    available: true,
  },

  // ── Agentic Coding & Reasoning ──
  {
    id: "m-kimi-k2.7-code",
    slug: "kimi-k2.7-code",
    name: "Kimi K2.7 Code",
    description: "Specialized agentic coding model for repository refactoring, multi-file edits, and debugging.",
    providerName: "Moonshot",
    providerSlug: "moonshot",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 7,
    popularity: 9960,
    rating: 99,
    latencyMs: 280,
    available: true,
  },
  {
    id: "m-qwen3-coder-next",
    slug: "qwen3-coder-next",
    name: "Qwen3-Coder-Next",
    description: "Next-gen agentic code synthesis, syntax verification, and full-stack architecture.",
    providerName: "Alibaba",
    providerSlug: "alibaba",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 8,
    popularity: 9940,
    rating: 98,
    latencyMs: 310,
    available: true,
  },
  {
    id: "m-devstral-24b",
    slug: "devstral-24b",
    name: "Devstral 24B",
    description: "Compact 24B software engineering model tuned for low latency code generation.",
    providerName: "Mistral",
    providerSlug: "mistral",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 33, outputPerMillion: 133, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 16384,
    rank: 9,
    popularity: 9910,
    rating: 97,
    latencyMs: 260,
    available: true,
  },

  // ── Frontier Flagships ──
  {
    id: "m-claude-sonnet",
    slug: "claude-sonnet",
    name: "Claude Sonnet",
    description: "Anthropic Claude Sonnet frontier software engineering and hybrid reasoning.",
    providerName: "Anthropic",
    providerSlug: "anthropic",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 63, outputPerMillion: 250, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 64000,
    rank: 10,
    popularity: 9995,
    rating: 100,
    latencyMs: 350,
    available: true,
  },
  {
    id: "m-claude-opus",
    slug: "claude-opus",
    name: "Claude Opus",
    description: "Anthropic Claude Opus flagship reasoning and synthesis architecture.",
    providerName: "Anthropic",
    providerSlug: "anthropic",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 83, outputPerMillion: 333, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 64000,
    rank: 11,
    popularity: 9980,
    rating: 100,
    latencyMs: 420,
    available: true,
  },
  {
    id: "m-claude-opus-5",
    slug: "claude-opus-5",
    name: "Claude Opus 5",
    description: "Next-generation Claude Opus frontier reasoning and autonomous analysis.",
    providerName: "Anthropic",
    providerSlug: "anthropic",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 83, outputPerMillion: 333, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 64000,
    rank: 12,
    popularity: 9975,
    rating: 100,
    latencyMs: 440,
    available: true,
  },
  {
    id: "m-deepseek-v4.1-flash",
    slug: "deepseek-v4.1-flash",
    name: "DeepSeek V4.1 Flash",
    description: "DeepSeek V4.1 Flash — ultra high-speed reasoning, coding, and multilingual intelligence.",
    providerName: "DeepSeek",
    providerSlug: "deepseek",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 262144,
    maxOutputTokens: 128000,
    rank: 13,
    popularity: 9985,
    rating: 99,
    latencyMs: 240,
    available: true,
  },
  {
    id: "m-deepseek-v4.1-flash-1017",
    slug: "deepseek-v4.1-flash-1017",
    name: "DeepSeek-V4.1-Flash-1017",
    description: "DeepSeek V4.1 Flash checkpoint 1017 — state of the art fast inference engine.",
    providerName: "DeepSeek",
    providerSlug: "deepseek",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 262144,
    maxOutputTokens: 128000,
    rank: 14,
    popularity: 9970,
    rating: 99,
    latencyMs: 230,
    available: true,
  },
  {
    id: "m-gemini-pro",
    slug: "gemini-pro",
    name: "Gemini Pro",
    description: "Google Gemini Pro frontier multimodal alias for high-volume analysis.",
    providerName: "Google",
    providerSlug: "google",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 15,
    popularity: 9935,
    rating: 98,
    latencyMs: 340,
    available: true,
  },
  {
    id: "m-grok",
    slug: "grok",
    name: "Grok",
    description: "xAI Grok conversational and reasoning model alias.",
    providerName: "xAI",
    providerSlug: "xai",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 63, outputPerMillion: 250, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 16,
    popularity: 9920,
    rating: 97,
    latencyMs: 360,
    available: true,
  },
  {
    id: "m-mistral-large",
    slug: "mistral-large",
    name: "Mistral Large",
    description: "Mistral Large frontier multilingual reasoning alias.",
    providerName: "Mistral",
    providerSlug: "mistral",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 63, outputPerMillion: 250, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 17,
    popularity: 9915,
    rating: 97,
    latencyMs: 330,
    available: true,
  },
  {
    id: "m-gpt-6.1-sol",
    slug: "gpt-6.1-sol",
    name: "GPT-6.1 Sol",
    description: "High-throughput general conversational and code reasoning model.",
    providerName: "OpenAI",
    providerSlug: "openai",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 18,
    popularity: 9945,
    rating: 98,
    latencyMs: 310,
    available: true,
  },
  {
    id: "m-gpt-6.1-terra",
    slug: "gpt-6.1-terra",
    name: "GPT-6.1 Terra",
    description: "Heavyweight reasoning model designed for complex analytical prompts.",
    providerName: "OpenAI",
    providerSlug: "openai",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 63, outputPerMillion: 250, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 64000,
    rank: 19,
    popularity: 9930,
    rating: 98,
    latencyMs: 360,
    available: true,
  },
  {
    id: "m-gpt-6-luna",
    slug: "gpt-6-luna",
    name: "GPT-6 Luna",
    description: "Efficient frontier completion alias.",
    providerName: "OpenAI",
    providerSlug: "openai",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 16384,
    rank: 20,
    popularity: 9905,
    rating: 96,
    latencyMs: 250,
    available: true,
  },
  {
    id: "m-nemotron-3.5-super-vl",
    slug: "nemotron-3.5-super-vl",
    name: "Nemotron 3.5 Super VL",
    description: "NVIDIA Nemotron high-capacity reasoning and vision model.",
    providerName: "NVIDIA",
    providerSlug: "nvidia",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 63, outputPerMillion: 250, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 21,
    popularity: 9925,
    rating: 97,
    latencyMs: 340,
    available: true,
  },

  // ── Open-Weight Models ──
  {
    id: "m-qwen3.8-27b",
    slug: "qwen3.8-27b",
    name: "Qwen3.8-27B",
    description: "Alibaba Qwen3.8 27B — high-performance multilingual reasoning model.",
    providerName: "Alibaba",
    providerSlug: "alibaba",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 22,
    popularity: 9955,
    rating: 98,
    latencyMs: 270,
    available: true,
  },
  {
    id: "m-glm-5.3",
    slug: "glm-5.3",
    name: "GLM-5.3",
    description: "Zhipu AI flagship bilingual reasoning, analytical thinking, and tool execution.",
    providerName: "Zhipu AI",
    providerSlug: "zhipu",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 23,
    popularity: 9920,
    rating: 97,
    latencyMs: 310,
    available: true,
  },
  {
    id: "m-kimi-k3",
    slug: "kimi-k3",
    name: "Kimi K3",
    description: "Moonshot Kimi K3 conversational and long-context instruction following.",
    providerName: "Moonshot",
    providerSlug: "moonshot",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 50, outputPerMillion: 208, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 24,
    popularity: 9940,
    rating: 98,
    latencyMs: 300,
    available: true,
  },
  {
    id: "m-mimo-v2.6-pro",
    slug: "mimo-v2.6-pro",
    name: "MiMo-V2.6-Pro",
    description: "MiMo dense architectural reasoning variant for long-horizon planning.",
    providerName: "MiMo",
    providerSlug: "mimo",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 16384,
    rank: 25,
    popularity: 9890,
    rating: 96,
    latencyMs: 290,
    available: true,
  },
  {
    id: "m-minimax-m3.1-flash",
    slug: "minimax-m3.1-flash",
    name: "MiniMax M3.1 Flash",
    description: "High-throughput, rapid completion variant for low-latency dialogue.",
    providerName: "MiniMax",
    providerSlug: "minimax",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 25, outputPerMillion: 100, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: false, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 8192,
    rank: 26,
    popularity: 9870,
    rating: 95,
    latencyMs: 200,
    available: true,
  },
  {
    id: "m-glm-5.3-flash",
    slug: "glm-5.3-flash",
    name: "GLM 5.3 Flash",
    description: "Lightweight, low-latency deployment of Zhipu GLM 5.3.",
    providerName: "Zhipu AI",
    providerSlug: "zhipu",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 25, outputPerMillion: 100, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 16384,
    rank: 27,
    popularity: 9885,
    rating: 96,
    latencyMs: 220,
    available: true,
  },
  {
    id: "m-mimo-v2.6-flash",
    slug: "mimo-v2.6-flash",
    name: "MiMo V2.6 Flash",
    description: "Fast-inference MiMo tier for rapid customer interactions and summaries.",
    providerName: "MiMo",
    providerSlug: "mimo",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 25, outputPerMillion: 100, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: false, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 8192,
    rank: 28,
    popularity: 9875,
    rating: 95,
    latencyMs: 210,
    available: true,
  },
  {
    id: "m-nemotron-3.5-lightning",
    slug: "nemotron-3.5-lightning",
    name: "Nemotron 3.5 Lightning",
    description: "NVIDIA Nemotron ultra-fast completion model.",
    providerName: "NVIDIA",
    providerSlug: "nvidia",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 33, outputPerMillion: 133, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: false, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 16384,
    rank: 29,
    popularity: 9895,
    rating: 96,
    latencyMs: 230,
    available: true,
  },
  {
    id: "m-longcat-2.5-preview",
    slug: "longcat-2.5-preview",
    name: "LongCat 2.5 Preview",
    description: "LongCat ultra-long context reasoning preview by Meituan.",
    providerName: "Meituan",
    providerSlug: "meituan",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 30,
    popularity: 9880,
    rating: 95,
    latencyMs: 380,
    available: true,
  },
  {
    id: "m-jev-1.13",
    slug: "jev-1.13",
    name: "Jev 1.13",
    description: "Dense synthesis and multi-step reasoning variant.",
    providerName: "Jev",
    providerSlug: "jev",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 16384,
    rank: 31,
    popularity: 9865,
    rating: 95,
    latencyMs: 310,
    available: true,
  },
  {
    id: "m-gpt-4o",
    slug: "gpt-4o",
    name: "GPT-4o",
    description: "OpenAI flagship multimodal intelligence.",
    providerName: "OpenAI",
    providerSlug: "openai",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 63, outputPerMillion: 250, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 16384,
    rank: 32,
    popularity: 9990,
    rating: 99,
    latencyMs: 370,
    available: true,
  },
  {
    id: "m-o1",
    slug: "o1",
    name: "o1",
    description: "OpenAI o1 deep reasoning and STEM problem-solving model.",
    providerName: "OpenAI",
    providerSlug: "openai",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 83, outputPerMillion: 333, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 64000,
    rank: 33,
    popularity: 9980,
    rating: 100,
    latencyMs: 590,
    available: true,
  },
  {
    id: "m-o3-mini",
    slug: "o3-mini",
    name: "o3-mini",
    description: "OpenAI o3-mini fast reasoning and coding model.",
    providerName: "OpenAI",
    providerSlug: "openai",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 64000,
    rank: 34,
    popularity: 9965,
    rating: 99,
    latencyMs: 320,
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
  const cleanSlug = decodeURIComponent(slug).toLowerCase().trim();
  // 1. Exact match on slug or name
  let model = DEFAULT_MODELS.find(
    (m) => m.slug.toLowerCase() === cleanSlug || m.name.toLowerCase() === cleanSlug,
  );
  // 2. Prefix or substring match (handles e.g. "claude-opus-5404" -> matches "claude-opus-5")
  if (!model) {
    model = DEFAULT_MODELS.find(
      (m) => cleanSlug.startsWith(m.slug.toLowerCase()) || m.slug.toLowerCase().startsWith(cleanSlug),
    );
  }
  // 3. Fallback: generate a dynamic model detail so NO slug ever returns 404
  if (!model) {
    const formattedName = cleanSlug
      .replace(/[^\w-]/g, "")
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    model = {
      id: `m-${cleanSlug}`,
      slug: cleanSlug,
      name: formattedName || "AI Model",
      description: `${formattedName || "AI Model"} — high-performance model available through ProRouter.`,
      providerName: "ProRouter Gateway",
      providerSlug: "prorouter-gateway",
      type: "chat",
      status: "active",
      isFree: true,
      pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
      capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
      contextWindow: 200000,
      maxOutputTokens: 64000,
      rank: 25,
      popularity: 9000,
      rating: 95,
      latencyMs: 1700,
      available: true,
    };
  }

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
