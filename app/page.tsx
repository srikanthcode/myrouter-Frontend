import Link from "next/link";
import type { Metadata } from "next";
import { Activity, ArrowRight, ArrowUpRight, ChartColumn, KeyRound, MessageSquare, ScanSearch, Zap, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import { PublicNav } from "@/components/PublicNav";
import { Footer } from "@/components/Footer";
import { Badge, CopyButton } from "@/components/ui";
import { fetchJson, DEFAULT_MODELS } from "@/lib/server-api";

export const metadata: Metadata = {
  title: "ProRouter — #1 Unified AI API Gateway & Model Router | 35+ Frontier Models",
  description:
    "ProRouter gives developers one unified, OpenAI-compatible API key and wallet across 35+ frontier AI models (DeepSeek V4.1, Claude 3.5 Sonnet, Kimi K2.7 Code, OpenAI GPT-4o) with smart routing and automatic zero-downtime fallback.",
  keywords: [
    "ProRouter",
    "Pro Router",
    "prorouter.in",
    "AI API provider",
    "best AI API provider",
    "AI model router",
    "LLM router",
    "unified AI gateway",
    "OpenAI compatible API",
    "OpenRouter alternative",
    "DeepSeek API",
    "Claude Sonnet API",
    "Kimi K2.7 Code API",
    "Qwen 3.8 API",
    "cheap AI API",
    "fast LLM inference",
  ],
  alternates: {
    canonical: "https://www.prorouter.in",
  },
};

const curlExample = `curl https://prorouter.in/v1/chat/completions \\
  -H "Authorization: Bearer $PROROUTER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "deepseek-v4.1-flash",
    "messages": [
      { "role": "user", "content": "Hello, ProRouter" }
    ],
    "stream": true
  }'`;

const sdkExample = `import OpenAI from "openai";

// Drop-in compatible with official OpenAI SDK
const client = new OpenAI({
  apiKey: process.env.PROROUTER_API_KEY,
  baseURL: "https://prorouter.in/v1",
});

const stream = await client.chat.completions.create({
  model: "claude-sonnet", // Or "kimi-k2.7-code", "deepseek-v4.1-flash"
  messages: [{ role: "user", content: "Hello!" }],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content ?? "");
}`;

const faqs = [
  {
    q: "What is ProRouter and why is it the best AI API provider?",
    a: "ProRouter is the leading unified AI API provider and model router. Instead of managing dozens of provider contracts, separate keys, and fragmented billing, ProRouter gives you a single OpenAI-compatible endpoint for 35+ frontier models (DeepSeek, Claude, Kimi, OpenAI, Alibaba, Google, Mistral) with automatic zero-downtime fallback, single wallet billing in INR (₹), and instant token streaming.",
  },
  {
    q: "How does ProRouter compare to OpenRouter or individual AI APIs?",
    a: "Unlike single-provider APIs that go down when their upstream datacenter degrades, ProRouter continuously monitors provider latency and health, routing each request to the fastest available node. Furthermore, you get unified INR payment options (UPI, Netbanking, cards), transparent pricing with no hidden markups, and free-tier access.",
  },
  {
    q: "Is ProRouter 100% compatible with the official OpenAI SDK?",
    a: "Yes. Point the official OpenAI Python or Node.js SDK at https://prorouter.in/v1 and your existing codebase works with zero modifications — including streaming SSE responses, tool calls, function calling, JSON mode, and structured outputs.",
  },
  {
    q: "What happens if an upstream AI provider goes down?",
    a: "ProRouter's intelligent routing engine detects degradation or HTTP errors instantly and seamlessly re-routes your request to the next healthy provider for that model tier, ensuring 99.99% uptime for your production applications.",
  },
  {
    q: "How am I billed for tokens and models?",
    a: "Free models are 100% free with generous daily quotas. Paid models are billed per million tokens in INR (₹) directly from your prepaid wallet balance with permanent rollover and no recurring subscription lock-in.",
  },
  {
    q: "Can I test models before integrating?",
    a: "Yes! Visit the ProRouter Playground at https://prorouter.in/chat to test and compare 35+ models live in your browser with real-time streaming, latency telemetry, and parameter controls.",
  },
];

const features = [
  { t: "Live Chat Playground", b: "Test and benchmark every model live with streaming tokens and latency metrics before writing a line of code.", href: "/chat", icon: MessageSquare },
  { t: "Request Inspector", b: "Every API call gets a unique request ID, routing trace, TTFT latency timings, and fallback logs you can inspect.", href: "/dashboard/inspector", icon: ScanSearch },
  { t: "Unified INR Wallet", b: "One wallet in Indian Rupees (₹) with UPI, cards, immutable transactions, and zero currency conversion fees.", href: "/pricing", icon: KeyRound },
  { t: "Real-Time Telemetry", b: "Live visibility into requests, tokens, spend, time-to-first-token (TTFT), and model performance metrics.", href: "/dashboard", icon: ChartColumn },
  { t: "Secure API Keys", b: "Granular keys with expiration dates, spending limits, model allowlists, and immediate rotation.", href: "/dashboard/keys", icon: KeyRound },
  { t: "System Health & Uptime", b: "Transparent uptime monitoring across 15+ providers with live latency checks and incident history.", href: "/status", icon: Activity },
];

function CodeWindow({ filename, code }: { filename: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-sm">
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
  const models = modelsRes?.items && modelsRes.items.length > 0 ? modelsRes.items : DEFAULT_MODELS.slice(0, 8);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      {/* FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PublicNav />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 md:pt-24">
          <div className="fade-up mx-auto max-w-3xl text-center">
            <Badge tone="accent" className="mb-5">
              <Zap className="size-3" aria-hidden="true" />
              #1 Unified AI API Gateway &amp; Model Router
            </Badge>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              One API for the <span className="text-accent">AI ecosystem</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-mut sm:text-base">
              Stop juggling dozens of API keys. ProRouter gives developers a single OpenAI-compatible endpoint across 35+ frontier models, with smart routing, automatic zero-downtime fallback, unified INR billing, and live telemetry.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/models" className="inline-flex h-11 cursor-pointer items-center rounded-lg bg-accent px-5 text-sm font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                Explore 35+ models
              </Link>
              <Link href="/signup" className="inline-flex h-11 cursor-pointer items-center rounded-lg border border-line2 bg-white/[0.04] px-5 text-sm font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                Get free API key
              </Link>
              <Link href="/chat" className="group inline-flex h-11 cursor-pointer items-center gap-1.5 rounded-lg px-4 text-sm font-medium text-mut transition-colors duration-200 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                Live Playground
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="fade-up mx-auto mt-14 max-w-3xl">
            <CodeWindow filename="terminal — quickstart cURL" code={curlExample} />
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-mut2">
            {["OpenAI SDK Compatible", "Streaming Token SSE", "Zero-Downtime Fallback", "35+ Frontier LLMs", "INR Wallet (UPI/Cards)", "Sub-200ms Latency"].map((f) => (
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
            <div className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Unified API Gateway</div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Drop-in compatible with the OpenAI SDK.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-mut">
              One integration reaches every AI model in the ecosystem: DeepSeek V4.1 Flash, Moonshot Kimi K2.7 Code, Anthropic Claude 3.5 Sonnet, OpenAI GPT-4o, Alibaba Qwen 3.8, and NVIDIA Nemotron. Change just two lines in your code and start streaming immediately.
            </p>
            <ul className="mt-6 space-y-2.5 text-[14px] text-mut">
              {["POST /v1/chat/completions with true low-latency streaming", "GET /v1/models listing all available frontier models", "Normalized error responses with unique request IDs", "Accurate usage metadata and token metrics on every response"].map((item) => (
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
            <div className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Smart routing &amp; failover</div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Requests find the healthiest path, automatically.</h2>
            <p className="mt-4 text-[15px] text-mut">The ProRouter engine continuously scores upstream providers on health, latency, cost, and availability — automatically failing over when an upstream slows down.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { step: "01", title: "Your Request", body: "Authenticated instantly by your ProRouter API key, validated, with quota checked before upstream dispatch." },
              { step: "02", title: "Smart Router", body: "Dynamically picks the optimal upstream node based on real-time health, latency benchmarks, and priority." },
              { step: "03", title: "Automatic Fallback", body: "Primary provider serves the request. If it fails or times out, the chain fails over silently without dropping your connection." },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-line bg-panel p-5 shadow-xs">
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
              <div className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Model Catalogue</div>
              <h2 className="text-2xl font-semibold tracking-tight">Every model, one endpoint.</h2>
              <p className="mt-2 max-w-xl text-[14px] text-mut">Explore 35+ frontier models from Moonshot, Anthropic, DeepSeek, OpenAI, Alibaba, and Mistral behind a single reliable endpoint.</p>
            </div>
            <Link href="/models" className="group inline-flex shrink-0 cursor-pointer items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              Browse all 35+ models
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
          {models.length > 0 ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {models.slice(0, 8).map((m) => (
                <Link key={m.slug} href={`/models/${m.slug}`} className="group cursor-pointer rounded-xl border border-line bg-panel p-5 transition-colors duration-200 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent shadow-xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[15px] font-semibold transition-colors duration-200 group-hover:text-accent">{m.name}</span>
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
              Loading models catalogue…
            </div>
          )}
        </div>
      </section>

      {/* ── Features grid ────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Developer Experience</div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Infrastructure-grade, developer-first.</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Link key={f.t} href={f.href} className="group cursor-pointer rounded-xl border border-line bg-panel p-6 transition-colors duration-200 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent shadow-xs">
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

      {/* ── SEO Authority Section: Why ProRouter is the Top AI API Provider ── */}
      <section className="border-b border-line bg-ink2 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-fg">
              The Modern AI API Provider for High-Growth Teams
            </h2>
            <p className="mt-3 text-[14.5px] text-mut leading-relaxed">
              Why thousands of developers and engineering teams choose ProRouter over individual provider accounts or legacy routers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-panel p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <CheckCircle2 className="size-4" />
                </div>
                <h3 className="text-[16px] font-semibold text-fg">Zero Provider Lock-In</h3>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-mut">
                Switch models dynamically with zero codebase rewrites. Test DeepSeek V4.1, Claude 3.5 Sonnet, or Kimi K2.7 Code by simply adjusting the model parameter string in your requests.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-panel p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <ShieldCheck className="size-4" />
                </div>
                <h3 className="text-[16px] font-semibold text-fg">Resilient Zero-Downtime Routing</h3>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-mut">
                No single point of failure. If an upstream AI provider suffers an outage, ProRouter automatically re-routes your inference traffic through an equivalent high-speed backup provider in milliseconds.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-panel p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Cpu className="size-4" />
                </div>
                <h3 className="text-[16px] font-semibold text-fg">Ultra Low-Latency Inference</h3>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-mut">
                Global edge architecture with optimized connection pooling ensures sub-200ms time-to-first-token (TTFT) across Asia, North America, and Europe.
              </p>
            </div>

            <div className="rounded-xl border border-line bg-panel p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Zap className="size-4" />
                </div>
                <h3 className="text-[16px] font-semibold text-fg">Unified Billing &amp; Volume Discounts</h3>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-mut">
                Consolidate separate credit card bills into a single prepaid wallet with GST invoices, UPI payments, and automatic volume discounts on high-throughput workloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight">Ship with every model today.</h2>
          <p className="mt-3 text-[15px] text-mut">Create an account, grab your ProRouter API key, and make your first call in under two minutes.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/signup" className="inline-flex h-11 cursor-pointer items-center rounded-lg bg-accent px-6 text-sm font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              Create an account
            </Link>
            <Link href="/docs" className="inline-flex h-11 cursor-pointer items-center rounded-lg border border-line2 px-6 text-sm font-medium text-fg transition-colors duration-200 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              Read API docs
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
              <details key={f.q} className="group rounded-xl border border-line bg-panel px-5 py-4 transition-colors duration-200 open:border-line2 shadow-xs">
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
