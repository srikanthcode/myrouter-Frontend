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
  category?: string;
  categoryLabel?: string;
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
  canonicalModelId?: string;
  pricingStatus?: string;
  customerPricingUsd?: {
    inputPerMillion: number;
    outputPerMillion: number;
    cachedInputPerMillion?: number;
  };
  upstreamCostUsd?: {
    inputPerMillion: number;
    outputPerMillion: number;
    cachedInputPerMillion?: number;
  };
  benchmarks?: Array<{ name: string; score: number; source?: string; evaluationDate?: string }>;
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
      "Access to all 480+ AI models",
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
  { id: "p-nabh", slug: "nabh", name: "Nabh Cloud", region: "global", status: "active", modelCount: 1, uptimePercent: 99.96, avgLatencyMs: 310, priority: 19, supportedCapabilities: ["chat", "reasoning", "coding"], retentionPolicy: "zero_retention", description: "Nabh Cloud high-throughput AI gateway." },
  { id: "p-groq", slug: "groq", name: "Groq", region: "us", status: "active", modelCount: 4, uptimePercent: 99.98, avgLatencyMs: 180, priority: 8, supportedCapabilities: ["chat", "fast", "reasoning"], retentionPolicy: "zero_retention", description: "Groq LPU ultra-high throughput inference engine." },
  { id: "p-openrouter", slug: "openrouter", name: "OpenRouter", region: "global", status: "active", modelCount: 4, uptimePercent: 99.95, avgLatencyMs: 380, priority: 9, supportedCapabilities: ["chat", "vision", "reasoning"], retentionPolicy: "zero_retention", description: "OpenRouter aggregated multi-provider gateway." },
  { id: "p-requesty", slug: "requesty", name: "Requesty AI", region: "global", status: "active", modelCount: 6, uptimePercent: 99.95, avgLatencyMs: 320, priority: 18, supportedCapabilities: ["chat", "reasoning", "coding", "vision"], retentionPolicy: "zero_retention", description: "Requesty AI frontier unified routing gateway." },
];

import { MODEL_PROFILES_500 } from "./model-profiles-data";

export const DEFAULT_MODELS: ModelSummary[] = MODEL_PROFILES_500;

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
        m.providerName.toLowerCase().includes(qLower) ||
        (m.category && m.category.toLowerCase().includes(qLower)) ||
        (m.categoryLabel && m.categoryLabel.toLowerCase().includes(qLower)),
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
    const cat = filters.category.toLowerCase().trim();
    list = list.filter((m) => {
      if (m.category) return m.category.toLowerCase() === cat;
      if (cat === "coding") {
        return m.slug.includes("code") || m.slug.includes("devstral") || m.description.toLowerCase().includes("code") || m.description.toLowerCase().includes("coding");
      } else if (cat === "reasoning") {
        return m.slug.includes("reason") || m.description.toLowerCase().includes("reason");
      } else if (cat === "vision") {
        return m.capabilities.vision || m.slug.includes("vision") || m.slug.includes("vl");
      } else if (cat === "tools" || cat === "agentic") {
        return m.slug.includes("agent") || m.slug.includes("tool");
      } else if (cat === "general") {
        return m.slug.includes("general") || m.slug.includes("assistant") || m.description.toLowerCase().includes("general");
      } else if (cat === "research") {
        return m.slug.includes("research") || m.slug.includes("scholar") || m.slug.includes("analysis") || m.description.toLowerCase().includes("research");
      } else if (cat === "math_science" || cat === "math") {
        return m.slug.includes("math") || m.slug.includes("science") || m.description.toLowerCase().includes("math");
      } else if (cat === "multilingual") {
        return m.slug.includes("multilingual") || m.slug.includes("indic") || m.slug.includes("polyglot") || m.slug.includes("allam");
      } else if (cat === "fast") {
        return m.slug.includes("fast") || m.slug.includes("speed") || m.slug.includes("flash") || m.slug.includes("turbo");
      } else if (cat === "long_context" || cat === "long-context") {
        return m.contextWindow >= 500000 || m.slug.includes("long") || m.slug.includes("context");
      } else if (cat === "creative") {
        return m.slug.includes("creative") || m.slug.includes("writer") || m.slug.includes("author") || m.description.toLowerCase().includes("creative");
      } else if (cat === "business") {
        return m.slug.includes("business") || m.slug.includes("enterprise") || m.slug.includes("executive") || m.description.toLowerCase().includes("business");
      }
      return false;
    });
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
