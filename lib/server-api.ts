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

export interface DualPricing {
  inrInput: string;
  inrOutput: string;
  usdInput: string;
  usdOutput: string;
  inrPerMillion: string;
  usdPerMillion: string;
  discountBadge: string;
  savingsNote: string;
}

export function formatDualPricing(inputPaise: number, outputPaise: number, isFree?: boolean): DualPricing {
  if (isFree || (inputPaise === 0 && outputPaise === 0)) {
    return {
      inrInput: "₹0",
      inrOutput: "₹0",
      usdInput: "$0",
      usdOutput: "$0",
      inrPerMillion: "₹0 (Free tier)",
      usdPerMillion: "$0 (Free tier)",
      discountBadge: "100% Free Tier",
      savingsNote: "No balance deducted",
    };
  }

  const inrIn = inputPaise / 100;
  const inrOut = outputPaise / 100;
  // Localized Indian Developer Rate: ₹80 INR = $1.00 USD (standard global FX is ~₹88 INR)
  // Indian builders get a direct ~10% discount on raw token charges and avoid 3.5% international card fees
  const usdIn = inrIn / 80;
  const usdOut = inrOut / 80;

  return {
    inrInput: `₹${inrIn.toFixed(2)}`,
    inrOutput: `₹${inrOut.toFixed(2)}`,
    usdInput: `$${usdIn.toFixed(4)}`,
    usdOutput: `$${usdOut.toFixed(4)}`,
    inrPerMillion: `₹${inrIn.toFixed(2)} / ₹${inrOut.toFixed(2)}`,
    usdPerMillion: `$${usdIn.toFixed(4)} / $${usdOut.toFixed(4)}`,
    discountBadge: "🇮🇳 ₹80/$1 INR Discount",
    savingsNote: "Save ~10% in INR vs $1.00 USD global rate",
  };
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

export const DEFAULT_PACKAGES_INR: PackageSummary[] = [
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

export const DEFAULT_PACKAGES_USD: PackageSummary[] = [
  {
    id: "pkg-starter-usd-5",
    slug: "starter-usd-5",
    name: "Starter Pack",
    pricePaise: 500,
    priceFormatted: "$5.00",
    bonusPaise: 0,
    totalPaise: 500,
    totalFormatted: "$5.00",
    currency: "USD",
  },
  {
    id: "pkg-pro-usd-10",
    slug: "pro-usd-10",
    name: "Pro Pack",
    pricePaise: 1000,
    priceFormatted: "$10.00",
    bonusPaise: 150,
    totalPaise: 1150,
    totalFormatted: "$11.50",
    currency: "USD",
  },
  {
    id: "pkg-scale-usd-25",
    slug: "scale-usd-25",
    name: "Scale Pack",
    pricePaise: 2500,
    priceFormatted: "$25.00",
    bonusPaise: 500,
    totalPaise: 3000,
    totalFormatted: "$30.00",
    currency: "USD",
  },
  {
    id: "pkg-power-usd-50",
    slug: "power-usd-50",
    name: "Power Pack",
    pricePaise: 5000,
    priceFormatted: "$50.00",
    bonusPaise: 1500,
    totalPaise: 6500,
    totalFormatted: "$65.00",
    currency: "USD",
  },
];

export const DEFAULT_PACKAGES = DEFAULT_PACKAGES_INR;

export const DEFAULT_PLANS_USD: PlanSummary[] = [
  {
    id: "plan-free",
    slug: "free",
    name: "Free",
    tagline: "Explore frontier AI models with zero upfront commitment.",
    pricePaise: 0,
    priceFormatted: "$0",
    currency: "USD",
    period: "forever",
    freeRpm: 10,
    freeRph: 100,
    freeRpd: 1000,
    concurrency: 2,
    queuePriority: 10,
    features: [
      "Access to all 35+ frontier models",
      "Free daily quota on all models",
      "Standard queue priority",
      "Streaming SSE responses",
      "OpenAI SDK compatible endpoint",
    ],
    sortOrder: 10,
  },
  {
    id: "plan-builder-usd",
    slug: "builder-usd",
    name: "Builder",
    tagline: "For developers and early-stage products building with AI.",
    pricePaise: 1200,
    priceFormatted: "$12",
    currency: "USD",
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
    id: "plan-pro-usd",
    slug: "pro-usd",
    name: "Pro",
    tagline: "Maximum throughput, dedicated priority queue, and high concurrency.",
    pricePaise: 2900,
    priceFormatted: "$29",
    currency: "USD",
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
  { id: "p-google", slug: "google", name: "Google", region: "us", status: "active", modelCount: 2, uptimePercent: 99.97, avgLatencyMs: 480, priority: 7, supportedCapabilities: ["chat", "vision", "multimodal", "tool_calls"], retentionPolicy: "zero_retention", description: "Google Gemini multimodal reasoning models." },
  { id: "p-mistral", slug: "mistral", name: "Mistral", region: "eu", status: "active", modelCount: 3, uptimePercent: 99.94, avgLatencyMs: 410, priority: 8, supportedCapabilities: ["chat", "coding", "reasoning"], retentionPolicy: "zero_retention", description: "Mistral European frontier open-weight models." },
  { id: "p-xai", slug: "xai", name: "xAI", region: "us", status: "active", modelCount: 1, uptimePercent: 99.91, avgLatencyMs: 530, priority: 9, supportedCapabilities: ["chat", "reasoning", "realtime"], retentionPolicy: "zero_retention", description: "xAI Grok conversational reasoning intelligence." },
  { id: "p-nvidia", slug: "nvidia", name: "NVIDIA", region: "us", status: "active", modelCount: 8, uptimePercent: 99.93, avgLatencyMs: 380, priority: 10, supportedCapabilities: ["chat", "vision", "reasoning"], retentionPolicy: "zero_retention", description: "NVIDIA Nemotron high-capacity and ultra-fast inference models." },
  { id: "p-zhipu", slug: "zhipu", name: "Zhipu AI", region: "global", status: "active", modelCount: 2, uptimePercent: 99.90, avgLatencyMs: 460, priority: 11, supportedCapabilities: ["chat", "reasoning", "coding"], retentionPolicy: "zero_retention", description: "GLM bilingual reasoning and agentic models." },
  { id: "p-mimo", slug: "mimo", name: "MiMo", region: "global", status: "active", modelCount: 2, uptimePercent: 99.90, avgLatencyMs: 390, priority: 12, supportedCapabilities: ["chat", "reasoning"], retentionPolicy: "zero_retention", description: "MiMo high-density reasoning models." },
  { id: "p-minimax", slug: "minimax", name: "MiniMax", region: "global", status: "active", modelCount: 1, uptimePercent: 99.90, avgLatencyMs: 370, priority: 13, supportedCapabilities: ["chat", "fast"], retentionPolicy: "zero_retention", description: "MiniMax low-latency conversational models." },
  { id: "p-meituan", slug: "meituan", name: "Meituan", region: "global", status: "active", modelCount: 1, uptimePercent: 99.89, avgLatencyMs: 580, priority: 14, supportedCapabilities: ["chat", "long_context"], retentionPolicy: "zero_retention", description: "LongCat ultra-long context reasoning models." },
  { id: "p-jev", slug: "jev", name: "Jev", region: "global", status: "active", modelCount: 1, uptimePercent: 99.90, avgLatencyMs: 430, priority: 15, supportedCapabilities: ["chat", "synthesis"], retentionPolicy: "zero_retention", description: "Jev multi-step reasoning variant." },
  { id: "p-poolside", slug: "poolside", name: "Poolside", region: "global", status: "active", modelCount: 2, uptimePercent: 99.94, avgLatencyMs: 310, priority: 16, supportedCapabilities: ["chat", "coding"], retentionPolicy: "zero_retention", description: "Poolside specialized software engineering foundation models." },
  { id: "p-novita", slug: "novita", name: "Novita", region: "global", status: "active", modelCount: 2, uptimePercent: 99.93, avgLatencyMs: 270, priority: 17, supportedCapabilities: ["chat", "multilingual", "reasoning"], retentionPolicy: "zero_retention", description: "Novita high-throughput Ling models for edge and conversational workflows." },
  { id: "p-requesty", slug: "requesty", name: "Requesty AI", region: "global", status: "active", modelCount: 13, uptimePercent: 99.95, avgLatencyMs: 320, priority: 18, supportedCapabilities: ["chat", "reasoning", "coding", "vision"], retentionPolicy: "zero_retention", description: "Requesty AI frontier unified routing gateway." },
];

export const DEFAULT_MODELS: ModelSummary[] = [
  // ── 1. Anthropic Claude 3.5 Sonnet ──
  {
    id: "m-claude-sonnet",
    slug: "claude-sonnet",
    name: "Claude Sonnet",
    description: "Anthropic Claude 3.5 Sonnet frontier software engineering, hybrid reasoning, and interactive artifact generation.",
    providerName: "Anthropic",
    providerSlug: "anthropic",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 63, outputPerMillion: 250, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 64000,
    rank: 1,
    popularity: 9995,
    rating: 100,
    latencyMs: 340,
    available: true,
  },

  // ── 2. Pro Router Zenith (Flagship Router) ──
  {
    id: "m-pr-zenith",
    slug: "pr-zenith",
    name: "Pro Router Zenith",
    description: "Flagship auto-routed tier orchestrating multi-model architectural synthesis, formal verification, and deep reasoning workflows.",
    providerName: "ProRouter",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 83, outputPerMillion: 333, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 64000,
    rank: 2,
    popularity: 9990,
    rating: 100,
    latencyMs: 380,
    available: true,
  },

  // ── 3. OpenAI GPT-4o ──
  {
    id: "m-gpt-4o",
    slug: "gpt-4o",
    name: "GPT-4o",
    description: "OpenAI flagship omni-modal model integrating native vision, speech, and structured reasoning for enterprise workflows.",
    providerName: "OpenAI",
    providerSlug: "openai",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 63, outputPerMillion: 250, currency: "INR" },
    capabilities: { modalities: ["text", "vision", "audio"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: true, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 16384,
    rank: 3,
    popularity: 9990,
    rating: 99,
    latencyMs: 350,
    available: true,
  },

  // ── 4. DeepSeek V4.1 Flash (Free Tier) ──
  {
    id: "m-deepseek-v4.1-flash",
    slug: "deepseek-v4.1-flash",
    name: "DeepSeek V4.1 Flash",
    description: "DeepSeek ultra-fast 262K context MoE model offering free-tier high-speed mathematical reasoning, code generation, and multilingual inference.",
    providerName: "DeepSeek",
    providerSlug: "deepseek",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 262144,
    maxOutputTokens: 128000,
    rank: 4,
    popularity: 9985,
    rating: 99,
    latencyMs: 240,
    available: true,
  },

  // ── 5. Anthropic Claude Opus ──
  {
    id: "m-claude-opus",
    slug: "claude-opus",
    name: "Claude Opus",
    description: "Anthropic premier reasoning model with unmatched comprehension of nuance, literary critique, and multi-step research synthesis.",
    providerName: "Anthropic",
    providerSlug: "anthropic",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 83, outputPerMillion: 333, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 64000,
    rank: 5,
    popularity: 9980,
    rating: 100,
    latencyMs: 420,
    available: true,
  },

  // ── 6. OpenAI o1 ──
  {
    id: "m-o1",
    slug: "o1",
    name: "o1",
    description: "OpenAI deep chain-of-thought model engineered for competitive programming, advanced mathematics, and scientific discovery.",
    providerName: "OpenAI",
    providerSlug: "openai",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 83, outputPerMillion: 333, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 64000,
    rank: 6,
    popularity: 9980,
    rating: 100,
    latencyMs: 590,
    available: true,
  },

  // ── 7. Anthropic Claude Opus 5 ──
  {
    id: "m-claude-opus-5",
    slug: "claude-opus-5",
    name: "Claude Opus 5",
    description: "Next-generation Claude Opus frontier reasoning preview with extended autonomous planning, mathematical proofing, and long-horizon tool chains.",
    providerName: "Anthropic",
    providerSlug: "anthropic",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 83, outputPerMillion: 333, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 64000,
    rank: 7,
    popularity: 9975,
    rating: 100,
    latencyMs: 440,
    available: true,
  },

  // ── 8. Pro Router Aura ──
  {
    id: "m-pr-aura",
    slug: "pr-aura",
    name: "Pro Router Aura",
    description: "Balanced reasoning tier optimized for complex multi-file code editing, system refactoring, and in-depth technical analysis.",
    providerName: "ProRouter",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 63, outputPerMillion: 250, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 8,
    popularity: 9970,
    rating: 99,
    latencyMs: 320,
    available: true,
  },

  // ── 9. DeepSeek-V4.1-Flash-1017 (Free Tier) ──
  {
    id: "m-deepseek-v4.1-flash-1017",
    slug: "deepseek-v4.1-flash-1017",
    name: "DeepSeek-V4.1-Flash-1017",
    description: "DeepSeek V4.1 Flash specialized checkpoint 1017 tuned for instantaneous TTFT, algorithmic problem solving, and zero-cost batch queries.",
    providerName: "DeepSeek",
    providerSlug: "deepseek",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 262144,
    maxOutputTokens: 128000,
    rank: 9,
    popularity: 9970,
    rating: 99,
    latencyMs: 230,
    available: true,
  },

  // ── 10. OpenAI o3-mini ──
  {
    id: "m-o3-mini",
    slug: "o3-mini",
    name: "o3-mini",
    description: "OpenAI o3-mini fast and cost-efficient deliberate reasoning model tuned for competitive coding, STEM queries, and precision logic.",
    providerName: "OpenAI",
    providerSlug: "openai",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 100000,
    rank: 10,
    popularity: 9965,
    rating: 99,
    latencyMs: 310,
    available: true,
  },

  // ── 11. Moonshot Kimi K2.7 Code ──
  {
    id: "m-kimi-k2.7-code",
    slug: "kimi-k2.7-code",
    name: "Kimi K2.7 Code",
    description: "Moonshot specialized agentic coding model for repository refactoring, multi-file edits, AST transforms, and git diff generation.",
    providerName: "Moonshot",
    providerSlug: "moonshot",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 32768,
    rank: 11,
    popularity: 9960,
    rating: 99,
    latencyMs: 280,
    available: true,
  },

  // ── 12. Alibaba Qwen3.8-27B (Free Tier) ──
  {
    id: "m-qwen3.8-27b",
    slug: "qwen3.8-27b",
    name: "Qwen3.8-27B",
    description: "Alibaba Qwen3.8 27B parameter open-weight reasoning model excelling at bilingual mathematics, coding, and structured data parsing.",
    providerName: "Alibaba",
    providerSlug: "alibaba",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 131072,
    maxOutputTokens: 32768,
    rank: 12,
    popularity: 9955,
    rating: 98,
    latencyMs: 270,
    available: true,
  },

  // ── 13. Pro Router Nova ──
  {
    id: "m-pr-nova",
    slug: "pr-nova",
    name: "Pro Router Nova",
    description: "General-purpose premium model tuned for production copywriting, business intelligence, and high-quality software development.",
    providerName: "ProRouter",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 16384,
    rank: 13,
    popularity: 9950,
    rating: 98,
    latencyMs: 290,
    available: true,
  },

  // ── 14. OpenAI GPT-6.1 Sol ──
  {
    id: "m-gpt-6.1-sol",
    slug: "gpt-6.1-sol",
    name: "GPT-6.1 Sol",
    description: "Next-gen high-throughput conversational reasoning model engineered for rapid multi-turn chat, interactive coding, and low-latency API workflows.",
    providerName: "OpenAI",
    providerSlug: "openai",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 14,
    popularity: 9945,
    rating: 98,
    latencyMs: 310,
    available: true,
  },

  // ── 15. Alibaba Qwen3-Coder-Next ──
  {
    id: "m-qwen3-coder-next",
    slug: "qwen3-coder-next",
    name: "Qwen3-Coder-Next",
    description: "Alibaba next-gen code synthesis architecture featuring compiler feedback integration, algorithm optimization, and full-stack scaffolding.",
    providerName: "Alibaba",
    providerSlug: "alibaba",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 131072,
    maxOutputTokens: 32768,
    rank: 15,
    popularity: 9940,
    rating: 98,
    latencyMs: 310,
    available: true,
  },

  // ── 16. Moonshot Kimi K3 ──
  {
    id: "m-kimi-k3",
    slug: "kimi-k3",
    name: "Kimi K3",
    description: "Moonshot Kimi K3 conversational and long-context instruction model with 200K recall fidelity across complex technical manuals and research papers.",
    providerName: "Moonshot",
    providerSlug: "moonshot",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 50, outputPerMillion: 208, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 32768,
    rank: 16,
    popularity: 9940,
    rating: 98,
    latencyMs: 300,
    available: true,
  },

  // ── 17. Google Gemini 1.5 Pro (1 Million Context!) ──
  {
    id: "m-gemini-pro",
    slug: "gemini-pro",
    name: "Gemini Pro",
    description: "Google Gemini 1.5 Pro massive 1-million token context window capable of ingesting entire enterprise codebases, hours of audio, and video.",
    providerName: "Google",
    providerSlug: "google",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text", "vision", "audio"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: true, jsonMode: true },
    contextWindow: 1000000,
    maxOutputTokens: 32768,
    rank: 17,
    popularity: 9935,
    rating: 98,
    latencyMs: 340,
    available: true,
  },

  // ── 18. Pro Router Swift ──
  {
    id: "m-pr-swift",
    slug: "pr-swift",
    name: "Pro Router Swift",
    description: "Sub-200ms ultra-low latency conversational engine designed for live support bots, interactive autocomplete, and high-volume routing.",
    providerName: "ProRouter",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 25, outputPerMillion: 100, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: false, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 8192,
    rank: 18,
    popularity: 9930,
    rating: 97,
    latencyMs: 180,
    available: true,
  },

  // ── 19. OpenAI GPT-6.1 Terra ──
  {
    id: "m-gpt-6.1-terra",
    slug: "gpt-6.1-terra",
    name: "GPT-6.1 Terra",
    description: "Heavyweight reasoning model designed for deeply analytical prompts, formal verification, complex spreadsheet analysis, and scientific literature reviews.",
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

  // ── 20. NVIDIA Nemotron 3.5 Super VL ──
  {
    id: "m-nemotron-3.5-super-vl",
    slug: "nemotron-3.5-super-vl",
    name: "Nemotron 3.5 Super VL",
    description: "NVIDIA accelerated vision-language model tuned for architectural diagrams, high-resolution document OCR, and multimodal spatial reasoning.",
    providerName: "NVIDIA",
    providerSlug: "nvidia",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 63, outputPerMillion: 250, currency: "INR" },
    capabilities: { modalities: ["text", "vision"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 131072,
    maxOutputTokens: 32768,
    rank: 20,
    popularity: 9925,
    rating: 97,
    latencyMs: 340,
    available: true,
  },

  // ── 21. xAI Grok ──
  {
    id: "m-grok",
    slug: "grok",
    name: "Grok",
    description: "xAI Grok conversational frontier engine combining real-time search synthesis, direct perspective, and advanced STEM foundations.",
    providerName: "xAI",
    providerSlug: "xai",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 63, outputPerMillion: 250, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 131072,
    maxOutputTokens: 32768,
    rank: 21,
    popularity: 9920,
    rating: 97,
    latencyMs: 360,
    available: true,
  },

  // ── 22. Zhipu AI GLM-5.3 ──
  {
    id: "m-glm-5.3",
    slug: "glm-5.3",
    name: "GLM-5.3",
    description: "Zhipu AI flagship bilingual reasoning model with autonomous browser/API navigation, complex tool execution, and nuanced Mandarin/English comprehension.",
    providerName: "Zhipu AI",
    providerSlug: "zhipu",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 131072,
    maxOutputTokens: 32768,
    rank: 22,
    popularity: 9920,
    rating: 97,
    latencyMs: 310,
    available: true,
  },

  // ── 23. Mistral Large ──
  {
    id: "m-mistral-large",
    slug: "mistral-large",
    name: "Mistral Large",
    description: "Mistral Large 2 flagship multilingual reasoning model with state-of-the-art multilingual comprehension across 10+ languages and complex function calls.",
    providerName: "Mistral",
    providerSlug: "mistral",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 63, outputPerMillion: 250, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 32768,
    rank: 23,
    popularity: 9915,
    rating: 97,
    latencyMs: 330,
    available: true,
  },

  // ── 24. Mistral Devstral 24B ──
  {
    id: "m-devstral-24b",
    slug: "devstral-24b",
    name: "Devstral 24B",
    description: "Mistral 24B parameter software engineering specialist optimized for rapid inline completion, unit test drafting, and low-latency API generation.",
    providerName: "Mistral",
    providerSlug: "mistral",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 33, outputPerMillion: 133, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 65536,
    maxOutputTokens: 16384,
    rank: 24,
    popularity: 9910,
    rating: 97,
    latencyMs: 260,
    available: true,
  },

  // ── 25. OpenAI GPT-6 Luna ──
  {
    id: "m-gpt-6-luna",
    slug: "gpt-6-luna",
    name: "GPT-6 Luna",
    description: "Cost-efficient high-speed completion model designed for automated content extraction, real-time classification, and document distillation.",
    providerName: "OpenAI",
    providerSlug: "openai",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 16384,
    rank: 25,
    popularity: 9905,
    rating: 96,
    latencyMs: 250,
    available: true,
  },

  // ── 26. Pro Router Echo ──
  {
    id: "m-pr-echo",
    slug: "pr-echo",
    name: "Pro Router Echo",
    description: "Cost-optimized lightweight model for everyday Q&A, short summarization, classification, and high-concurrency background jobs.",
    providerName: "ProRouter",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 17, outputPerMillion: 67, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: false, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 8192,
    rank: 26,
    popularity: 9900,
    rating: 96,
    latencyMs: 210,
    available: true,
  },

  // ── 27. NVIDIA Nemotron 3.5 Lightning ──
  {
    id: "m-nemotron-3.5-lightning",
    slug: "nemotron-3.5-lightning",
    name: "Nemotron 3.5 Lightning",
    description: "NVIDIA TensorRT-LLM optimized architecture tuned for maximal single-stream throughput and instant code completions.",
    providerName: "NVIDIA",
    providerSlug: "nvidia",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 33, outputPerMillion: 133, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: false, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 16384,
    rank: 27,
    popularity: 9895,
    rating: 96,
    latencyMs: 230,
    available: true,
  },

  // ── 28. MiMo-V2.6-Pro ──
  {
    id: "m-mimo-v2.6-pro",
    slug: "mimo-v2.6-pro",
    name: "MiMo-V2.6-Pro",
    description: "MiMo dense architectural reasoning variant fine-tuned for recursive decomposition, multi-constraint planning, and dependency graphing.",
    providerName: "MiMo",
    providerSlug: "mimo",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 16384,
    rank: 28,
    popularity: 9890,
    rating: 96,
    latencyMs: 290,
    available: true,
  },

  // ── 29. Zhipu GLM 5.3 Flash ──
  {
    id: "m-glm-5.3-flash",
    slug: "glm-5.3-flash",
    name: "GLM 5.3 Flash",
    description: "Lightweight, highly optimized deployment of Zhipu GLM 5.3 delivering rapid token throughput for automated summarization and quick replies.",
    providerName: "Zhipu AI",
    providerSlug: "zhipu",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 25, outputPerMillion: 100, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 16384,
    rank: 29,
    popularity: 9885,
    rating: 96,
    latencyMs: 220,
    available: true,
  },

  // ── 30. ProRouter Beam ──
  {
    id: "m-beam",
    slug: "beam",
    name: "Beam",
    description: "ProRouter high-throughput real-time streaming pipeline engineered for voice interfaces, live agent transcripts, and WebSocket pipelines.",
    providerName: "ProRouter",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 25, outputPerMillion: 100, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 32768,
    maxOutputTokens: 8192,
    rank: 30,
    popularity: 9880,
    rating: 96,
    latencyMs: 190,
    available: true,
  },

  // ── 31. Meituan LongCat 2.5 Preview ──
  {
    id: "m-longcat-2.5-preview",
    slug: "longcat-2.5-preview",
    name: "LongCat 2.5 Preview",
    description: "Meituan ultra-long context reasoning model capable of analyzing extensive multi-document corporate archives and multi-hour meeting transcripts.",
    providerName: "Meituan",
    providerSlug: "meituan",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 262144,
    maxOutputTokens: 32768,
    rank: 31,
    popularity: 9880,
    rating: 95,
    latencyMs: 380,
    available: true,
  },

  // ── 32. MiMo V2.6 Flash ──
  {
    id: "m-mimo-v2.6-flash",
    slug: "mimo-v2.6-flash",
    name: "MiMo V2.6 Flash",
    description: "Fast-inference MiMo tier for rapid customer interactions, intent classification, micro-agent execution, and streaming replies.",
    providerName: "MiMo",
    providerSlug: "mimo",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 25, outputPerMillion: 100, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: false, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 8192,
    rank: 32,
    popularity: 9875,
    rating: 95,
    latencyMs: 210,
    available: true,
  },

  // ── 33. MiniMax M3.1 Flash ──
  {
    id: "m-minimax-m3.1-flash",
    slug: "minimax-m3.1-flash",
    name: "MiniMax M3.1 Flash",
    description: "MiniMax low-latency conversational engine delivering natural, expressive dialogue and fast turnaround for interactive assistant applications.",
    providerName: "MiniMax",
    providerSlug: "minimax",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 25, outputPerMillion: 100, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: false, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 8192,
    rank: 33,
    popularity: 9870,
    rating: 95,
    latencyMs: 200,
    available: true,
  },

  // ── 34. Jev 1.13 ──
  {
    id: "m-jev-1.13",
    slug: "jev-1.13",
    name: "Jev 1.13",
    description: "Dense synthesis and deterministic verification model tuned for SQL query generation, regex synthesis, and schema-constrained responses.",
    providerName: "Jev",
    providerSlug: "jev",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 64000,
    maxOutputTokens: 16384,
    rank: 34,
    popularity: 9865,
    rating: 95,
    latencyMs: 310,
    available: true,
  },
  // ── 35. Mistral Leanstral 1.5 ──
  {
    id: "m-leanstral-1-5",
    slug: "leanstral-1-5",
    name: "Leanstral 1.5",
    description: "Mistral Leanstral 1.5 — high-efficiency reasoning model with massive 262K context for lean execution and structured synthesis.",
    providerName: "Mistral",
    providerSlug: "mistral",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 262144,
    maxOutputTokens: 32768,
    rank: 35,
    popularity: 9860,
    rating: 96,
    latencyMs: 320,
    available: true,
  },
  // ── 36. Poolside Laguna XS.2 ──
  {
    id: "m-laguna-xs-2",
    slug: "laguna-xs.2",
    name: "Laguna XS.2",
    description: "Poolside Laguna XS.2 — specialized ultra-fast coding and execution model designed for rapid software iteration and inline completions.",
    providerName: "Poolside",
    providerSlug: "poolside",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 32768,
    maxOutputTokens: 16384,
    rank: 36,
    popularity: 9850,
    rating: 95,
    latencyMs: 290,
    available: true,
  },
  // ── 37. Poolside Laguna M.1 ──
  {
    id: "m-laguna-m-1",
    slug: "laguna-m.1",
    name: "Laguna M.1",
    description: "Poolside Laguna M.1 — medium-tier frontier code synthesis, repository navigation, and multi-file refactoring engine.",
    providerName: "Poolside",
    providerSlug: "poolside",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 32768,
    maxOutputTokens: 16384,
    rank: 37,
    popularity: 9855,
    rating: 95,
    latencyMs: 340,
    available: true,
  },
  // ── 38. Novita InclusionAI Ling 3.0 Tiny ──
  {
    id: "m-ling-3-0-tiny",
    slug: "inclusionai/ling-3.0-tiny",
    name: "Ling 3.0 Tiny",
    description: "Novita InclusionAI Ling 3.0 Tiny — lightweight multilingual model with 262K context for edge inference and compact reasoning.",
    providerName: "Novita",
    providerSlug: "novita",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 262144,
    maxOutputTokens: 32768,
    rank: 38,
    popularity: 9840,
    rating: 94,
    latencyMs: 260,
    available: true,
  },
  // ── 39. Novita Ling 3.1 Flash ──
  {
    id: "m-ling-3-1-flash",
    slug: "ling-3.1-flash",
    name: "Ling 3.1 Flash",
    description: "Novita Ling 3.1 Flash — ultra-responsive 262K context model for conversational speed, real-time summarization, and task routing.",
    providerName: "Novita",
    providerSlug: "novita",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 262144,
    maxOutputTokens: 32768,
    rank: 39,
    popularity: 9865,
    rating: 95,
    latencyMs: 240,
    available: true,
  },
  // ── 40. NVIDIA Nemotron 3 Nano 30B A3B ──
  {
    id: "m-nemotron-3-nano-30b-a3b",
    slug: "nemotron-3-nano-30b-a3b",
    name: "Nemotron 3 Nano 30B A3B",
    description: "NVIDIA Nemotron 3 Nano 30B A3B — efficient MoE architecture delivering enterprise reasoning and 262K context.",
    providerName: "NVIDIA",
    providerSlug: "nvidia",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 262144,
    maxOutputTokens: 32768,
    rank: 40,
    popularity: 9870,
    rating: 96,
    latencyMs: 310,
    available: true,
  },
  // ── 41. NVIDIA Nemotron 3 Nano Omni 30B Reasoning ──
  {
    id: "m-nemotron-3-nano-omni-30b-a3b-reasoning",
    slug: "nemotron-3-nano-omni-30b-a3b-reasoning",
    name: "Nemotron 3 Nano Omni 30B Reasoning",
    description: "NVIDIA Nemotron 3 Nano Omni 30B — deep chain-of-thought reasoning and multimodal STEM problem-solving with 131K context.",
    providerName: "NVIDIA",
    providerSlug: "nvidia",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 131072,
    maxOutputTokens: 20480,
    rank: 41,
    popularity: 9880,
    rating: 97,
    latencyMs: 420,
    available: true,
  },
  // ── 42. NVIDIA Nemotron 3 Super 120B A12B ──
  {
    id: "m-nemotron-3-super-120b-a12b",
    slug: "nemotron-3-super-120b-a12b",
    name: "Nemotron 3 Super 120B A12B",
    description: "NVIDIA Nemotron 3 Super 120B A12B — massive 1M context MoE flagship for whole-codebase understanding and deep synthesis.",
    providerName: "NVIDIA",
    providerSlug: "nvidia",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    rank: 42,
    popularity: 9890,
    rating: 98,
    latencyMs: 490,
    available: true,
  },
  // ── 43. NVIDIA Nemotron 3.5 Content Safety ──
  {
    id: "m-nemotron-3-5-content-safety",
    slug: "nemotron-3.5-content-safety",
    name: "Nemotron 3.5 Content Safety",
    description: "NVIDIA Nemotron 3.5 Content Safety — specialized guardrail model for real-time moderation, compliance, and safety filtering across 131K context.",
    providerName: "NVIDIA",
    providerSlug: "nvidia",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 131072,
    maxOutputTokens: 8192,
    rank: 43,
    popularity: 9830,
    rating: 94,
    latencyMs: 180,
    available: true,
  },
  // ── 44. NVIDIA Nemotron 3.5 Lightning 30B A3B ──
  {
    id: "m-nemotron-3-5-lightning-30b-a3b",
    slug: "nemotron-3.5-lightning-30b-a3b",
    name: "Nemotron 3.5 Lightning 30B A3B",
    description: "NVIDIA Nemotron 3.5 Lightning 30B A3B — lightning-fast inference with an extraordinary 1M context window for high-throughput workflows.",
    providerName: "NVIDIA",
    providerSlug: "nvidia",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    rank: 44,
    popularity: 9910,
    rating: 98,
    latencyMs: 250,
    available: true,
  },
  // ── 45. NVIDIA Nemotron 3 Ultra 550B A55B ──
  {
    id: "m-nemotron-3-ultra-550b-a55b",
    slug: "nemotron-3-ultra-550b-a55b",
    name: "Nemotron 3 Ultra 550B A55B",
    description: "NVIDIA Nemotron 3 Ultra 550B A55B — ultra-scale frontier reasoning engine with 1M context for frontier science, law, and complex systems architecture.",
    providerName: "NVIDIA",
    providerSlug: "nvidia",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    rank: 45,
    popularity: 9940,
    rating: 99,
    latencyMs: 550,
    available: true,
  },
  // ── 46. NVIDIA Muse Glimmer 30B ──
  {
    id: "m-muse-glimmer-30b",
    slug: "muse-glimmer-30b",
    name: "Muse Glimmer 30B",
    description: "NVIDIA Muse Glimmer 30B — creative reasoning and expressive generation model tuned for narrative design, code styling, and 131K context.",
    providerName: "NVIDIA",
    providerSlug: "nvidia",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 131072,
    maxOutputTokens: 20480,
    rank: 46,
    popularity: 9835,
    rating: 95,
    latencyMs: 340,
    available: true,
  },
  // ── 47. Google Gemma 4 31B IT ──
  {
    id: "m-gemma-4-31b-it",
    slug: "gemma-4-31b-it",
    name: "Gemma 4 31B IT",
    description: "Google Gemma 4 31B Instruction-Tuned — Google's latest open frontier architecture featuring 262K context, sharp instruction following, and multilingual mastery.",
    providerName: "Google",
    providerSlug: "google",
    type: "chat",
    status: "active",
    isFree: true,
    pricing: { inputPerMillion: 0, outputPerMillion: 0, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: true, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 262144,
    maxOutputTokens: 8192,
    rank: 47,
    popularity: 9920,
    rating: 98,
    latencyMs: 310,
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
