"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  Activity as ActivityIcon,
  Calendar,
  ChevronDown,
  Clock,
  DollarSign,
  Layers,
  KeyRound,
  Users,
} from "lucide-react";
import { api, cx } from "@/lib/api";
import { useSession } from "@/components/DashboardShell";

interface ModelUsage {
  id: string;
  spend: number;
  requests: number;
  tokens: number;
  sharePercent: number;
  color: string;
}

interface DailySeriesItem {
  dateLabel: string;
  dateKey: string;
  totalRequests: number;
  totalTokens: number;
  totalSpend: number;
  breakdown: Record<string, { requests: number; tokens: number; spend: number }>;
}

interface OverviewTelemetry {
  balancePaise?: number;
  balanceFormatted?: string;
  month?: { requests: number; tokens: number; costPaise: number };
  today?: { requests: number; tokens: number; costPaise: number };
  avgLatencySec?: number;
  models?: ModelUsage[];
  dailySeries?: DailySeriesItem[];
  activeDaysCount?: number;
  activeDaysMap?: Record<string, number>;
}

const MONTH_NAMES = ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];

export default function DashboardOverviewPage() {
  const { me, refresh } = useSession();
  const [telemetry, setTelemetry] = useState<OverviewTelemetry | null>(null);
  const [loading, setLoading] = useState(true);
  const [metricTab, setMetricTab] = useState<"spend" | "requests" | "tokens">("requests");
  const [unitMode, setUnitMode] = useState<"count" | "percent">("count");
  const [selectedUserFilter, setSelectedUserFilter] = useState("All users");
  const [selectedKeyFilter, setSelectedKeyFilter] = useState("All API keys");
  const [selectedModelFilter, setSelectedModelFilter] = useState("By Model");
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("This month");

  const [mounted, setMounted] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    void refresh();
    let isCancelled = false;

    async function loadData() {
      try {
        const query = new URLSearchParams({
          time: selectedTimeFilter,
          model: selectedModelFilter,
        });
        const res = await api<OverviewTelemetry>(`/dashboard/overview?${query.toString()}`).catch(() => null);
        if (!isCancelled && res) {
          setTelemetry(res);
          setLoading(false);
        }
      } catch {
        if (!isCancelled) setLoading(false);
      }
    }

    loadData();
    const interval = setInterval(loadData, 10000); // 10s live poll
    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, [refresh, selectedTimeFilter, selectedModelFilter]);

  const spendFormatted = useMemo(() => {
    const cost = telemetry?.month?.costPaise ?? 0;
    const usd = cost > 0 ? cost / 8000 : 0;
    return `$${usd.toFixed(2)}`;
  }, [telemetry]);

  const requestsCount = telemetry?.month?.requests ?? 0;
  const tokensCount = telemetry?.month?.tokens ?? 0;
  const avgLatency = (telemetry?.avgLatencySec ?? 0).toFixed(2) + "s";
  const models = telemetry?.models ?? [];
  const dailySeries = telemetry?.dailySeries ?? [];
  const activeDaysCount = telemetry?.activeDaysCount ?? 0;
  const activeDaysMap = telemetry?.activeDaysMap ?? {};

  // Maximum value for the chart Y-axis
  const maxSeriesValue = useMemo(() => {
    if (!dailySeries.length) return 2;
    const vals = dailySeries.map((d) => {
      if (metricTab === "tokens") return d.totalTokens;
      if (metricTab === "spend") return d.totalSpend;
      return d.totalRequests;
    });
    const m = Math.max(...vals, 0);
    return m > 0 ? m : 2;
  }, [dailySeries, metricTab]);

  // Calendar Heatmap Grid (52 columns x 7 rows)
  const heatmapGrid = useMemo(() => {
    const cols = 52;
    const rows = 7;
    const grid: Array<Array<{ dateKey: string; dateLabel: string; count: number; level: number }>> = [];
    const now = new Date();

    for (let c = 0; c < cols; c++) {
      const colDays = [];
      for (let r = 0; r < rows; r++) {
        const daysAgo = (cols - 1 - c) * 7 + (6 - r);
        const cellDate = new Date(now.getTime() - daysAgo * 86400000);
        const yyyy = cellDate.getUTCFullYear();
        const mm = String(cellDate.getUTCMonth() + 1).padStart(2, "0");
        const dd = String(cellDate.getUTCDate()).padStart(2, "0");
        const dateKey = `${yyyy}-${mm}-${dd}`;

        const month = MONTH_NAMES[cellDate.getUTCMonth()] || "Nov";
        const day = cellDate.getUTCDate();
        const year = cellDate.getUTCFullYear();
        const dateLabel = `${month} ${day}, ${year}`;

        const count = activeDaysMap[dateKey] || 0;
        let level = 0;
        if (count >= 4) level = 4;
        else if (count >= 2) level = 3;
        else if (count === 1) level = 2;

        colDays.push({ dateKey, dateLabel, count, level });
      }
      grid.push(colDays);
    }
    return grid;
  }, [activeDaysMap]);

  return (
    <div className="fade-up space-y-6 max-w-7xl mx-auto pb-12">
      {/* ── Top Header with Filter Buttons ── */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Overview</h1>
          <p className="mt-1 text-xs text-zinc-400">
            Usage across your organization. Filter by user, group, or API key to drill in.
          </p>
        </div>

        {/* 4 Sleek Dropdown Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Filter 1: All users */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === "users" ? null : "users")}
              className="flex items-center gap-2 rounded-lg border border-[#1b2538] bg-[#0c121d] px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-all shadow-sm"
            >
              <Users className="w-3.5 h-3.5 text-zinc-400" />
              <span>{selectedUserFilter}</span>
              <ChevronDown className="w-3 h-3 text-zinc-500" />
            </button>
            {activeDropdown === "users" && (
              <div className="absolute right-0 mt-1 w-44 z-30 rounded-lg border border-[#1e293b] bg-[#0f172a] py-1 shadow-xl">
                {["All users", me?.user?.email || "Personal account", "Service accounts"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setSelectedUserFilter(opt);
                      setActiveDropdown(null);
                    }}
                    className={cx(
                      "w-full text-left px-3 py-1.5 text-xs transition",
                      selectedUserFilter === opt ? "text-accent bg-accent/10 font-semibold" : "text-zinc-300 hover:bg-white/5"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filter 2: All API keys */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === "keys" ? null : "keys")}
              className="flex items-center gap-2 rounded-lg border border-[#1b2538] bg-[#0c121d] px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-all shadow-sm"
            >
              <KeyRound className="w-3.5 h-3.5 text-zinc-400" />
              <span>{selectedKeyFilter}</span>
              <ChevronDown className="w-3 h-3 text-zinc-500" />
            </button>
            {activeDropdown === "keys" && (
              <div className="absolute right-0 mt-1 w-44 z-30 rounded-lg border border-[#1e293b] bg-[#0f172a] py-1 shadow-xl">
                {["All API keys", "Default Key", "Test Key"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setSelectedKeyFilter(opt);
                      setActiveDropdown(null);
                    }}
                    className={cx(
                      "w-full text-left px-3 py-1.5 text-xs transition",
                      selectedKeyFilter === opt ? "text-accent bg-accent/10 font-semibold" : "text-zinc-300 hover:bg-white/5"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filter 3: By Model */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === "models" ? null : "models")}
              className="flex items-center gap-2 rounded-lg border border-[#1b2538] bg-[#0c121d] px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-all shadow-sm"
            >
              <Layers className="w-3.5 h-3.5 text-zinc-400" />
              <span>{selectedModelFilter}</span>
              <ChevronDown className="w-3 h-3 text-zinc-500" />
            </button>
            {activeDropdown === "models" && (
              <div className="absolute right-0 mt-1 w-48 z-30 rounded-lg border border-[#1e293b] bg-[#0f172a] py-1 shadow-xl max-h-60 overflow-y-auto">
                {["By Model", ...models.map((m) => m.id)].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setSelectedModelFilter(opt);
                      setActiveDropdown(null);
                    }}
                    className={cx(
                      "w-full text-left px-3 py-1.5 text-xs transition font-mono truncate",
                      selectedModelFilter === opt ? "text-accent bg-accent/10 font-semibold" : "text-zinc-300 hover:bg-white/5"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filter 4: Time Filter */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === "time" ? null : "time")}
              className="flex items-center gap-2 rounded-lg border border-[#1b2538] bg-[#0c121d] px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-all shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-zinc-400" />
              <span>{selectedTimeFilter}</span>
              <ChevronDown className="w-3 h-3 text-zinc-500" />
            </button>
            {activeDropdown === "time" && (
              <div className="absolute right-0 mt-1 w-40 z-30 rounded-lg border border-[#1e293b] bg-[#0f172a] py-1 shadow-xl">
                {["Today", "Last 7 days", "This month", "Last 30 days", "All time"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setSelectedTimeFilter(opt);
                      setActiveDropdown(null);
                    }}
                    className={cx(
                      "w-full text-left px-3 py-1.5 text-xs transition",
                      selectedTimeFilter === opt ? "text-accent bg-accent/10 font-semibold" : "text-zinc-300 hover:bg-white/5"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── 4 Sleek Metric Cards with glowing sparkline curves ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Spend (this month) - Blue */}
        <div className="relative overflow-hidden rounded-xl border border-[#172133] bg-[#0b111c] p-5 shadow-sm transition hover:border-[#22324c]">
          <div className="flex items-center gap-2">
            <div className="flex size-5 items-center justify-center rounded bg-blue-500/15 text-blue-400 font-bold text-xs">
              <DollarSign className="size-3.5" />
            </div>
            <span className="text-xs font-medium text-zinc-400">Spend ({selectedTimeFilter.toLowerCase()})</span>
          </div>
          <div className="mt-2 text-2xl font-bold tracking-tight text-white">{spendFormatted}</div>
          <svg className="absolute bottom-0 left-0 right-0 h-10 w-full" preserveAspectRatio="none" viewBox="0 0 300 40">
            <defs>
              <linearGradient id="blueCardGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 0,38 Q 150,38 300,38 L 300,40 L 0,40 Z" fill="url(#blueCardGrad)" />
            <path d="M 0,38 Q 150,38 300,38" fill="none" stroke="#3b82f6" strokeWidth="2" />
          </svg>
        </div>

        {/* Card 2: Requests (this month) - Green */}
        <div className="relative overflow-hidden rounded-xl border border-[#172133] bg-[#0b111c] p-5 shadow-sm transition hover:border-[#22324c]">
          <div className="flex items-center gap-2">
            <div className="flex size-5 items-center justify-center rounded bg-emerald-500/15 text-emerald-400 text-xs">
              <ActivityIcon className="size-3.5" />
            </div>
            <span className="text-xs font-medium text-zinc-400">Requests ({selectedTimeFilter.toLowerCase()})</span>
          </div>
          <div className="mt-2 text-2xl font-bold tracking-tight text-white">{requestsCount.toLocaleString("en-IN")}</div>
          <svg className="absolute bottom-0 left-0 right-0 h-10 w-full" preserveAspectRatio="none" viewBox="0 0 300 40">
            <defs>
              <linearGradient id="greenCardGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 0,38 Q 180,38 250,32 T 300,18 L 300,40 L 0,40 Z" fill="url(#greenCardGrad)" />
            <path d="M 0,38 Q 180,38 250,32 T 300,18" fill="none" stroke="#10b981" strokeWidth="2" />
          </svg>
        </div>

        {/* Card 3: Tokens (this month) - Purple */}
        <div className="relative overflow-hidden rounded-xl border border-[#172133] bg-[#0b111c] p-5 shadow-sm transition hover:border-[#22324c]">
          <div className="flex items-center gap-2">
            <div className="flex size-5 items-center justify-center rounded bg-purple-500/15 text-purple-400 text-xs">
              <Layers className="size-3.5" />
            </div>
            <span className="text-xs font-medium text-zinc-400">Tokens ({selectedTimeFilter.toLowerCase()})</span>
          </div>
          <div className="mt-2 text-2xl font-bold tracking-tight text-white">{tokensCount.toLocaleString("en-IN")}</div>
          <svg className="absolute bottom-0 left-0 right-0 h-10 w-full" preserveAspectRatio="none" viewBox="0 0 300 40">
            <defs>
              <linearGradient id="purpleCardGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 0,38 Q 160,39 240,30 T 300,14 L 300,40 L 0,40 Z" fill="url(#purpleCardGrad)" />
            <path d="M 0,38 Q 160,39 240,30 T 300,14" fill="none" stroke="#8b5cf6" strokeWidth="2" />
          </svg>
        </div>

        {/* Card 4: Avg latency - Amber */}
        <div className="relative overflow-hidden rounded-xl border border-[#172133] bg-[#0b111c] p-5 shadow-sm transition hover:border-[#22324c]">
          <div className="flex items-center gap-2">
            <div className="flex size-5 items-center justify-center rounded bg-amber-500/15 text-amber-400 text-xs">
              <Clock className="size-3.5" />
            </div>
            <span className="text-xs font-medium text-zinc-400">Avg latency</span>
          </div>
          <div className="mt-2 text-2xl font-bold tracking-tight text-white">{avgLatency}</div>
          <svg className="absolute bottom-0 left-0 right-0 h-10 w-full" preserveAspectRatio="none" viewBox="0 0 300 40">
            <defs>
              <linearGradient id="amberCardGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#eab308" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#eab308" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 0,38 Q 170,39 250,33 T 300,16 L 300,40 L 0,40 Z" fill="url(#amberCardGrad)" />
            <path d="M 0,38 Q 170,39 250,33 T 300,16" fill="none" stroke="#eab308" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* ── Usage by Model: Dynamic Stacked Bar Chart Card ── */}
      <div className="rounded-xl border border-[#172133] bg-[#0b111c] p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4">
          <h2 className="text-sm font-semibold text-white">Usage by model</h2>

          {/* Metric tabs and unit switcher */}
          <div className="flex items-center gap-2">
            {/* Metric Tabs */}
            <div className="flex items-center rounded-lg border border-[#1b2538] bg-[#0c121d] p-0.5 text-xs">
              <button
                onClick={() => setMetricTab("spend")}
                className={cx(
                  "px-3 py-1 rounded-md font-medium transition",
                  metricTab === "spend" ? "bg-[#1d273b] text-white shadow-sm" : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                Spend
              </button>
              <button
                onClick={() => setMetricTab("requests")}
                className={cx(
                  "px-3 py-1 rounded-md font-medium transition",
                  metricTab === "requests" ? "bg-[#1d273b] text-white shadow-sm" : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                Requests
              </button>
              <button
                onClick={() => setMetricTab("tokens")}
                className={cx(
                  "px-3 py-1 rounded-md font-medium transition",
                  metricTab === "tokens" ? "bg-[#1d273b] text-white shadow-sm" : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                Tokens
              </button>
            </div>

            {/* Units Mode */}
            <div className="flex items-center rounded-lg border border-[#1b2538] bg-[#0c121d] p-0.5 text-xs">
              <button
                onClick={() => setUnitMode("count")}
                className={cx(
                  "px-2.5 py-1 rounded-md font-medium transition",
                  unitMode === "count" ? "bg-[#1d273b] text-white shadow-sm" : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                #
              </button>
              <button
                onClick={() => setUnitMode("percent")}
                className={cx(
                  "px-2.5 py-1 rounded-md font-medium transition",
                  unitMode === "percent" ? "bg-[#1d273b] text-white shadow-sm" : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                %
              </button>
            </div>
          </div>
        </div>

        {/* Stacked Chart Canvas */}
        <div className="relative mt-2 h-72 w-full pt-4">
          {/* Y Axis Guide Lines & Labels */}
          <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between pointer-events-none pb-8 pr-2">
            {[maxSeriesValue, maxSeriesValue * 0.75, maxSeriesValue * 0.5, maxSeriesValue * 0.25, 0].map((tick, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-10 text-right font-mono text-[11px] text-zinc-500">
                  {unitMode === "percent" ? `${Math.round((tick / maxSeriesValue) * 100)}%` : metricTab === "spend" ? `$${tick.toFixed(2)}` : Math.round(tick)}
                </span>
                <div className="h-[1px] w-full bg-[#151e2e]" />
              </div>
            ))}
          </div>

          {/* Real Daily Columns */}
          <div className="ml-12 h-[calc(100%-32px)] grid grid-cols-4 gap-4 items-end relative z-10">
            {dailySeries.map((day, idx) => {
              const dayTotal = metricTab === "tokens" ? day.totalTokens : metricTab === "spend" ? day.totalSpend : day.totalRequests;
              const barHeightPercent = maxSeriesValue > 0 ? Math.min(100, Math.round((dayTotal / maxSeriesValue) * 100)) : 0;
              const breakdownEntries = Object.entries(day.breakdown);

              return (
                <div key={day.dateKey || idx} className="h-full flex flex-col items-center justify-end">
                  {dayTotal > 0 ? (
                    <div
                      className="w-20 sm:w-28 md:w-36 flex flex-col overflow-hidden rounded-t transition-all hover:opacity-90 shadow-md"
                      style={{ height: `${Math.max(8, barHeightPercent)}%` }}
                    >
                      {breakdownEntries.map(([modelId, stat], segIdx) => {
                        const modelMeta = models.find((m) => m.id === modelId);
                        const segColor = modelMeta?.color || "#3b82f6";
                        const segVal = metricTab === "tokens" ? stat.tokens : metricTab === "spend" ? stat.spend : stat.requests;
                        const segHeightPercent = dayTotal > 0 ? (segVal / dayTotal) * 100 : 100;

                        return (
                          <div
                            key={modelId + segIdx}
                            className="w-full transition-all"
                            style={{
                              height: `${segHeightPercent}%`,
                              backgroundColor: segColor,
                            }}
                            title={`${modelId}: ${stat.requests} reqs (${stat.tokens} tokens)`}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <div className="h-1 w-12 bg-white/5 rounded-full" />
                  )}
                </div>
              );
            })}
          </div>

          {/* X Axis Date Labels */}
          <div className="ml-12 grid grid-cols-4 gap-4 pt-2 text-center">
            {dailySeries.map((day, idx) => (
              <span key={day.dateKey || idx} className={cx("text-xs", idx === dailySeries.length - 1 ? "text-zinc-300 font-medium" : "text-zinc-500")}>
                {day.dateLabel}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Model Legend */}
        <div className="mt-5 flex flex-wrap items-center gap-6 pt-3 border-t border-[#141d2c] text-xs">
          {models.length === 0 ? (
            <span className="text-zinc-500 italic">No models called in this timeframe yet.</span>
          ) : (
            models.slice(0, 6).map((m) => (
              <div key={m.id} className="flex items-center gap-2">
                <span className="size-2.5 rounded-full" style={{ backgroundColor: m.color }} />
                <span className="font-mono text-zinc-300">{m.id}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── Models Breakdown Table Card ── */}
      <div className="rounded-xl border border-[#172133] bg-[#0b111c] p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-white">Models</h2>

        <div className="mt-4 overflow-x-auto">
          {models.length === 0 ? (
            <div className="py-8 text-center text-xs text-zinc-500">
              No model usage recorded for this timeframe. API requests to /v1/chat/completions or Playground will appear here in real time.
            </div>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#141d2c] text-[11px] font-medium tracking-wider text-zinc-400 uppercase">
                  <th className="pb-3 pl-1 font-semibold">MODEL</th>
                  <th className="pb-3 text-right font-semibold">SPEND</th>
                  <th className="pb-3 text-right font-semibold">REQUESTS</th>
                  <th className="pb-3 text-right font-semibold">TOKENS</th>
                  <th className="pb-3 pr-1 text-right font-semibold">SHARE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#131b29]">
                {models.map((item) => (
                  <tr key={item.id} className="hover:bg-white/[0.02] transition">
                    <td className="py-3.5 pl-1">
                      <div className="inline-flex items-center gap-2 rounded-lg border border-[#1c2738] bg-[#0e1624] px-3 py-1.5 shadow-sm">
                        <span className="h-3.5 w-1 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="font-mono text-xs font-medium text-zinc-200">{item.id}</span>
                      </div>
                    </td>
                    <td className="py-3.5 text-right font-mono text-xs text-zinc-300">
                      ${item.spend.toFixed(2)}
                    </td>
                    <td className="py-3.5 text-right font-mono text-xs text-zinc-300">
                      {item.requests.toLocaleString("en-IN")}
                    </td>
                    <td className="py-3.5 text-right font-mono text-xs text-zinc-300">
                      {item.tokens.toLocaleString("en-IN")}
                    </td>
                    <td className="py-3.5 pr-1 text-right font-mono text-xs text-zinc-300">
                      {item.sharePercent.toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* ── Activity Heatmap Card ── */}
      <div className="rounded-xl border border-[#172133] bg-[#0b111c] p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4">
          <div>
            <h2 className="text-sm font-semibold text-white">Activity</h2>
            <p className="mt-0.5 text-xs text-zinc-400">
              {spendFormatted} spent across {activeDaysCount} active {activeDaysCount === 1 ? "day" : "days"} in the last year
            </p>
          </div>

          {/* Scale Legend */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <span>Less</span>
            <span className="size-2.5 rounded-[2px] bg-[#162030]" />
            <span className="size-2.5 rounded-[2px] bg-[#0e4429]" />
            <span className="size-2.5 rounded-[2px] bg-[#006d32]" />
            <span className="size-2.5 rounded-[2px] bg-[#26a641]" />
            <span className="size-2.5 rounded-[2px] bg-[#39d353]" />
            <span>More</span>
          </div>
        </div>

        {/* 52-Week GitHub Style Contribution Heatmap */}
        <div className="mt-2 overflow-x-auto pb-2">
          <div className="min-w-[760px]">
            {/* Month labels */}
            <div className="ml-8 grid grid-cols-12 gap-1 text-[11px] text-zinc-500 pb-2">
              {MONTH_NAMES.map((m, i) => (
                <span key={i} className="text-left">
                  {m}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              {/* Day labels (Mon, Wed, Fri) */}
              <div className="flex flex-col justify-between text-[10px] text-zinc-500 py-0.5 pr-1 font-mono">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              {/* 52 Columns of 7 Days */}
              <div className="flex flex-1 gap-1">
                {heatmapGrid.map((col, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-1">
                    {col.map((day, rowIdx) => {
                      let cellBg = "bg-[#162030]";
                      if (day.level === 1) cellBg = "bg-[#0e4429]";
                      if (day.level === 2) cellBg = "bg-[#006d32]";
                      if (day.level === 3) cellBg = "bg-[#26a641]";
                      if (day.level >= 4) cellBg = "bg-[#39d353]";

                      return (
                        <div
                          key={rowIdx}
                          className={cx(
                            "size-2.5 rounded-[2px] transition-all hover:ring-1 hover:ring-white/40 cursor-pointer",
                            cellBg
                          )}
                          title={`${day.count} requests on ${day.dateLabel}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
