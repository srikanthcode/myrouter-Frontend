import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDown, ArrowRight, ArrowUp, Search, SearchX, Sparkles, ShieldCheck } from "lucide-react";
import { PageHeader, PublicShell } from "@/components/PublicShell";
import { Badge, Button, EmptyState, Input } from "@/components/ui";
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
  title: "AI Model Directory — 500+ Frontier AI Models & LLMs | ProRouter",
  description:
    "Explore 500+ unique AI models including Mistral Leanstral, Novita Ling, NVIDIA Nemotron, Google Gemma, DeepSeek, Claude, and OpenAI. Compare real-time token pricing in INR and USD with India localized developer rates.",
  keywords: [
    "AI models",
    "LLM directory",
    "AI API catalog",
    "DeepSeek API",
    "Claude Sonnet API",
    "Kimi K2.7 Code",
    "Gemini Pro 1M context",
    "AI API pricing",
    "ProRouter models",
    "India AI API discount",
  ],
  alternates: {
    canonical: "https://www.prorouter.in/models",
  },
  openGraph: {
    title: "AI Model Directory — 500+ Frontier LLMs & APIs | ProRouter",
    description:
      "Explore 500+ unique frontier AI models with unified API keys and transparent token pricing in INR & USD.",
    url: "https://www.prorouter.in/models",
    siteName: "ProRouter",
    type: "website",
  },
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function one(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

const categories = [
  { key: "", label: "All Models (500+)" },
  { key: "general", label: "General" },
  { key: "reasoning", label: "Reasoning" },
  { key: "coding", label: "Coding" },
  { key: "agentic", label: "Agentic & Tools" },
  { key: "research", label: "Research" },
  { key: "math_science", label: "Math & Science" },
  { key: "multilingual", label: "Multilingual & Indic" },
  { key: "vision", label: "Vision & Docs" },
  { key: "fast", label: "Fast Response" },
  { key: "long_context", label: "Long Context" },
  { key: "creative", label: "Creative Writing" },
  { key: "business", label: "Business" },
];

const sorts: Array<{ key: string; label: string; dir?: "asc" | "desc" }> = [
  { key: "popularity", label: "Popularity" },
  { key: "rank", label: "Rank" },
  { key: "rating", label: "Rating" },
  { key: "newest", label: "Newest" },
  { key: "price_asc", label: "Price", dir: "asc" },
  { key: "price_desc", label: "Price", dir: "desc" },
];

/* Tab-like catalogue filter chip */
const chipBase =
  "inline-flex cursor-pointer items-center gap-1 rounded-md border px-2.5 py-1 text-[12.5px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const chipActive = "border-accent/40 bg-accent/10 text-accent";
const chipIdle = "border-line text-mut hover:border-line2 hover:text-fg";

const linkButtonSecondary =
  "inline-flex h-9 cursor-pointer items-center justify-center rounded-lg border border-line2 bg-white/[0.04] px-4 text-[13px] font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function buildQuery(base: Record<string, string | undefined>, patch: Record<string, string | undefined>): string {
  const merged = { ...base, ...patch };
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(merged)) {
    if (v) params.set(k, v);
  }
  const qs = params.toString();
  return qs ? `/models?${qs}` : "/models";
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
  const current = { q, provider, free, category, sort: sort === "popularity" ? "" : sort, currency };

  return (
    <PublicShell>
      <PageHeader
        eyebrow="Model catalogue"
        title="500+ Models. One Universal Endpoint."
        subtitle="Transparent per-million token pricing in INR and USD. Zero latency overhead and intelligent failover."
      >
        <form action="/models" method="get" className="flex max-w-lg gap-2">
          <div className="min-w-0 flex-1">
            <Input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Search models, providers, or capabilities…"
              aria-label="Search models"
              trailing={<Search className="size-4 text-mut2" strokeWidth={1.75} aria-hidden="true" />}
            />
          </div>
          {provider && <input type="hidden" name="provider" value={provider} />}
          {free && <input type="hidden" name="free" value={free} />}
          {currency && <input type="hidden" name="currency" value={currency} />}
          <Button type="submit" className="shrink-0">
            Search
          </Button>
        </form>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* ── India Developer Advantage Banner ── */}
        <div className="mb-8 relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-panel/80 to-panel p-5 shadow-lg shadow-accent/5 backdrop-blur-xs transition-all duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-0.5 text-xs font-semibold text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  🇮🇳 India Developer Advantage (~10% Localized Discount)
                </span>
                <span className="text-[12px] font-mono text-accent">₹80.00 INR = $1.00 USD</span>
              </div>
              <p className="text-[13.5px] leading-relaxed text-fg/90">
                Models charging <strong>$1.00 USD / 1M tokens</strong> globally are billed at only <strong>₹80.00 INR / 1M tokens</strong> in India. You save ~10% on raw token pricing, completely avoid 3.5% foreign exchange credit card markups, and pay instantly via <strong>UPI (Google Pay, PhonePe, Paytm, BHIM)</strong> or RuPay cards.
              </p>
            </div>

            {/* Currency Switcher Toggle */}
            <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0 self-stretch md:self-auto">
              <div className="text-[11px] font-medium uppercase tracking-wider text-mut2">Select Currency</div>
              <div className="inline-flex rounded-xl border border-line bg-panel2/90 p-1 shadow-inner">
                <Link
                  href={buildQuery(current, { currency: "INR" })}
                  className={cx(
                    "flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
                    currency === "INR"
                      ? "bg-accent text-accent-ink shadow-sm"
                      : "text-mut hover:text-fg"
                  )}
                >
                  <span>🇮🇳</span> INR (₹)
                </Link>
                <Link
                  href={buildQuery(current, { currency: "USD" })}
                  className={cx(
                    "flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
                    currency === "USD"
                      ? "bg-accent text-accent-ink shadow-sm"
                      : "text-mut hover:text-fg"
                  )}
                >
                  <span>🇺🇸</span> USD ($)
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11.5px] uppercase tracking-wide text-mut2">Tier</span>
            <Link href={buildQuery(current, { free: undefined })} aria-current={!free ? "page" : undefined} className={cx(chipBase, !free ? chipActive : chipIdle)}>
              All
            </Link>
            <Link href={buildQuery(current, { free: "true" })} aria-current={free === "true" ? "page" : undefined} className={cx(chipBase, free === "true" ? chipActive : chipIdle)}>
              Free only
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11.5px] uppercase tracking-wide text-mut2">Use case</span>
            {categories.map((c) => (
              <Link key={c.key || "all"} href={buildQuery(current, { category: c.key || undefined })} aria-current={category === c.key ? "page" : undefined} className={cx(chipBase, category === c.key ? chipActive : chipIdle)}>
                {c.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11.5px] uppercase tracking-wide text-mut2">Sort</span>
            {sorts.map((s) => {
              const active = sort === s.key || (s.key === "popularity" && !current.sort);
              return (
                <Link key={s.key} href={buildQuery(current, { sort: s.key === "popularity" ? undefined : s.key })} aria-current={active ? "page" : undefined} className={cx(chipBase, active ? chipActive : chipIdle)}>
                  {s.label}
                  {s.dir === "asc" && <ArrowUp className="size-3.5" strokeWidth={1.75} aria-hidden="true" />}
                  {s.dir === "desc" && <ArrowDown className="size-3.5" strokeWidth={1.75} aria-hidden="true" />}
                </Link>
              );
            })}
          </div>

          {providers.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11.5px] uppercase tracking-wide text-mut2">Provider</span>
              <Link href={buildQuery(current, { provider: undefined })} aria-current={!provider ? "page" : undefined} className={cx(chipBase, !provider ? chipActive : chipIdle)}>
                Any
              </Link>
              {providers.map((p) => (
                <Link key={p.slug} href={buildQuery(current, { provider: p.slug })} aria-current={provider === p.slug ? "page" : undefined} className={cx(chipBase, provider === p.slug ? chipActive : chipIdle)}>
                  {p.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="mb-4 text-[13px] text-mut">
          <span className="font-mono tabular-nums">{models.length}</span> unique model{models.length === 1 ? "" : "s"}
          {modelsRes?.total != null && modelsRes.total !== models.length ? (
            <>
              {" "}
              of <span className="font-mono tabular-nums">{modelsRes.total}</span>
            </>
          ) : null}
        </div>

        {models.length === 0 ? (
          <EmptyState
            icon={<SearchX className="size-6" strokeWidth={1.75} />}
            title="No models match those filters."
            body="Try clearing the search or picking a different use case."
            action={
              <Link href="/models" className={linkButtonSecondary}>
                Reset filters
              </Link>
            }
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((m) => {
              const dual = formatDualPricing(m.pricing.inputPerMillion, m.pricing.outputPerMillion, m.isFree);
              const isOneMillion = m.contextWindow >= 1000000;
              const isQuarterMillion = m.contextWindow >= 250000;
              const isTwoHundredK = m.contextWindow >= 200000;

              return (
                <Link
                  key={m.slug}
                  href={`/models/${m.slug}`}
                  className="group relative flex cursor-pointer flex-col rounded-2xl border border-line/80 bg-panel/95 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent backdrop-blur-xs"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h2 className="truncate text-[15.5px] font-semibold text-fg transition-colors duration-200 group-hover:text-accent">
                          {m.name}
                        </h2>
                        {m.isFree && (
                          <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                            FREE
                          </span>
                        )}
                      </div>
                      <div className="mt-1 font-mono text-[11px] text-mut2">{m.slug}</div>
                    </div>

                    <div className="shrink-0">
                      {isOneMillion ? (
                        <span className="rounded-full bg-indigo-500/20 border border-indigo-500/40 px-2.5 py-0.5 font-mono text-[11px] font-bold text-indigo-300 shadow-xs shadow-indigo-500/20">
                          1M ctx
                        </span>
                      ) : isQuarterMillion ? (
                        <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 font-mono text-[11px] font-bold text-emerald-300">
                          {compactNumber(m.contextWindow)} ctx
                        </span>
                      ) : isTwoHundredK ? (
                        <span className="rounded-full bg-sky-500/20 border border-sky-500/40 px-2.5 py-0.5 font-mono text-[11px] font-bold text-sky-300">
                          {compactNumber(m.contextWindow)} ctx
                        </span>
                      ) : (
                        <span className="rounded-full bg-white/[0.05] border border-line px-2.5 py-0.5 font-mono text-[11px] text-mut">
                          {compactNumber(m.contextWindow)} ctx
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mt-3 line-clamp-2 flex-1 text-[13px] leading-relaxed text-mut">
                    {m.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <Badge tone="neutral">{m.providerName}</Badge>
                    {m.capabilities.vision && <Badge tone="neutral">vision</Badge>}
                    {m.capabilities.toolCalls && <Badge tone="neutral">tools</Badge>}
                    {m.capabilities.reasoning && <Badge tone="neutral">reasoning</Badge>}
                    {m.capabilities.audio && <Badge tone="neutral">audio</Badge>}
                    {m.maxOutputTokens && (
                      <span className="rounded-md border border-line2/40 bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-mut2">
                        {compactNumber(m.maxOutputTokens)} out
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-end justify-between border-t border-line/70 pt-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-mut2">
                        <span>Input / output (1M tokens)</span>
                        {!m.isFree && currency === "INR" && (
                          <span className="text-[10px] text-emerald-400 font-semibold font-mono">🇮🇳 ₹80/$1</span>
                        )}
                      </div>
                      <div className="mt-1 font-mono text-[13px] font-semibold tabular-nums text-fg flex items-baseline gap-2">
                        {currency === "INR" ? (
                          <>
                            <span className={m.isFree ? "text-emerald-400" : "text-fg"}>
                              {dual.inrPerMillion}
                            </span>
                            {!m.isFree && (
                              <span className="text-[11px] text-mut2 font-normal">
                                ({dual.usdPerMillion} USD)
                              </span>
                            )}
                          </>
                        ) : (
                          <>
                            <span className={m.isFree ? "text-emerald-400" : "text-fg"}>
                              {dual.usdPerMillion}
                            </span>
                            {!m.isFree && (
                              <span className="text-[11px] text-mut2 font-normal">
                                ({dual.inrPerMillion} INR)
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[12.5px] font-medium text-accent opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5">
                      View
                      <ArrowRight className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </PublicShell>
  );
}
