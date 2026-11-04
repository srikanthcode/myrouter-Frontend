"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Check,
  Clock,
  Copy,
  Cpu,
  RefreshCw,
  ScrollText,
  Sparkles,
  Zap,
} from "lucide-react";
import { ApiError, api, cx, formatINR, timeAgo } from "@/lib/api";
import { Badge, Button, Card, EmptyState, Skeleton } from "@/components/ui";
import { useSession } from "@/components/DashboardShell";

interface ActivityItem {
  id: string;
  createdAt: string;
  model: string | null;
  modelName: string | null;
  provider: string | null;
  status: string;
  httpStatus: number | null;
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  latencyMs: number | null;
  ttftMs: number | null;
  costPaise: number;
  isFree: boolean;
  streaming: boolean;
  errorCode: string | null;
  route: string | null;
  queueWaitMs: number | null;
}

const PAGE = 25;

const linkButtonPrimary =
  "inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-accent px-3.5 text-[13px] font-medium text-accent-ink transition-all duration-200 hover:bg-accent2 hover:shadow-[0_0_15px_rgba(34,197,94,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const SAMPLE_ACTIVITY: ActivityItem[] = [
  {
    id: "req_live_89a7f31c",
    createdAt: new Date(Date.now() - 45 * 1000).toISOString(),
    model: "deepseek-v4.1-flash",
    modelName: "DeepSeek V4.1 Flash",
    provider: "deepseek",
    status: "success",
    httpStatus: 200,
    inputTokens: 384,
    outputTokens: 142,
    totalTokens: 526,
    latencyMs: 182,
    ttftMs: 64,
    costPaise: 0,
    isFree: true,
    streaming: true,
    errorCode: null,
    route: "tokenjuice-primary",
    queueWaitMs: 8,
  },
  {
    id: "req_live_76b4d29e",
    createdAt: new Date(Date.now() - 3 * 60 * 1000).toISOString(),
    model: "qwen3.8-27b",
    modelName: "Qwen 3.8 27B",
    provider: "alibaba",
    status: "success",
    httpStatus: 200,
    inputTokens: 512,
    outputTokens: 260,
    totalTokens: 772,
    latencyMs: 245,
    ttftMs: 82,
    costPaise: 0,
    isFree: true,
    streaming: true,
    errorCode: null,
    route: "tokenjuice-primary",
    queueWaitMs: 12,
  },
  {
    id: "req_live_55c911a0",
    createdAt: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
    model: "qwen-2.5-coder-32b",
    modelName: "Qwen 2.5 Coder 32B",
    provider: "alibaba",
    status: "success",
    httpStatus: 200,
    inputTokens: 1240,
    outputTokens: 680,
    totalTokens: 1920,
    latencyMs: 310,
    ttftMs: 95,
    costPaise: 0,
    isFree: true,
    streaming: false,
    errorCode: null,
    route: "tokenjuice-primary",
    queueWaitMs: 14,
  },
  {
    id: "req_live_33f208c1",
    createdAt: new Date(Date.now() - 28 * 60 * 1000).toISOString(),
    model: "claude-3-5-sonnet",
    modelName: "Claude 3.5 Sonnet",
    provider: "anthropic",
    status: "success",
    httpStatus: 200,
    inputTokens: 640,
    outputTokens: 310,
    totalTokens: 950,
    latencyMs: 412,
    ttftMs: 140,
    costPaise: 85,
    isFree: false,
    streaming: true,
    errorCode: null,
    route: "pro-intelligent-router",
    queueWaitMs: 18,
  },
  {
    id: "req_live_11e004b2",
    createdAt: new Date(Date.now() - 54 * 60 * 1000).toISOString(),
    model: "gpt-4o",
    modelName: "GPT-4o",
    provider: "openai",
    status: "success",
    httpStatus: 200,
    inputTokens: 420,
    outputTokens: 180,
    totalTokens: 600,
    latencyMs: 290,
    ttftMs: 110,
    costPaise: 60,
    isFree: false,
    streaming: true,
    errorCode: null,
    route: "pro-intelligent-router",
    queueWaitMs: 11,
  },
];

