export interface TextModel {
  id: string;
  name: string;
  tier: string;
  description: string;
  bestFor: string;
  inputPerMillion: number;
  outputPerMillion: number;
}

export interface MonthlyPlan {
  id: string;
  name: string;
  priceUsd: number;
  replies: number | null;
  tagline: string;
  features: string[];
  popular?: boolean;
  status: "preview" | "waitlist";
}

export interface UsageDay {
  date: string;
  replies: number;
}

export interface RecentReply {
  id: string;
  model: string;
  at: string;
  inputTokens: number;
  outputTokens: number;
  latencyMs: number;
  replies: number;
  status: "completed" | "failed";
}

export const TEXT_MODELS: TextModel[] = [
  {
    id: "pr-echo",
    name: "Pro Router Echo",
    tier: "Starter",
    description: "A basic, affordable text-to-text model for everyday questions, short answers, summaries, and simple chat.",
    bestFor: "Everyday questions, short answers, summaries, and simple chat",
    inputPerMillion: 0.20,
    outputPerMillion: 0.80,
  },
  {
    id: "pr-swift",
    name: "Pro Router Swift",
    tier: "Fast",
    description: "Designed for quick responses, customer support, chatbots, and high-volume applications.",
    bestFor: "Quick responses, customer support, chatbots, and high-volume applications",
    inputPerMillion: 0.30,
    outputPerMillion: 1.20,
  },
  {
    id: "pr-nova",
    name: "Pro Router Nova",
    tier: "Chat",
    description: "Your general-purpose premium model for detailed answers, writing, reasoning, and everyday development assistance.",
    bestFor: "Detailed answers, writing, reasoning, and everyday development assistance",
    inputPerMillion: 0.50,
    outputPerMillion: 2.00,
  },
  {
    id: "pr-aura",
    name: "Pro Router Aura",
    tier: "Writing",
    description: "Positioned for more advanced reasoning, long-form content, complex instructions, and coding assistance, depending on the configured backend.",
    bestFor: "Advanced reasoning, long-form content, complex instructions, and coding assistance",
    inputPerMillion: 0.75,
    outputPerMillion: 3.00,
  },
  {
    id: "pr-zenith",
    name: "Pro Router Zenith",
    tier: "Flagship",
    description: "Your flagship tier for the most demanding text tasks, complex analysis, and coding workflows supported by your chosen backend.",
    bestFor: "Demanding text tasks, complex analysis, and coding workflows",
    inputPerMillion: 1.00,
    outputPerMillion: 4.00,
  },
];

export interface ModelTokenPrice {
  model: string;
  name: string;
  inputPerMillion: number;
  outputPerMillion: number;
}

export const MODEL_TOKEN_PRICING: ModelTokenPrice[] = [
  { model: "pr-echo", name: "Echo", inputPerMillion: 0.20, outputPerMillion: 0.80 },
  { model: "pr-swift", name: "Swift", inputPerMillion: 0.30, outputPerMillion: 1.20 },
  { model: "pr-nova", name: "Nova", inputPerMillion: 0.50, outputPerMillion: 2.00 },
  { model: "pr-aura", name: "Aura", inputPerMillion: 0.75, outputPerMillion: 3.00 },
  { model: "pr-zenith", name: "Zenith", inputPerMillion: 1.00, outputPerMillion: 4.00 },
];

export const TEXT_PAYG = {
  id: "text-payg",
  name: "Text Starter",
  tagline: "One pay-as-you-go rate for all five text models.",
  inputUsdPerMillion: 0.5,
  outputUsdPerMillion: 1.5,
};

