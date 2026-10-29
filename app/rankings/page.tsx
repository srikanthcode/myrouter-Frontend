import Link from "next/link";
import type { Metadata } from "next";
import { Trophy } from "lucide-react";
import { PageHeader, PublicShell } from "@/components/PublicShell";
import { EmptyState } from "@/components/ui";
import { cx } from "@/lib/api";
import { compactNumber, fetchJson, formatPerMillion, getFilteredDefaultModels, type ModelSummary } from "@/lib/server-api";

export const metadata: Metadata = {
  title: "Rankings",
  description: "Model leaderboard by rating, popularity and context window across every provider on ProRouter.",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function one(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

const boards = [
  { key: "rating", label: "Top rated" },
  { key: "popularity", label: "Most popular" },
  { key: "rank", label: "Platform rank" },
  { key: "price_asc", label: "Cheapest" },
];

/* Tab-like leaderboard selector (hairline border, flat surface). */
const chipBase =
  "inline-flex cursor-pointer items-center rounded-md border px-3 py-1.5 text-[13px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const chipActive = "border-accent/40 bg-accent/10 text-accent";
const chipIdle = "border-line text-mut hover:border-line2 hover:text-fg";

export default async function RankingsPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const board = one(sp.board) ?? "rating";
  const res = await fetchJson<{ items: ModelSummary[] }>(`/models?sort=${encodeURIComponent(board)}&limit=50`);
  const models = res?.items && res.items.length > 0 ? res.items : getFilteredDefaultModels({ sort: board });

  return (
    <PublicShell>
      <PageHeader
        eyebrow="Leaderboard"
        title="Model rankings."
        subtitle="Ordered by platform signals — rating, popularity, rank and price."
      >
        <div className="flex flex-wrap gap-2">
          {boards.map((b) => (
            <Link key={b.key} href={`/rankings?board=${b.key}`} aria-current={board === b.key ? "page" : undefined} className={cx(chipBase, board === b.key ? chipActive : chipIdle)}>
              {b.label}
            </Link>
          ))}
        </div>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {models.length === 0 ? (
          <EmptyState icon={<Trophy className="size-6" strokeWidth={1.75} />} title="No models to rank yet." />
        ) : (
          <div className="overflow-hidden rounded-xl border border-line bg-panel">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]">
                <thead className="text-[11px] uppercase tracking-wide text-mut2">
                  <tr className="border-b border-line">
                    <th scope="col" className="px-5 py-3 font-medium">#</th>
                    <th scope="col" className="px-3 py-3 font-medium">Model</th>
                    <th scope="col" className="px-3 py-3 font-medium">Provider</th>
                    <th scope="col" className="px-3 py-3 font-medium">Rating</th>
                    <th scope="col" className="px-3 py-3 font-medium">Popularity</th>
                    <th scope="col" className="px-3 py-3 font-medium">Context</th>
                    <th scope="col" className="px-3 py-3 font-medium">Input</th>
                    <th scope="col" className="px-5 py-3 font-medium">Output</th>
                  </tr>
                </thead>
                <tbody>
                  {models.map((m, i) => (
                    <tr key={m.slug} className="border-b border-line/60 transition-colors duration-200 last:border-0 hover:bg-white/[0.03]">
                      <td className="whitespace-nowrap px-5 py-3 font-mono tabular-nums text-mut2">{i + 1}</td>
                      <td className="px-3 py-3">
                        <Link href={`/models/${m.slug}`} className="font-medium transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                          {m.name}
                        </Link>
                        <div className="mt-0.5 flex items-center gap-1.5">
                          <span className="font-mono text-[11px] text-mut2">{m.slug}</span>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-mut">{m.providerName}</td>
                      <td className="whitespace-nowrap px-3 py-3 font-mono tabular-nums">{m.rating}</td>
                      <td className="whitespace-nowrap px-3 py-3 font-mono tabular-nums text-mut">{compactNumber(m.popularity)}</td>
                      <td className="whitespace-nowrap px-3 py-3 font-mono tabular-nums text-mut">{compactNumber(m.contextWindow)}</td>
                      <td className="whitespace-nowrap px-3 py-3 font-mono tabular-nums">{formatPerMillion(m.pricing.inputPerMillion)}</td>
                      <td className="whitespace-nowrap px-5 py-3 font-mono tabular-nums">{formatPerMillion(m.pricing.outputPerMillion)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <p className="mt-4 text-[12.5px] text-mut2">
          Ratings and popularity are platform signals maintained by ProRouter, not third-party benchmarks.
        </p>
      </div>
    </PublicShell>
  );
}