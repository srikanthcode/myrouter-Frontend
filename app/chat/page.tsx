"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUp, KeyRound, RotateCcw, Square, Trash2 } from "lucide-react";
import { PublicShell } from "@/components/PublicShell";
import { Badge, Button, IconButton, Select, Textarea, useToast } from "@/components/ui";
import { cx, formatINR } from "@/lib/api";

interface ModelOption {
  slug: string;
  name: string;
}

interface Msg {
  role: "user" | "assistant";
  content: string;
}

interface UsageInfo {
  provider?: string;
  requestId?: string;
  costPaise?: number;
  promptTokens?: number;
  completionTokens?: number;
  totalTokens?: number;
  ttftMs?: number | null;
}

function cleanAsterisks(text: string): string {
  if (!text) return text;
  let res = text;
  res = res.replace(/(\d+)\s*\*\s*(\d+)/g, "$1 x $2");
  res = res.replace(/\*{2,3}([^*\n]+)\*{2,3}/g, "$1");
  res = res.replace(/(^|[^\w*])\*([^*\n]+)\*([^\w*]|$)/g, "$1$2$3");
  res = res.replace(/^(\s*)\*\s+/gm, "$1- ");
  res = res.replaceAll("**", "").replaceAll("*", "");
  return res;
}

const models: ModelOption[] = [
  { slug: "kimi-k2.7-code", name: "Kimi K2.7 Code" },
  { slug: "pr-zenith", name: "Pro Router Zenith" },
  { slug: "pr-aura", name: "Pro Router Aura" },
  { slug: "pr-nova", name: "Pro Router Nova" },
  { slug: "pr-swift", name: "Pro Router Swift" },
  { slug: "pr-echo", name: "Pro Router Echo" },
  { slug: "deepseek-v4.1-flash-1017", name: "DeepSeek-V4.1-Flash-1017" },
  { slug: "deepseek-v4.1-flash", name: "DeepSeek V4.1 Flash" },
  { slug: "qwen3.8-27b", name: "Qwen3.8-27B" },
  { slug: "glm-5.3", name: "GLM-5.3" },
  { slug: "kimi-k3", name: "Kimi K3" },
  { slug: "mimo-v2.6-pro", name: "MiMo-V2.6-Pro" },
  { slug: "minimax-m3.1-flash", name: "MiniMax M3.1 Flash" },
  { slug: "qwen3-coder-next", name: "Qwen3-Coder-Next" },
  { slug: "deepseek-v4-pro-0813", name: "DeepSeek-V4-Pro-0813" },
  { slug: "devstral-24b", name: "Devstral 24B" },
  { slug: "claude-sonnet", name: "Claude Sonnet" },
  { slug: "claude-opus", name: "Claude Opus" },
  { slug: "claude-opus-5", name: "Claude Opus 5" },
  { slug: "gemini-pro", name: "Gemini Pro" },
  { slug: "grok", name: "Grok" },
  { slug: "mistral-large", name: "Mistral Large" },
  { slug: "glm-5.3-flash", name: "GLM 5.3 Flash" },
  { slug: "gpt-6.1-sol", name: "GPT-6.1 Sol" },
  { slug: "gpt-6.1-terra", name: "GPT-6.1 Terra" },
  { slug: "mimo-v2.6-flash", name: "MiMo V2.6 Flash" },
  { slug: "gpt-6-luna", name: "GPT-6 Luna" },
  { slug: "beam", name: "Beam" },
  { slug: "nemotron-3.5-super-vl", name: "Nemotron 3.5 Super VL" },
  { slug: "nemotron-3.5-lightning", name: "Nemotron 3.5 Lightning" },
  { slug: "longcat-2.5-preview", name: "LongCat 2.5 Preview" },
  { slug: "jev-1.13", name: "Jev 1.13" },
];

