import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Minus, Route } from "lucide-react";
import { PublicShell } from "@/components/PublicShell";
import { Badge, CopyButton, EmptyState } from "@/components/ui";
import { compactNumber, fetchJson, formatPerMillion, type ModelSummary } from "@/lib/server-api";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const detail = await fetchJson<ModelDetail>(`/models/${encodeURIComponent(slug)}`);
  if (!detail) return { title: "Model not found" };
  return {
    title: detail.model.name,
    description: detail.model.description,
  };
}

export default async function ModelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detail = await fetchJson<ModelDetail>(`/models/${encodeURIComponent(slug)}`);
  if (!detail) notFound();

  const { model: m, limits, routes } = detail;
  const apiBase = process.env.PUBLIC_API_BASE_URL || "https://prorouter.in";
  const curl = `curl ${apiBase}/v1/chat/completions \\
  -H "Authorization: Bearer $PROROUTER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${m.slug}",
    "messages": [{ "role": "user", "content": "Hello!" }]
  }'`;

  const capabilityRows: Array<[string, boolean | string]> = [
    ["Streaming", m.capabilities.streaming],
    ["Tool calls", m.capabilities.toolCalls],
    ["Structured outputs", m.capabilities.structuredOutputs],
    ["Reasoning", m.capabilities.reasoning],
    ["Vision", m.capabilities.vision],
    ["Image generation", m.capabilities.imageGeneration],
    ["Audio", m.capabilities.audio],
    ["JSON mode", m.capabilities.jsonMode],
  ];

  const keyFacts: Array<{ label: string; value: string; mono?: boolean }> = [
    { label: "Provider", value: m.providerName },
    { label: "Context window", value: `${compactNumber(m.contextWindow)} tokens`, mono: true },
    { label: "Max output", value: `${compactNumber(m.maxOutputTokens)} tokens`, mono: true },
    { label: "Modalities", value: m.capabilities.modalities.join(", ") },
  ];

  return (
    <PublicShell>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <Link
          href="/models"
          className="group inline-flex cursor-pointer items-center gap-1.5 text-[13px] font-medium text-mut transition-colors duration-200 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" strokeWidth={1.75} aria-hidden="true" />
          All models
        </Link>

        <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{m.name}</h1>
              <Badge tone={m.available ? "good" : "neutral"}>{m.available ? "Available" : "Not yet serving"}</Badge>
            </div>
            <div className="mt-2 font-mono text-[12.5px] text-mut2">{m.slug}</div>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-mut">{m.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/chat"
              className="inline-flex h-10 cursor-pointer items-center rounded-lg bg-accent px-5 text-sm font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Try in playground
            </Link>
            <Link
              href="/dashboard/keys"
              className="inline-flex h-10 cursor-pointer items-center rounded-lg border border-line2 bg-white/[0.04] px-5 text-sm font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Get an API key
            </Link>
          </div>
        </div>

        {/* Key facts */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {keyFacts.map((f) => (
            <div key={f.label} className="rounded-xl border border-line bg-panel p-4">
              <div className="text-[11px] uppercase tracking-wide text-mut2">{f.label}</div>
              <div className={`mt-1.5 text-[14px] font-medium capitalize${f.mono ? " font-mono tabular-nums" : ""}`}>{f.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {/* Pricing */}
          <div className="rounded-xl border border-line bg-panel p-5">
            <h2 className="text-sm font-semibold">Pricing</h2>
            <p className="mt-1 text-[12.5px] text-mut">Billed per million tokens from your ProRouter wallet.</p>
            <dl className="mt-4 space-y-3 text-[13px]">
              <div className="flex items-center justify-between">
                <dt className="text-mut">Input</dt>
                <dd className="font-mono tabular-nums">{formatPerMillion(m.pricing.inputPerMillion)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-mut">Output</dt>
                <dd className="font-mono tabular-nums">{formatPerMillion(m.pricing.outputPerMillion)}</dd>
              </div>
              {m.pricing.cachedInputPerMillion != null && m.pricing.cachedInputPerMillion > 0 && (
                <div className="flex items-center justify-between">
                  <dt className="text-mut">Cached input</dt>
                  <dd className="font-mono tabular-nums">{formatPerMillion(m.pricing.cachedInputPerMillion)}</dd>
                </div>
              )}
            </dl>
            <Link
              href="/dashboard/wallet"
              className="mt-5 inline-flex h-9 cursor-pointer items-center rounded-lg border border-line2 bg-white/[0.04] px-4 text-[13px] font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Add credits
            </Link>
          </div>

          {/* Capabilities */}
          <div className="rounded-xl border border-line bg-panel p-5">
            <h2 className="text-sm font-semibold">Capabilities</h2>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              {capabilityRows.map(([label, ok]) => (
                <li key={label} className="flex items-center justify-between">
                  <span className="text-mut">{label}</span>
                  {ok ? (
                    <Check className="size-4 text-good" strokeWidth={1.75} aria-hidden="true" />
                  ) : (
                    <Minus className="size-4 text-mut2" strokeWidth={1.75} aria-hidden="true" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Rate limits */}
          <div className="rounded-xl border border-line bg-panel p-5">
            <h2 className="text-sm font-semibold">Rate limits</h2>
            {limits ? (
              <dl className="mt-4 space-y-2.5 text-[13px]">
                <div className="flex items-center justify-between"><dt className="text-mut">Per minute</dt><dd className="font-mono tabular-nums">{limits.perMinute}</dd></div>
                <div className="flex items-center justify-between"><dt className="text-mut">Per hour</dt><dd className="font-mono tabular-nums">{limits.perHour}</dd></div>
                <div className="flex items-center justify-between"><dt className="text-mut">Per day</dt><dd className="font-mono tabular-nums">{limits.perDay}</dd></div>
                <div className="flex items-center justify-between"><dt className="text-mut">Concurrency</dt><dd className="font-mono tabular-nums">{limits.concurrency}</dd></div>
                <div className="flex items-center justify-between"><dt className="text-mut">Queue priority</dt><dd className="font-mono tabular-nums">{limits.queuePriority}</dd></div>
              </dl>
            ) : (
              <p className="mt-4 text-[13px] text-mut">No specific limits configured — your plan's default limits apply.</p>
            )}
          </div>
        </div>

        {/* Routing */}
        <div className="mt-6 rounded-xl border border-line bg-panel">
          <div className="border-b border-line px-5 py-3.5">
            <h2 className="text-sm font-semibold">Upstream routes</h2>
            <p className="mt-0.5 text-[12.5px] text-mut">Tried in priority order; the router fails over automatically when one degrades.</p>
          </div>
          {routes.length === 0 ? (
            <div className="p-5">
              <EmptyState icon={<Route className="size-6" strokeWidth={1.75} />} title="No upstream routes configured for this model yet." />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]">
                <thead className="text-[11px] uppercase tracking-wide text-mut2">
                  <tr className="border-b border-line">
                    <th scope="col" className="px-5 py-2.5 font-medium">Priority</th>
                    <th scope="col" className="px-3 py-2.5 font-medium">Provider</th>
                    <th scope="col" className="px-3 py-2.5 font-medium">Route status</th>
                    <th scope="col" className="px-5 py-2.5 font-medium">Health</th>
                  </tr>
                </thead>
                <tbody>
                  {routes.map((r, i) => (
                    <tr key={`${r.providerSlug}-${i}`} className="border-b border-line/60 transition-colors duration-200 last:border-0 hover:bg-white/[0.03]">
                      <td className="whitespace-nowrap px-5 py-2.5 font-mono tabular-nums text-mut">{r.priority}</td>
                      <td className="px-3 py-2.5">{r.providerName}</td>
                      <td className="px-3 py-2.5"><Badge tone={r.status === "active" ? "good" : "neutral"}>{r.status}</Badge></td>
                      <td className="px-5 py-2.5"><Badge tone={r.healthy ? "good" : "warn"}>{r.healthy ? "healthy" : "degraded"}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Usage */}
        <div className="mt-6 rounded-xl border border-line bg-panel">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5">
            <h2 className="text-sm font-semibold">Call it with the OpenAI SDK</h2>
            <CopyButton value={curl} label="Copy example" />
          </div>
          <pre className="overflow-x-auto px-5 py-4 font-mono text-[12.5px] leading-relaxed text-fg/90">{curl}</pre>
        </div>
      </div>
    </PublicShell>
  );
}

interface ModelDetail {
  model: ModelSummary;
  limits: { perMinute: number; perHour: number; perDay: number; concurrency: number; queuePriority: number } | null;
  routes: Array<{ providerSlug: string; providerName: string; providerModelId: string; priority: number; status: string; healthy: boolean }>;
}