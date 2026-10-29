"use client";

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

/** Lightweight dependency-free bar chart with hairline gridlines. */
export function BarChart({ data, metric = "requests", height = 160 }: { data: SeriesPoint[]; metric?: ChartMetric; height?: number }) {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-lg border border-dashed border-line2 text-[13px] text-mut2" style={{ height }} role="img" aria-label="Chart — no data yet">
        No data yet
      </div>
    );
  }
  const values = data.map((d) => d[metric] ?? 0);
  const max = Math.max(...values, 0);

  if (max === 0) {
    return (
      <div className="flex items-center justify-center rounded-lg border border-dashed border-line2 px-4 text-center text-[13px] text-mut2" style={{ height }} role="img" aria-label="Chart — no activity in this period">
        No activity in this period yet.
      </div>
    );
  }

  const first = data[0]?.date ? data[0].date.slice(5) : "";
  const mid = data.length > 2 && data[Math.floor(data.length / 2)]?.date ? data[Math.floor(data.length / 2)].date.slice(5) : "";
  const last = data.length > 1 && data[data.length - 1]?.date ? data[data.length - 1].date.slice(5) : "";

  return (
    <div className="w-full">
      <div className="relative pt-6" style={{ height }} role="img" aria-label={`Daily ${metric} chart`}>
        {/* Hairline gridlines */}
        {[0, 50, 100].map((p) => (
          <div key={p} className="absolute inset-x-0 border-t border-line" style={{ top: `calc(${p}% * 0.8 + 1.5rem)` }} aria-hidden="true" />
        ))}
        {/* Bars */}
        <div className="absolute inset-x-0 bottom-0 top-6 flex items-end gap-[3px]">
          {data.map((d, i) => {
            const val = values[i] ?? 0;
            const hasVal = val > 0;
            const barHeight = hasVal ? Math.max((val / max) * 100, 4) : 1.5;
            const tooltipPos =
              i <= 1 ? "left-0" : i >= data.length - 2 ? "right-0" : "left-1/2 -translate-x-1/2";
            return (
              <div key={d.date} className="group relative flex h-full flex-1 items-end">
                <div
                  className={`w-full rounded-t-[3px] transition-colors duration-200 ${
                    hasVal ? "bg-accent/80 group-hover:bg-accent2" : "bg-line2/70 group-hover:bg-mut2"
                  }`}
                  style={{ height: `${barHeight}%` }}
                />
                <div
                  className={`pointer-events-none absolute -top-8 ${tooltipPos} z-20 whitespace-nowrap rounded-md border border-line2 bg-panel2 px-2 py-1 font-mono text-[11px] tabular-nums opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100`}
                >
                  {d.date.slice(5)} · {formatValue(metric, val)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <span className={axisLabel}>{first}</span>
        {mid ? <span className={axisLabel}>{mid}</span> : null}
        {last ? <span className={axisLabel}>{last}</span> : null}
      </div>
    </div>
  );
}

export function UsageBars({ items, total }: { items: Array<{ label: string; value: number; hint?: string }>; total: number }) {
  if (items.length === 0 || !total || total <= 0 || isNaN(total)) {
    return <div className="py-6 text-center text-[13px] text-mut2">No usage recorded yet.</div>;
  }
  return (
    <div className="space-y-3.5">
      {items.slice(0, 6).map((it) => {
        const pct = Math.min(100, Math.max(0, Math.round(((it.value ?? 0) / total) * 100)));
        const widthPct = Math.min(100, Math.max(2, ((it.value ?? 0) / total) * 100));
        return (
          <div key={it.label}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3 text-[12.5px]">
              <span className="truncate text-mut">
                {it.label}
                {it.hint ? <span className="text-mut2"> · {it.hint}</span> : null}
              </span>
              <span className="font-mono tabular-nums text-fg">{pct}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <div className="h-full rounded-full bg-accent" style={{ width: `${widthPct}%` }} />
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
