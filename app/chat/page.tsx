"use client";

import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import {
  KeyRound,
  RotateCcw,
  Square,
  Copy,
  Check,
  Eye,
  EyeOff,
  Send,
  ChevronDown,
  Info,
} from "lucide-react";
import { PublicShell } from "@/components/PublicShell";
import { Badge, Button, useToast } from "@/components/ui";
import { cx, formatINR } from "@/lib/api";

// ── Model Definition ──
export interface ModelMeta {
  slug: string;
  name: string;
  provider: string;
  category: "Tiered" | "Coding" | "Frontier" | "Open-Weight";
  description: string;
  context: string;
  badge?: string;
  inputPer1M: number;
  outputPer1M: number;
}

export const CATALOG_MODELS: ModelMeta[] = [
  // ── Pro Router Tiered ──
  {
    slug: "pr-zenith",
    name: "Pro Router Zenith",
    provider: "ProRouter",
    category: "Tiered",
    description: "Flagship tier for complex analysis, architecture synthesis, and deep reasoning workflows.",
    context: "128k context",
    badge: "Flagship",
    inputPer1M: 1.00,
    outputPer1M: 4.00,
  },
  {
    slug: "pr-aura",
    name: "Pro Router Aura",
    provider: "ProRouter",
    category: "Tiered",
    description: "Advanced reasoning, long-form content, complex instructions, and coding assistance.",
    context: "128k context",
    badge: "Writing",
    inputPer1M: 0.75,
    outputPer1M: 3.00,
  },
  {
    slug: "pr-nova",
    name: "Pro Router Nova",
    provider: "ProRouter",
    category: "Tiered",
    description: "General-purpose premium model for detailed answers, writing, reasoning, and development.",
    context: "128k context",
    badge: "General",
    inputPer1M: 0.50,
    outputPer1M: 2.00,
  },
  {
    slug: "pr-swift",
    name: "Pro Router Swift",
    provider: "ProRouter",
    category: "Tiered",
    description: "Ultra-fast low latency model designed for customer support, quick chat, and high-volume tasks.",
    context: "128k context",
    badge: "Fast",
    inputPer1M: 0.30,
    outputPer1M: 1.20,
  },
  {
    slug: "pr-echo",
    name: "Pro Router Echo",
    provider: "ProRouter",
    category: "Tiered",
    description: "Affordable model for everyday questions, short answers, summaries, and simple chat.",
    context: "128k context",
    badge: "Starter",
    inputPer1M: 0.20,
    outputPer1M: 0.80,
  },

  // ── Agentic Coding & Reasoning ──
  {
    slug: "kimi-k2.7-code",
    name: "Kimi K2.7 Code",
    provider: "Moonshot",
    category: "Coding",
    description: "Specialized agentic coding model for repository refactoring, multi-file edits, and debugging.",
    context: "128k context",
    badge: "Top Choice",
    inputPer1M: 0.50,
    outputPer1M: 2.00,
  },
  {
    slug: "qwen3-coder-next",
    name: "Qwen3-Coder-Next",
    provider: "Alibaba",
    category: "Coding",
    description: "Next-generation software engineering model for polyglot repository synthesis.",
    context: "128k context",
    badge: "Code",
    inputPer1M: 0.50,
    outputPer1M: 2.00,
  },
  {
    slug: "devstral-24b",
    name: "Devstral 24B",
    provider: "Mistral",
    category: "Coding",
    description: "Mistral specialized developer model optimized for zero-shot script and terminal tasks.",
    context: "32k context",
    badge: "Code",
    inputPer1M: 0.40,
    outputPer1M: 1.60,
  },
  {
    slug: "claude-sonnet",
    name: "Claude Sonnet",
    provider: "Anthropic",
    category: "Coding",
    description: "High-precision software engineering, architectural analysis, and complex code refactoring.",
    context: "200k context",
    badge: "Engineering",
    inputPer1M: 0.75,
    outputPer1M: 3.00,
  },
  {
    slug: "claude-opus",
    name: "Claude Opus",
    provider: "Anthropic",
    category: "Frontier",
    description: "Anthropic flagship deep architecture, mathematical analysis, and multi-step reasoning.",
    context: "200k context",
    badge: "Flagship",
    inputPer1M: 1.00,
    outputPer1M: 4.00,
  },

  // ── Frontier Open-Weight ──
  {
    slug: "deepseek-v4.1-flash-1017",
    name: "DeepSeek-V4.1-Flash-1017",
    provider: "DeepSeek",
    category: "Frontier",
    description: "State-of-the-art open-weight checkpoint with lightning fast token throughput and deep reasoning.",
    context: "128k context",
    badge: "Popular",
    inputPer1M: 0.50,
    outputPer1M: 2.00,
  },
  {
    slug: "deepseek-v4.1-flash",
    name: "DeepSeek V4.1 Flash",
    provider: "DeepSeek",
    category: "Frontier",
    description: "DeepSeek flagship high-speed reasoning, coding, and multilingual intelligence.",
    context: "128k context",
    badge: "Frontier",
    inputPer1M: 0.50,
    outputPer1M: 2.00,
  },
  {
    slug: "qwen3.8-27b",
    name: "Qwen3.8-27B",
    provider: "Alibaba",
    category: "Open-Weight",
    description: "Alibaba dense open-weight intelligence with strong multilingual comprehension and coding.",
    context: "128k context",
    badge: "High IQ",
    inputPer1M: 0.50,
    outputPer1M: 2.00,
  },
  {
    slug: "glm-5.3",
    name: "GLM-5.3",
    provider: "Zhipu AI",
    category: "Open-Weight",
    description: "General Language Model 5.3 with strong logical reasoning and bilingual fluency.",
    context: "128k context",
    inputPer1M: 0.50,
    outputPer1M: 2.00,
  },
  {
    slug: "kimi-k3",
    name: "Kimi K3",
    provider: "Moonshot",
    category: "Open-Weight",
    description: "Moonshot Kimi K3 ultra-long context reasoning and document synthesis.",
    context: "128k context",
    badge: "Long Context",
    inputPer1M: 0.50,
    outputPer1M: 2.00,
  },
  {
    slug: "mimo-v2.6-pro",
    name: "MiMo-V2.6-Pro",
    provider: "MiMo",
    category: "Open-Weight",
    description: "Dense multimodal and deep reasoning model for intricate prompt comprehension.",
    context: "64k context",
    inputPer1M: 0.50,
    outputPer1M: 2.00,
  },
  {
    slug: "minimax-m3.1-flash",
    name: "MiniMax M3.1 Flash",
    provider: "MiniMax",
    category: "Open-Weight",
    description: "High-throughput rapid text generation with balanced accuracy and minimal latency.",
    context: "128k context",
    badge: "Fast",
    inputPer1M: 0.30,
    outputPer1M: 1.20,
  },
  {
    slug: "gemini-pro",
    name: "Gemini Pro",
    provider: "Google",
    category: "Frontier",
    description: "Google frontier multimodal intelligence and structured reasoning alias.",
    context: "128k context",
    inputPer1M: 0.50,
    outputPer1M: 2.00,
  },
  {
    slug: "grok",
    name: "Grok",
    provider: "xAI",
    category: "Frontier",
    description: "xAI Grok conversational and direct reasoning model alias.",
    context: "128k context",
    inputPer1M: 0.75,
    outputPer1M: 3.00,
  },
  {
    slug: "mistral-large",
    name: "Mistral Large",
    provider: "Mistral",
    category: "Frontier",
    description: "Mistral Large frontier multilingual reasoning and enterprise-grade synthesis.",
    context: "128k context",
    inputPer1M: 0.75,
    outputPer1M: 3.00,
  },
  {
    slug: "glm-5.3-flash",
    name: "GLM 5.3 Flash",
    provider: "Zhipu AI",
    category: "Open-Weight",
    description: "Ultra-fast low-latency GLM variant for instantaneous conversational replies.",
    context: "64k context",
    badge: "Fast",
    inputPer1M: 0.30,
    outputPer1M: 1.20,
  },
  {
    slug: "gpt-6.1-sol",
    name: "GPT-6.1 Sol",
    provider: "OpenAI",
    category: "Frontier",
    description: "Next-gen frontier reasoning engine with extensive instruction-following capability.",
    context: "128k context",
    badge: "Next-Gen",
    inputPer1M: 0.75,
    outputPer1M: 3.00,
  },
  {
    slug: "gpt-6.1-terra",
    name: "GPT-6.1 Terra",
    provider: "OpenAI",
    category: "Frontier",
    description: "Deep contextual reasoning and multi-stage workflow planning alias.",
    context: "128k context",
    inputPer1M: 0.75,
    outputPer1M: 3.00,
  },
  {
    slug: "mimo-v2.6-flash",
    name: "MiMo V2.6 Flash",
    provider: "MiMo",
    category: "Open-Weight",
    description: "MiMo fast-turnaround conversational assistant.",
    context: "32k context",
    inputPer1M: 0.30,
    outputPer1M: 1.20,
  },
  {
    slug: "gpt-6-luna",
    name: "GPT-6 Luna",
    provider: "OpenAI",
    category: "Frontier",
    description: "Efficient frontier completion alias.",
    context: "64k context",
    inputPer1M: 0.50,
    outputPer1M: 2.00,
  },
  {
    slug: "beam",
    name: "Beam",
    provider: "ProRouter",
    category: "Tiered",
    description: "ProRouter low-latency conversational routing pipeline.",
    context: "32k context",
    inputPer1M: 0.30,
    outputPer1M: 1.20,
  },
  {
    slug: "nemotron-3.5-super-vl",
    name: "Nemotron 3.5 Super VL",
    provider: "NVIDIA",
    category: "Frontier",
    description: "NVIDIA Nemotron high-capacity reasoning model.",
    context: "128k context",
    inputPer1M: 0.75,
    outputPer1M: 3.00,
  },
  {
    slug: "nemotron-3.5-lightning",
    name: "Nemotron 3.5 Lightning",
    provider: "NVIDIA",
    category: "Open-Weight",
    description: "NVIDIA Nemotron ultra-fast completion model.",
    context: "64k context",
    inputPer1M: 0.40,
    outputPer1M: 1.60,
  },
  {
    slug: "longcat-2.5-preview",
    name: "LongCat 2.5 Preview",
    provider: "Meituan",
    category: "Open-Weight",
    description: "LongCat ultra-long context reasoning preview.",
    context: "128k context",
    inputPer1M: 0.50,
    outputPer1M: 2.00,
  },
  {
    slug: "jev-1.13",
    name: "Jev 1.13",
    provider: "Jev",
    category: "Open-Weight",
    description: "Dense synthesis and multi-step reasoning variant.",
    context: "64k context",
    inputPer1M: 0.50,
    outputPer1M: 2.00,
  },
];

