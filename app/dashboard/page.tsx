"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Activity, ArrowRight, Cpu, CreditCard, IndianRupee, KeyRound, Sparkles, Terminal, Wallet } from "lucide-react";
import { api, formatINR, timeAgo } from "@/lib/api";
import { Badge, Card, Skeleton } from "@/components/ui";
import { useSession } from "@/components/DashboardShell";
import { BarChart, UsageBars, type SeriesPoint } from "@/components/Charts";

interface Overview {
  balancePaise: number;
  balanceFormatted: string;
  today: { requests: number; tokens: number; costPaise: number };
  month: { requests: number; tokens: number; costPaise: number };
  activeKeys: number;
  freeUsed: number;
  plan: { slug: string; name: string; freeRpm: number; queuePriority: number } | null;
  astra: { active: boolean; expiresAt: string | null; daysLeft?: number };
  queue: Array<{ modelKey: string; running: number; waiting: number }>;
}

interface ActivityItem {
  id: string;
  createdAt: string;
  model: string | null;
  modelName: string | null;
  provider: string | null;
  status: string;
  totalTokens: number;
  costPaise: number;
  latencyMs: number | null;
  isFree: boolean;
}

interface Usage {
  byModel: Array<{ model: string | null; n: number; tokens: number; cost: number }>;
  byProvider: Array<{ provider: string | null; n: number; tokens: number }>;
}

function compact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

