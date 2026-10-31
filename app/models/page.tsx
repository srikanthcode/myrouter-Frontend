import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDown, ArrowRight, ArrowUp, Search, SearchX } from "lucide-react";
import { PageHeader, PublicShell } from "@/components/PublicShell";
import { Badge, Button, EmptyState, Input } from "@/components/ui";
import { cx } from "@/lib/api";
import { compactNumber, fetchJson, formatPerMillion, getFilteredDefaultModels, DEFAULT_PROVIDERS, type ModelSummary, type ProviderSummary } from "@/lib/server-api";

export const metadata: Metadata = {
  title: "AI Model Directory — 35+ LLMs & Frontier APIs | ProRouter",
  description:
    "Explore 35+ frontier and open-weight AI models including DeepSeek V4.1, Claude 3.5 Sonnet, Moonshot Kimi K2.7 Code, and OpenAI. Compare real-time token pricing, context windows, and latency.",
  keywords: [
    "AI models",
    "LLM directory",
    "AI API catalog",
    "DeepSeek API",
    "Claude Sonnet API",
    "Kimi K2.7 Code",
    "Qwen 3.8",
    "AI API pricing",
    "ProRouter models",
    "best LLM router",
  ],
  alternates: {
    canonical: "https://www.prorouter.in/models",
  },
  openGraph: {
    title: "AI Model Directory — 35+ LLMs & Frontier APIs | ProRouter",
    description:
      "Explore 35+ frontier and open-weight AI models with unified API keys and transparent per-token pricing.",
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
  { key: "", label: "All" },
  { key: "coding", label: "Coding" },
  { key: "reasoning", label: "Reasoning" },
  { key: "vision", label: "Vision" },
  { key: "tools", label: "Tool use" },
];

const sorts: Array<{ key: string; label: string; dir?: "asc" | "desc" }> = [
  { key: "popularity", label: "Popularity" },
  { key: "rank", label: "Rank" },
  { key: "rating", label: "Rating" },
  { key: "newest", label: "Newest" },
  { key: "price_asc", label: "Price", dir: "asc" },
  { key: "price_desc", label: "Price", dir: "desc" },
];

/* Tab-like catalogue filter chip (hairline border, flat surface). */
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

  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (provider) params.set("provider", provider);
  if (free) params.set("free", free);
  if (category) params.set("category", category);
  if (sort) params.set("sort", sort);
  params.set("limit", "120");

  const [modelsRes, providersRes] = await Promise.all([
    fetchJson<{ items: ModelSummary[]; total: number }>(`/models?${params.toString()}`),
    fetchJson<ProviderSummary[]>("/providers"),
  ]);

  const models = modelsRes?.items && modelsRes.items.length > 0 ? modelsRes.items : getFilteredDefaultModels({ q, provider, free, category, sort });
  const providers = providersRes && providersRes.length > 0 ? providersRes : DEFAULT_PROVIDERS;
  const current = { q, provider, free, category, sort: sort === "popularity" ? "" : sort };

  return (
    <PublicShell>
      <PageHeader
        eyebrow="Model catalogue"
        title="Every model, one endpoint."
        subtitle="Pricing is shown per million tokens in INR. Rate limits and the shared queue are set by your plan."
      >
        <form action="/models" method="get" className="flex max-w-lg gap-2">
          <div className="min-w-0 flex-1">
            <Input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Search models…"
              aria-label="Search models"
              trailing={<Search className="size-4 text-mut2" strokeWidth={1.75} aria-hidden="true" />}
            />
          </div>
          {provider && <input type="hidden" name="provider" value={provider} />}
          {free && <input type="hidden" name="free" value={free} />}
          <Button type="submit" className="shrink-0">
            Search
          </Button>
        </form>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
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
          <span className="font-mono tabular-nums">{models.length}</span> model{models.length === 1 ? "" : "s"}
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
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((m) => (
              <Link
                key={m.slug}
                href={`/models/${m.slug}`}
                className="group flex cursor-pointer flex-col rounded-xl border border-line bg-panel p-5 transition-colors duration-200 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="truncate text-[15px] font-semibold text-fg transition-colors duration-200 group-hover:text-accent">{m.name}</h2>
                    <div className="mt-1 font-mono text-[11.5px] text-mut2">{m.slug}</div>
                  </div>
                </div>

                <p className="mt-3 line-clamp-2 flex-1 text-[13px] leading-relaxed text-mut">{m.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {m.isFree && <Badge tone="free">FREE</Badge>}
                  <Badge tone="neutral">{m.providerName}</Badge>
                  <Badge tone="neutral">
                    <span className="font-mono tabular-nums">{compactNumber(m.contextWindow)}</span> ctx
                  </Badge>
                  {m.capabilities.vision && <Badge tone="neutral">vision</Badge>}
                  {m.capabilities.toolCalls && <Badge tone="neutral">tools</Badge>}
                  {m.capabilities.reasoning && <Badge tone="neutral">reasoning</Badge>}
                </div>

                <div className="mt-4 flex items-end justify-between border-t border-line pt-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-wide text-mut2">Input / output</div>
                    <div className="mt-0.5 font-mono text-[12.5px] tabular-nums text-fg">
                      {m.isFree || (m.pricing.inputPerMillion === 0 && m.pricing.outputPerMillion === 0)
                        ? "₹0 (Free tier)"
                        : `${formatPerMillion(m.pricing.inputPerMillion)} / ${formatPerMillion(m.pricing.outputPerMillion)}`}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    View
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </PublicShell>
  );
}
