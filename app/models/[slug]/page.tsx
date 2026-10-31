import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Minus, Route } from "lucide-react";
import { PublicShell } from "@/components/PublicShell";
import { Badge, CopyButton, EmptyState } from "@/components/ui";
import { compactNumber, fetchJson, formatPerMillion, getDefaultModelDetail, type ModelSummary } from "@/lib/server-api";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const detail = (await fetchJson<ModelDetail>(`/models/${encodeURIComponent(slug)}`)) || getDefaultModelDetail(slug);
  if (!detail) return { title: "Model Not Found | ProRouter" };

  const m = detail.model;
  const title = `${m.name} API — Low Latency Inference & Pricing | ProRouter`;
  const description = `Access ${m.name} by ${m.providerName} with one unified OpenAI-compatible API key on ProRouter. Context window: ${m.contextWindow.toLocaleString()} tokens. Real-time streaming, zero downtime, and instant failover.`;

  return {
    title,
    description,
    keywords: [
      m.name,
      `${m.name} API`,
      `${m.name} pricing`,
      `${m.name} token cost`,
      `${m.providerName} API`,
      `${m.name} inference`,
      "ProRouter",
      "AI model router",
      "LLM inference",
      "OpenAI compatible",
    ],
    alternates: {
      canonical: `https://www.prorouter.in/models/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.prorouter.in/models/${slug}`,
      siteName: "ProRouter",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ModelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detail = (await fetchJson<ModelDetail>(`/models/${encodeURIComponent(slug)}`)) || getDefaultModelDetail(slug);
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

  const modelJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${m.name} API`,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "All",
    description: m.description,
    url: `https://www.prorouter.in/models/${m.slug}`,
    offers: {
      "@type": "Offer",
      price: (m.pricing.inputPerMillion / 100).toFixed(2),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: m.providerName,
      url: "https://www.prorouter.in",
    },
  };

  return (
    <PublicShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(modelJsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <Link
          href="/models"
          className="group inline-flex cursor-pointer items-center gap-1.5 text-[13px] font-medium text-mut transition-colors duration-200 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" strokeWidth={1.75} aria-hidden="true" />
          All models
        </Link>

        {/* Header */}
        <div className="mt-4 flex flex-col gap-4 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent">{m.providerName}</span>
              {m.isFree && <Badge tone="free">FREE TIER</Badge>}
            </div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{m.name}</h1>
            <p className="mt-1 font-mono text-[13px] text-mut">{m.slug}</p>
            <p className="mt-3 text-[14px] leading-relaxed text-mut">{m.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={`/chat?model=${encodeURIComponent(m.slug)}`}
              className="inline-flex h-9 cursor-pointer items-center justify-center rounded-lg bg-accent px-4 text-[13px] font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Try in Playground
            </Link>
          </div>
        </div>

        {/* Pricing strip */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-line bg-panel p-4">
            <div className="text-[12px] text-mut">Input / 1M tokens</div>
            <div className="mt-1 font-mono text-lg font-semibold">{formatPerMillion(m.pricing.inputPerMillion)}</div>
          </div>
          <div className="rounded-xl border border-line bg-panel p-4">
            <div className="text-[12px] text-mut">Output / 1M tokens</div>
            <div className="mt-1 font-mono text-lg font-semibold">{formatPerMillion(m.pricing.outputPerMillion)}</div>
          </div>
          <div className="rounded-xl border border-line bg-panel p-4">
            <div className="text-[12px] text-mut">Cached input / 1M</div>
            <div className="mt-1 font-mono text-lg font-semibold">
              {m.pricing.cachedInputPerMillion ? formatPerMillion(m.pricing.cachedInputPerMillion) : "—"}
            </div>
          </div>
          <div className="rounded-xl border border-line bg-panel p-4">
            <div className="text-[12px] text-mut">Community tier</div>
            <div className="mt-1 font-mono text-lg font-semibold text-good">{m.isFree ? "Free tier" : "Paid"}</div>
          </div>
        </div>

        {/* Main specs */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {/* Key facts */}
          <div className="rounded-xl border border-line bg-panel p-5">
            <h2 className="text-sm font-semibold">Key facts</h2>
            <dl className="mt-4 divide-y divide-line text-[13px]">
              {keyFacts.map((f) => (
                <div key={f.label} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
                  <dt className="text-mut">{f.label}</dt>
                  <dd className={f.mono ? "font-mono tabular-nums text-fg" : "text-fg"}>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Capabilities */}
          <div className="rounded-xl border border-line bg-panel p-5">
            <h2 className="text-sm font-semibold">Capabilities</h2>
            <ul className="mt-4 divide-y divide-line text-[13px]">
              {capabilityRows.map(([label, val]) => (
                <li key={label} className="flex items-center justify-between py-2 first:pt-0 last:pb-0">
                  <span className="text-mut">{label}</span>
                  {typeof val === "boolean" ? (
                    val ? (
                      <Check className="size-4 text-good" strokeWidth={2.5} aria-label="Supported" />
                    ) : (
                      <Minus className="size-4 text-mut2" aria-label="Not supported" />
                    )
                  ) : (
                    <span className="font-mono text-xs">{String(val)}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Rate limits */}
          <div className="rounded-xl border border-line bg-panel p-5">
            <h2 className="text-sm font-semibold">Rate limits</h2>
            {limits ? (
              <dl className="mt-4 space-y-2 text-[13px]">
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
