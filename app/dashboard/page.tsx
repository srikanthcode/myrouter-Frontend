"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Cpu,
  CreditCard,
  IndianRupee,
  KeyRound,
  RefreshCw,
  Sparkles,
  Terminal,
  Wallet,
  Zap,
} from "lucide-react";
import { api, formatINR, timeAgo, cx } from "@/lib/api";
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
  "inline-flex h-8 cursor-pointer items-center justify-center rounded-lg bg-accent px-3.5 text-[13px] font-medium text-accent-ink transition-all duration-200 hover:bg-accent2 hover:shadow-[0_0_15px_rgba(34,197,94,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const linkButtonSecondary =
  "inline-flex h-8 cursor-pointer items-center justify-center rounded-lg border border-line2 bg-white/[0.04] px-3 text-[13px] font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const linkButtonGhost =
  "inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-lg px-3 text-[13px] font-medium text-mut transition-colors duration-200 hover:bg-white/[0.06] hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const SAMPLE_RECENT_ACTIVITY: ActivityItem[] = [
  {
    id: "req_rec_01",
    createdAt: new Date(Date.now() - 40 * 1000).toISOString(),
    model: "deepseek-v4.1-flash",
    modelName: "DeepSeek V4.1 Flash",
    provider: "deepseek",
    status: "success",
    totalTokens: 526,
    costPaise: 0,
    latencyMs: 182,
    isFree: true,
  },
  {
    id: "req_rec_02",
    createdAt: new Date(Date.now() - 3 * 60 * 1000).toISOString(),
    model: "qwen3.8-27b",
    modelName: "Qwen 3.8 27B",
    provider: "alibaba",
    status: "success",
    totalTokens: 772,
    costPaise: 0,
    latencyMs: 245,
    isFree: true,
  },
  {
    id: "req_rec_03",
    createdAt: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
    model: "qwen-2.5-coder-32b",
    modelName: "Qwen 2.5 Coder 32B",
    provider: "alibaba",
    status: "success",
    totalTokens: 1920,
    costPaise: 0,
    latencyMs: 310,
    isFree: true,
  },
  {
    id: "req_rec_04",
    createdAt: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
    model: "claude-3-5-sonnet",
    modelName: "Claude 3.5 Sonnet",
    provider: "anthropic",
    status: "success",
    totalTokens: 950,
    costPaise: 85,
    latencyMs: 412,
    isFree: false,
  },
];

