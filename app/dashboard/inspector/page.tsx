"use client";

import Link from "next/link";
import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ScanSearch } from "lucide-react";
import { ApiError, api, formatINR, timeAgo } from "@/lib/api";
import { Badge, Button, Card, CopyButton, EmptyState, Skeleton } from "@/components/ui";

interface RequestDetail {
  id: string;
  createdAt: string;
  model: string | null;
  provider: string | null;
  status: string;
  httpStatus: number | null;
  route: string | null;
  latencyMs: number | null;
  ttftMs: number | null;
  queueWaitMs: number | null;
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  costPaise: number;
  streaming: boolean;
  isFree: boolean;
  errorCode: string | null;
  errorMessage: string | null;
  apiKey: { name: string; prefix: string } | null;
}

interface Attempt {
  step: number;
  provider: string | null;
  status: string;
  httpStatus: number | null;
  latencyMs: number | null;
  error: string | null;
  at: string;
}

interface TimelineEntry {
  step: string;
  at?: string;
  ok?: boolean;
  model?: string | null;
  provider?: string | null;
  route?: string | null;
  ms?: number;
  ms2?: number;
  status?: string;
  costPaise?: number;
  [k: string]: unknown;
}

interface InspectorData {
  request: RequestDetail;
  attempts: Attempt[];
  timeline: TimelineEntry[];
}

export default function InspectorPage() {
  return (
    <Suspense fallback={<div className="space-y-4">{[0, 1].map((i) => <Skeleton key={i} className="h-32 w-full" />)}</div>}>
      <Inspector />
    </Suspense>
  );
}

function Inspector() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") ?? "";
  const [data, setData] = useState<InspectorData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async (requestId: string) => {
    if (!requestId) {
      setData(null);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      setData(await api<InspectorData>(`/dashboard/activity/${requestId}`));
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Could not load this request.");
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load(id);
  }, [id, load]);

  return (
    <div className="fade-up space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Inspector</h1>
          <p className="mt-1 text-[13.5px] text-mut">Trace a single request end-to-end: routing decision, fallback attempts, timing and billing.</p>
        </div>
        <Link href="/dashboard/activity"><Button variant="secondary" size="sm">Browse activity</Button></Link>
      </div>

      {!id && (
        <EmptyState
          icon={<ScanSearch className="size-6" strokeWidth={1.75} />}
          title="No request selected"
          body="Open a request from the activity log to inspect its routing decision, per-attempt timings and final cost."
          action={<Link href="/dashboard/activity"><Button>Go to activity</Button></Link>}
        />
      )}

      {id && error && <div className="rounded-xl border border-bad/30 bg-bad/10 p-4 text-sm text-bad" role="alert">{error}</div>}
      {id && loading && <div className="space-y-4">{[0, 1].map((i) => <Skeleton key={i} className="h-32 w-full" />)}</div>}

      {id && data && (
        <>
          <Card className="p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-[15px] font-semibold">{data.request.model ?? "unknown model"}</h2>
                  <Badge tone={data.request.status === "success" ? "good" : "bad"}>{data.request.errorCode ?? (data.request.httpStatus ?? data.request.status)}</Badge>
                  {data.request.isFree && <Badge tone="free">FREE</Badge>}
                  {data.request.streaming && <Badge tone="neutral">streaming</Badge>}
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                  <span className="break-all font-mono text-[12px] tabular-nums text-mut2">{data.request.id}</span>
                  <CopyButton value={data.request.id} />
                </div>
              </div>
              <div className="text-right text-[12.5px] text-mut">
                <div>{timeAgo(data.request.createdAt)}</div>
                <div className="text-mut2">{new Date(data.request.createdAt).toLocaleString()}</div>
              </div>
            </div>

            {data.request.errorMessage && (
              <div className="mt-4 rounded-lg border border-bad/30 bg-bad/10 px-3 py-2 font-mono text-[12px] leading-relaxed text-bad">{data.request.errorMessage}</div>
            )}

            <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
              {[
                { k: "Provider", v: data.request.provider ?? "—" },
                { k: "Route", v: data.request.route ?? "—" },
                { k: "API key", v: data.request.apiKey ? `${data.request.apiKey.name} (${data.request.apiKey.prefix}…)` : "session" },
                { k: "Cost", v: data.request.isFree ? "FREE" : formatINR(data.request.costPaise) },
                { k: "Input tokens", v: data.request.inputTokens.toLocaleString() },
                { k: "Output tokens", v: data.request.outputTokens.toLocaleString() },
                { k: "Total tokens", v: data.request.totalTokens.toLocaleString() },
                { k: "Queue wait", v: data.request.queueWaitMs != null ? `${data.request.queueWaitMs}ms` : "—" },
                { k: "Time to first token", v: data.request.ttftMs != null ? `${data.request.ttftMs}ms` : "—" },
                { k: "Total latency", v: data.request.latencyMs != null ? `${data.request.latencyMs}ms` : "—" },
                { k: "HTTP status", v: data.request.httpStatus != null ? String(data.request.httpStatus) : "—" },
                { k: "Attempts", v: String(data.attempts.length) },
              ].map((row) => (
                <div key={row.k} className="bg-panel px-3.5 py-3">
                  <dt className="text-[11.5px] uppercase tracking-wide text-mut2">{row.k}</dt>
                  <dd className="mt-1 font-mono text-[13px] tabular-nums">{row.v}</dd>
                </div>
              ))}
            </dl>
          </Card>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="p-5">
              <h2 className="text-sm font-semibold">Timeline</h2>
              <ol className="mt-4 space-y-3">
                {data.timeline.map((t, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[13px]">{t.step}</div>
                      <div className="mt-0.5 flex flex-wrap gap-x-3 font-mono text-[12px] leading-relaxed tabular-nums text-mut2">
                        {t.model != null && <span>model={t.model}</span>}
                        {t.provider != null && <span>provider={t.provider}</span>}
                        {t.route != null && <span>route={t.route}</span>}
                        {t.status != null && <span>status={t.status}</span>}
                        {t.ms != null && <span>{t.ms}ms</span>}
                        {t.costPaise != null && <span>{formatINR(t.costPaise)}</span>}
                        {t.at != null && <span>{new Date(t.at).toLocaleTimeString()}</span>}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </Card>

            <Card className="p-5">
              <h2 className="text-sm font-semibold">Provider attempts</h2>
              {data.attempts.length === 0 ? (
                <p className="mt-4 text-[13px] text-mut">No per-attempt records for this request.</p>
              ) : (
                <ol className="mt-4 space-y-3">
                  {data.attempts.map((a) => (
                    <li key={a.step} className="rounded-lg border border-line p-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[13px]">Attempt {a.step}</span>
                        <Badge tone={a.status === "success" ? "good" : "bad"}>{a.error ?? a.status}</Badge>
                      </div>
                      <div className="mt-1.5 flex flex-wrap gap-x-3 font-mono text-[12px] leading-relaxed tabular-nums text-mut2">
                        {a.httpStatus != null && <span>http={a.httpStatus}</span>}
                        {a.latencyMs != null && <span>{a.latencyMs}ms</span>}
                        <span>{new Date(a.at).toLocaleTimeString()}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
