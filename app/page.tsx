import Link from "next/link";
import { Activity, ArrowRight, ArrowUpRight, ChartColumn, KeyRound, MessageSquare, ScanSearch, Zap } from "lucide-react";
import { PublicNav } from "@/components/PublicNav";
import { Footer } from "@/components/Footer";
import { Badge, CopyButton } from "@/components/ui";
import { fetchJson } from "@/lib/server-api";

const curlExample = `curl https://api.prorouter.com/v1/chat/completions \\
  -H "Authorization: Bearer $PROROUTER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "beam",
    "messages": [
      { "role": "user", "content": "Hello, ProRouter" }
    ],
    "stream": true
  }'`;

const sdkExample = `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.PROROUTER_API_KEY,
  baseURL: "https://api.prorouter.com/v1",
});

const stream = await client.chat.completions.create({
  model: "deepseek-v4.1-flash",
  messages: [{ role: "user", content: "Hello!" }],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content ?? "");
}`;

const faqs = [
  { q: "What is ProRouter?", a: "ProRouter is an AI infrastructure platform that gives you one unified, OpenAI-compatible API to access many AI models and providers — with smart routing, automatic fallback, unified billing and usage analytics." },
  { q: "Do I need separate accounts with each provider?", a: "No. You integrate once with ProRouter. We handle provider selection, credentials, retries, fallback and normalized errors behind a single endpoint." },
  { q: "How does model access work?", a: "Every model in the catalogue is reached through the same OpenAI-compatible endpoint, subject to platform rate limits and a real request queue. Limits and queue priority are configurable per plan." },
  { q: "How am I charged for paid models?", a: "Paid models are billed per million input and output tokens from your ProRouter wallet. Pricing is shown before you send a request, and every deduction appears as an immutable wallet transaction." },
  { q: "Is the API OpenAI-compatible?", a: "Yes. Point the official OpenAI SDK at https://api.prorouter.com/v1 and your existing code keeps working — including streaming, tool calls and JSON mode." },
  { q: "What happens if a provider goes down?", a: "The routing engine monitors provider health and automatically falls back to the next healthy provider for your model, so you keep getting successful responses." },
];

const features = [
  { t: "Chat playground", b: "Test every model live with streaming, parameters and token accounting before you integrate.", href: "/chat", icon: MessageSquare },
  { t: "Request inspector", b: "Every API call gets a request ID, routing trace, timings and fallback attempts you can debug.", href: "/dashboard/inspector", icon: ScanSearch },
  { t: "Unified wallet", b: "One INR wallet, immutable transactions, credit packages and clear per-request costs.", href: "/pricing", icon: KeyRound },
  { t: "Usage analytics", b: "Requests, tokens, spend, latency and model mix — per day, per model, per provider.", href: "/dashboard", icon: ChartColumn },
  { t: "API keys", b: "Scoped keys with expiry, spending limits, model restrictions, rotation and full audit history.", href: "/dashboard/keys", icon: KeyRound },
  { t: "Status & health", b: "Live provider health, incident history and per-provider availability you can actually verify.", href: "/status", icon: Activity },
];

function CodeWindow({ filename, code }: { filename: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-bad/60" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-warn/60" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-good/60" aria-hidden="true" />
        <span className="ml-2 font-mono text-[11px] text-mut2">{filename}</span>
        <CopyButton value={code} className="ml-auto" />
      </div>
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[12.5px] leading-relaxed text-fg/90">{code}</pre>
    </div>
  );
}

