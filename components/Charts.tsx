"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Activity, Sparkles, Zap, ArrowUpRight } from "lucide-react";

export interface SeriesPoint {
  date: string;
  requests: number;
  tokens: number;
  costPaise: number;
  errors: number;
}

const axisLabel = "font-mono text-[10.5px] tabular-nums text-mut2";

export type ChartMetric = "requests" | "tokens" | "costPaise" | "errors";

function formatValue(metric: ChartMetric, value: number): string {
  const v = value ?? 0;
  if (metric === "costPaise") return `₹${(v / 100).toFixed(2)}`;
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `${(v / 1_000).toFixed(1)}K`;
  return v.toLocaleString("en-IN");
}

// Realistic 14-day preview telemetry when the user has 0 historical requests
const SAMPLE_SERIES: SeriesPoint[] = [
  { date: "2026-10-22", requests: 14, tokens: 28400, costPaise: 0, errors: 0 },
  { date: "2026-10-23", requests: 38, tokens: 94200, costPaise: 40, errors: 0 },
  { date: "2026-10-24", requests: 62, tokens: 182000, costPaise: 110, errors: 1 },
  { date: "2026-10-25", requests: 45, tokens: 125400, costPaise: 65, errors: 0 },
  { date: "2026-10-26", requests: 89, tokens: 245000, costPaise: 190, errors: 0 },
  { date: "2026-10-27", requests: 112, tokens: 360000, costPaise: 280, errors: 0 },
  { date: "2026-10-28", requests: 95, tokens: 290000, costPaise: 210, errors: 0 },
  { date: "2026-10-29", requests: 140, tokens: 490000, costPaise: 380, errors: 1 },
  { date: "2026-10-30", requests: 175, tokens: 620000, costPaise: 490, errors: 0 },
  { date: "2026-10-31", requests: 210, tokens: 840000, costPaise: 650, errors: 0 },
  { date: "2026-11-01", requests: 185, tokens: 710000, costPaise: 540, errors: 0 },
  { date: "2026-11-02", requests: 240, tokens: 950000, costPaise: 760, errors: 0 },
  { date: "2026-11-03", requests: 295, tokens: 1180000, costPaise: 910, errors: 0 },
  { date: "2026-11-04", requests: 320, tokens: 1320000, costPaise: 1040, errors: 0 },
];

