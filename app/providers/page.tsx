import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ServerOff } from "lucide-react";
import { PageHeader, PublicShell } from "@/components/PublicShell";
import { Badge, EmptyState } from "@/components/ui";
import { fetchJson, DEFAULT_PROVIDERS, type ProviderSummary } from "@/lib/server-api";

export const metadata: Metadata = {
  title: "Providers",
  description: "The upstream AI providers ProRouter routes across, with health, region and retention policy.",
};

const statusTone: Record<string, "good" | "warn" | "bad" | "neutral"> = {
  active: "good",
  degraded: "warn",
  disabled: "bad",
};

export default async function ProvidersPage() {
  const providersRes = await fetchJson<ProviderSummary[]>("/providers");
  const providers = providersRes && providersRes.length > 0 ? providersRes : DEFAULT_PROVIDERS;

  return (
    <PublicShell>
      <PageHeader
        eyebrow="Providers"
        title="One integration, every upstream."
        subtitle="ProRouter holds the provider credentials, monitors health, retries and fails over. You keep one API key and one bill."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {providers.length === 0 ? (
          <EmptyState icon={<ServerOff className="size-6" strokeWidth={1.75} />} title="No providers configured yet." />
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {providers.map((p) => (
              <div key={p.slug} className="flex flex-col rounded-xl border border-line bg-panel p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="truncate text-[15px] font-semibold">{p.name}</h2>
                    <div className="mt-1 font-mono text-[11.5px] text-mut2">{p.slug}</div>
                  </div>
                  <Badge tone={statusTone[p.status] ?? "neutral"}>{p.status}</Badge>
                </div>

                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-mut">{p.description || "—"}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  <Badge tone="neutral">{p.region}</Badge>
                  <Badge tone="neutral">
                    <span className="font-mono tabular-nums">{p.modelCount}</span> model{p.modelCount === 1 ? "" : "s"}
                  </Badge>
                  {p.retentionPolicy && <Badge tone="neutral">{p.retentionPolicy.replace(/_/g, " ")}</Badge>}
                </div>

                {p.supportedCapabilities?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.supportedCapabilities.map((c) => (
                      <span key={c} className="rounded-md border border-line bg-ink2 px-1.5 py-0.5 font-mono text-[10.5px] text-mut2">
                        {c}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-3 text-[12.5px]">
                  <span className="text-mut2">
                    Priority <span className="font-mono tabular-nums">{p.priority}</span>
                  </span>
                  <Link
                    href={`/models?provider=${p.slug}`}
                    className="group inline-flex cursor-pointer items-center gap-1.5 font-medium text-accent transition-colors duration-200 hover:text-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    View models
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 rounded-xl border border-line bg-panel p-6">
          <h2 className="text-sm font-semibold">Automatic fallback</h2>
          <p className="mt-2 max-w-3xl text-[13.5px] leading-relaxed text-mut">
            Each model has an ordered list of upstream routes. If the highest-priority provider returns an error, times out, or fails its health check,
            the router retries the next healthy route in the same request — so a single provider outage does not become your outage.
          </p>
          <Link
            href="/status"
            className="mt-4 inline-flex h-9 cursor-pointer items-center rounded-lg border border-line2 bg-white/[0.04] px-4 text-[13px] font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            See live provider health
          </Link>
        </div>
      </div>
    </PublicShell>
  );
}