export const TEXT_PLANS: MonthlyPlan[] = [
  {
    id: "text-mini",
    name: "Text Mini",
    priceUsd: 4.99,
    replies: 1000,
    tagline: "For beginners and casual users",
    features: [
      "Up to 1,000 replies per month",
      "Access to Echo and Swift",
      "Standard response limits",
    ],
    status: "preview",
  },
  {
    id: "text-plus",
    name: "Text Plus",
    priceUsd: 9.99,
    replies: 3000,
    tagline: "For regular AI users",
    features: [
      "Up to 3,000 replies per month",
      "Access to all five models",
      "Higher usage limits",
    ],
    popular: true,
    status: "preview",
  },
  {
    id: "text-pro",
    name: "Text Pro",
    priceUsd: 19.99,
    replies: 10000,
    tagline: "For developers and power users",
    features: [
      "Up to 10,000 replies per month",
      "Access to all five models",
      "Priority rate limits, where infrastructure allows",
    ],
    status: "preview",
  },
  {
    id: "text-unlimited",
    name: "Text Unlimited",
    priceUsd: 29.99,
    replies: null,
    tagline: "For heavy users",
    features: [
      "High-volume text generation",
      "Access to all five models",
      "Published fair-use and rate limits",
    ],
    status: "waitlist",
  },
];

export const TEXT_USAGE = {
  planId: "text-plus",
  planName: "Text Plus",
  status: "Active preview subscription",
  periodStart: "1 Oct 2026",
  renews: "1 Nov 2026",
  priceUsd: 9.99,
  repliesIncluded: 3000,
  repliesUsed: 2455,
  inputTokens: 1_842_000,
  outputTokens: 942_000,
  failedRequests: 17,
  avgLatencyMs: 1840,
};

export const TEXT_USAGE_DAYS: UsageDay[] = [
  { date: "2026-10-13", replies: 142 },
  { date: "2026-10-14", replies: 148 },
  { date: "2026-10-15", replies: 141 },
  { date: "2026-10-16", replies: 170 },
  { date: "2026-10-17", replies: 156 },
  { date: "2026-10-18", replies: 184 },
  { date: "2026-10-19", replies: 169 },
  { date: "2026-10-20", replies: 151 },
  { date: "2026-10-21", replies: 168 },
  { date: "2026-10-22", replies: 192 },
  { date: "2026-10-23", replies: 186 },
  { date: "2026-10-24", replies: 215 },
  { date: "2026-10-25", replies: 201 },
  { date: "2026-10-26", replies: 232 },
];

export const TEXT_RECENT_REPLIES: RecentReply[] = [
  { id: "txt_8f2a", model: "pr-aura", at: "26 Oct · 09:42", inputTokens: 1240, outputTokens: 680, latencyMs: 1840, replies: 1, status: "completed" },
  { id: "txt_8f1c", model: "pr-nova", at: "26 Oct · 09:38", inputTokens: 980, outputTokens: 410, latencyMs: 1210, replies: 1, status: "completed" },
  { id: "txt_8ef4", model: "pr-swift", at: "26 Oct · 09:31", inputTokens: 420, outputTokens: 160, latencyMs: 640, replies: 1, status: "completed" },
  { id: "txt_8e91", model: "pr-zenith", at: "26 Oct · 09:18", inputTokens: 2180, outputTokens: 1420, latencyMs: 3260, replies: 1, status: "completed" },
  { id: "txt_8e42", model: "pr-nova", at: "26 Oct · 09:02", inputTokens: 860, outputTokens: 0, latencyMs: 30000, replies: 0, status: "failed" },
  { id: "txt_8dff", model: "pr-echo", at: "26 Oct · 08:56", inputTokens: 310, outputTokens: 120, latencyMs: 480, replies: 1, status: "completed" },
  { id: "txt_8dc1", model: "pr-aura", at: "26 Oct · 08:49", inputTokens: 1520, outputTokens: 890, latencyMs: 2110, replies: 1, status: "completed" },
];

