import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, PublicShell } from "@/components/PublicShell";
import { CopyButton } from "@/components/ui";
import { cx } from "@/lib/api";

export const metadata: Metadata = {
  title: "Docs",
  description: "ProRouter API reference — one OpenAI-compatible endpoint for every model.",
};

const nav = [
  { id: "quickstart", label: "Quickstart" },
  { id: "authentication", label: "Authentication" },
  { id: "chat", label: "Chat completions" },
  { id: "streaming", label: "Streaming" },
  { id: "models", label: "Models" },
  { id: "errors", label: "Errors & limits" },
];

const chip = "rounded-md border border-line bg-ink2 px-1.5 py-0.5 font-mono text-[12px] text-fg";

function Block({ filename, code }: { filename?: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2">
        <span className="font-mono text-[11px] text-mut2">{filename ?? "shell"}</span>
        <CopyButton value={code} />
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[12.5px] leading-relaxed text-fg/90">{code}</pre>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-line py-10 first:pt-0 last:border-0">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 space-y-4 text-[13.5px] leading-relaxed text-mut">{children}</div>
    </section>
  );
}

const quickstart = `curl https://prorouter.in/v1/chat/completions \\
  -H "Authorization: Bearer $PROROUTER_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "beam",
    "messages": [{ "role": "user", "content": "Hello!" }]
  }'`;

const sdk = `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.PROROUTER_API_KEY,
  baseURL: "https://prorouter.in/v1",
});

const res = await client.chat.completions.create({
  model: "deepseek-v4.1-flash",
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(res.choices[0].message.content);`;

const streamSnippet = `const stream = await client.chat.completions.create({
  model: "beam",
  messages: [{ role: "user", content: "Count to five." }],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content ?? "");
}`;

const errorSnippet = `{
  "error": {
    "code": "rate_limited",
    "message": "Rate limit exceeded for this model.",
    "request_id": "req_01J..."
  }
}`;

export default function DocsPage() {
  return (
    <PublicShell>
      <PageHeader
        eyebrow="Documentation"
        title="API reference."
        subtitle="One OpenAI-compatible endpoint. Point your existing SDK at ProRouter and every model in the catalogue is reachable."
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[200px_1fr]">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-24 space-y-0.5">
              <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-mut2">On this page</div>
              {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} className="block cursor-pointer rounded-md px-2 py-1.5 text-[13px] text-mut transition-colors duration-200 hover:bg-white/[0.04] hover:text-fg">
                  {n.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="min-w-0">
            <Section id="quickstart" title="Quickstart">
              <p>Create an API key in the dashboard, set it as an environment variable, and make your first call.</p>
              <Block filename="terminal" code={quickstart} />
              <p>Or use the official OpenAI SDK — only the base URL and key change.</p>
              <Block filename="quickstart.ts" code={sdk} />
            </Section>

            <Section id="authentication" title="Authentication">
              <p>
                Send your key as a bearer token. Keys are shown once at creation and stored only as a hash — we cannot
                recover a lost key, only rotate it.
              </p>
              <Block filename="http" code={`Authorization: Bearer pro_sk_live_...`} />
              <p>Keys can carry an expiry, a spending limit and an allow-list of models, configurable per key.</p>
            </Section>

            <Section id="chat" title="Chat completions">
              <p>
                <code className={chip}>POST /v1/chat/completions</code> accepts the standard OpenAI body: a model, a
                message array, and optional sampling parameters.
              </p>
              <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px]">
                {["model", "messages", "temperature", "top_p", "max_tokens", "stop", "tools", "tool_choice", "response_format", "seed", "stream"].map((p) => (
                  <span key={p} className="font-mono text-[12px] text-fg">{p}</span>
                ))}
              </p>
              <p>
                Usage metadata is returned on every response. Streaming responses include a final chunk with{" "}
                <code className={chip}>usage</code> and routing details.
              </p>
            </Section>

            <Section id="streaming" title="Streaming">
              <p>
                Set <code className={chip}>stream: true</code> to receive server-sent events. Deltas arrive in{" "}
                <code className={chip}>choices[0].delta.content</code>, terminated by <code className={chip}>data: [DONE]</code>.
              </p>
              <Block filename="stream.ts" code={streamSnippet} />
            </Section>

            <Section id="models" title="Models">
              <p>
                <code className={chip}>GET /v1/models</code> lists every model available to your key. Model ids are the
                same slugs shown in the <Link href="/models" className="text-accent transition-colors duration-200 hover:text-accent2">catalogue</Link>.
              </p>
              <p>
                Each model may be served by more than one upstream provider. Routing and fallback happen inside ProRouter
                and are transparent to your integration.
              </p>
            </Section>

            <Section id="errors" title="Errors & limits">
              <p>Errors use a single normalized shape with a machine-readable code and a request id for support.</p>
              <Block filename="error.json" code={errorSnippet} />
              <p>
                Per-model rate limits are published on each model page. Exceeding them returns{" "}
                <code className={chip}>429</code> with a <code className={chip}>retry-after</code> header.
              </p>
            </Section>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-panel px-5 py-4">
              <div>
                <h3 className="text-sm font-semibold">Try it without writing code</h3>
                <p className="mt-1 text-[13px] text-mut">Send a streaming request from the playground using your own key.</p>
              </div>
              <Link href="/chat" className={cx("inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg bg-accent px-4 text-[13px] font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2")}>
                Open playground
                <ArrowUpRight className="size-3.5" strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PublicShell>
  );
}
