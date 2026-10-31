import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive AI Playground — Test 35+ Frontier LLMs in Real-Time",
  description:
    "Test and chat with Moonshot Kimi K2.7 Code, DeepSeek V4.1 Flash, Claude Sonnet, Alibaba Qwen 3.8, and OpenAI models live. Real-time token streaming, zero latency, and parameter inspection.",
  keywords: [
    "AI playground",
    "test AI models",
    "Kimi K2.7 Code playground",
    "DeepSeek V4.1 Flash playground",
    "Claude Sonnet test",
    "free AI chat",
    "streaming LLM inference",
    "ProRouter playground",
  ],
  openGraph: {
    title: "Interactive AI Playground — Test 35+ Frontier LLMs in Real-Time | ProRouter",
    description:
      "Test Moonshot Kimi, DeepSeek V4.1, Claude Sonnet, Alibaba Qwen, and OpenAI models live in your browser.",
    url: "https://www.prorouter.in/chat",
    type: "website",
  },
  alternates: {
    canonical: "https://www.prorouter.in/chat",
  },
};

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
