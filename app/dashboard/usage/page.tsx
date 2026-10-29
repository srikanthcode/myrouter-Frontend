"use client";

import { useCallback, useEffect, useState } from "react";
import { Activity, Cpu, IndianRupee, TriangleAlert } from "lucide-react";
import { ApiError, api, formatINR } from "@/lib/api";
import { Badge, Card, Skeleton } from "@/components/ui";
import { useSession } from "@/components/DashboardShell";
import { BarChart, UsageBars, type SeriesPoint } from "@/components/Charts";

interface Usage {
  byModel: Array<{ model: string | null; n: number; tokens: number; cost: number }>;
  byProvider: Array<{ provider: string | null; n: number; tokens: number }>;
}

type Metric = "requests" | "tokens" | "costPaise";

function compact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

const segBtn =
  "cursor-pointer rounded-md font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const segBtnActive = "bg-white/[0.06] text-fg";
const segBtnIdle = "text-mut hover:text-fg";

export default function UsagePage() {
  const { refresh } = useSession();
  const [usage, setUsage] = useState<Usage | null>(null);
  const [series, setSeries] = useState<SeriesPoint[]>([]);
  const [days, setDays] = useState(30);
  const [metric, setMetric] = useState<Metric>("requests");
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const [u, s] = await Promise.all([
        api<Usage>("/dashboard/usage"),
        api<{ items: SeriesPoint[] }>(`/dashboard/series?days=${days}`),
      ]);
      setUsage(u);
      setSeries(Array.isArray(s?.items) ? s.items : Array.isArray(s) ? (s as unknown as SeriesPoint[]) : []);
      setError(null);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Could not load usage.");
    }
  }, [days]);

  useEffect(() => {
    void refresh();
    void load();
  }, [load]);

  if (error) return <div className="rounded-xl border border-bad/30 bg-bad/10 p-4 text-sm text-bad" role="alert">{error}</div>;
  if (!usage) return <div className="space-y-4">{[0, 1, 2].map((i) => <Skeleton key={i} className="h-32 w-full" />)}</div>;

  const totalRequests = (usage.byModel || []).reduce((a, m) => a + (m?.n || 0), 0);
  const totalTokens = (usage.byModel || []).reduce((a, m) => a + (m?.tokens || 0), 0);
  const totalCost = (usage.byModel || []).reduce((a, m) => a + (m?.cost || 0), 0);
  const windowRequests = (series || []).reduce((a, s) => a + (s?.requests || 0), 0);
  const windowTokens = (series || []).reduce((a, s) => a + (s?.tokens || 0), 0);
  const windowCost = (series || []).reduce((a, s) => a + (s?.costPaise || 0), 0);
  const windowErrors = (series || []).reduce((a, s) => a + (s?.errors || 0), 0);
  const errorRate = windowRequests > 0 ? (windowErrors / windowRequests) * 100 : 0;

  const cards = [
    { label: `Requests · ${days}d`, value: windowRequests.toLocaleString(), icon: Activity },
    { label: `Tokens · ${days}d`, value: compact(windowTokens), icon: Cpu },
    { label: `Spend · ${days}d`, value: formatINR(windowCost), icon: IndianRupee },
    { label: "Error rate", value: `${errorRate.toFixed(1)}%`, icon: TriangleAlert },
  ];

  return (
    <div className="fade-up space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Usage</h1>
          <p className="mt-1 text-[13.5px] text-mut">Aggregated usage over the last 30 days, plus a daily breakdown for the selected window.</p>
        </div>
        <div className="inline-flex items-center gap-0.5 rounded-lg border border-line p-0.5" role="group" aria-label="Time window">
          {[7, 14, 30, 90].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDays(d)}
              aria-current={days === d ? "true" : undefined}
              className={`${segBtn} px-3 py-1 text-[12.5px] ${days === d ? segBtnActive : segBtnIdle}`}
            >
              {d}d
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Card key={c.label} className="p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="text-[11.5px] uppercase tracking-wide text-mut2">{c.label}</div>
                <Icon className="size-3.5 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div className="mt-1.5 font-mono text-lg font-semibold tabular-nums">{c.value}</div>
            </Card>
          );
        })}
      </div>

      <Card className="p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-sm font-semibold">Daily breakdown · last {days} days</h2>
          <div className="inline-flex items-center gap-0.5 rounded-lg border border-line p-0.5" role="group" aria-label="Chart metric">
            {([["requests", "Requests"], ["tokens", "Tokens"], ["costPaise", "Cost"]] as const).map(([k, label]) => (
              <button
                key={k}
                type="button"
                onClick={() => setMetric(k)}
                aria-current={metric === k ? "true" : undefined}
                className={`${segBtn} px-2.5 py-1 text-[12px] ${metric === k ? segBtnActive : segBtnIdle}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <BarChart data={series} metric={metric} />
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <h2 className="mb-1 text-sm font-semibold">By model · 30 days</h2>
          <p className="mb-4 text-[12.5px] text-mut2">Share of requests per model.</p>
          <UsageBars
            items={usage.byModel.filter((m) => m.model).map((m) => ({ label: m.model!, value: m.n, hint: `${compact(m.tokens)} tok` }))}
            total={totalRequests}
          />
        </Card>

        <Card className="p-5">
          <h2 className="mb-1 text-sm font-semibold">By provider · 30 days</h2>
          <p className="mb-4 text-[12.5px] text-mut2">Which upstream provider served your traffic.</p>
          <UsageBars
            items={usage.byProvider.filter((p) => p.provider).map((p) => ({ label: p.provider!, value: p.n, hint: `${compact(p.tokens)} tok` }))}
            total={totalRequests}
          />
        </Card>
      </div>

      {usage.byModel.length > 0 && (
        <Card>
          <div className="border-b border-line px-5 py-3.5">
            <h2 className="text-sm font-semibold">Cost by model · 30 days</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]">
              <thead className="text-[11px] uppercase tracking-wide text-mut2">
                <tr className="border-b border-line">
                  <th scope="col" className="px-5 py-2.5 font-medium">Model</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Requests</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Tokens</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Avg tokens</th>
                  <th scope="col" className="px-5 py-2.5 font-medium">Cost</th>
                </tr>
              </thead>
              <tbody>
                {usage.byModel.map((m) => (
                  <tr key={m.model ?? "unknown"} className="border-b border-line/60 transition-colors duration-200 last:border-0 hover:bg-white/[0.03]">
                    <td className="whitespace-nowrap px-5 py-2.5 font-mono text-[12.5px]">{m.model ?? "unknown"}</td>
                    <td className="whitespace-nowrap px-3 py-2.5 font-mono tabular-nums">{m.n.toLocaleString()}</td>
                    <td className="whitespace-nowrap px-3 py-2.5 font-mono tabular-nums text-mut">{m.tokens.toLocaleString()}</td>
                    <td className="whitespace-nowrap px-3 py-2.5 font-mono tabular-nums text-mut">{Math.round(m.tokens / Math.max(1, m.n)).toLocaleString()}</td>
                    <td className="whitespace-nowrap px-5 py-2.5 font-mono tabular-nums">{m.cost === 0 ? <Badge tone="free">FREE</Badge> : formatINR(m.cost)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-line">
                  <td className="px-5 py-2.5 text-[12px] uppercase tracking-wide text-mut2">Total</td>
                  <td className="whitespace-nowrap px-3 py-2.5 font-mono tabular-nums">{totalRequests.toLocaleString()}</td>
                  <td className="whitespace-nowrap px-3 py-2.5 font-mono tabular-nums text-mut">{totalTokens.toLocaleString()}</td>
                  <td className="px-3 py-2.5" />
                  <td className="whitespace-nowrap px-5 py-2.5 font-mono tabular-nums">{formatINR(totalCost)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}
