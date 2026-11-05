import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDown, ArrowRight, ArrowUp, Search, SearchX, Sparkles, ShieldCheck } from "lucide-react";
import { PageHeader, PublicShell } from "@/components/PublicShell";
import { Badge, Button, EmptyState, Input } from "@/components/ui";
import { ModelsTable } from "@/components/ModelsTable";
import { cx } from "@/lib/api";
import {
  compactNumber,
  fetchJson,
  formatDualPricing,
  getFilteredDefaultModels,
  DEFAULT_PROVIDERS,
  type ModelSummary,
  type ProviderSummary,
} from "@/lib/server-api";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "AI Model Directory — 500+ AI Models & LLMs | ProRouter",
  description:
    "Explore 500+ AI models including DeepSeek V4.1 Flash, Qwen3.8-27B, Claude 3.7 Sonnet, Gemini Pro, and OpenAI. Compare real-time token pricing in INR and USD with India localized developer rates.",
  keywords: [
    "AI models",
    "LLM directory",
    "AI API catalog",
    "DeepSeek API",
    "Claude Sonnet API",
    "Qwen3.8-27B",
    "Gemini Pro 1M context",
    "AI API pricing",
    "ProRouter models",
    "India AI API discount",
  ],
  alternates: {
    canonical: "https://www.prorouter.in/models",
  },
  openGraph: {
    title: "AI Model Directory — 500+ AI Models & APIs | ProRouter",
    description:
      "Explore 500+ AI models with unified API keys and transparent token pricing in INR & USD.",
    url: "https://www.prorouter.in/models",
    siteName: "ProRouter",
    type: "website",
  },
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function one(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

export default async function ModelsPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const q = one(sp.q) ?? "";
  const provider = one(sp.provider) ?? "";
  const free = one(sp.free) ?? "";
  const category = one(sp.category) ?? "";
  const sort = one(sp.sort) ?? "popularity";
  const currency = (one(sp.currency) || "INR").toUpperCase() === "USD" ? "USD" : "INR";

  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (provider) params.set("provider", provider);
  if (free) params.set("free", free);
  if (category) params.set("category", category);
  if (sort) params.set("sort", sort);
  params.set("limit", "600");

  const [modelsRes, providersRes] = await Promise.all([
    fetchJson<{ items: ModelSummary[]; total: number }>(`/models?${params.toString()}`),
    fetchJson<ProviderSummary[]>("/providers"),
  ]);

  const rawModels = modelsRes?.items && modelsRes.items.length > 0 ? modelsRes.items : getFilteredDefaultModels({ q, provider, free, category, sort });
  // Deduplicate models by slug so no duplicate data is ever displayed
  const seenSlugs = new Set<string>();
  const models = rawModels.filter((m) => {
    if (seenSlugs.has(m.slug)) return false;
    seenSlugs.add(m.slug);
    return true;
  });

  const providers = providersRes && providersRes.length > 0 ? providersRes : DEFAULT_PROVIDERS;

  return (
    <PublicShell>
      <PageHeader
        eyebrow="Universal Model Marketplace"
        title="500+ AI Models. One Unified Marketplace."
        subtitle="Transparent per-million token pricing in INR and USD. Zero latency overhead and intelligent failover."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* ── India Developer Advantage Banner ── */}
        <div className="mb-6 relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-panel/80 to-panel p-5 shadow-lg shadow-accent/5 backdrop-blur-xs transition-all duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-0.5 text-xs font-semibold text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  🇮🇳 India Developer Advantage (~10% Localized Discount)
                </span>
                <span className="text-[12px] font-mono text-accent">₹80.00 INR = $1.00 USD Policy Rate</span>
              </div>
              <p className="text-[13.5px] leading-relaxed text-fg/90">
                Models charging <strong>$1.00 USD / 1M tokens</strong> globally are billed at only <strong>₹80.00 INR / 1M tokens</strong> in India. You save ~10% on raw token pricing, completely avoid 3.5% foreign exchange credit card markups, and pay instantly via <strong>UPI (Google Pay, PhonePe, Paytm, BHIM)</strong> or RuPay cards.
              </p>
            </div>
          </div>
        </div>

        {/* ── 48-Hour Promotional Launch Special (§Phase 4) ── */}
        <div className="mb-6 relative overflow-hidden rounded-2xl border border-accent/40 bg-gradient-to-r from-accent/20 via-panel to-panel2 p-6 shadow-xl shadow-accent/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 border border-accent/40 px-3 py-1 text-xs font-bold text-accent uppercase tracking-wider">
                  <Sparkles className="size-3.5" />
                  LAUNCH SPECIAL · 48 HOURS FREE
                </span>
                <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                  Strictly 2 Canonical Models
                </span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
                48 Hours Free: DeepSeek V4.1 Flash & Qwen3.8-27B
              </h2>
              <p className="text-xs text-mut leading-relaxed">
                Exclusively DeepSeek V4.1 Flash and Qwen3.8-27B receive 48 hours of free promotional access upon user activation up to daily promotional quota. All other 498+ models feature transparent, low-margin developer pricing with no hidden markups.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0">
              <Link
                href="/chat?model=deepseek-v4.1-flash"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-xs font-bold text-ink shadow-md hover:opacity-95 transition-all duration-200"
              >
                <span>🚀 Activate Free Access</span>
              </Link>
              <Link
                href="/chat?model=qwen3.8-27b"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-panel2/80 px-4 py-2.5 text-xs font-semibold text-fg hover:bg-panel2 transition-colors"
              >
                <span>Test Qwen 3.8</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Token Harbor Compact Horizontal Model Marketplace Table ── */}
        <ModelsTable
          initialModels={models}
          initialProviders={providers}
          initialCurrency={currency}
          initialCategory={category}
          initialQuery={q}
        />
      </div>
    </PublicShell>
  );
}