export default async function LandingPage() {
  const modelsRes = await fetchJson<{ items: Array<{ slug: string; name: string; description: string }> }>("/models?limit=8");
  const models = modelsRes?.items ?? [];

  return (
    <div className="min-h-screen">
      <PublicNav />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 md:pt-24">
          <div className="fade-up mx-auto max-w-3xl text-center">
            <Badge tone="accent" className="mb-5">
              <Zap className="size-3" aria-hidden="true" />
              One API. Every Model.
            </Badge>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              One API for the <span className="text-accent">AI ecosystem</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-mut sm:text-base">
              Stop managing dozens of AI APIs. ProRouter gives you a single endpoint across models and providers,
              with smart routing, automatic fallback, one wallet, and full usage analytics.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/models" className="inline-flex h-11 cursor-pointer items-center rounded-lg bg-accent px-5 text-sm font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                Explore models
              </Link>
              <Link href="/signup" className="inline-flex h-11 cursor-pointer items-center rounded-lg border border-line2 bg-white/[0.04] px-5 text-sm font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                Start building
              </Link>
              <Link href="/chat" className="group inline-flex h-11 cursor-pointer items-center gap-1.5 rounded-lg px-4 text-sm font-medium text-mut transition-colors duration-200 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                Try the playground
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="fade-up mx-auto mt-14 max-w-3xl">
            <CodeWindow filename="terminal — first request" code={curlExample} />
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-mut2">
            {["OpenAI-compatible", "Streaming SSE", "Automatic fallback", "Unified model access", "INR wallet", "Usage analytics"].map((f) => (
              <span key={f} className="flex items-center gap-1.5">
                <span className="size-1 rounded-full bg-accent" aria-hidden="true" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Unified API ──────────────────────────────────────── */}
      <section className="border-b border-line bg-ink2">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Unified API</div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Drop-in compatible with the OpenAI SDK.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-mut">
              One integration reaches every model in the ecosystem. Change two lines — your API key and base URL —
              and keep streaming, tool calls, JSON mode and structured outputs exactly as you know them.
            </p>
            <ul className="mt-6 space-y-2.5 text-[14px] text-mut">
              {["POST /v1/chat/completions with streaming", "GET /v1/models to list everything available", "Normalized error format with request IDs", "Usage metadata on every response"].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <CodeWindow filename="quickstart.ts" code={sdkExample} />
        </div>
      </section>

      {/* ── Smart routing ────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Smart routing &amp; fallback</div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Requests find the healthiest path, automatically.</h2>
            <p className="mt-4 text-[15px] text-mut">The routing engine scores providers on health, latency, cost and priority — then fails over silently when one degrades.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { step: "01", title: "Your request", body: "Authenticated by API key, validated, quota and balance checked before any provider call." },
              { step: "02", title: "Routing engine", body: "Scores candidates by health, latency, cost, plan priority and configured routing rules." },
              { step: "03", title: "Provider + fallback", body: "Primary provider serves the request; on failure the chain moves to the next healthy provider." },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-line bg-panel p-5">
                <div className="font-mono text-xs tabular-nums text-accent">{s.step}</div>
                <h3 className="mt-2 text-[15px] font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-mut">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Models ───────────────────────────────────────────── */}
      <section className="border-b border-line bg-ink2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Models</div>
              <h2 className="text-2xl font-semibold tracking-tight">Every model, one endpoint.</h2>
              <p className="mt-2 max-w-xl text-[14px] text-mut">A curated catalogue behind a single OpenAI-compatible API, with transparent per-plan rate limits and a real queue you can see.</p>
            </div>
            <Link href="/models" className="group inline-flex shrink-0 cursor-pointer items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              Browse all models
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
          {models.length > 0 ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {models.slice(0, 8).map((m) => (
                <Link key={m.slug} href={`/models/${m.slug}`} className="group cursor-pointer rounded-xl border border-line bg-panel p-5 transition-colors duration-200 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[15px] font-semibold transition-colors duration-200 group-hover:text-fg">{m.name}</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-[12.5px] leading-relaxed text-mut">{m.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-mut2">{m.slug}</span>
                    <ArrowUpRight className="size-4 text-mut2 opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-xl border border-dashed border-line2 px-6 py-10 text-center text-sm text-mut">
              The model catalog will appear here once the API is running.
            </div>
          )}
        </div>
      </section>

      {/* ── Features grid ────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Developer experience</div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Infrastructure-grade, developer-first.</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Link key={f.t} href={f.href} className="group cursor-pointer rounded-xl border border-line bg-panel p-6 transition-colors duration-200 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  <div className="flex size-9 items-center justify-center rounded-lg border border-line bg-ink2">
                    <Icon className="size-4 text-accent" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold">{f.t}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-mut">{f.b}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent">
                    Open
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="border-b border-line bg-ink2">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight">Ship with every model today.</h2>
          <p className="mt-3 text-[15px] text-mut">Create an account, grab an API key and make your first call in under two minutes.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/signup" className="inline-flex h-11 cursor-pointer items-center rounded-lg bg-accent px-6 text-sm font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              Create an account
            </Link>
            <Link href="/docs" className="inline-flex h-11 cursor-pointer items-center rounded-lg border border-line2 px-6 text-sm font-medium text-fg transition-colors duration-200 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              Read the docs
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-line bg-panel px-5 py-4 transition-colors duration-200 open:border-line2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium marker:hidden">
                  {f.q}
                  <svg className="size-4 shrink-0 text-mut transition-transform duration-200 group-open:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="mt-3 pr-8 text-[14px] leading-relaxed text-mut">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}