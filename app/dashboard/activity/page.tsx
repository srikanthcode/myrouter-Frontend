"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUp, ScrollText } from "lucide-react";
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
  "inline-flex h-8 cursor-pointer items-center justify-center rounded-lg bg-accent px-3 text-[13px] font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function ActivityPage() {
  const { refresh } = useSession();
  const [items, setItems] = useState<ActivityItem[] | null>(null);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [status, setStatus] = useState<"" | "success" | "errors">("");
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setItems(null);
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
    }
  }, [offset, status]);

  useEffect(() => {
    void refresh();
    void load();
  }, [load]);

  const page = Math.floor(offset / PAGE) + 1;
  const pages = Math.max(1, Math.ceil(total / PAGE));

  return (
    <div className="fade-up space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Activity</h1>
          <p className="mt-1 text-[13.5px] text-mut">Every request through your account, with routing, tokens, latency and cost.</p>
        </div>
        <div className="flex gap-2">
          {([["", "All"], ["success", "Successful"], ["errors", "Errors"]] as const).map(([k, label]) => (
            <button
              key={k || "all"}
              onClick={() => { setStatus(k); setOffset(0); }}
              aria-pressed={status === k}
              className={cx(
                "h-8 cursor-pointer rounded-lg border px-3 text-[12.5px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                status === k ? "border-line2 bg-white/[0.06] text-fg" : "border-line text-mut hover:text-fg",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-bad/30 bg-bad/10 p-4 text-sm text-bad" role="alert">{error}</div>
      )}

      {items === null ? (
        <div className="space-y-3">{[0, 1, 2].map((i) => <Skeleton key={i} className="h-20 w-full" />)}</div>
      ) : items.length === 0 ? (
        <EmptyState
          icon={<ScrollText className="size-6" strokeWidth={1.75} />}
          title={status ? "No matching requests" : "No requests yet"}
          body={status ? "Try clearing the filter, or send a request from the playground." : "Send your first request from the playground or with an API key, and it will show up here."}
          action={<Link href="/chat" className={linkButtonPrimary}>Open playground</Link>}
        />
      ) : (
        <>
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]">
                <thead className="text-[11px] uppercase tracking-wide text-mut2">
                  <tr className="border-b border-line">
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
                <tbody>
                  {items.map((a) => (
                    <tr key={a.id} className="border-b border-line/60 transition-colors duration-200 last:border-0 hover:bg-white/[0.03]">
                      <td className="whitespace-nowrap px-5 py-3 text-mut">{timeAgo(a.createdAt)}</td>
                      <td className="px-3 py-3">
                        <div>{a.modelName ?? a.model ?? "—"}</div>
                        {a.streaming && <div className="text-[11px] text-mut2">streaming</div>}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 font-mono text-[12px] text-mut">{a.provider ?? "—"}</td>
                      <td className="whitespace-nowrap px-3 py-3 font-mono tabular-nums">
                        {a.totalTokens.toLocaleString()}
                        <span className="ml-1.5 inline-flex items-center gap-0.5 text-[11px] tabular-nums text-mut2">
                          <ArrowUp className="size-3" aria-hidden="true" />
                          {a.inputTokens}
                          <ArrowDown className="ml-1 size-3" aria-hidden="true" />
                          {a.outputTokens}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 font-mono tabular-nums">{a.isFree ? <span className="text-good">FREE</span> : formatINR(a.costPaise)}</td>
                      <td className="whitespace-nowrap px-3 py-3 font-mono tabular-nums text-mut">{a.ttftMs != null ? `${a.ttftMs}ms` : "—"}</td>
                      <td className="whitespace-nowrap px-3 py-3 font-mono tabular-nums text-mut">{a.latencyMs != null ? `${a.latencyMs}ms` : "—"}</td>
                      <td className="px-3 py-3">
                        <Badge tone={a.status === "success" ? "good" : "bad"}>{a.errorCode ?? (a.httpStatus ?? a.status)}</Badge>
                      </td>
                      <td className="px-5 py-3 text-right">
                        <Link
                          href={`/dashboard/inspector?id=${a.id}`}
                          className="group inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent transition-colors duration-200 hover:text-accent2"
                        >
                          View
                          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="flex flex-wrap items-center justify-between gap-2 text-[13px] text-mut">
            <span className="tabular-nums">Page {page} of {pages} · {total.toLocaleString()} request{total === 1 ? "" : "s"}</span>
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" disabled={offset === 0} onClick={() => setOffset(Math.max(0, offset - PAGE))}>Previous</Button>
              <Button size="sm" variant="secondary" disabled={offset + PAGE >= total} onClick={() => setOffset(offset + PAGE)}>Next</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