export const TEXT_REPLY_RULES = [
  {
    title: "One completed response",
    body: "One successfully completed AI response counts as one text reply. A conversation can contain many replies.",
  },
  {
    title: "Failures do not consume replies",
    body: "Requests that fail before a response completes do not use an allowance. The preview usage data follows this rule.",
  },
  {
    title: "Streaming counts once",
    body: "A streamed answer counts when it completes successfully, not once per streamed chunk.",
  },
  {
    title: "Retries and regenerations",
    body: "A retry or regeneration counts only if it completes successfully. Prompt tokens still affect PAYG billing when they reach the model.",
  },
  {
    title: "Long answers use more tokens",
    body: "A reply is a unit of access, not a fixed amount of text. Input, output, and context length all affect token consumption.",
  },
  {
    title: "No silent overage",
    body: "Monthly plans show the allowance and what happens at the limit before checkout. This preview does not charge an overage fee.",
  },
];

export const TEXT_FAQS = [
  {
    q: "What counts as one text reply?",
    a: "One successfully completed AI response counts as one text reply. A single conversation can include several replies, and a streamed answer counts once when it completes.",
  },
  {
    q: "How does pay-as-you-go billing work?",
    a: "Our models have explicit per-token pricing: Echo ($0.20/$0.80), Swift ($0.30/$1.20), Nova ($0.50/$2.00), Aura ($0.75/$3.00), and Zenith ($1.00/$4.00) per 1M tokens. There is no forced monthly subscription for pay-as-you-go.",
  },
  {
    q: "Do failed requests use my allowance?",
    a: "No. A request that fails before a response completes does not consume a reply under this preview policy.",
  },
  {
    q: "Can I change or cancel a monthly plan?",
    a: "The management screen previews plan changes and cancellation. It does not call a billing API, so no subscription is created, changed, or canceled from this preview.",
  },
  {
    q: "Is Text Unlimited actually unlimited?",
    a: "Text Unlimited is designed for heavy users under published fair-use and rate limits to guarantee high availability.",
  },
  {
    q: "Where can I see replies used and remaining?",
    a: "The Text & Reply usage screen shows the current plan, renewal date, replies consumed, replies remaining, token totals, and recent requests.",
  },
];

export const TEXT_BENEFITS = [
  { title: "Five models, one API", body: "Use one OpenAI-compatible interface instead of integrating several text providers." },
  { title: "Token-level PAYG", body: "Pay for billable input and output tokens with transparent per-token rates." },
  { title: "Predictable monthly options", body: "Choose a reply allowance for steadier spending when usage is regular." },
  { title: "Usage you can see", body: "Track replies consumed, replies remaining, token totals, and recent requests." },
  { title: "Failures do not count", body: "A request that fails before completion does not use a reply under the stated policy." },
  { title: "No silent overage", body: "Allowances and limit behavior are disclosed before checkout, not after a bill arrives." },
];

export const TEXT_STEPS = [
  { title: "Choose how you pay", body: "Start with token-based PAYG or compare monthly reply allowances." },
  { title: "Send text through one API", body: "Point an OpenAI-compatible client at the text models that fit the task." },
  { title: "Track replies and spend", body: "Review replies consumed, remaining allowance, tokens, and recent requests." },
];

export const TEXT_COMPARISON = [
  { label: "Billing unit", payg: "Billable input and output tokens", monthly: "Monthly reply allowance" },
  { label: "Commitment", payg: "No monthly subscription", monthly: "Billed monthly while active" },
  { label: "Best for", payg: "Variable or occasional use", monthly: "Regular conversations and teams" },
  { label: "At the limit", payg: "Wallet balance gates new requests", monthly: "Upgrade, switch to PAYG, or wait for renewal" },
  { label: "Usage view", payg: "Tokens and accumulated charges", monthly: "Replies used and remaining, plus tokens" },
];

export function usd(value: number, digits = 2): string {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: digits, maximumFractionDigits: digits });
}

export function compact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

export function planById(id: string | undefined): MonthlyPlan {
  return TEXT_PLANS.find((plan) => plan.id === id) ?? TEXT_PLANS[1];
}