export default function ActivityPage() {
  const { refresh } = useSession();
  const [items, setItems] = useState<ActivityItem[] | null>(null);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [status, setStatus] = useState<"" | "success" | "errors">("");
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showDemo, setShowDemo] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const load = useCallback(async (quiet = false) => {
    if (!quiet) setItems(null);
    setIsRefreshing(true);
    try {
      const params = new URLSearchParams({ limit: String(PAGE), offset: String(offset) });
      if (status) params.set("status", status);
      const res = await api<{ total: number; items: ActivityItem[] }>(`/dashboard/activity?${params.toString()}`);
      setItems(Array.isArray(res?.items) ? res.items : Array.isArray(res) ? (res as unknown as ActivityItem[]) : []);
      setTotal(typeof res?.total === "number" ? res.total : 0);
      setError(null);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Could not load activity.");
      setItems([]);
    } finally {
      setIsRefreshing(false);
    }
  }, [offset, status]);

  useEffect(() => {
    void refresh();
    void load();
  }, [load]);

  // Live auto-refresh polling every 10 seconds
  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(() => {
      void load(true);
    }, 10000);
    return () => clearInterval(interval);
  }, [autoRefresh, load]);

  const copyId = (id: string) => {
    void navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const page = Math.floor(offset / PAGE) + 1;
  const pages = Math.max(1, Math.ceil(total / PAGE));

  const displayItems = showDemo ? SAMPLE_ACTIVITY : items;
  const hasRealData = items && items.length > 0;

  return (
    <div className="fade-up space-y-6">
      {/* Header & Live Stream Status */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Activity</h1>
            <div className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              <span>Live Telemetry</span>
            </div>
          </div>
          <p className="mt-1 text-[13.5px] text-mut">
            Every request through your account, with routing, tokens, latency and cost.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Refresh controls */}
          <button
            type="button"
            onClick={() => void load(false)}
            disabled={isRefreshing}
            className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border border-line2 bg-white/[0.04] px-3 text-[12px] font-medium text-mut transition-colors duration-200 hover:bg-white/[0.08] hover:text-fg"
            title="Refresh logs"
          >
            <RefreshCw className={cx("size-3.5", isRefreshing && "animate-spin text-accent")} />
            <span>Refresh</span>
          </button>

          {/* Filter Pills */}
          {([["", "All"], ["success", "Successful"], ["errors", "Errors"]] as const).map(([k, label]) => (
            <button
              key={k || "all"}
              onClick={() => {
                setStatus(k);
                setOffset(0);
                setShowDemo(false);
              }}
              aria-pressed={status === k && !showDemo}
              className={cx(
                "h-8 cursor-pointer rounded-lg border px-3 text-[12.5px] font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                status === k && !showDemo
                  ? "border-accent/40 bg-accent/10 text-accent shadow-[0_0_10px_rgba(34,197,94,0.15)]"
                  : "border-line text-mut hover:border-line2 hover:text-fg"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Live Metrics Ribbon */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card className="card-hover-lift p-3.5">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wide text-mut2">
            <span>Gateway Uptime</span>
            <Zap className="size-3.5 text-accent" />
          </div>
          <div className="mt-1 font-mono text-lg font-semibold text-fg">99.99%</div>
          <div className="text-[11px] text-good">Zero-downtime routing</div>
        </Card>

        <Card className="card-hover-lift p-3.5">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wide text-mut2">
            <span>Avg Latency</span>
            <Clock className="size-3.5 text-accent" />
          </div>
          <div className="mt-1 font-mono text-lg font-semibold text-fg">~195ms</div>
          <div className="text-[11px] text-mut">TokenJuice DeepSeek TTFT</div>
        </Card>

        <Card className="card-hover-lift p-3.5">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wide text-mut2">
            <span>Requests Logged</span>
            <Activity className="size-3.5 text-accent" />
          </div>
          <div className="mt-1 font-mono text-lg font-semibold text-fg">
            {(showDemo ? 5 : total).toLocaleString("en-IN")}
          </div>
          <div className="text-[11px] text-mut">Telemetry events</div>
        </Card>

        <Card className="card-hover-lift p-3.5">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wide text-mut2">
            <span>Launch Special</span>
            <Sparkles className="size-3.5 text-accent animate-pulse" />
          </div>
          <div className="mt-1 font-mono text-lg font-semibold text-good">48h Free</div>
          <div className="text-[11px] text-mut2">DeepSeek & Qwen free</div>
        </Card>
      </div>

      {/* Demo Banner Notification */}
      {showDemo && (
        <div className="flex items-center justify-between rounded-xl border border-accent/30 bg-gradient-to-r from-accent/15 via-accent/5 to-transparent px-4 py-3 text-[12.5px] text-accent">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 animate-spin text-accent" />
            <span>Viewing simulated production activity preview with tokens, TTFT, and routing inspector.</span>
          </div>
          <button
            type="button"
            onClick={() => setShowDemo(false)}
            className="cursor-pointer font-medium underline opacity-90 hover:opacity-100"
          >
            Show my live data
          </button>
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-bad/30 bg-bad/10 p-4 text-sm text-bad" role="alert">
          {error}
        </div>
      )}

      {/* Loading Skeleton */}
      {displayItems === null ? (
        <div className="space-y-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i}>
              <Skeleton className="h-16 w-full rounded-xl" />
            </div>
          ))}
        </div>
      ) : displayItems.length === 0 ? (
        /* Elevated Empty State with Animated Radar */
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-line2/70 bg-gradient-to-b from-panel2/60 via-panel to-panel2/40 p-12 text-center">
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
            <div className="animate-radar h-full w-1/3 bg-gradient-to-r from-transparent via-accent/30 to-transparent blur-md" />
          </div>

          <div className="relative mb-4 flex items-center justify-center">
            <div className="animate-ping absolute size-12 rounded-full bg-accent/25" />
            <div className="relative flex size-14 items-center justify-center rounded-2xl border border-accent/40 bg-accent/15 text-accent shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <ScrollText className="size-7 animate-pulse" />
            </div>
          </div>

          <h2 className="z-10 text-lg font-semibold tracking-tight text-fg">
            {status ? "No matching requests found" : "Ready for your first API request"}
          </h2>
          <p className="z-10 mt-1.5 max-w-md text-[13px] text-mut">
            {status
              ? "Try clearing the filter or checking recent logs."
              : "Send requests via the interactive playground or connect your OpenAI-compatible API key. Activity streams here with full latency and token analytics."}
          </p>

          <div className="z-10 mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link href="/chat" className={linkButtonPrimary}>
              <Zap className="size-3.5" />
              Launch Playground
            </Link>
            <button
              type="button"
              onClick={() => setShowDemo(true)}
              className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3.5 text-[13px] font-medium text-accent transition-all duration-200 hover:border-accent hover:bg-accent/20 hover:shadow-[0_0_12px_rgba(34,197,94,0.25)]"
            >
              <Sparkles className="size-3.5" />
              Preview Sample Activity
            </button>
          </div>
        </div>
      ) : (
        /* Elevated Activity Table */
        <>
          <Card className="overflow-hidden border border-line2/70 shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]">
                <thead className="border-b border-line bg-white/[0.02] text-[11px] uppercase tracking-wide text-mut2">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-medium">Time</th>
                    <th scope="col" className="px-3 py-3 font-medium">Model</th>
                    <th scope="col" className="px-3 py-3 font-medium">Provider</th>
                    <th scope="col" className="px-3 py-3 font-medium">Tokens</th>
                    <th scope="col" className="px-3 py-3 font-medium">Cost</th>
                    <th scope="col" className="px-3 py-3 font-medium">TTFT</th>
                    <th scope="col" className="px-3 py-3 font-medium">Latency</th>
                    <th scope="col" className="px-3 py-3 font-medium">Status</th>
                    <th scope="col" className="px-5 py-3 text-right font-medium">Inspect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/50 font-sans">
                  {displayItems.map((a, index) => (
                    <tr
                      key={a.id}
                      className="group transition-all duration-200 hover:bg-white/[0.04]"
                      style={{ animationDelay: `${index * 40}ms` }}
                    >
                      <td className="whitespace-nowrap px-5 py-3.5 text-mut">
                        <div className="flex items-center gap-1.5">
                          <span>{timeAgo(a.createdAt)}</span>
                          <button
                            type="button"
                            onClick={() => copyId(a.id)}
                            className="cursor-pointer text-mut2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:text-fg"
                            title="Copy Request ID"
                          >
                            {copiedId === a.id ? (
                              <Check className="size-3 text-accent" />
                            ) : (
                              <Copy className="size-3" />
                            )}
                          </button>
                        </div>
                      </td>

                      <td className="px-3 py-3.5">
                        <div className="font-medium text-fg">{a.modelName ?? a.model ?? "—"}</div>
                        {a.streaming && (
                          <div className="flex items-center gap-1 text-[11px] text-accent">
                            <span className="size-1.5 rounded-full bg-accent animate-ping" />
                            <span>streaming</span>
                          </div>
                        )}
                      </td>

                      <td className="whitespace-nowrap px-3 py-3.5 font-mono text-[12px] text-mut">
                        {a.provider ?? "—"}
                      </td>

                      <td className="whitespace-nowrap px-3 py-3.5 font-mono tabular-nums">
                        <span className="font-semibold text-fg">{a.totalTokens.toLocaleString("en-IN")}</span>
                        <span className="ml-1.5 inline-flex items-center gap-0.5 text-[11px] tabular-nums text-mut2">
                          <ArrowUp className="size-3 text-emerald-400" aria-hidden="true" />
                          {a.inputTokens}
                          <ArrowDown className="ml-1 size-3 text-sky-400" aria-hidden="true" />
                          {a.outputTokens}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-3 py-3.5 font-mono tabular-nums">
                        {a.isFree ? (
                          <span className="inline-flex items-center gap-1 font-semibold text-good">
                            <Sparkles className="size-3 text-accent" /> FREE
                          </span>
                        ) : (
                          formatINR(a.costPaise)
                        )}
                      </td>

                      <td className="whitespace-nowrap px-3 py-3.5 font-mono tabular-nums text-mut">
                        {a.ttftMs != null ? `${a.ttftMs}ms` : "—"}
                      </td>

                      <td className="whitespace-nowrap px-3 py-3.5 font-mono tabular-nums">
                        <span
                          className={cx(
                            "rounded px-1.5 py-0.5 text-[11.5px] font-medium",
                            a.latencyMs != null && a.latencyMs < 300
                              ? "bg-good/15 text-good"
                              : a.latencyMs != null && a.latencyMs < 800
                                ? "bg-warn/15 text-warn"
                                : "bg-white/[0.05] text-mut"
                          )}
                        >
                          {a.latencyMs != null ? `${a.latencyMs}ms` : "—"}
                        </span>
                      </td>

                      <td className="px-3 py-3.5">
                        <Badge
                          tone={a.status === "success" ? "good" : "bad"}
                          className="font-mono text-[11.5px]"
                        >
                          {a.errorCode ?? (a.httpStatus ?? (a.status === "success" ? "200 OK" : a.status))}
                        </Badge>
                      </td>

                      <td className="px-5 py-3.5 text-right">
                        <Link
                          href={`/dashboard/inspector?id=${a.id}`}
                          className="group/btn inline-flex items-center gap-1 text-[12.5px] font-medium text-accent transition-colors duration-200 hover:text-accent2"
                        >
                          <span>Inspect</span>
                          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Pagination */}
          {!showDemo && (
            <div className="flex flex-wrap items-center justify-between gap-2 text-[13px] text-mut">
              <span className="tabular-nums">
                Page {page} of {pages} · {total.toLocaleString()} request{total === 1 ? "" : "s"}
              </span>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  disabled={offset === 0}
                  onClick={() => setOffset(Math.max(0, offset - PAGE))}
                >
                  Previous
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  disabled={offset + PAGE >= total}
                  onClick={() => setOffset(offset + PAGE)}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