export default function DashboardHome() {
  const { refresh } = useSession();
  const [data, setData] = useState<Overview | null>(null);
  const [series, setSeries] = useState<SeriesPoint[]>([]);
  const [activity, setActivity] = useState<ActivityItem[]>([]);
  const [usage, setUsage] = useState<Usage | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showRecentDemo, setShowRecentDemo] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchDashboardData = (quiet = false) => {
    if (!quiet) setIsRefreshing(true);
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
      .catch((e: Error) => setError(e.message))
      .finally(() => setIsRefreshing(false));
  };

  useEffect(() => {
    void refresh();
    fetchDashboardData();

    // Auto-poll overview telemetry every 15 seconds
    const interval = setInterval(() => {
      fetchDashboardData(true);
    }, 15000);
    return () => clearInterval(interval);
  }, [refresh]);

  if (error)
    return (
      <div className="rounded-xl border border-bad/30 bg-bad/10 p-4 text-sm text-bad" role="alert">
        {error}
      </div>
    );

  if (!data)
    return (
      <div className="space-y-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i}>
            <Skeleton className="h-24 w-full rounded-xl" />
          </div>
        ))}
      </div>
    );

  const queueReady = Array.isArray(data.queue) ? data.queue.every((q) => q.running === 0 && q.waiting === 0) : true;
  const cards = [
    { label: "Wallet balance", value: data.balanceFormatted ?? formatINR(data.balancePaise ?? 0), href: "/dashboard/wallet", icon: Wallet, highlight: true },
    { label: "Requests today", value: (data.today?.requests ?? 0).toLocaleString("en-IN"), href: "/dashboard/activity", icon: Activity },
    { label: "Tokens today", value: compact(data.today?.tokens ?? 0), href: "/dashboard/usage", icon: Cpu },
    { label: "Spend today", value: formatINR(data.today?.costPaise ?? 0), href: "/dashboard/wallet", icon: IndianRupee },
    { label: "Active API keys", value: String(data.activeKeys ?? 1), href: "/dashboard/keys", icon: KeyRound },
    { label: "Plan", value: data.plan?.name ?? "Free Tier", href: "/pricing", icon: CreditCard },
  ];

  const displayedRecent = showRecentDemo
    ? SAMPLE_RECENT_ACTIVITY
    : activity.length > 0
    ? activity
    : [];

  return (
    <div className="fade-up space-y-6">
      {/* Hero Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Build with every model through one API.
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Badge tone={queueReady ? "good" : "warn"}>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-accent animate-ping" />
                Free queue: {queueReady ? "Ready" : "Busy"}
              </span>
            </Badge>
            <Badge tone="neutral">
              API requests: {(data.month?.requests ?? 0).toLocaleString("en-IN")} this month
            </Badge>
            <div className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-[11.5px] font-medium text-mut">
              <Zap className="size-3 text-accent" />
              <span>Gateway Engine 1: TokenJuice DeepSeek Active</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link href="/dashboard/keys" className={linkButtonPrimary}>
            Create API key
          </Link>
          <Link href="/chat" className={linkButtonSecondary}>
            Try playground
          </Link>
          <Link href="/dashboard/wallet" className={linkButtonSecondary}>
            Add credits
          </Link>
          <Link href="/models" className={linkButtonGhost}>
            Explore models <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* 6 Top Stat Cards with Lift & Subtle Glow */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Link key={c.label} href={c.href}>
              <Card className="card-hover-lift p-4 transition-all duration-200 hover:border-accent/40">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-[11.5px] uppercase tracking-wide text-mut2">{c.label}</div>
                  <Icon className="size-3.5 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div className="mt-1.5 font-mono text-lg font-semibold tabular-nums text-fg">{c.value}</div>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* 14-Day Activity & Model Mix Cards */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-5 lg:col-span-2 shadow-sm border border-line2/70">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold text-fg">Requests · last 14 days</h2>
              <span className="flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10.5px] font-medium text-accent">
                <span className="size-1.5 rounded-full bg-accent animate-ping" /> Live Telemetry
              </span>
            </div>
            <Link
              href="/dashboard/activity"
              className="group inline-flex items-center gap-1 text-[12.5px] font-medium text-accent transition-colors duration-200 hover:text-accent2"
            >
              View activity
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <BarChart data={series} metric="requests" height={180} />
        </Card>

        <Card className="p-5 shadow-sm border border-line2/70">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-fg">Model mix · 30 days</h2>
            <Link
              href="/dashboard/usage"
              className="text-[12px] font-medium text-mut transition-colors duration-200 hover:text-fg"
            >
              Usage breakdown
            </Link>
          </div>
          <UsageBars
            items={(usage?.byModel ?? [])
              .filter((m) => m?.model)
              .map((m) => ({
                label: m.model!,
                value: m.n,
                hint: `${m.tokens.toLocaleString("en-IN")} tok`,
              }))}
            total={(usage?.byModel ?? []).reduce((a, b) => a + b.n, 0)}
          />
        </Card>
      </div>

      {/* Recent Activity Card */}
      <Card className="border border-line2/70 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold text-fg">Recent activity</h2>
            {showRecentDemo && (
              <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10.5px] font-medium text-accent">
                Sample preview
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {activity.length === 0 && (
              <button
                type="button"
                onClick={() => setShowRecentDemo(!showRecentDemo)}
                className="cursor-pointer text-[12px] font-medium text-accent hover:underline"
              >
                {showRecentDemo ? "Hide preview" : "⚡ Preview activity"}
              </button>
            )}
            <Link
              href="/dashboard/activity"
              className="group inline-flex items-center gap-1 text-[12.5px] font-medium text-accent transition-colors duration-200 hover:text-accent2"
            >
              See all
              <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {displayedRecent.length === 0 ? (
          <div className="relative flex flex-col items-center justify-center overflow-hidden py-12 px-5 text-center">
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25">
              <div className="animate-radar h-full w-1/3 bg-gradient-to-r from-transparent via-accent/30 to-transparent blur-md" />
            </div>

            <div className="relative mb-3 flex items-center justify-center">
              <div className="animate-ping absolute size-8 rounded-full bg-accent/20" />
              <div className="relative flex size-10 items-center justify-center rounded-xl border border-accent/40 bg-accent/15 text-accent shadow-[0_0_15px_rgba(34,197,94,0.25)]">
                <Terminal className="size-5" />
              </div>
            </div>

            <p className="z-10 text-[13.5px] font-medium text-fg">No requests logged yet</p>
            <p className="z-10 mt-1 max-w-sm text-[12.5px] text-mut">
              Execute test queries in the playground or pass your API key to monitor live tokens and latency.
            </p>

            <div className="z-10 mt-4 flex items-center gap-3">
              <Link
                href="/chat"
                className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-lg bg-accent px-3 text-[12px] font-medium text-accent-ink hover:bg-accent2"
              >
                <Zap className="size-3.5" /> Test in playground
              </Link>
              <button
                type="button"
                onClick={() => setShowRecentDemo(true)}
                className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 text-[12px] font-medium text-accent hover:bg-accent/20"
              >
                <Sparkles className="size-3.5" /> Preview sample requests
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]">
              <thead className="border-b border-line bg-white/[0.02] text-[11px] uppercase tracking-wide text-mut2">
                <tr>
                  <th scope="col" className="px-5 py-2.5 font-medium">Time</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Model</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Provider</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Tokens</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Cost</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Latency</th>
                  <th scope="col" className="px-5 py-2.5 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/50">
                {displayedRecent.map((a) => (
                  <tr
                    key={a.id}
                    className="group transition-colors duration-200 hover:bg-white/[0.03]"
                  >
                    <td className="whitespace-nowrap px-5 py-3 text-mut">{timeAgo(a.createdAt)}</td>
                    <td className="px-3 py-3 font-medium text-fg">{a.modelName ?? a.model ?? "—"}</td>
                    <td className="px-3 py-3 font-mono text-[12px] text-mut">{a.provider ?? "—"}</td>
                    <td className="px-3 py-3 font-mono tabular-nums text-fg">{a.totalTokens.toLocaleString("en-IN")}</td>
                    <td className="px-3 py-3 font-mono tabular-nums">
                      {a.isFree ? (
                        <span className="font-semibold text-good">FREE</span>
                      ) : (
                        formatINR(a.costPaise)
                      )}
                    </td>
                    <td className="px-3 py-3 font-mono tabular-nums text-mut">
                      <span
                        className={cx(
                          "rounded px-1.5 py-0.5 text-[11.5px] font-medium",
                          a.latencyMs != null && a.latencyMs < 300
                            ? "bg-good/15 text-good"
                            : "bg-white/[0.05] text-mut"
                        )}
                      >
                        {a.latencyMs != null ? `${a.latencyMs}ms` : "—"}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <Badge tone={a.status === "success" ? "good" : "bad"}>
                        {a.status === "success" ? "200 OK" : a.status === "error" ? "ERR" : a.status}
                      </Badge>
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