const linkButtonPrimary =
  "inline-flex h-8 cursor-pointer items-center justify-center rounded-lg bg-accent px-3 text-[13px] font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const linkButtonSecondary =
  "inline-flex h-8 cursor-pointer items-center justify-center rounded-lg border border-line2 bg-white/[0.04] px-3 text-[13px] font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const linkButtonGhost =
  "inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-lg px-3 text-[13px] font-medium text-mut transition-colors duration-200 hover:bg-white/[0.06] hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function DashboardHome() {
  const { refresh } = useSession();
  const [data, setData] = useState<Overview | null>(null);
  const [series, setSeries] = useState<SeriesPoint[]>([]);
  const [activity, setActivity] = useState<ActivityItem[]>([]);
  const [usage, setUsage] = useState<Usage | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void refresh();
    Promise.all([
      api<Overview>("/dashboard/overview"),
      api<{ items: SeriesPoint[] }>("/dashboard/series?days=14"),
      api<{ items: ActivityItem[] }>("/dashboard/activity?limit=8"),
      api<Usage>("/dashboard/usage"),
    ])
      .then(([o, s, a, u]) => {
        setData(o);
        setSeries(Array.isArray(s?.items) ? s.items : Array.isArray(s) ? (s as unknown as SeriesPoint[]) : []);
        setActivity(Array.isArray(a?.items) ? a.items : Array.isArray(a) ? (a as unknown as ActivityItem[]) : []);
        setUsage(u && typeof u === "object" ? u : { byModel: [], byProvider: [] });
      })
      .catch((e: Error) => setError(e.message));
  }, [refresh]);

  if (error) return <div className="rounded-xl border border-bad/30 bg-bad/10 p-4 text-sm text-bad" role="alert">{error}</div>;
  if (!data)
    return (
      <div className="space-y-4">
        {[0, 1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-24 w-full" />
        ))}
      </div>
    );

  const queueReady = Array.isArray(data.queue) ? data.queue.every((q) => q.running === 0 && q.waiting === 0) : true;
  const cards = [
    { label: "Wallet balance", value: data.balanceFormatted ?? formatINR(data.balancePaise ?? 0), href: "/dashboard/wallet", icon: Wallet },
    { label: "Requests today", value: (data.today?.requests ?? 0).toLocaleString("en-IN"), href: "/dashboard/activity", icon: Activity },
    { label: "Tokens today", value: compact(data.today?.tokens ?? 0), href: "/dashboard/usage", icon: Cpu },
    { label: "Spend today", value: formatINR(data.today?.costPaise ?? 0), href: "/dashboard/wallet", icon: IndianRupee },
    { label: "Active API keys", value: String(data.activeKeys ?? 1), href: "/dashboard/keys", icon: KeyRound },
    { label: "Plan", value: data.plan?.name ?? "Free", href: "/pricing", icon: CreditCard },
  ];

  return (
    <div className="fade-up space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Build with every model through one API.</h1>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Badge tone={queueReady ? "good" : "warn"}>Free queue: {queueReady ? "Ready" : "Busy"}</Badge>
            <Badge tone={data.astra?.active ? "accent" : "neutral"}>
              {data.astra?.active && <Sparkles className="size-3" aria-hidden="true" />}
              Astra: {data.astra?.active ? `${data.astra?.daysLeft ?? "?"} days remaining` : "not active"}
            </Badge>
            <Badge tone="neutral">API requests: {(data.month?.requests ?? 0).toLocaleString("en-IN")} this month</Badge>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/dashboard/keys" className={linkButtonPrimary}>Create API key</Link>
          <Link href="/chat" className={linkButtonSecondary}>Try playground</Link>
          <Link href="/dashboard/wallet" className={linkButtonSecondary}>Add credits</Link>
          <Link href="/models" className={linkButtonGhost}>
            Explore models <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Link key={c.label} href={c.href}>
              <Card className="p-4 transition-colors duration-200 hover:border-accent/40">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-[11.5px] uppercase tracking-wide text-mut2">{c.label}</div>
                  <Icon className="size-3.5 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div className="mt-1.5 font-mono text-lg font-semibold tabular-nums">{c.value}</div>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold">Requests · last 14 days</h2>
            <Link href="/dashboard/activity" className="group inline-flex items-center gap-1 text-[12.5px] font-medium text-accent transition-colors duration-200 hover:text-accent2">
              View activity
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
          <BarChart data={series} metric="requests" />
        </Card>
        <Card className="p-5">
          <h2 className="mb-4 text-sm font-semibold">Model mix · 30 days</h2>
          <UsageBars
            items={(usage?.byModel ?? []).filter((m) => m?.model).map((m) => ({ label: m.model!, value: m.n, hint: `${m.tokens.toLocaleString("en-IN")} tok` }))}
            total={(usage?.byModel ?? []).reduce((a, b) => a + b.n, 0)}
          />
        </Card>
      </div>

      <Card>
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <h2 className="text-sm font-semibold">Recent activity</h2>
          <Link href="/dashboard/activity" className="group inline-flex items-center gap-1 text-[12.5px] font-medium text-accent transition-colors duration-200 hover:text-accent2">
            See all
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
        {activity.length === 0 ? (
          <div className="flex flex-col items-center gap-2 px-5 py-12 text-center">
            <Terminal className="size-5 text-mut2" aria-hidden="true" />
            <p className="text-[13px] text-mut">
              No requests yet.{" "}
              <Link href="/chat" className="text-accent transition-colors duration-200 hover:text-accent2">
                Try the playground
              </Link>{" "}
              or create an API key to get started.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]">
              <thead className="text-[11px] uppercase tracking-wide text-mut2">
                <tr className="border-b border-line">
                  <th scope="col" className="px-5 py-2.5 font-medium">Time</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Model</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Provider</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Tokens</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Cost</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Latency</th>
                  <th scope="col" className="px-5 py-2.5 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {activity.map((a) => (
                  <tr key={a.id} className="border-b border-line/60 transition-colors duration-200 last:border-0 hover:bg-white/[0.03]">
                    <td className="whitespace-nowrap px-5 py-2.5 text-mut">{timeAgo(a.createdAt)}</td>
                    <td className="px-3 py-2.5">{a.modelName ?? a.model ?? "—"}</td>
                    <td className="px-3 py-2.5 font-mono text-[12px] text-mut">{a.provider ?? "—"}</td>
                    <td className="px-3 py-2.5 font-mono tabular-nums">{a.totalTokens.toLocaleString("en-IN")}</td>
                    <td className="px-3 py-2.5 font-mono tabular-nums">{a.isFree ? <span className="text-good">FREE</span> : formatINR(a.costPaise)}</td>
                    <td className="px-3 py-2.5 font-mono tabular-nums text-mut">{a.latencyMs != null ? `${a.latencyMs}ms` : "—"}</td>
                    <td className="px-5 py-2.5">
                      <Badge tone={a.status === "success" ? "good" : "bad"}>{a.status === "success" ? "200" : a.status === "error" ? "ERR" : a.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