// ── Clean all asterisks (*) from text so AI replies never show * ──
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

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  modelName?: string;
  modelSlug?: string;
  provider?: string;
  timestamp: string;
}

export interface UsageInfo {
  provider?: string;
  requestId?: string;
  costPaise?: number;
  promptTokens?: number;
  completionTokens?: number;
  totalTokens?: number;
  ttftMs?: number | null;
}

// ── Formatted Message Block (handles code snippets with copy button) ──
function MessageContent({ text, isStreaming }: { text: string; isStreaming?: boolean }) {
  const cleaned = cleanAsterisks(text);
  const parts = useMemo(() => {
    const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
    const items: Array<{ type: "text" | "code"; content: string; lang?: string }> = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = codeBlockRegex.exec(cleaned)) !== null) {
      if (match.index > lastIndex) {
        items.push({ type: "text", content: cleaned.slice(lastIndex, match.index) });
      }
      items.push({ type: "code", lang: match[1] || "code", content: match[2].trimEnd() });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < cleaned.length) {
      items.push({ type: "text", content: cleaned.slice(lastIndex) });
    }
    return items.length > 0 ? items : [{ type: "text" as const, content: cleaned }];
  }, [cleaned]);

  return (
    <div className="space-y-2.5 leading-relaxed">
      {parts.map((part, index) => {
        if (part.type === "code") {
          return <CodeSnippet key={index} code={part.content} lang={part.lang} />;
        }
        return (
          <div key={index} className="whitespace-pre-wrap break-words text-[13.5px]">
            {part.content}
            {isStreaming && index === parts.length - 1 && (
              <span className="ml-1 inline-block h-4 w-1.5 animate-pulse bg-accent align-middle" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function CodeSnippet({ code, lang }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false);
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <div className="my-2 overflow-hidden rounded-lg border border-line bg-[#030612] text-[12px]">
      <div className="flex items-center justify-between border-b border-line bg-panel2/60 px-3 py-1 text-[10.5px] font-mono text-mut2">
        <span className="font-semibold uppercase tracking-wider text-accent">
          {lang || "code"}
        </span>
        <button
          onClick={copyCode}
          className="inline-flex cursor-pointer items-center gap-1 rounded px-1.5 py-0.5 text-mut transition-colors duration-150 hover:bg-white/[0.08] hover:text-fg"
          aria-label="Copy code snippet"
        >
          {copied ? <Check className="size-2.5 text-good" /> : <Copy className="size-2.5" />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <pre className="overflow-x-auto p-3 font-mono text-[12px] leading-relaxed text-fg/90">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// ── Compact Quick Starter Pills (No AI gimmick icons) ──
const PROMPT_SUGGESTIONS = [
  {
    title: "TypeScript Retry Utility",
    prompt: "Write a production-grade TypeScript retry utility with exponential backoff and jitter.",
  },
  {
    title: "Redis vs PostgreSQL",
    prompt: "Compare Redis Streams vs Postgres LISTEN/NOTIFY for high-throughput background tasks.",
  },
  {
    title: "Model Capabilities",
    prompt: "Who are you, who developed you, and what are your 3 strongest capabilities?",
  },
  {
    title: "Python Concurrency",
    prompt: "Explain how Python memory management and the GIL work with real-world async examples.",
  },
];

export default function ChatPage() {
  const toast = useToast();
  const [model, setModel] = useState("kimi-k2.7-code");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [usage, setUsage] = useState<UsageInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"model" | "telemetry" | "curl">("model");

  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const selectedModelMeta = useMemo(() => {
    return CATALOG_MODELS.find((m) => m.slug === model) || CATALOG_MODELS[0];
  }, [model]);

  useEffect(() => {
    let saved = "";
    try {
      saved =
        window.localStorage.getItem("prorouter_playground_key") ||
        window.localStorage.getItem("prorouter_api_key") ||
        "";
    } catch {}

    if (saved && saved.trim()) {
      setApiKey(saved.trim());
    } else {
      // Auto-connect with default persistent playground key so user is NEVER blocked!
      const defaultKey = "pro_sk_live_playground_default";
      setApiKey(defaultKey);
      try {
        window.localStorage.setItem("prorouter_playground_key", defaultKey);
        window.localStorage.setItem("prorouter_api_key", defaultKey);
      } catch {}
    }
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, streaming]);

  const persistKey = useCallback((v: string) => {
    setApiKey(v);
    try {
      if (v.trim()) {
        window.localStorage.setItem("prorouter_playground_key", v.trim());
        window.localStorage.setItem("prorouter_api_key", v.trim());
      }
    } catch {}
  }, []);

  const stop = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    setStreaming(false);
  }, []);

  const reset = useCallback(() => {
    stop();
    setMessages([]);
    setUsage(null);
    setError(null);
  }, [stop]);

  const copyMessage = useCallback(async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(cleanAsterisks(text));
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1600);
    } catch {}
  }, []);

  const send = useCallback(
    async (overrideText?: string) => {
      const text = (overrideText ?? input).trim();
      if (!text || streaming) return;

      const keyToUse = apiKey.trim() || "pro_sk_live_playground_default";

      setError(null);
      const userMsg: ChatMessage = {
        id: "msg-" + Math.random().toString(36).slice(2, 9),
        role: "user",
        content: text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      const assistantMsgId = "msg-" + Math.random().toString(36).slice(2, 9);
      const assistantMsg: ChatMessage = {
        id: assistantMsgId,
        role: "assistant",
        content: "",
        modelName: selectedModelMeta.name,
        modelSlug: selectedModelMeta.slug,
        provider: selectedModelMeta.provider,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      const historyToSend = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      setMessages((prev) => [...prev, userMsg, assistantMsg]);
      setInput("");
      setStreaming(true);
      setUsage(null);

      const ctrl = new AbortController();
      abortRef.current = ctrl;

      try {
        const startTime = performance.now();
        const res = await fetch("/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${keyToUse}`,
          },
          body: JSON.stringify({
            model: selectedModelMeta.slug,
            messages: historyToSend,
            stream: true,
          }),
          signal: ctrl.signal,
        });

        if (!res.ok || !res.body) {
          const json = await res.json().catch(() => null);
          const message = json?.error?.message ?? `Request failed with status ${res.status}`;
          setError(message);
          setMessages((cur) => cur.slice(0, -1));
          toast.push(message, "error");
          return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";
        let buffer = "";
        let firstTokenTime: number | null = null;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          if (!firstTokenTime) {
            firstTokenTime = performance.now() - startTime;
          }

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
                  const lastIdx = copy.length - 1;
                  if (lastIdx >= 0) {
                    copy[lastIdx] = {
                      ...copy[lastIdx],
                      content: cleanAcc,
                    };
                  }
                  return copy;
                });
              }

              if (chunk.uno) {
                setUsage({ ...chunk.uno, ttftMs: firstTokenTime ? Math.round(firstTokenTime) : null });
              } else if (chunk.usage) {
                setUsage((u) => ({
                  ...u,
                  promptTokens: chunk.usage?.prompt_tokens,
                  completionTokens: chunk.usage?.completion_tokens,
                  totalTokens: chunk.usage?.total_tokens,
                  ttftMs: firstTokenTime ? Math.round(firstTokenTime) : null,
                }));
              }
            } catch {}
          }
        }
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          const message = (err as Error).message || "Connection interrupted";
          setError(message);
          toast.push(message, "error");
        }
      } finally {
        abortRef.current = null;
        setStreaming(false);
      }
    },
    [apiKey, input, messages, selectedModelMeta, streaming, toast]
  );

  const curlSnippet = useMemo(() => {
    const key = apiKey.trim() || "YOUR_API_KEY";
    return `curl https://www.prorouter.in/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${key}" \\
  -d '{
    "model": "${model}",
    "messages": [{"role": "user", "content": "Hello!"}],
    "stream": true
  }'`;
  }, [apiKey, model]);

  return (
    <PublicShell>
      <div className="mx-auto max-w-6xl px-3 py-2 sm:px-4 sm:py-2.5">
        {/* Sleek, Professional Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-line pb-2">
          <div className="flex items-center gap-2.5">
            <span className="text-[13.5px] font-semibold tracking-tight text-fg">Playground</span>
            <span className="text-line2 text-xs">/</span>

            {/* Model Selector */}
            <div className="relative">
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                disabled={streaming}
                className="h-7.5 cursor-pointer appearance-none rounded-md border border-line2 bg-ink2 pl-2.5 pr-7 font-mono text-[11.5px] font-medium text-fg shadow-sm transition-colors duration-150 hover:border-mut focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              >
                <optgroup label="Pro Router Tiered">
                  {CATALOG_MODELS.filter((m) => m.category === "Tiered").map((m) => (
                    <option key={m.slug} value={m.slug}>
                      {m.name} ({m.provider})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Agentic Coding & Reasoning">
                  {CATALOG_MODELS.filter((m) => m.category === "Coding").map((m) => (
                    <option key={m.slug} value={m.slug}>
                      {m.name} ({m.provider})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Frontier Flagships">
                  {CATALOG_MODELS.filter((m) => m.category === "Frontier").map((m) => (
                    <option key={m.slug} value={m.slug}>
                      {m.name} ({m.provider})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Open-Weight Models">
                  {CATALOG_MODELS.filter((m) => m.category === "Open-Weight").map((m) => (
                    <option key={m.slug} value={m.slug}>
                      {m.name} ({m.provider})
                    </option>
                  ))}
                </optgroup>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-2 size-3.5 text-mut" />
            </div>

            <span className="hidden sm:inline-flex items-center rounded border border-line px-1.5 py-0.5 font-mono text-[10.5px] text-mut2">
              {selectedModelMeta.context}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/dashboard/keys"
              className={cx(
                "inline-flex h-7.5 items-center gap-1.5 rounded-md border px-2.5 text-[11.5px] font-medium transition-colors",
                apiKey.trim()
                  ? "border-accent/40 bg-accent/10 text-accent hover:bg-accent/20"
                  : "border-line2 bg-white/[0.04] text-mut hover:text-fg"
              )}
            >
              <span className={cx("size-1.5 rounded-full", apiKey.trim() ? "bg-good" : "bg-warn")} />
              <span>{apiKey.trim() ? "Key Connected" : "API Key"}</span>
            </Link>

            <button
              onClick={reset}
              disabled={messages.length === 0 && !streaming}
              className="inline-flex h-7.5 cursor-pointer items-center gap-1 rounded-md border border-line2 bg-white/[0.04] px-2.5 text-[11.5px] font-medium text-mut transition-colors hover:bg-white/[0.08] hover:text-fg disabled:pointer-events-none disabled:opacity-40"
              title="Reset conversation"
            >
              <RotateCcw className="size-3" />
              <span>New</span>
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="mt-2.5 grid gap-3 lg:grid-cols-[1fr_270px]">
          {/* Left: Chat Container */}
          <div className="flex h-[calc(100dvh-130px)] min-h-[380px] max-h-[570px] flex-col rounded-xl border border-line bg-panel overflow-hidden shadow-sm">
            {/* Conversation Feed */}
            <div
              ref={scrollRef}
              className="flex-1 min-h-0 space-y-3 overflow-y-auto p-3 sm:p-3.5"
              aria-live="polite"
              aria-label="Conversation Feed"
            >
              {messages.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center py-6 text-center">
                  <div className="max-w-md px-2">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel2 px-2.5 py-0.5 font-mono text-[10.5px] text-mut mb-2">
                      <span className="size-1.5 rounded-full bg-accent" />
                      <span>{selectedModelMeta.provider}</span>
                      <span className="text-line2">·</span>
                      <span>{selectedModelMeta.context}</span>
                    </div>

                    <h2 className="text-sm font-semibold text-fg tracking-tight">
                      Chat with {selectedModelMeta.name}
                    </h2>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-mut">
                      {selectedModelMeta.description}
                    </p>

                    {/* Clean Starter prompt pills (NO ICONS) */}
                    <div className="mt-3.5 flex flex-wrap justify-center gap-1.5">
                      {PROMPT_SUGGESTIONS.map((s, idx) => (
                        <button
                          key={idx}
                          onClick={() => void send(s.prompt)}
                          className="inline-flex cursor-pointer items-center rounded-md border border-line bg-ink2/70 px-2.5 py-1.5 text-[11px] font-medium text-mut transition-colors hover:border-accent/40 hover:bg-accent/5 hover:text-fg shadow-sm"
                        >
                          {s.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                messages.map((m) => (
                  <div
                    key={m.id}
                    className={cx("flex flex-col", m.role === "user" ? "items-end" : "items-start")}
                  >
                    {m.role === "user" ? (
                      <div className="flex flex-col items-end gap-0.5 max-w-[85%]">
                        <span className="text-[9.5px] font-mono uppercase tracking-wider text-mut2 mr-1">
                          You
                        </span>
                        <div className="rounded-xl rounded-tr-xs border border-accent/30 bg-accent/15 px-3 py-1.5 text-[12.5px] text-fg leading-relaxed shadow-sm">
                          <div className="whitespace-pre-wrap break-words">{m.content}</div>
                        </div>
                        <span className="text-[9px] text-mut2/70 mr-1">{m.timestamp}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-start gap-1 w-full max-w-[92%]">
                        <div className="flex items-center justify-between w-full px-1 text-[10px] font-mono text-mut2">
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold uppercase tracking-wider text-accent">
                              {m.modelName || selectedModelMeta.name}
                            </span>
                            {m.provider && (
                              <span className="rounded bg-white/[0.05] border border-line px-1 py-0.2 text-[9px] text-mut font-medium">
                                {m.provider}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[9px]">{m.timestamp}</span>
                            <button
                              type="button"
                              onClick={() => copyMessage(m.id, m.content)}
                              className="inline-flex cursor-pointer items-center gap-1 rounded px-1 py-0.2 text-[9.5px] text-mut transition-colors hover:text-fg"
                              aria-label="Copy response"
                            >
                              {copiedId === m.id ? (
                                <Check className="size-2.5 text-good" />
                              ) : (
                                <Copy className="size-2.5" />
                              )}
                              <span>{copiedId === m.id ? "Copied" : "Copy"}</span>
                            </button>
                          </div>
                        </div>

                        <div className="w-full rounded-xl rounded-tl-xs border border-line bg-ink2/90 px-3.5 py-2.5 text-[12.5px] text-fg leading-relaxed shadow-sm">
                          <MessageContent
                            text={m.content}
                            isStreaming={streaming && m === messages[messages.length - 1]}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Error Banner */}
            {error && (
              <div className="mx-3 mb-2 flex items-center justify-between rounded-lg border border-bad/30 bg-bad/10 px-3 py-1.5 text-[11.5px] text-bad">
                <div className="flex items-center gap-1.5">
                  <Info className="size-3.5 shrink-0" />
                  <span>{error}</span>
                </div>
                <button
                  onClick={() => setError(null)}
                  className="text-bad/70 hover:text-bad text-xs"
                  aria-label="Dismiss error"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Pinned Input Container - Guaranteed 100% visible on screen */}
            <div className="shrink-0 border-t border-line bg-panel2/20 p-2 sm:p-2.5">
              <div className="rounded-lg border border-line2 bg-ink2/95 shadow-sm transition-colors duration-150 focus-within:border-accent/60">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      void send();
                    }
                  }}
                  placeholder={`Ask ${selectedModelMeta.name} anything… (Enter to send, Shift+Enter for newline)`}
                  rows={1}
                  className="w-full resize-none bg-transparent px-3 py-1.5 text-[12.5px] text-fg placeholder:text-mut2 focus:outline-none min-h-[36px] max-h-[80px]"
                  aria-label="Message prompt"
                />

                <div className="flex items-center justify-between border-t border-line/30 px-2.5 py-1 text-[10.5px]">
                  <div className="flex items-center gap-1.5 text-mut2">
                    <span className="inline-block size-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-[10px] text-fg font-medium">{selectedModelMeta.slug}</span>
                    <span className="text-[10px] text-mut2/80 hidden sm:inline">· ↵ to send</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {streaming ? (
                      <button
                        type="button"
                        onClick={stop}
                        className="inline-flex h-6.5 cursor-pointer items-center gap-1 rounded-md border border-bad/30 bg-bad/15 px-2 text-[10.5px] font-semibold text-bad transition-colors hover:bg-bad/25"
                        aria-label="Stop generation"
                      >
                        <Square className="size-2.5 fill-current" />
                        <span>Stop</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => void send()}
                        disabled={!input.trim()}
                        className="inline-flex h-6.5 cursor-pointer items-center gap-1 rounded-md bg-accent px-2.5 text-[10.5px] font-semibold text-accent-ink transition-colors hover:bg-accent2 disabled:pointer-events-none disabled:opacity-40 shadow-sm"
                        aria-label="Send message"
                      >
                        <span>Send</span>
                        <Send className="size-2.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sidebar / Telemetry / Settings */}
          <aside className="flex h-[calc(100dvh-130px)] min-h-[380px] max-h-[570px] flex-col rounded-xl border border-line bg-panel overflow-hidden shadow-sm">
            {/* Tab navigation */}
            <div className="shrink-0 flex border-b border-line bg-panel2/50 p-1">
              <button
                onClick={() => setActiveTab("model")}
                className={cx(
                  "flex-1 cursor-pointer rounded-md py-1 text-center text-[11px] font-medium transition-colors",
                  activeTab === "model" ? "bg-accent text-accent-ink font-semibold" : "text-mut hover:text-fg"
                )}
              >
                Model
              </button>
              <button
                onClick={() => setActiveTab("telemetry")}
                className={cx(
                  "flex-1 cursor-pointer rounded-md py-1 text-center text-[11px] font-medium transition-colors",
                  activeTab === "telemetry" ? "bg-accent text-accent-ink font-semibold" : "text-mut hover:text-fg"
                )}
              >
                Telemetry
              </button>
              <button
                onClick={() => setActiveTab("curl")}
                className={cx(
                  "flex-1 cursor-pointer rounded-md py-1 text-center text-[11px] font-medium transition-colors",
                  activeTab === "curl" ? "bg-accent text-accent-ink font-semibold" : "text-mut hover:text-fg"
                )}
              >
                cURL
              </button>
            </div>

            {/* Scrollable tab contents */}
            <div className="flex-1 min-h-0 overflow-y-auto p-2.5 space-y-2.5">
              {/* TAB 1: MODEL DETAILS */}
              {activeTab === "model" && (
                <>
                  <div className="rounded-lg border border-line bg-ink2/40 p-2.5 shadow-sm">
                    <div className="flex items-start justify-between gap-1.5">
                      <div>
                        <h3 className="text-[12px] font-semibold text-fg">{selectedModelMeta.name}</h3>
                        <p className="font-mono text-[10px] text-accent mt-0.5">
                          {selectedModelMeta.slug}
                        </p>
                      </div>
                      {selectedModelMeta.badge && (
                        <Badge tone="accent">{selectedModelMeta.badge}</Badge>
                      )}
                    </div>

                    <p className="mt-1.5 text-[10.5px] leading-relaxed text-mut">
                      {selectedModelMeta.description}
                    </p>

                    <div className="mt-2 divide-y divide-line rounded-md border border-line bg-ink2/70 text-[10.5px]">
                      <div className="flex items-center justify-between p-1.5">
                        <span className="text-mut">Provider</span>
                        <span className="font-semibold text-fg">{selectedModelMeta.provider}</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5">
                        <span className="text-mut">Context</span>
                        <span className="font-mono text-fg">{selectedModelMeta.context}</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5">
                        <span className="text-mut">In / Out 1M</span>
                        <span className="font-mono text-fg">
                          ${selectedModelMeta.inputPer1M.toFixed(2)} / ${selectedModelMeta.outputPer1M.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* API Key Box */}
                  <div className="rounded-lg border border-line bg-ink2/40 p-2.5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <label htmlFor="playground-key" className="text-[11px] font-semibold text-fg">
                        API Key
                      </label>
                      <span
                        className={cx(
                          "inline-flex items-center gap-1 font-mono text-[9.5px]",
                          apiKey.trim() ? "text-good" : "text-warn"
                        )}
                      >
                        ● {apiKey.trim() ? "Saved" : "Required"}
                      </span>
                    </div>

                    <div className="relative mt-1.5">
                      <input
                        id="playground-key"
                        type={showKey ? "text" : "password"}
                        value={apiKey}
                        onChange={(e) => persistKey(e.target.value)}
                        placeholder="pro_sk_live_…"
                        autoComplete="off"
                        spellCheck={false}
                        className="h-7 w-full rounded-md border border-line bg-ink2 px-2.5 pr-7 font-mono text-[10.5px] text-fg placeholder:text-mut2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                      <button
                        type="button"
                        onClick={() => setShowKey(!showKey)}
                        className="absolute right-2 top-1.5 text-mut hover:text-fg"
                        aria-label="Toggle password visibility"
                      >
                        {showKey ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
                      </button>
                    </div>

                    <p className="mt-1 text-[9.5px] leading-relaxed text-mut2">
                      Stored in this browser only.
                    </p>

                    <div className="mt-2">
                      <Link
                        href="/dashboard/keys"
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-line2 bg-white/[0.04] py-1 text-[10.5px] font-medium text-fg hover:bg-white/[0.08] transition-colors"
                      >
                        <KeyRound className="size-3" />
                        Manage API Keys
                      </Link>
                    </div>
                  </div>
                </>
              )}

              {/* TAB 2: TELEMETRY */}
              {activeTab === "telemetry" && (
                <div className="rounded-lg border border-line bg-ink2/40 p-2.5 shadow-sm">
                  <h3 className="text-[10px] font-semibold uppercase tracking-wider text-mut">
                    Telemetry
                  </h3>

                  {usage ? (
                    <dl className="mt-2 space-y-1 text-[10.5px]">
                      {usage.ttftMs != null && (
                        <div className="flex items-center justify-between border-b border-line pb-1">
                          <dt className="text-mut">Latency (TTFT)</dt>
                          <dd className="font-mono text-accent">{usage.ttftMs} ms</dd>
                        </div>
                      )}
                      {usage.totalTokens != null && (
                        <div className="flex items-center justify-between">
                          <dt className="text-mut">Total Tokens</dt>
                          <dd className="font-mono font-medium">{usage.totalTokens.toLocaleString()}</dd>
                        </div>
                      )}
                      {usage.promptTokens != null && (
                        <div className="flex items-center justify-between">
                          <dt className="text-mut">Prompt</dt>
                          <dd className="font-mono text-mut2">{usage.promptTokens.toLocaleString()}</dd>
                        </div>
                      )}
                      {usage.completionTokens != null && (
                        <div className="flex items-center justify-between">
                          <dt className="text-mut">Completion</dt>
                          <dd className="font-mono text-mut2">{usage.completionTokens.toLocaleString()}</dd>
                        </div>
                      )}
                      {usage.costPaise != null && (
                        <div className="flex items-center justify-between border-t border-line pt-1">
                          <dt className="text-mut">Est. Cost</dt>
                          <dd className="font-mono text-good">{formatINR(usage.costPaise)}</dd>
                        </div>
                      )}
                      {usage.requestId && (
                        <div className="border-t border-line pt-1">
                          <dt className="text-mut text-[9.5px]">Request ID</dt>
                          <dd className="mt-0.5 truncate font-mono text-[9px] text-mut2" title={usage.requestId}>
                            {usage.requestId}
                          </dd>
                        </div>
                      )}
                    </dl>
                  ) : (
                    <div className="mt-2.5 text-center text-[10.5px] text-mut2">
                      Send a message to view TTFT and token usage.
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: CURL */}
              {activeTab === "curl" && (
                <div className="rounded-lg border border-line bg-ink2/40 p-2.5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[10px] font-semibold uppercase tracking-wider text-mut">
                      cURL
                    </h3>
                    <button
                      onClick={async () => {
                        await navigator.clipboard.writeText(curlSnippet);
                        toast.push("Copied cURL command", "success");
                      }}
                      className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[9.5px] text-accent hover:bg-accent/10 transition-colors"
                    >
                      <Copy className="size-2.5" />
                      Copy
                    </button>
                  </div>

                  <pre className="mt-1.5 overflow-x-auto rounded-md border border-line bg-ink2 p-2 font-mono text-[9.5px] leading-relaxed text-mut">
                    <code>{curlSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </PublicShell>
  );
}
