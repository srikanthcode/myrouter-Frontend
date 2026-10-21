"use client";

export interface SeriesPoint {
  date: string;
  requests: number;
  tokens: number;
  costPaise: number;
  errors: number;
}

const axisLabel = "font-mono text-[10.5px] tabular-nums text-mut2";

function formatValue(metric: "requests" | "tokens" | "costPaise", value: number): string {
  if (metric === "costPaise") return `₹${(value / 100).toFixed(2)}`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return value.toLocaleString("en-IN");
}

/** Lightweight dependency-free bar chart with hairline gridlines. */
export function BarChart({ data, metric = "requests", height = 160 }: { data: SeriesPoint[]; metric?: "requests" | "tokens" | "costPaise"; height?: number }) {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-lg border border-dashed border-line2 text-[13px] text-mut2" style={{ height }} role="img" aria-label="Chart — no data yet">
        No data yet
      </div>
    );
  }
  const values = data.map((d) => d[metric]);
  const max = Math.max(...values);

  if (max === 0) {
    return (
      <div className="flex items-center justify-center rounded-lg border border-dashed border-line2 px-4 text-center text-[13px] text-mut2" style={{ height }} role="img" aria-label="Chart — no activity in this period">
        No activity in this period yet.
      </div>
    );
  }

  const first = data[0]?.date.slice(5);
  const mid = data[Math.floor(data.length / 2)]?.date.slice(5);
  const last = data[data.length - 1]?.date.slice(5);

  return (
    <div className="w-full">
      <div className="relative" style={{ height }} role="img" aria-label={`Daily ${metric} chart`}>
        {/* Hairline gridlines */}
        {[0, 50, 100].map((p) => (
          <div key={p} className="absolute inset-x-0 border-t border-line" style={{ top: `${p}%` }} aria-hidden="true" />
        ))}
        {/* Bars */}
        <div className="absolute inset-0 flex items-end gap-[3px]">
          {data.map((d, i) => (
            <div key={d.date} className="group relative flex h-full flex-1 items-end">
              <div
                className="w-full rounded-t-[3px] bg-accent/75 transition-colors duration-200 group-hover:bg-accent2"
                style={{ height: `${Math.max((values[i] / max) * 100, values[i] > 0 ? 4 : 1.5)}%` }}
              />
              <div className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-line2 bg-panel2 px-2 py-1 font-mono text-[11px] tabular-nums opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                {d.date.slice(5)} · {formatValue(metric, values[i])}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <span className={axisLabel}>{first}</span>
        <span className={axisLabel}>{mid}</span>
        <span className={axisLabel}>{last}</span>
      </div>
    </div>
  );
}

export function UsageBars({ items, total }: { items: Array<{ label: string; value: number; hint?: string }>; total: number }) {
  if (items.length === 0 || total === 0) return <div className="py-6 text-center text-[13px] text-mut2">No usage recorded yet.</div>;
  return (
    <div className="space-y-3.5">
      {items.slice(0, 6).map((it) => (
        <div key={it.label}>
          <div className="mb-1.5 flex items-baseline justify-between gap-3 text-[12.5px]">
            <span className="truncate text-mut">
              {it.label}
              {it.hint ? <span className="text-mut2"> · {it.hint}</span> : null}
            </span>
            <span className="font-mono tabular-nums text-fg">{Math.round((it.value / total) * 100)}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full rounded-full bg-accent" style={{ width: `${Math.max(2, (it.value / total) * 100)}%` }} />
          </div>
        </div>
      ))}
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