/** Modern animated bar chart with glowing bars, live hover cards, and interactive sample visualizer */
export function BarChart({
  data,
  metric = "requests",
  height = 175,
}: {
  data: SeriesPoint[];
  metric?: ChartMetric;
  height?: number;
}) {
  const hasRealData = data && data.length > 0 && Math.max(...data.map((d) => d[metric] ?? 0), 0) > 0;
  const [showDemo, setShowDemo] = useState(!hasRealData);

  const activeData = hasRealData ? data : showDemo ? SAMPLE_SERIES : [];
  const values = activeData.map((d) => d[metric] ?? 0);
  const max = Math.max(...values, 0);

  // If user explicitly toggled off demo and has 0 data
  if (activeData.length === 0 || max === 0) {
    return (
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-line2/70 bg-gradient-to-b from-panel2/60 via-panel to-panel2/40 p-6 text-center"
        style={{ height }}
        role="img"
        aria-label="Chart — gateway ready for activity"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
          <div className="animate-radar h-full w-1/3 bg-gradient-to-r from-transparent via-accent/30 to-transparent blur-md" />
        </div>

        <div className="relative mb-3 flex items-center justify-center">
          <div className="animate-ping absolute size-7 rounded-full bg-accent/25" />
          <div className="relative flex size-8 items-center justify-center rounded-full border border-accent/40 bg-accent/15 text-accent shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            <Activity className="size-4 animate-pulse" />
          </div>
        </div>

        <div className="z-10 flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[12px] font-medium tracking-wide text-fg">
            Unified Gateway Telemetry Active
          </span>
        </div>

        <p className="z-10 mt-1 max-w-sm text-[12px] text-mut">
          Zero latency recorded today. Every request made via API key or playground streams in real time.
        </p>

        <div className="z-10 mt-3 flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setShowDemo(true)}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-[11.5px] font-medium text-accent transition-all duration-200 hover:border-accent hover:bg-accent/20 hover:shadow-[0_0_12px_rgba(34,197,94,0.25)]"
          >
            <Sparkles className="size-3" />
            Preview Demo Activity
          </button>
          <Link
            href="/chat"
            className="inline-flex cursor-pointer items-center gap-1 rounded-lg border border-line2 bg-white/[0.04] px-3 py-1.5 text-[11.5px] font-medium text-mut transition-colors duration-200 hover:bg-white/[0.08] hover:text-fg"
          >
            Test Playground <ArrowUpRight className="size-3" />
          </Link>
        </div>
      </div>
    );
  }

  const first = activeData[0]?.date ? activeData[0].date.slice(5) : "";
  const mid =
    activeData.length > 2 && activeData[Math.floor(activeData.length / 2)]?.date
      ? activeData[Math.floor(activeData.length / 2)].date.slice(5)
      : "";
  const last =
    activeData.length > 1 && activeData[activeData.length - 1]?.date
      ? activeData[activeData.length - 1].date.slice(5)
      : "";

  return (
    <div className="w-full">
      {!hasRealData && showDemo && (
        <div className="mb-2.5 flex items-center justify-between rounded-lg border border-accent/25 bg-accent/10 px-3 py-1.5 text-[11.5px] text-accent">
          <span className="flex items-center gap-1.5 font-medium">
            <Sparkles className="size-3.5" /> Simulated 14-day production activity preview
          </span>
          <button
            type="button"
            onClick={() => setShowDemo(false)}
            className="cursor-pointer font-medium underline opacity-80 hover:opacity-100"
          >
            Clear to blank
          </button>
        </div>
      )}

      <div className="relative pt-6" style={{ height }} role="img" aria-label={`Daily ${metric} chart`}>
        {/* Grid lines */}
        {[0, 50, 100].map((p) => (
          <div
            key={p}
            className="absolute inset-x-0 border-t border-line/60"
            style={{ top: `calc(${p}% * 0.78 + 1.5rem)` }}
            aria-hidden="true"
          />
        ))}

        {/* Animated Bars */}
        <div className="absolute inset-x-0 bottom-0 top-6 flex items-end gap-[3px]">
          {activeData.map((d, i) => {
            const val = values[i] ?? 0;
            const hasVal = val > 0;
            const barHeight = hasVal ? Math.max((val / max) * 100, 6) : 2;
            const tooltipPos =
              i <= 1 ? "left-0" : i >= activeData.length - 2 ? "right-0" : "left-1/2 -translate-x-1/2";

            return (
              <div key={d.date} className="group relative flex h-full flex-1 items-end">
                <div
                  className={`w-full rounded-t-[4px] transition-all duration-500 ease-out ${
                    hasVal
                      ? "bg-gradient-to-t from-accent/50 via-accent/80 to-accent2 shadow-[0_0_8px_rgba(34,197,94,0.25)] group-hover:from-accent group-hover:to-accent2 group-hover:shadow-[0_0_16px_rgba(34,197,94,0.6)]"
                      : "bg-line2/40 group-hover:bg-line2"
                  }`}
                  style={{ height: `${barHeight}%` }}
                />

                {/* Elevated animated hover card */}
                <div
                  className={`pointer-events-none absolute -top-12 ${tooltipPos} z-30 whitespace-nowrap rounded-lg border border-accent/30 bg-panel2/95 px-2.5 py-1.5 font-mono text-[11px] tabular-nums shadow-xl backdrop-blur-md opacity-0 transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100`}
                >
                  <div className="font-semibold text-fg">
                    {d.date.slice(5)} · {formatValue(metric, val)}
                  </div>
                  <div className="text-[10px] text-mut2">
                    {d.tokens ? `${d.tokens.toLocaleString("en-IN")} tok` : "Zero tok"} · ₹{(d.costPaise / 100).toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-2.5 flex justify-between border-t border-line/40 pt-1.5">
        <span className={axisLabel}>{first}</span>
        {mid ? <span className={axisLabel}>{mid}</span> : null}
        {last ? <span className={axisLabel}>{last}</span> : null}
      </div>
    </div>
  );
}

// Model Provider Color Presets
const PROVIDER_BAR_GRADIENTS: Record<string, string> = {
  deepseek: "from-emerald-500 to-teal-400 shadow-[0_0_8px_rgba(34,197,94,0.4)]",
  qwen: "from-indigo-500 to-violet-400 shadow-[0_0_8px_rgba(99,102,241,0.4)]",
  claude: "from-amber-500 to-orange-400 shadow-[0_0_8px_rgba(245,158,11,0.4)]",
  anthropic: "from-amber-500 to-orange-400 shadow-[0_0_8px_rgba(245,158,11,0.4)]",
  openai: "from-cyan-500 to-blue-400 shadow-[0_0_8px_rgba(6,182,212,0.4)]",
  gpt: "from-cyan-500 to-blue-400 shadow-[0_0_8px_rgba(6,182,212,0.4)]",
  meta: "from-blue-600 to-indigo-500 shadow-[0_0_8px_rgba(37,99,235,0.4)]",
  google: "from-rose-500 to-pink-400 shadow-[0_0_8px_rgba(244,63,94,0.4)]",
};

function getBarGradient(label: string): string {
  const l = label.toLowerCase();
  for (const [key, grad] of Object.entries(PROVIDER_BAR_GRADIENTS)) {
    if (l.includes(key)) return grad;
  }
  return "from-accent to-accent2 shadow-[0_0_8px_rgba(34,197,94,0.35)]";
}

const SAMPLE_USAGE_MODELS = [
  { label: "DeepSeek V4.1 Flash", value: 540, hint: "1,240,000 tok" },
  { label: "Qwen 3.8 27B", value: 380, hint: "890,000 tok" },
  { label: "Claude 3.5 Sonnet", value: 190, hint: "450,000 tok" },
  { label: "OpenAI GPT-4o", value: 120, hint: "310,000 tok" },
];

/** Modern animated UsageBars with gradient filling animations and interactive demo preview */
export function UsageBars({
  items,
  total,
}: {
  items: Array<{ label: string; value: number; hint?: string }>;
  total: number;
}) {
  const hasRealUsage = items && items.length > 0 && total > 0;
  const [showDemo, setShowDemo] = useState(!hasRealUsage);

  const activeItems = hasRealUsage ? items : showDemo ? SAMPLE_USAGE_MODELS : [];
  const activeTotal = hasRealUsage ? total : showDemo ? 1230 : 0;

  if (activeItems.length === 0 || !activeTotal || activeTotal <= 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-line2/60 py-7 text-center">
        <Zap className="mb-2 size-5 text-accent animate-pulse" />
        <p className="text-[12.5px] font-medium text-fg">No model consumption recorded yet</p>
        <p className="mt-0.5 text-[11.5px] text-mut">Breakdown updates automatically as you route requests.</p>
        <button
          type="button"
          onClick={() => setShowDemo(true)}
          className="mt-3 inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-line2 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-mut transition-colors duration-200 hover:bg-white/[0.08] hover:text-fg"
        >
          <Sparkles className="size-3 text-accent" /> Preview Model Mix
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {!hasRealUsage && showDemo && (
        <div className="flex items-center justify-between text-[11px] text-accent">
          <span>⚡ Simulated Model Mix Preview</span>
          <button
            type="button"
            onClick={() => setShowDemo(false)}
            className="cursor-pointer underline opacity-80 hover:opacity-100"
          >
            Clear
          </button>
        </div>
      )}

      {activeItems.slice(0, 5).map((it) => {
        const pct = Math.min(100, Math.max(0, Math.round(((it.value ?? 0) / activeTotal) * 100)));
        const widthPct = Math.min(100, Math.max(3, ((it.value ?? 0) / activeTotal) * 100));
        const gradientClass = getBarGradient(it.label);

        return (
          <div key={it.label} className="group">
            <div className="mb-1.5 flex items-baseline justify-between gap-3 text-[12.5px]">
              <span className="truncate font-medium text-fg/90 transition-colors duration-200 group-hover:text-accent">
                {it.label}
                {it.hint ? <span className="font-normal text-mut2"> · {it.hint}</span> : null}
              </span>
              <span className="font-mono text-[12px] font-semibold tabular-nums text-fg">{pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.06] p-[1px]">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${gradientClass} transition-all duration-700 ease-out`}
                style={{ width: `${widthPct}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Sparkline({ points, className }: { points: number[]; className?: string }) {
  if (points.length < 2) return null;
  const max = Math.max(...points, 1);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${(i / (points.length - 1)) * 100},${28 - (p / max) * 26}`).join(" ");
  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className={className ?? "h-8 w-full"} aria-hidden="true">
      <path d={path} fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
