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
  { id: "p-prorouter", slug: "prorouter", name: "Pro Router", region: "global", status: "active", modelCount: 5, uptimePercent: 99.99, avgLatencyMs: 650, priority: 1, supportedCapabilities: ["chat", "reasoning", "coding"], retentionPolicy: "zero_retention", description: "Official Pro Router text-to-text models." },
];

// ── Default Built-in Models (Official Pro Router 5 Text Models) ───────────────

export const DEFAULT_MODELS: ModelSummary[] = [
  {
    id: "m-pr-echo",
    slug: "pr-echo",
    name: "Pro Router Echo",
    description: "A basic, affordable text-to-text model for everyday questions, short answers, summaries, and simple chat.",
    providerName: "Pro Router",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 17, outputPerMillion: 67, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: false, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 8192,
    rank: 1,
    popularity: 9999,
    rating: 99,
    latencyMs: 380,
    available: true,
  },
  {
    id: "m-pr-swift",
    slug: "pr-swift",
    name: "Pro Router Swift",
    description: "Designed for quick responses, customer support, chatbots, and high-volume applications.",
    providerName: "Pro Router",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 25, outputPerMillion: 100, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: false, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 128000,
    maxOutputTokens: 16384,
    rank: 2,
    popularity: 9980,
    rating: 99,
    latencyMs: 460,
    available: true,
  },
  {
    id: "m-pr-nova",
    slug: "pr-nova",
    name: "Pro Router Nova",
    description: "Your general-purpose premium model for detailed answers, writing, reasoning, and everyday development assistance.",
    providerName: "Pro Router",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 42, outputPerMillion: 167, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 32768,
    rank: 3,
    popularity: 9970,
    rating: 98,
    latencyMs: 650,
    available: true,
  },
  {
    id: "m-pr-aura",
    slug: "pr-aura",
    name: "Pro Router Aura",
    description: "Positioned for more advanced reasoning, long-form content, complex instructions, and coding assistance, depending on the configured backend.",
    providerName: "Pro Router",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 63, outputPerMillion: 250, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 200000,
    maxOutputTokens: 64000,
    rank: 4,
    popularity: 9960,
    rating: 99,
    latencyMs: 890,
    available: true,
  },
  {
    id: "m-pr-zenith",
    slug: "pr-zenith",
    name: "Pro Router Zenith",
    description: "Your flagship tier for the most demanding text tasks, complex analysis, and coding workflows supported by your chosen backend.",
    providerName: "Pro Router",
    providerSlug: "prorouter",
    type: "chat",
    status: "active",
    isFree: false,
    pricing: { inputPerMillion: 83, outputPerMillion: 333, currency: "INR" },
    capabilities: { modalities: ["text"], streaming: true, toolCalls: true, structuredOutputs: true, reasoning: true, vision: false, imageGeneration: false, audio: false, jsonMode: true },
    contextWindow: 256000,
    maxOutputTokens: 128000,
    rank: 5,
    popularity: 9990,
    rating: 100,
    latencyMs: 980,
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
