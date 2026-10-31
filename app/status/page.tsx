import Link from "next/link";
import type { Metadata } from "next";
import { Gauge, Server, ShieldCheck, TriangleAlert } from "lucide-react";
import { PageHeader, PublicShell } from "@/components/PublicShell";
import { Badge, EmptyState } from "@/components/ui";
import { fetchJson, type StatusResponse } from "@/lib/server-api";

export const metadata: Metadata = {
  title: "ProRouter System Status & Uptime — Real-Time API Health",
  description:
    "Live health, latency, and uptime status of the ProRouter unified API, dashboard, billing, and upstream AI model providers.",
  keywords: [
    "ProRouter status",
    "AI API status",
    "DeepSeek API uptime",
    "OpenAI status",
    "LLM router health",
  ],
  alternates: {
    canonical: "https://www.prorouter.in/status",
  },
  openGraph: {
    title: "ProRouter System Status & Uptime",
    description: "Live view of platform services, upstream provider health and the free-model queue.",
    url: "https://www.prorouter.in/status",
    siteName: "ProRouter",
    type: "website",
  },
};

const label: Record<string, string> = {
  operational: "Operational",
  degraded: "Degraded",
  major_outage: "Major outage",
  unknown: "Unknown",
};

const dot: Record<string, string> = {
  operational: "bg-good",
  degraded: "bg-warn",
  major_outage: "bg-bad",
  unknown: "bg-mut",
};

const statusText: Record<string, string> = {
  operational: "text-good",
  degraded: "text-warn",
  major_outage: "text-bad",
  unknown: "text-mut",
};

export default async function StatusPage() {
  const status = await fetchJson<StatusResponse>("/status");

  return (
    <PublicShell>
      <PageHeader
        eyebrow="Status"
        title="Service health."
        subtitle="Live view of platform services, upstream provider health and the free-model queue."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {!status ? (
          <div role="alert" className="flex items-start gap-2.5 rounded-xl border border-warn/30 bg-warn/10 px-5 py-4 text-[13px] text-warn">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
            Could not reach the status API. The platform may be starting up.
          </div>
        ) : (
          <div className="space-y-8">
            {/* Platform services */}
            <section>
              <h2 className="text-sm font-semibold">Platform</h2>
              <div className="mt-3 overflow-hidden rounded-xl border border-line bg-panel">
                {status.services.map((s) => (
                  <div key={s.name} className="flex items-center justify-between gap-4 border-b border-line/60 px-5 py-3 last:border-0">
                    <span className="text-[13.5px]">{s.name}</span>
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <span className={`size-1.5 rounded-full ${s.operational ? "bg-good" : "bg-warn"}`} aria-hidden="true" />
                      <span className={s.operational ? "text-[12.5px] text-good" : "text-[12.5px] text-warn"}>{label[s.status] ?? s.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Providers */}
            <section>
              <h2 className="text-sm font-semibold">Upstream providers</h2>
              {status.providers.length === 0 ? (
                <div className="mt-3">
                  <EmptyState icon={<Server className="size-5" strokeWidth={1.75} />} title="No providers configured." />
                </div>
              ) : (
                <div className="mt-3 overflow-hidden rounded-xl border border-line bg-panel">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[13px]">
                      <thead className="text-[11px] uppercase tracking-wide text-mut2">
                        <tr className="border-b border-line">
                          <th scope="col" className="px-5 py-2.5 font-medium">Provider</th>
                          <th scope="col" className="px-3 py-2.5 font-medium">Status</th>
                          <th scope="col" className="px-3 py-2.5 font-medium">Latency</th>
                          <th scope="col" className="px-3 py-2.5 font-medium">Last checked</th>
                          <th scope="col" className="px-5 py-2.5 font-medium">Note</th>
                        </tr>
                      </thead>
                      <tbody>
                        {status.providers.map((p) => (
                          <tr key={p.slug} className="border-b border-line/60 transition-colors duration-200 last:border-0 hover:bg-white/[0.03]">
                            <td className="px-5 py-2.5">
                              <div>{p.name}</div>
                              <div className="font-mono text-[11px] text-mut2">{p.slug}</div>
                            </td>
                            <td className="px-3 py-2.5">
                              <span className={`flex items-center gap-2 whitespace-nowrap text-[12.5px] ${statusText[p.status] ?? "text-mut"}`}>
                                <span className={`size-1.5 rounded-full ${dot[p.status] ?? "bg-mut2"}`} aria-hidden="true" />
                                {label[p.status] ?? p.status}
                              </span>
                            </td>
                            <td className="px-3 py-2.5 font-mono tabular-nums text-mut">{p.latencyMs != null ? `${p.latencyMs}ms` : "—"}</td>
                            <td className="whitespace-nowrap px-3 py-2.5 font-mono text-[12px] tabular-nums text-mut">{p.lastChecked ? new Date(p.lastChecked).toLocaleString() : "never"}</td>
                            <td className="px-5 py-2.5 text-mut">{p.message ?? "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </section>

            {/* Free queue */}
            <section>
              <h2 className="text-sm font-semibold">Free-model queue</h2>
              {status.queue.length === 0 ? (
                <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-line bg-panel px-5 py-6 text-[13px] text-mut">
                  <Gauge className="size-4 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
                  Queue is empty — free-model requests are being served immediately.
                </div>
              ) : (
                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {status.queue.map((q) => (
                    <div key={q.modelKey} className="rounded-xl border border-line bg-panel p-4">
                      <div className="font-mono text-[12.5px]">{q.modelKey}</div>
                      <div className="mt-2 flex gap-4 text-[12.5px] text-mut">
                        <span>Running <span className="font-mono tabular-nums text-fg">{q.running}</span></span>
                        <span>Waiting <span className="font-mono tabular-nums text-fg">{q.waiting}</span></span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Incidents */}
            <section>
              <h2 className="text-sm font-semibold">Incident history</h2>
              {status.incidents.length === 0 ? (
                <div className="mt-3">
                  <EmptyState icon={<ShieldCheck className="size-5" strokeWidth={1.75} />} title="No incidents recorded." />
                </div>
              ) : (
                <div className="mt-3 space-y-3">
                  {status.incidents.map((i) => (
                    <div key={i.id} className="rounded-xl border border-line bg-panel p-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge tone={i.status === "resolved" ? "good" : i.severity === "major" ? "bad" : "warn"}>{i.severity}</Badge>
                        <span className="text-[13.5px] font-medium">{i.title}</span>
                        <span className="whitespace-nowrap font-mono text-[12px] tabular-nums text-mut2">{new Date(i.startedAt).toLocaleString()}</span>
                      </div>
                      {i.body && <p className="mt-2 text-[13px] leading-relaxed text-mut">{i.body}</p>}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}

        <p className="mt-8 text-[12.5px] text-mut2">
          Need help? See the <Link href="/docs" className="text-accent transition-colors duration-200 hover:underline">documentation</Link> or check <Link href="/security" className="text-accent transition-colors duration-200 hover:underline">security</Link>.
        </p>
      </div>
    </PublicShell>
  );
}