export default function ChatPage() {
  const toast = useToast();
  const [model, setModel] = useState("kimi-k2.7-code");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [usage, setUsage] = useState<UsageInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("prorouter_playground_key") : null;
    if (saved) setApiKey(saved);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const persistKey = useCallback((v: string) => {
    setApiKey(v);
    try {
      if (v) window.localStorage.setItem("prorouter_playground_key", v);
      else window.localStorage.removeItem("prorouter_playground_key");
    } catch {
      /* storage may be unavailable (private mode) */
    }
  }, []);

  const stop = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setStreaming(false);
  }, []);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || streaming) return;
    if (!apiKey.trim()) {
      setError("Add your ProRouter API key to send a request.");
      toast.push("Add your ProRouter API key to send a request.", "error");
      return;
    }
    setError(null);
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setInput("");
    setStreaming(true);
    setUsage(null);

    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const res = await fetch("/v1/chat/completions", {
        method: "POST",
        headers: { "content-type": "application/json", authorization: `Bearer ${apiKey.trim()}` },
        body: JSON.stringify({ model, messages: next, stream: true }),
        signal: ctrl.signal,
      });

      if (!res.ok || !res.body) {
        const json = await res.json().catch(() => null);
        const message = json?.error?.message ?? `Request failed (${res.status})`;
        setError(message);
        setMessages((cur) => cur.slice(0, -1));
        toast.push(message, "error");
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split(/\r?\n/);
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data:")) continue;
          const payload = trimmed.slice(5).trim();
          if (!payload || payload === "[DONE]") continue;
          try {
            const chunk = JSON.parse(payload) as {
              choices?: Array<{ delta?: { content?: string } }>;
              usage?: { prompt_tokens?: number; completion_tokens?: number; total_tokens?: number };
              uno?: UsageInfo;
            };
            const delta = chunk.choices?.[0]?.delta?.content;
            if (delta) {
              acc += delta;
              const cleanAcc = cleanAsterisks(acc);
              setMessages((cur) => {
                const copy = [...cur];
                copy[copy.length - 1] = { role: "assistant", content: cleanAcc };
                return copy;
              });
            }
            if (chunk.uno) setUsage(chunk.uno);
            else if (chunk.usage) {
              setUsage((u) => ({
                ...u,
                promptTokens: chunk.usage?.prompt_tokens,
                completionTokens: chunk.usage?.completion_tokens,
                totalTokens: chunk.usage?.total_tokens,
              }));
            }
          } catch {
            /* ignore malformed SSE lines */
          }
        }
      }
    } catch (err) {
      if ((err as Error).name !== "AbortError") {
        const message = (err as Error).message || "Network error";
        setError(message);
        toast.push(message, "error");
      }
    } finally {
      abortRef.current = null;
      setStreaming(false);
    }
  }, [apiKey, input, messages, model, streaming, toast]);

  const reset = () => {
    stop();
    setMessages([]);
    setUsage(null);
    setError(null);
  };

  const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant")?.content ?? "";

  return (
    <PublicShell>
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Playground</h1>
            <p className="mt-1 text-[13.5px] text-mut">Send streaming requests to any model in the catalogue with your own API key.</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard/keys"
              className="inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-lg border border-line2 bg-white/[0.04] px-3 text-[13px] font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <KeyRound className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
              API keys
            </Link>
            <IconButton label="Clear conversation" onClick={reset} disabled={messages.length === 0 && !lastAssistant}>
              <RotateCcw className="size-4" strokeWidth={1.75} aria-hidden="true" />
            </IconButton>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_280px]">
          {/* Conversation */}
          <div className="flex min-h-[520px] flex-col rounded-xl border border-line bg-panel">
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5" aria-live="polite" aria-label="Conversation">
              {messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-line bg-ink2">
                    <ArrowUp className="size-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 text-[15px] font-semibold">Start a conversation</h2>
                  <p className="mt-1 max-w-xs text-[13px] leading-relaxed text-mut">
                    Pick a model, paste your API key, and send a message to watch the response stream back.
                  </p>
                </div>
              ) : (
                messages.map((m, i) => (
                  <div key={i} className={cx("flex gap-3", m.role === "user" ? "justify-end" : "justify-start")}>
                    {m.role === "assistant" && (
                      <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border border-line bg-ink2 font-mono text-[10px] text-accent">
                        PR
                      </div>
                    )}
                    <div
                      className={cx(
                        "max-w-[85%] whitespace-pre-wrap break-words rounded-xl px-4 py-2.5 text-[13.5px] leading-relaxed",
                        m.role === "user" ? "bg-accent text-accent-ink" : "border border-line bg-ink2 text-fg",
                      )}
                    >
                      {cleanAsterisks(m.content) || (streaming && i === messages.length - 1 ? <span className="text-mut2">…</span> : null)}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-line p-4">
              {error && (
                <p className="mb-2 rounded-lg border border-bad/30 bg-bad/10 px-3 py-2 text-[12.5px] text-bad" role="alert">
                  {error}
                </p>
              )}
              <div className="flex items-end gap-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      void send();
                    }
                  }}
                  placeholder="Send a message… (Enter to send, Shift+Enter for newline)"
                  rows={2}
                  aria-label="Message"
                  className="min-h-[64px] resize-none"
                />
                {streaming ? (
                  <Button variant="secondary" onClick={stop} className="shrink-0" aria-label="Stop generating">
                    <Square className="size-3.5 fill-current" aria-hidden="true" />
                    Stop
                  </Button>
                ) : (
                  <Button onClick={() => void send()} disabled={!input.trim()} className="shrink-0">
                    <ArrowUp className="size-4" strokeWidth={2} aria-hidden="true" />
                    Send
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="rounded-xl border border-line bg-panel p-4">
              <Select label="Model" value={model} onChange={(e) => setModel(e.target.value)} disabled={streaming}>
                {models.map((m) => (
                  <option key={m.slug} value={m.slug}>
                    {m.name}
                  </option>
                ))}
              </Select>
              <p className="mt-2 font-mono text-[11px] text-mut2">{model}</p>
            </div>

            <div className="rounded-xl border border-line bg-panel p-4">
              <label htmlFor="playground-key" className="block text-[13px] font-medium text-mut">
                API key
              </label>
              <input
                id="playground-key"
                type="password"
                value={apiKey}
                onChange={(e) => persistKey(e.target.value)}
                placeholder="pro_sk_live_…"
                autoComplete="off"
                spellCheck={false}
                className="mt-1.5 h-10 w-full rounded-lg border border-line bg-ink2 px-3 font-mono text-[12.5px] text-fg placeholder:text-mut2 transition-colors duration-200 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
              <p className="mt-2 flex items-start gap-1.5 text-[11.5px] leading-relaxed text-mut2">
                <KeyRound className="mt-px size-3 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                Stored in this browser only. Never sent anywhere except the ProRouter API.
              </p>
            </div>

            {usage && (
              <div className="rounded-xl border border-line bg-panel p-4">
                <h3 className="text-[13px] font-semibold">Last request</h3>
                <dl className="mt-3 space-y-2 text-[12.5px]">
                  {usage.provider && (
                    <div className="flex items-center justify-between gap-2">
                      <dt className="text-mut">Provider</dt>
                      <dd className="font-mono text-[11.5px] text-fg">{usage.provider}</dd>
                    </div>
                  )}
                  {usage.totalTokens != null && (
                    <div className="flex items-center justify-between">
                      <dt className="text-mut">Tokens</dt>
                      <dd className="font-mono tabular-nums">{usage.totalTokens.toLocaleString("en-IN")}</dd>
                    </div>
                  )}
                  {usage.promptTokens != null && (
                    <div className="flex items-center justify-between">
                      <dt className="text-mut">Prompt</dt>
                      <dd className="font-mono tabular-nums">{usage.promptTokens.toLocaleString("en-IN")}</dd>
                    </div>
                  )}
                  {usage.completionTokens != null && (
                    <div className="flex items-center justify-between">
                      <dt className="text-mut">Completion</dt>
                      <dd className="font-mono tabular-nums">{usage.completionTokens.toLocaleString("en-IN")}</dd>
                    </div>
                  )}
                  {usage.costPaise != null && (
                    <div className="flex items-center justify-between">
                      <dt className="text-mut">Cost</dt>
                      <dd className="font-mono tabular-nums">{formatINR(usage.costPaise)}</dd>
                    </div>
                  )}
                  {usage.requestId && (
                    <div className="flex items-center justify-between gap-2 border-t border-line pt-2">
                      <dt className="text-mut">Request</dt>
                      <dd className="truncate font-mono text-[10.5px] text-mut2" title={usage.requestId}>
                        {usage.requestId}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            )}

            <div className="rounded-xl border border-line bg-panel p-4">
              <h3 className="text-[13px] font-semibold">Request</h3>
              <pre className="mt-2 overflow-x-auto font-mono text-[10.5px] leading-relaxed text-mut2">{`POST /v1/chat/completions
model: ${model}
stream: true`}</pre>
            </div>
          </aside>
        </div>
      </div>
    </PublicShell>
  );
}
