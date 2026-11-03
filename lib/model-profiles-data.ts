/**
 * Pre-compiled 500+ Frontend Model Profiles dataset.
 * Generated automatically from the central ModelProfileRegistry.
 */

import type { ModelSummary } from "./server-api";

export interface WebModelEntry {
  id: string;
  name: string;
  object: string;
  created: number;
  owned_by: string;
  category?: string;
  tier?: string;
  description?: string;
  pricing?: {
    input_usd_per_million: number;
    output_usd_per_million: number;
  };
}

export const MODEL_PROFILES_500: ModelSummary[] = [
  {
    "id": "claude-sonnet",
    "slug": "claude-sonnet",
    "name": "Claude Sonnet",
    "description": "Anthropic Claude Sonnet — balanced intelligence, high coding precision, and nuanced creative writing.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 10,
    "popularity": 9900,
    "rating": 98,
    "latencyMs": 250,
    "available": true
  },
  {
    "id": "claude-opus",
    "slug": "claude-opus",
    "name": "Claude Opus",
    "description": "Anthropic Claude Opus — deep analysis, nuanced reasoning, and complex task decomposition.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 11,
    "popularity": 9885,
    "rating": 98,
    "latencyMs": 257,
    "available": true
  },
  {
    "id": "claude-opus-5",
    "slug": "claude-opus-5",
    "name": "Claude Opus 5",
    "description": "Anthropic Claude Opus 5 — next-generation frontier intelligence for research and coding.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 12,
    "popularity": 9870,
    "rating": 98,
    "latencyMs": 209,
    "available": true
  },
  {
    "id": "gemini-pro",
    "slug": "gemini-pro",
    "name": "Gemini Pro",
    "description": "Google Gemini Pro — powerful multimodal model with vast context window and world knowledge.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 13,
    "popularity": 9855,
    "rating": 98,
    "latencyMs": 212,
    "available": true
  },
  {
    "id": "grok",
    "slug": "grok",
    "name": "Grok",
    "description": "xAI Grok — direct, truthful AI with real-time insight and witty demeanor.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 14,
    "popularity": 9840,
    "rating": 98,
    "latencyMs": 240,
    "available": true
  },
  {
    "id": "mistral-large",
    "slug": "mistral-large",
    "name": "Mistral Large",
    "description": "Mistral Large — flagship model for complex multilingual reasoning and precise instruction following.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 15,
    "popularity": 9825,
    "rating": 98,
    "latencyMs": 243,
    "available": true
  },
  {
    "id": "devstral-24b",
    "slug": "devstral-24b",
    "name": "Devstral 24B",
    "description": "Mistral Devstral 24B — developer-tuned open weights optimized for software engineering workflows.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 16,
    "popularity": 9810,
    "rating": 98,
    "latencyMs": 190,
    "available": true
  },
  {
    "id": "gpt-6.1-sol",
    "slug": "gpt-6.1-sol",
    "name": "GPT-6.1 Sol",
    "description": "OpenAI GPT-6.1 Sol — frontier cloud model optimized for high-speed reasoning and synthesis.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 17,
    "popularity": 9795,
    "rating": 98,
    "latencyMs": 181,
    "available": true
  },
  {
    "id": "gpt-6.1-terra",
    "slug": "gpt-6.1-terra",
    "name": "GPT-6.1 Terra",
    "description": "OpenAI GPT-6.1 Terra — flagship multimodal intelligence with deep scientific knowledge.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 18,
    "popularity": 9780,
    "rating": 98,
    "latencyMs": 180,
    "available": true
  },
  {
    "id": "gpt-6-luna",
    "slug": "gpt-6-luna",
    "name": "GPT-6 Luna",
    "description": "OpenAI GPT-6 Luna — low-latency next-gen assistant for rapid task execution.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 19,
    "popularity": 9765,
    "rating": 98,
    "latencyMs": 238,
    "available": true
  },
  {
    "id": "kimi-k3",
    "slug": "kimi-k3",
    "name": "Kimi K3",
    "description": "Moonshot Kimi K3 — ultra long-context frontier model with high-speed reasoning and deep comprehension.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 20,
    "popularity": 9750,
    "rating": 98,
    "latencyMs": 234,
    "available": true
  },
  {
    "id": "kimi-k2.7-code",
    "slug": "kimi-k2.7-code",
    "name": "Kimi K2.7 Code",
    "description": "Moonshot Kimi K2.7 Code — specialized code intelligence and agentic workflow automation.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 21,
    "popularity": 9735,
    "rating": 98,
    "latencyMs": 185,
    "available": true
  },
  {
    "id": "glm-5.3",
    "slug": "glm-5.3",
    "name": "GLM-5.3",
    "description": "Zhipu GLM-5.3 — flagship bilingual reasoning, analytical thinking, and tool execution.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 22,
    "popularity": 9720,
    "rating": 98,
    "latencyMs": 236,
    "available": true
  },
  {
    "id": "glm-5.3-flash",
    "slug": "glm-5.3-flash",
    "name": "GLM-5.3-Flash",
    "description": "Zhipu GLM 5.3 Flash — fast multilingual reasoning with high-speed tool execution.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 23,
    "popularity": 9705,
    "rating": 98,
    "latencyMs": 254,
    "available": true
  },
  {
    "id": "mimo-v2.6-pro",
    "slug": "mimo-v2.6-pro",
    "name": "MiMo-V2.6-Pro",
    "description": "Xiaomi MiMo V2.6 Pro — flagship multimodal reasoning model for advanced synthesis and coding.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 24,
    "popularity": 9690,
    "rating": 98,
    "latencyMs": 242,
    "available": true
  },
  {
    "id": "mimo-v2.6-flash",
    "slug": "mimo-v2.6-flash",
    "name": "MiMo-V2.6-Flash",
    "description": "Xiaomi MiMo Flash — quick responses with solid reasoning.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 25,
    "popularity": 9675,
    "rating": 98,
    "latencyMs": 234,
    "available": true
  },
  {
    "id": "minimax-m3.1-flash",
    "slug": "minimax-m3.1-flash",
    "name": "MiniMax M3.1 Flash",
    "description": "MiniMax M3.1 Flash — fast multimodal model with reliable tool calling and low latency.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 26,
    "popularity": 9660,
    "rating": 98,
    "latencyMs": 235,
    "available": true
  },
  {
    "id": "qwen3-coder-next",
    "slug": "qwen3-coder-next",
    "name": "Qwen3-Coder-Next",
    "description": "Alibaba Qwen3 Coder Next — specialized coding model for repository synthesis and multi-file debugging.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 27,
    "popularity": 9645,
    "rating": 98,
    "latencyMs": 200,
    "available": true
  },
  {
    "id": "deepseek-v4-pro-0813",
    "slug": "deepseek-v4-pro-0813",
    "name": "DeepSeek-V4-Pro-0813",
    "description": "DeepSeek V4 Pro — high-throughput frontier reasoning and deep architectural coding.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 28,
    "popularity": 9630,
    "rating": 98,
    "latencyMs": 243,
    "available": true
  },
  {
    "id": "beam",
    "slug": "beam",
    "name": "Beam",
    "description": "Fast general-purpose model for everyday chat and drafting.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 29,
    "popularity": 9615,
    "rating": 98,
    "latencyMs": 184,
    "available": true
  },
  {
    "id": "longcat-2.5-preview",
    "slug": "longcat-2.5-preview",
    "name": "LongCat 2.5 Preview",
    "description": "Meituan LongCat 2.5 — long-context preview with strong multilingual reasoning.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 30,
    "popularity": 9600,
    "rating": 98,
    "latencyMs": 192,
    "available": true
  },
  {
    "id": "jev-1.13",
    "slug": "jev-1.13",
    "name": "Jev 1.13",
    "description": "Jev 1.13 — general-purpose assistant with balanced speed and quality.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 262144,
    "maxOutputTokens": 64000,
    "rank": 31,
    "popularity": 9585,
    "rating": 98,
    "latencyMs": 185,
    "available": true
  },
  {
    "id": "gpt-oss-20b",
    "slug": "gpt-oss-20b",
    "name": "GPT OSS 20B",
    "description": "Open-weight 20B parameter reasoning and chat model with high speed and chain-of-thought capabilities.",
    "providerName": "Nabh Cloud",
    "providerSlug": "nabh",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 1,
    "popularity": 9950,
    "rating": 99,
    "latencyMs": 255,
    "available": true
  },
  {
    "id": "gpt-oss-120b",
    "slug": "gpt-oss-120b",
    "name": "GPT OSS 120B",
    "description": "OpenAI open-weight 120B parameter MoE reasoning architecture running on Groq LPU.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 2,
    "popularity": 9940,
    "rating": 99,
    "latencyMs": 240,
    "available": true
  },
  {
    "id": "qwen/qwen3.8-27b",
    "slug": "qwen/qwen3.8-27b",
    "name": "Qwen 3.8 27B",
    "description": "Alibaba Qwen3.8 27B — high-performance open-weight model with strong multilingual and reasoning abilities.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 3,
    "popularity": 9930,
    "rating": 99,
    "latencyMs": 203,
    "available": true
  },
  {
    "id": "qwen3.8-27b",
    "slug": "qwen3.8-27b",
    "name": "Qwen3.8-27B (Standard)",
    "description": "Alibaba Qwen3.8 27B standard model alias running on high-speed inference.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 4,
    "popularity": 9920,
    "rating": 99,
    "latencyMs": 231,
    "available": true
  },
  {
    "id": "nemotron-3-ultra-550b-a55b",
    "slug": "nemotron-3-ultra-550b-a55b",
    "name": "Nemotron 3 Ultra 550B A55B",
    "description": "NVIDIA Nemotron 3 Ultra 550B A55B — ultra-scale frontier reasoning engine with 1M context.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 5,
    "popularity": 9910,
    "rating": 99,
    "latencyMs": 188,
    "available": true
  },
  {
    "id": "nemotron-3-nano-omni-30b-a3b-reasoning",
    "slug": "nemotron-3-nano-omni-30b-a3b-reasoning",
    "name": "Nemotron 3 Nano Omni 30B Reasoning",
    "description": "NVIDIA Nemotron 3 Nano Omni 30B — deep chain-of-thought reasoning and multimodal STEM problem-solving.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 6,
    "popularity": 9900,
    "rating": 99,
    "latencyMs": 210,
    "available": true
  },
  {
    "id": "nemotron-3.5-lightning-30b-a3b",
    "slug": "nemotron-3.5-lightning-30b-a3b",
    "name": "Nemotron 3.5 Lightning 30B A3B",
    "description": "NVIDIA Nemotron 3.5 Lightning 30B A3B — lightning-fast inference with an extraordinary 1M context window.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 7,
    "popularity": 9890,
    "rating": 99,
    "latencyMs": 229,
    "available": true
  },
  {
    "id": "nemotron-3.5-lightning",
    "slug": "nemotron-3.5-lightning",
    "name": "Nemotron 3.5 Lightning",
    "description": "NVIDIA Nemotron 3.5 Lightning — low-latency assistant for high-volume work.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 8,
    "popularity": 9880,
    "rating": 99,
    "latencyMs": 226,
    "available": true
  },
  {
    "id": "nemotron-3.5-super-vl",
    "slug": "nemotron-3.5-super-vl",
    "name": "Nemotron 3.5 Super VL",
    "description": "NVIDIA Nemotron 3.5 Super — high-capacity vision-language reasoning.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 9,
    "popularity": 9870,
    "rating": 99,
    "latencyMs": 230,
    "available": true
  },
  {
    "id": "gemma-4-31b-it",
    "slug": "gemma-4-31b-it",
    "name": "Gemma 4 31B IT",
    "description": "Google Gemma 4 31B Instruction-Tuned — Google's latest open frontier architecture featuring 262K context.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 10,
    "popularity": 9860,
    "rating": 99,
    "latencyMs": 215,
    "available": true
  },
  {
    "id": "leanstral-1-5",
    "slug": "leanstral-1-5",
    "name": "Leanstral 1.5",
    "description": "Mistral Leanstral 1.5 — high-efficiency reasoning model with massive 262K context.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 11,
    "popularity": 9850,
    "rating": 99,
    "latencyMs": 246,
    "available": true
  },
  {
    "id": "ling-3.1-flash",
    "slug": "ling-3.1-flash",
    "name": "Ling 3.1 Flash",
    "description": "Novita Ling 3.1 Flash — ultra-responsive 262K context model for conversational speed.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 12,
    "popularity": 9840,
    "rating": 99,
    "latencyMs": 213,
    "available": true
  },
  {
    "id": "allam-2-7b",
    "slug": "allam-2-7b",
    "name": "Allam 2 7B",
    "description": "SDAIA high-performance bilingual Arabic & English foundational language model.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 13,
    "popularity": 9830,
    "rating": 99,
    "latencyMs": 219,
    "available": true
  },
  {
    "id": "deepseek-v4.1-flash-1017",
    "slug": "deepseek-v4.1-flash-1017",
    "name": "DeepSeek-V4.1-Flash-1017",
    "description": "DeepSeek V4.1 Flash checkpoint 1017 — latest frontier open-weight reasoning model.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 14,
    "popularity": 9820,
    "rating": 99,
    "latencyMs": 214,
    "available": true
  },
  {
    "id": "deepseek-v4.1-flash",
    "slug": "deepseek-v4.1-flash",
    "name": "DeepSeek V4.1 Flash",
    "description": "DeepSeek V4.1 Flash — state-of-the-art high-speed reasoning, coding, and multilingual intelligence.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 15,
    "popularity": 9810,
    "rating": 99,
    "latencyMs": 201,
    "available": true
  },
  {
    "id": "pr-gen-omni-core",
    "slug": "pr-gen-omni-core",
    "name": "Omni Core",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 100,
    "popularity": 8899,
    "rating": 96,
    "latencyMs": 205,
    "available": true
  },
  {
    "id": "pr-gen-dialogue-pro",
    "slug": "pr-gen-dialogue-pro",
    "name": "Dialogue Pro",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 101,
    "popularity": 8898,
    "rating": 96,
    "latencyMs": 185,
    "available": true
  },
  {
    "id": "pr-gen-knowledge-base",
    "slug": "pr-gen-knowledge-base",
    "name": "Knowledge Base",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 102,
    "popularity": 8897,
    "rating": 96,
    "latencyMs": 200,
    "available": true
  },
  {
    "id": "pr-gen-briefing-desk",
    "slug": "pr-gen-briefing-desk",
    "name": "Briefing Desk",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 103,
    "popularity": 8896,
    "rating": 96,
    "latencyMs": 218,
    "available": true
  },
  {
    "id": "pr-gen-clarity-engine",
    "slug": "pr-gen-clarity-engine",
    "name": "Clarity Engine",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 104,
    "popularity": 8895,
    "rating": 96,
    "latencyMs": 217,
    "available": true
  },
  {
    "id": "pr-gen-writer-companion",
    "slug": "pr-gen-writer-companion",
    "name": "Writer Companion",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 105,
    "popularity": 8894,
    "rating": 96,
    "latencyMs": 252,
    "available": true
  },
  {
    "id": "pr-gen-inquiry-agent",
    "slug": "pr-gen-inquiry-agent",
    "name": "Inquiry Agent",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 106,
    "popularity": 8893,
    "rating": 96,
    "latencyMs": 202,
    "available": true
  },
  {
    "id": "pr-gen-omni-core-v2",
    "slug": "pr-gen-omni-core-v2",
    "name": "Omni Core (Tier 2)",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 107,
    "popularity": 8892,
    "rating": 96,
    "latencyMs": 245,
    "available": true
  },
  {
    "id": "pr-gen-dialogue-pro-v2",
    "slug": "pr-gen-dialogue-pro-v2",
    "name": "Dialogue Pro (Tier 2)",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 108,
    "popularity": 8891,
    "rating": 96,
    "latencyMs": 202,
    "available": true
  },
  {
    "id": "pr-gen-knowledge-base-v2",
    "slug": "pr-gen-knowledge-base-v2",
    "name": "Knowledge Base (Tier 2)",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 109,
    "popularity": 8890,
    "rating": 96,
    "latencyMs": 228,
    "available": true
  },
  {
    "id": "pr-gen-briefing-desk-v2",
    "slug": "pr-gen-briefing-desk-v2",
    "name": "Briefing Desk (Tier 2)",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 110,
    "popularity": 8889,
    "rating": 96,
    "latencyMs": 227,
    "available": true
  },
  {
    "id": "pr-gen-clarity-engine-v2",
    "slug": "pr-gen-clarity-engine-v2",
    "name": "Clarity Engine (Tier 2)",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 111,
    "popularity": 8888,
    "rating": 96,
    "latencyMs": 256,
    "available": true
  },
  {
    "id": "pr-gen-writer-companion-v2",
    "slug": "pr-gen-writer-companion-v2",
    "name": "Writer Companion (Tier 2)",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 112,
    "popularity": 8887,
    "rating": 96,
    "latencyMs": 197,
    "available": true
  },
  {
    "id": "pr-gen-inquiry-agent-v2",
    "slug": "pr-gen-inquiry-agent-v2",
    "name": "Inquiry Agent (Tier 2)",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 113,
    "popularity": 8886,
    "rating": 96,
    "latencyMs": 253,
    "available": true
  },
  {
    "id": "pr-gen-omni-core-v3",
    "slug": "pr-gen-omni-core-v3",
    "name": "Omni Core (Tier 3)",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 114,
    "popularity": 8885,
    "rating": 96,
    "latencyMs": 190,
    "available": true
  },
  {
    "id": "pr-gen-dialogue-pro-v3",
    "slug": "pr-gen-dialogue-pro-v3",
    "name": "Dialogue Pro (Tier 3)",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 115,
    "popularity": 8884,
    "rating": 96,
    "latencyMs": 215,
    "available": true
  },
  {
    "id": "pr-gen-knowledge-base-v3",
    "slug": "pr-gen-knowledge-base-v3",
    "name": "Knowledge Base (Tier 3)",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 116,
    "popularity": 8883,
    "rating": 96,
    "latencyMs": 187,
    "available": true
  },
  {
    "id": "pr-gen-briefing-desk-v3",
    "slug": "pr-gen-briefing-desk-v3",
    "name": "Briefing Desk (Tier 3)",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 117,
    "popularity": 8882,
    "rating": 96,
    "latencyMs": 255,
    "available": true
  },
  {
    "id": "pr-gen-clarity-engine-v3",
    "slug": "pr-gen-clarity-engine-v3",
    "name": "Clarity Engine (Tier 3)",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 118,
    "popularity": 8881,
    "rating": 96,
    "latencyMs": 225,
    "available": true
  },
  {
    "id": "pr-gen-writer-companion-v3",
    "slug": "pr-gen-writer-companion-v3",
    "name": "Writer Companion (Tier 3)",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 119,
    "popularity": 8880,
    "rating": 96,
    "latencyMs": 195,
    "available": true
  },
  {
    "id": "pr-gen-inquiry-agent-v3",
    "slug": "pr-gen-inquiry-agent-v3",
    "name": "Inquiry Agent (Tier 3)",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 120,
    "popularity": 8879,
    "rating": 96,
    "latencyMs": 202,
    "available": true
  },
  {
    "id": "pr-gen-omni-core-v4",
    "slug": "pr-gen-omni-core-v4",
    "name": "Omni Core (Tier 4)",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 121,
    "popularity": 8878,
    "rating": 96,
    "latencyMs": 217,
    "available": true
  },
  {
    "id": "pr-gen-dialogue-pro-v4",
    "slug": "pr-gen-dialogue-pro-v4",
    "name": "Dialogue Pro (Tier 4)",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 122,
    "popularity": 8877,
    "rating": 96,
    "latencyMs": 211,
    "available": true
  },
  {
    "id": "pr-gen-knowledge-base-v4",
    "slug": "pr-gen-knowledge-base-v4",
    "name": "Knowledge Base (Tier 4)",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 123,
    "popularity": 8876,
    "rating": 96,
    "latencyMs": 192,
    "available": true
  },
  {
    "id": "pr-gen-briefing-desk-v4",
    "slug": "pr-gen-briefing-desk-v4",
    "name": "Briefing Desk (Tier 4)",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 124,
    "popularity": 8875,
    "rating": 96,
    "latencyMs": 192,
    "available": true
  },
  {
    "id": "pr-gen-clarity-engine-v4",
    "slug": "pr-gen-clarity-engine-v4",
    "name": "Clarity Engine (Tier 4)",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 125,
    "popularity": 8874,
    "rating": 96,
    "latencyMs": 222,
    "available": true
  },
  {
    "id": "pr-gen-writer-companion-v4",
    "slug": "pr-gen-writer-companion-v4",
    "name": "Writer Companion (Tier 4)",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 126,
    "popularity": 8873,
    "rating": 96,
    "latencyMs": 180,
    "available": true
  },
  {
    "id": "pr-gen-inquiry-agent-v4",
    "slug": "pr-gen-inquiry-agent-v4",
    "name": "Inquiry Agent (Tier 4)",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 127,
    "popularity": 8872,
    "rating": 96,
    "latencyMs": 218,
    "available": true
  },
  {
    "id": "pr-gen-omni-core-v5",
    "slug": "pr-gen-omni-core-v5",
    "name": "Omni Core (Tier 5)",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 128,
    "popularity": 8871,
    "rating": 96,
    "latencyMs": 210,
    "available": true
  },
  {
    "id": "pr-gen-dialogue-pro-v5",
    "slug": "pr-gen-dialogue-pro-v5",
    "name": "Dialogue Pro (Tier 5)",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 129,
    "popularity": 8870,
    "rating": 96,
    "latencyMs": 225,
    "available": true
  },
  {
    "id": "pr-gen-knowledge-base-v5",
    "slug": "pr-gen-knowledge-base-v5",
    "name": "Knowledge Base (Tier 5)",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 130,
    "popularity": 8869,
    "rating": 96,
    "latencyMs": 194,
    "available": true
  },
  {
    "id": "pr-gen-briefing-desk-v5",
    "slug": "pr-gen-briefing-desk-v5",
    "name": "Briefing Desk (Tier 5)",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 131,
    "popularity": 8868,
    "rating": 96,
    "latencyMs": 184,
    "available": true
  },
  {
    "id": "pr-gen-clarity-engine-v5",
    "slug": "pr-gen-clarity-engine-v5",
    "name": "Clarity Engine (Tier 5)",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 132,
    "popularity": 8867,
    "rating": 96,
    "latencyMs": 210,
    "available": true
  },
  {
    "id": "pr-gen-writer-companion-v5",
    "slug": "pr-gen-writer-companion-v5",
    "name": "Writer Companion (Tier 5)",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 133,
    "popularity": 8866,
    "rating": 96,
    "latencyMs": 203,
    "available": true
  },
  {
    "id": "pr-gen-inquiry-agent-v5",
    "slug": "pr-gen-inquiry-agent-v5",
    "name": "Inquiry Agent (Tier 5)",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 134,
    "popularity": 8865,
    "rating": 96,
    "latencyMs": 231,
    "available": true
  },
  {
    "id": "pr-gen-omni-core-v6",
    "slug": "pr-gen-omni-core-v6",
    "name": "Omni Core (Tier 6)",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 135,
    "popularity": 8864,
    "rating": 96,
    "latencyMs": 234,
    "available": true
  },
  {
    "id": "pr-gen-dialogue-pro-v6",
    "slug": "pr-gen-dialogue-pro-v6",
    "name": "Dialogue Pro (Tier 6)",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 136,
    "popularity": 8863,
    "rating": 96,
    "latencyMs": 209,
    "available": true
  },
  {
    "id": "pr-gen-knowledge-base-v6",
    "slug": "pr-gen-knowledge-base-v6",
    "name": "Knowledge Base (Tier 6)",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 137,
    "popularity": 8862,
    "rating": 96,
    "latencyMs": 245,
    "available": true
  },
  {
    "id": "pr-gen-briefing-desk-v6",
    "slug": "pr-gen-briefing-desk-v6",
    "name": "Briefing Desk (Tier 6)",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 138,
    "popularity": 8861,
    "rating": 96,
    "latencyMs": 201,
    "available": true
  },
  {
    "id": "pr-gen-clarity-engine-v6",
    "slug": "pr-gen-clarity-engine-v6",
    "name": "Clarity Engine (Tier 6)",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 139,
    "popularity": 8860,
    "rating": 96,
    "latencyMs": 211,
    "available": true
  },
  {
    "id": "pr-gen-writer-companion-v6",
    "slug": "pr-gen-writer-companion-v6",
    "name": "Writer Companion (Tier 6)",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 140,
    "popularity": 8859,
    "rating": 96,
    "latencyMs": 243,
    "available": true
  },
  {
    "id": "pr-gen-inquiry-agent-v6",
    "slug": "pr-gen-inquiry-agent-v6",
    "name": "Inquiry Agent (Tier 6)",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 141,
    "popularity": 8858,
    "rating": 96,
    "latencyMs": 231,
    "available": true
  },
  {
    "id": "pr-gen-omni-core-v7",
    "slug": "pr-gen-omni-core-v7",
    "name": "Omni Core (Tier 7)",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 142,
    "popularity": 8857,
    "rating": 96,
    "latencyMs": 223,
    "available": true
  },
  {
    "id": "pr-gen-dialogue-pro-v7",
    "slug": "pr-gen-dialogue-pro-v7",
    "name": "Dialogue Pro (Tier 7)",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 143,
    "popularity": 8856,
    "rating": 96,
    "latencyMs": 195,
    "available": true
  },
  {
    "id": "pr-gen-knowledge-base-v7",
    "slug": "pr-gen-knowledge-base-v7",
    "name": "Knowledge Base (Tier 7)",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 144,
    "popularity": 8855,
    "rating": 96,
    "latencyMs": 210,
    "available": true
  },
  {
    "id": "pr-gen-briefing-desk-v7",
    "slug": "pr-gen-briefing-desk-v7",
    "name": "Briefing Desk (Tier 7)",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 145,
    "popularity": 8854,
    "rating": 96,
    "latencyMs": 252,
    "available": true
  },
  {
    "id": "pr-gen-clarity-engine-v7",
    "slug": "pr-gen-clarity-engine-v7",
    "name": "Clarity Engine (Tier 7)",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 146,
    "popularity": 8853,
    "rating": 96,
    "latencyMs": 243,
    "available": true
  },
  {
    "id": "pr-gen-writer-companion-v7",
    "slug": "pr-gen-writer-companion-v7",
    "name": "Writer Companion (Tier 7)",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 147,
    "popularity": 8852,
    "rating": 96,
    "latencyMs": 233,
    "available": true
  },
  {
    "id": "pr-gen-inquiry-agent-v7",
    "slug": "pr-gen-inquiry-agent-v7",
    "name": "Inquiry Agent (Tier 7)",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 148,
    "popularity": 8851,
    "rating": 96,
    "latencyMs": 226,
    "available": true
  },
  {
    "id": "pr-gen-omni-core-v8",
    "slug": "pr-gen-omni-core-v8",
    "name": "Omni Core (Tier 8)",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 149,
    "popularity": 8850,
    "rating": 96,
    "latencyMs": 189,
    "available": true
  },
  {
    "id": "pr-gen-dialogue-pro-v8",
    "slug": "pr-gen-dialogue-pro-v8",
    "name": "Dialogue Pro (Tier 8)",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 150,
    "popularity": 8849,
    "rating": 96,
    "latencyMs": 259,
    "available": true
  },
  {
    "id": "pr-gen-knowledge-base-v8",
    "slug": "pr-gen-knowledge-base-v8",
    "name": "Knowledge Base (Tier 8)",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 151,
    "popularity": 8848,
    "rating": 96,
    "latencyMs": 220,
    "available": true
  },
  {
    "id": "pr-gen-briefing-desk-v8",
    "slug": "pr-gen-briefing-desk-v8",
    "name": "Briefing Desk (Tier 8)",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 152,
    "popularity": 8847,
    "rating": 96,
    "latencyMs": 212,
    "available": true
  },
  {
    "id": "pr-gen-clarity-engine-v8",
    "slug": "pr-gen-clarity-engine-v8",
    "name": "Clarity Engine (Tier 8)",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 153,
    "popularity": 8846,
    "rating": 96,
    "latencyMs": 180,
    "available": true
  },
  {
    "id": "pr-gen-writer-companion-v8",
    "slug": "pr-gen-writer-companion-v8",
    "name": "Writer Companion (Tier 8)",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 154,
    "popularity": 8845,
    "rating": 96,
    "latencyMs": 236,
    "available": true
  },
  {
    "id": "pr-gen-inquiry-agent-v8",
    "slug": "pr-gen-inquiry-agent-v8",
    "name": "Inquiry Agent (Tier 8)",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 155,
    "popularity": 8844,
    "rating": 96,
    "latencyMs": 208,
    "available": true
  },
  {
    "id": "pr-gen-omni-core-v9",
    "slug": "pr-gen-omni-core-v9",
    "name": "Omni Core (Tier 9)",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 156,
    "popularity": 8843,
    "rating": 96,
    "latencyMs": 217,
    "available": true
  },
  {
    "id": "pr-gen-dialogue-pro-v9",
    "slug": "pr-gen-dialogue-pro-v9",
    "name": "Dialogue Pro (Tier 9)",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 157,
    "popularity": 8842,
    "rating": 96,
    "latencyMs": 190,
    "available": true
  },
  {
    "id": "pr-gen-knowledge-base-v9",
    "slug": "pr-gen-knowledge-base-v9",
    "name": "Knowledge Base (Tier 9)",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 158,
    "popularity": 8841,
    "rating": 96,
    "latencyMs": 246,
    "available": true
  },
  {
    "id": "pr-gen-briefing-desk-v9",
    "slug": "pr-gen-briefing-desk-v9",
    "name": "Briefing Desk (Tier 9)",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 159,
    "popularity": 8840,
    "rating": 96,
    "latencyMs": 185,
    "available": true
  },
  {
    "id": "pr-gen-clarity-engine-v9",
    "slug": "pr-gen-clarity-engine-v9",
    "name": "Clarity Engine (Tier 9)",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 160,
    "popularity": 8839,
    "rating": 96,
    "latencyMs": 250,
    "available": true
  },
  {
    "id": "pr-gen-writer-companion-v9",
    "slug": "pr-gen-writer-companion-v9",
    "name": "Writer Companion (Tier 9)",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 161,
    "popularity": 8838,
    "rating": 96,
    "latencyMs": 239,
    "available": true
  },
  {
    "id": "pr-gen-inquiry-agent-v9",
    "slug": "pr-gen-inquiry-agent-v9",
    "name": "Inquiry Agent (Tier 9)",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 162,
    "popularity": 8837,
    "rating": 96,
    "latencyMs": 200,
    "available": true
  },
  {
    "id": "pr-gen-omni-core-v10",
    "slug": "pr-gen-omni-core-v10",
    "name": "Omni Core (Tier 10)",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 163,
    "popularity": 8836,
    "rating": 96,
    "latencyMs": 246,
    "available": true
  },
  {
    "id": "pr-gen-dialogue-pro-v10",
    "slug": "pr-gen-dialogue-pro-v10",
    "name": "Dialogue Pro (Tier 10)",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 164,
    "popularity": 8835,
    "rating": 96,
    "latencyMs": 224,
    "available": true
  },
  {
    "id": "pr-gen-knowledge-base-v10",
    "slug": "pr-gen-knowledge-base-v10",
    "name": "Knowledge Base (Tier 10)",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 165,
    "popularity": 8834,
    "rating": 96,
    "latencyMs": 238,
    "available": true
  },
  {
    "id": "pr-reason-cot-analytical",
    "slug": "pr-reason-cot-analytical",
    "name": "Chain-of-Thought Analyst",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 166,
    "popularity": 8833,
    "rating": 96,
    "latencyMs": 227,
    "available": true
  },
  {
    "id": "pr-reason-deductive-logic",
    "slug": "pr-reason-deductive-logic",
    "name": "Deductive Logic Engine",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 167,
    "popularity": 8832,
    "rating": 96,
    "latencyMs": 235,
    "available": true
  },
  {
    "id": "pr-reason-causal-inference",
    "slug": "pr-reason-causal-inference",
    "name": "Causal Inference Model",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 168,
    "popularity": 8831,
    "rating": 96,
    "latencyMs": 235,
    "available": true
  },
  {
    "id": "pr-reason-systems-thinker",
    "slug": "pr-reason-systems-thinker",
    "name": "Systems Architecture Thinker",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 169,
    "popularity": 8830,
    "rating": 96,
    "latencyMs": 212,
    "available": true
  },
  {
    "id": "pr-reason-fallacy-detector",
    "slug": "pr-reason-fallacy-detector",
    "name": "Cognitive Auditor",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 170,
    "popularity": 8829,
    "rating": 96,
    "latencyMs": 249,
    "available": true
  },
  {
    "id": "pr-reason-decision-matrix",
    "slug": "pr-reason-decision-matrix",
    "name": "Decision Matrix Pro",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 171,
    "popularity": 8828,
    "rating": 96,
    "latencyMs": 228,
    "available": true
  },
  {
    "id": "pr-reason-hypothesis-tester",
    "slug": "pr-reason-hypothesis-tester",
    "name": "Scientific Hypothesizer",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 172,
    "popularity": 8827,
    "rating": 96,
    "latencyMs": 205,
    "available": true
  },
  {
    "id": "pr-reason-cot-analytical-v2",
    "slug": "pr-reason-cot-analytical-v2",
    "name": "Chain-of-Thought Analyst (Tier 2)",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 173,
    "popularity": 8826,
    "rating": 96,
    "latencyMs": 185,
    "available": true
  },
  {
    "id": "pr-reason-deductive-logic-v2",
    "slug": "pr-reason-deductive-logic-v2",
    "name": "Deductive Logic Engine (Tier 2)",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 174,
    "popularity": 8825,
    "rating": 96,
    "latencyMs": 186,
    "available": true
  },
  {
    "id": "pr-reason-causal-inference-v2",
    "slug": "pr-reason-causal-inference-v2",
    "name": "Causal Inference Model (Tier 2)",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 175,
    "popularity": 8824,
    "rating": 96,
    "latencyMs": 254,
    "available": true
  },
  {
    "id": "pr-reason-systems-thinker-v2",
    "slug": "pr-reason-systems-thinker-v2",
    "name": "Systems Architecture Thinker (Tier 2)",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 176,
    "popularity": 8823,
    "rating": 96,
    "latencyMs": 239,
    "available": true
  },
  {
    "id": "pr-reason-fallacy-detector-v2",
    "slug": "pr-reason-fallacy-detector-v2",
    "name": "Cognitive Auditor (Tier 2)",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 177,
    "popularity": 8822,
    "rating": 96,
    "latencyMs": 220,
    "available": true
  },
  {
    "id": "pr-reason-decision-matrix-v2",
    "slug": "pr-reason-decision-matrix-v2",
    "name": "Decision Matrix Pro (Tier 2)",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 178,
    "popularity": 8821,
    "rating": 96,
    "latencyMs": 231,
    "available": true
  },
  {
    "id": "pr-reason-hypothesis-tester-v2",
    "slug": "pr-reason-hypothesis-tester-v2",
    "name": "Scientific Hypothesizer (Tier 2)",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 179,
    "popularity": 8820,
    "rating": 96,
    "latencyMs": 259,
    "available": true
  },
  {
    "id": "pr-reason-cot-analytical-v3",
    "slug": "pr-reason-cot-analytical-v3",
    "name": "Chain-of-Thought Analyst (Tier 3)",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 180,
    "popularity": 8819,
    "rating": 96,
    "latencyMs": 216,
    "available": true
  },
  {
    "id": "pr-reason-deductive-logic-v3",
    "slug": "pr-reason-deductive-logic-v3",
    "name": "Deductive Logic Engine (Tier 3)",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 181,
    "popularity": 8818,
    "rating": 96,
    "latencyMs": 241,
    "available": true
  },
  {
    "id": "pr-reason-causal-inference-v3",
    "slug": "pr-reason-causal-inference-v3",
    "name": "Causal Inference Model (Tier 3)",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 182,
    "popularity": 8817,
    "rating": 96,
    "latencyMs": 245,
    "available": true
  },
  {
    "id": "pr-reason-systems-thinker-v3",
    "slug": "pr-reason-systems-thinker-v3",
    "name": "Systems Architecture Thinker (Tier 3)",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 183,
    "popularity": 8816,
    "rating": 96,
    "latencyMs": 214,
    "available": true
  },
  {
    "id": "pr-reason-fallacy-detector-v3",
    "slug": "pr-reason-fallacy-detector-v3",
    "name": "Cognitive Auditor (Tier 3)",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 184,
    "popularity": 8815,
    "rating": 96,
    "latencyMs": 228,
    "available": true
  },
  {
    "id": "pr-reason-decision-matrix-v3",
    "slug": "pr-reason-decision-matrix-v3",
    "name": "Decision Matrix Pro (Tier 3)",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 185,
    "popularity": 8814,
    "rating": 96,
    "latencyMs": 187,
    "available": true
  },
  {
    "id": "pr-reason-hypothesis-tester-v3",
    "slug": "pr-reason-hypothesis-tester-v3",
    "name": "Scientific Hypothesizer (Tier 3)",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 186,
    "popularity": 8813,
    "rating": 96,
    "latencyMs": 230,
    "available": true
  },
  {
    "id": "pr-reason-cot-analytical-v4",
    "slug": "pr-reason-cot-analytical-v4",
    "name": "Chain-of-Thought Analyst (Tier 4)",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 187,
    "popularity": 8812,
    "rating": 96,
    "latencyMs": 180,
    "available": true
  },
  {
    "id": "pr-reason-deductive-logic-v4",
    "slug": "pr-reason-deductive-logic-v4",
    "name": "Deductive Logic Engine (Tier 4)",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 188,
    "popularity": 8811,
    "rating": 96,
    "latencyMs": 180,
    "available": true
  },
  {
    "id": "pr-reason-causal-inference-v4",
    "slug": "pr-reason-causal-inference-v4",
    "name": "Causal Inference Model (Tier 4)",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 189,
    "popularity": 8810,
    "rating": 96,
    "latencyMs": 197,
    "available": true
  },
  {
    "id": "pr-reason-systems-thinker-v4",
    "slug": "pr-reason-systems-thinker-v4",
    "name": "Systems Architecture Thinker (Tier 4)",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 190,
    "popularity": 8809,
    "rating": 96,
    "latencyMs": 240,
    "available": true
  },
  {
    "id": "pr-reason-fallacy-detector-v4",
    "slug": "pr-reason-fallacy-detector-v4",
    "name": "Cognitive Auditor (Tier 4)",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 191,
    "popularity": 8808,
    "rating": 96,
    "latencyMs": 222,
    "available": true
  },
  {
    "id": "pr-reason-decision-matrix-v4",
    "slug": "pr-reason-decision-matrix-v4",
    "name": "Decision Matrix Pro (Tier 4)",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 192,
    "popularity": 8807,
    "rating": 96,
    "latencyMs": 230,
    "available": true
  },
  {
    "id": "pr-reason-hypothesis-tester-v4",
    "slug": "pr-reason-hypothesis-tester-v4",
    "name": "Scientific Hypothesizer (Tier 4)",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 193,
    "popularity": 8806,
    "rating": 96,
    "latencyMs": 259,
    "available": true
  },
  {
    "id": "pr-reason-cot-analytical-v5",
    "slug": "pr-reason-cot-analytical-v5",
    "name": "Chain-of-Thought Analyst (Tier 5)",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 194,
    "popularity": 8805,
    "rating": 96,
    "latencyMs": 189,
    "available": true
  },
  {
    "id": "pr-reason-deductive-logic-v5",
    "slug": "pr-reason-deductive-logic-v5",
    "name": "Deductive Logic Engine (Tier 5)",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 195,
    "popularity": 8804,
    "rating": 96,
    "latencyMs": 225,
    "available": true
  },
  {
    "id": "pr-reason-causal-inference-v5",
    "slug": "pr-reason-causal-inference-v5",
    "name": "Causal Inference Model (Tier 5)",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 196,
    "popularity": 8803,
    "rating": 96,
    "latencyMs": 205,
    "available": true
  },
  {
    "id": "pr-reason-systems-thinker-v5",
    "slug": "pr-reason-systems-thinker-v5",
    "name": "Systems Architecture Thinker (Tier 5)",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 197,
    "popularity": 8802,
    "rating": 96,
    "latencyMs": 218,
    "available": true
  },
  {
    "id": "pr-reason-fallacy-detector-v5",
    "slug": "pr-reason-fallacy-detector-v5",
    "name": "Cognitive Auditor (Tier 5)",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 198,
    "popularity": 8801,
    "rating": 96,
    "latencyMs": 248,
    "available": true
  },
  {
    "id": "pr-reason-decision-matrix-v5",
    "slug": "pr-reason-decision-matrix-v5",
    "name": "Decision Matrix Pro (Tier 5)",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 199,
    "popularity": 8800,
    "rating": 96,
    "latencyMs": 182,
    "available": true
  },
  {
    "id": "pr-reason-hypothesis-tester-v5",
    "slug": "pr-reason-hypothesis-tester-v5",
    "name": "Scientific Hypothesizer (Tier 5)",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 200,
    "popularity": 8799,
    "rating": 96,
    "latencyMs": 195,
    "available": true
  },
  {
    "id": "pr-reason-cot-analytical-v6",
    "slug": "pr-reason-cot-analytical-v6",
    "name": "Chain-of-Thought Analyst (Tier 6)",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 201,
    "popularity": 8798,
    "rating": 96,
    "latencyMs": 183,
    "available": true
  },
  {
    "id": "pr-reason-deductive-logic-v6",
    "slug": "pr-reason-deductive-logic-v6",
    "name": "Deductive Logic Engine (Tier 6)",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 202,
    "popularity": 8797,
    "rating": 96,
    "latencyMs": 255,
    "available": true
  },
  {
    "id": "pr-reason-causal-inference-v6",
    "slug": "pr-reason-causal-inference-v6",
    "name": "Causal Inference Model (Tier 6)",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 203,
    "popularity": 8796,
    "rating": 96,
    "latencyMs": 249,
    "available": true
  },
  {
    "id": "pr-reason-systems-thinker-v6",
    "slug": "pr-reason-systems-thinker-v6",
    "name": "Systems Architecture Thinker (Tier 6)",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 204,
    "popularity": 8795,
    "rating": 96,
    "latencyMs": 256,
    "available": true
  },
  {
    "id": "pr-reason-fallacy-detector-v6",
    "slug": "pr-reason-fallacy-detector-v6",
    "name": "Cognitive Auditor (Tier 6)",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 205,
    "popularity": 8794,
    "rating": 96,
    "latencyMs": 259,
    "available": true
  },
  {
    "id": "pr-reason-decision-matrix-v6",
    "slug": "pr-reason-decision-matrix-v6",
    "name": "Decision Matrix Pro (Tier 6)",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 206,
    "popularity": 8793,
    "rating": 96,
    "latencyMs": 200,
    "available": true
  },
  {
    "id": "pr-reason-hypothesis-tester-v6",
    "slug": "pr-reason-hypothesis-tester-v6",
    "name": "Scientific Hypothesizer (Tier 6)",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 207,
    "popularity": 8792,
    "rating": 96,
    "latencyMs": 236,
    "available": true
  },
  {
    "id": "pr-reason-cot-analytical-v7",
    "slug": "pr-reason-cot-analytical-v7",
    "name": "Chain-of-Thought Analyst (Tier 7)",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 208,
    "popularity": 8791,
    "rating": 96,
    "latencyMs": 182,
    "available": true
  },
  {
    "id": "pr-reason-deductive-logic-v7",
    "slug": "pr-reason-deductive-logic-v7",
    "name": "Deductive Logic Engine (Tier 7)",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 209,
    "popularity": 8790,
    "rating": 96,
    "latencyMs": 234,
    "available": true
  },
  {
    "id": "pr-reason-causal-inference-v7",
    "slug": "pr-reason-causal-inference-v7",
    "name": "Causal Inference Model (Tier 7)",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 210,
    "popularity": 8789,
    "rating": 96,
    "latencyMs": 182,
    "available": true
  },
  {
    "id": "pr-reason-systems-thinker-v7",
    "slug": "pr-reason-systems-thinker-v7",
    "name": "Systems Architecture Thinker (Tier 7)",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 211,
    "popularity": 8788,
    "rating": 96,
    "latencyMs": 186,
    "available": true
  },
  {
    "id": "pr-reason-fallacy-detector-v7",
    "slug": "pr-reason-fallacy-detector-v7",
    "name": "Cognitive Auditor (Tier 7)",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 212,
    "popularity": 8787,
    "rating": 96,
    "latencyMs": 180,
    "available": true
  },
  {
    "id": "pr-reason-decision-matrix-v7",
    "slug": "pr-reason-decision-matrix-v7",
    "name": "Decision Matrix Pro (Tier 7)",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 213,
    "popularity": 8786,
    "rating": 96,
    "latencyMs": 201,
    "available": true
  },
  {
    "id": "pr-reason-hypothesis-tester-v7",
    "slug": "pr-reason-hypothesis-tester-v7",
    "name": "Scientific Hypothesizer (Tier 7)",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 214,
    "popularity": 8785,
    "rating": 96,
    "latencyMs": 240,
    "available": true
  },
  {
    "id": "pr-reason-cot-analytical-v8",
    "slug": "pr-reason-cot-analytical-v8",
    "name": "Chain-of-Thought Analyst (Tier 8)",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 215,
    "popularity": 8784,
    "rating": 96,
    "latencyMs": 219,
    "available": true
  },
  {
    "id": "pr-reason-deductive-logic-v8",
    "slug": "pr-reason-deductive-logic-v8",
    "name": "Deductive Logic Engine (Tier 8)",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 216,
    "popularity": 8783,
    "rating": 96,
    "latencyMs": 229,
    "available": true
  },
  {
    "id": "pr-reason-causal-inference-v8",
    "slug": "pr-reason-causal-inference-v8",
    "name": "Causal Inference Model (Tier 8)",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 217,
    "popularity": 8782,
    "rating": 96,
    "latencyMs": 241,
    "available": true
  },
  {
    "id": "pr-reason-systems-thinker-v8",
    "slug": "pr-reason-systems-thinker-v8",
    "name": "Systems Architecture Thinker (Tier 8)",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 218,
    "popularity": 8781,
    "rating": 96,
    "latencyMs": 249,
    "available": true
  },
  {
    "id": "pr-reason-fallacy-detector-v8",
    "slug": "pr-reason-fallacy-detector-v8",
    "name": "Cognitive Auditor (Tier 8)",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 219,
    "popularity": 8780,
    "rating": 96,
    "latencyMs": 200,
    "available": true
  },
  {
    "id": "pr-reason-decision-matrix-v8",
    "slug": "pr-reason-decision-matrix-v8",
    "name": "Decision Matrix Pro (Tier 8)",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 220,
    "popularity": 8779,
    "rating": 96,
    "latencyMs": 222,
    "available": true
  },
  {
    "id": "pr-code-fullstack-architect",
    "slug": "pr-code-fullstack-architect",
    "name": "Fullstack Architect",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 221,
    "popularity": 8778,
    "rating": 96,
    "latencyMs": 192,
    "available": true
  },
  {
    "id": "pr-code-python-systems",
    "slug": "pr-code-python-systems",
    "name": "Python Systems Engineer",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 222,
    "popularity": 8777,
    "rating": 96,
    "latencyMs": 233,
    "available": true
  },
  {
    "id": "pr-code-rust-memory",
    "slug": "pr-code-rust-memory",
    "name": "Rust & Systems Safety",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 223,
    "popularity": 8776,
    "rating": 96,
    "latencyMs": 229,
    "available": true
  },
  {
    "id": "pr-code-database-internals",
    "slug": "pr-code-database-internals",
    "name": "Database & SQL Specialist",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 224,
    "popularity": 8775,
    "rating": 96,
    "latencyMs": 241,
    "available": true
  },
  {
    "id": "pr-code-devops-cloud",
    "slug": "pr-code-devops-cloud",
    "name": "Cloud & Kubernetes Engineer",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 225,
    "popularity": 8774,
    "rating": 96,
    "latencyMs": 228,
    "available": true
  },
  {
    "id": "pr-code-frontend-perf",
    "slug": "pr-code-frontend-perf",
    "name": "React & Web Performance",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 226,
    "popularity": 8773,
    "rating": 96,
    "latencyMs": 200,
    "available": true
  },
  {
    "id": "pr-code-security-auditor",
    "slug": "pr-code-security-auditor",
    "name": "Application Security Auditor",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 227,
    "popularity": 8772,
    "rating": 96,
    "latencyMs": 215,
    "available": true
  },
  {
    "id": "pr-code-refactor-clean",
    "slug": "pr-code-refactor-clean",
    "name": "Refactoring & Clean Code",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 228,
    "popularity": 8771,
    "rating": 96,
    "latencyMs": 205,
    "available": true
  },
  {
    "id": "pr-code-fullstack-architect-v2",
    "slug": "pr-code-fullstack-architect-v2",
    "name": "Fullstack Architect (Tier 2)",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 229,
    "popularity": 8770,
    "rating": 96,
    "latencyMs": 186,
    "available": true
  },
  {
    "id": "pr-code-python-systems-v2",
    "slug": "pr-code-python-systems-v2",
    "name": "Python Systems Engineer (Tier 2)",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 230,
    "popularity": 8769,
    "rating": 96,
    "latencyMs": 222,
    "available": true
  },
  {
    "id": "pr-code-rust-memory-v2",
    "slug": "pr-code-rust-memory-v2",
    "name": "Rust & Systems Safety (Tier 2)",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 231,
    "popularity": 8768,
    "rating": 96,
    "latencyMs": 223,
    "available": true
  },
  {
    "id": "pr-code-database-internals-v2",
    "slug": "pr-code-database-internals-v2",
    "name": "Database & SQL Specialist (Tier 2)",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 232,
    "popularity": 8767,
    "rating": 96,
    "latencyMs": 182,
    "available": true
  },
  {
    "id": "pr-code-devops-cloud-v2",
    "slug": "pr-code-devops-cloud-v2",
    "name": "Cloud & Kubernetes Engineer (Tier 2)",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 233,
    "popularity": 8766,
    "rating": 96,
    "latencyMs": 257,
    "available": true
  },
  {
    "id": "pr-code-frontend-perf-v2",
    "slug": "pr-code-frontend-perf-v2",
    "name": "React & Web Performance (Tier 2)",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 234,
    "popularity": 8765,
    "rating": 96,
    "latencyMs": 241,
    "available": true
  },
  {
    "id": "pr-code-security-auditor-v2",
    "slug": "pr-code-security-auditor-v2",
    "name": "Application Security Auditor (Tier 2)",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 235,
    "popularity": 8764,
    "rating": 96,
    "latencyMs": 222,
    "available": true
  },
  {
    "id": "pr-code-refactor-clean-v2",
    "slug": "pr-code-refactor-clean-v2",
    "name": "Refactoring & Clean Code (Tier 2)",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 236,
    "popularity": 8763,
    "rating": 96,
    "latencyMs": 193,
    "available": true
  },
  {
    "id": "pr-code-fullstack-architect-v3",
    "slug": "pr-code-fullstack-architect-v3",
    "name": "Fullstack Architect (Tier 3)",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 237,
    "popularity": 8762,
    "rating": 96,
    "latencyMs": 228,
    "available": true
  },
  {
    "id": "pr-code-python-systems-v3",
    "slug": "pr-code-python-systems-v3",
    "name": "Python Systems Engineer (Tier 3)",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 238,
    "popularity": 8761,
    "rating": 96,
    "latencyMs": 233,
    "available": true
  },
  {
    "id": "pr-code-rust-memory-v3",
    "slug": "pr-code-rust-memory-v3",
    "name": "Rust & Systems Safety (Tier 3)",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 239,
    "popularity": 8760,
    "rating": 96,
    "latencyMs": 198,
    "available": true
  },
  {
    "id": "pr-code-database-internals-v3",
    "slug": "pr-code-database-internals-v3",
    "name": "Database & SQL Specialist (Tier 3)",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 240,
    "popularity": 8759,
    "rating": 96,
    "latencyMs": 257,
    "available": true
  },
  {
    "id": "pr-code-devops-cloud-v3",
    "slug": "pr-code-devops-cloud-v3",
    "name": "Cloud & Kubernetes Engineer (Tier 3)",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 241,
    "popularity": 8758,
    "rating": 96,
    "latencyMs": 219,
    "available": true
  },
  {
    "id": "pr-code-frontend-perf-v3",
    "slug": "pr-code-frontend-perf-v3",
    "name": "React & Web Performance (Tier 3)",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 242,
    "popularity": 8757,
    "rating": 96,
    "latencyMs": 185,
    "available": true
  },
  {
    "id": "pr-code-security-auditor-v3",
    "slug": "pr-code-security-auditor-v3",
    "name": "Application Security Auditor (Tier 3)",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 243,
    "popularity": 8756,
    "rating": 96,
    "latencyMs": 213,
    "available": true
  },
  {
    "id": "pr-code-refactor-clean-v3",
    "slug": "pr-code-refactor-clean-v3",
    "name": "Refactoring & Clean Code (Tier 3)",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 244,
    "popularity": 8755,
    "rating": 96,
    "latencyMs": 241,
    "available": true
  },
  {
    "id": "pr-code-fullstack-architect-v4",
    "slug": "pr-code-fullstack-architect-v4",
    "name": "Fullstack Architect (Tier 4)",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 245,
    "popularity": 8754,
    "rating": 96,
    "latencyMs": 246,
    "available": true
  },
  {
    "id": "pr-code-python-systems-v4",
    "slug": "pr-code-python-systems-v4",
    "name": "Python Systems Engineer (Tier 4)",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 246,
    "popularity": 8753,
    "rating": 96,
    "latencyMs": 236,
    "available": true
  },
  {
    "id": "pr-code-rust-memory-v4",
    "slug": "pr-code-rust-memory-v4",
    "name": "Rust & Systems Safety (Tier 4)",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 247,
    "popularity": 8752,
    "rating": 96,
    "latencyMs": 257,
    "available": true
  },
  {
    "id": "pr-code-database-internals-v4",
    "slug": "pr-code-database-internals-v4",
    "name": "Database & SQL Specialist (Tier 4)",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 248,
    "popularity": 8751,
    "rating": 96,
    "latencyMs": 255,
    "available": true
  },
  {
    "id": "pr-code-devops-cloud-v4",
    "slug": "pr-code-devops-cloud-v4",
    "name": "Cloud & Kubernetes Engineer (Tier 4)",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 249,
    "popularity": 8750,
    "rating": 96,
    "latencyMs": 214,
    "available": true
  },
  {
    "id": "pr-code-frontend-perf-v4",
    "slug": "pr-code-frontend-perf-v4",
    "name": "React & Web Performance (Tier 4)",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 250,
    "popularity": 8749,
    "rating": 96,
    "latencyMs": 217,
    "available": true
  },
  {
    "id": "pr-code-security-auditor-v4",
    "slug": "pr-code-security-auditor-v4",
    "name": "Application Security Auditor (Tier 4)",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 251,
    "popularity": 8748,
    "rating": 96,
    "latencyMs": 237,
    "available": true
  },
  {
    "id": "pr-code-refactor-clean-v4",
    "slug": "pr-code-refactor-clean-v4",
    "name": "Refactoring & Clean Code (Tier 4)",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 252,
    "popularity": 8747,
    "rating": 96,
    "latencyMs": 218,
    "available": true
  },
  {
    "id": "pr-code-fullstack-architect-v5",
    "slug": "pr-code-fullstack-architect-v5",
    "name": "Fullstack Architect (Tier 5)",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 253,
    "popularity": 8746,
    "rating": 96,
    "latencyMs": 219,
    "available": true
  },
  {
    "id": "pr-code-python-systems-v5",
    "slug": "pr-code-python-systems-v5",
    "name": "Python Systems Engineer (Tier 5)",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 254,
    "popularity": 8745,
    "rating": 96,
    "latencyMs": 223,
    "available": true
  },
  {
    "id": "pr-code-rust-memory-v5",
    "slug": "pr-code-rust-memory-v5",
    "name": "Rust & Systems Safety (Tier 5)",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 255,
    "popularity": 8744,
    "rating": 96,
    "latencyMs": 202,
    "available": true
  },
  {
    "id": "pr-code-database-internals-v5",
    "slug": "pr-code-database-internals-v5",
    "name": "Database & SQL Specialist (Tier 5)",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 256,
    "popularity": 8743,
    "rating": 96,
    "latencyMs": 248,
    "available": true
  },
  {
    "id": "pr-code-devops-cloud-v5",
    "slug": "pr-code-devops-cloud-v5",
    "name": "Cloud & Kubernetes Engineer (Tier 5)",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 257,
    "popularity": 8742,
    "rating": 96,
    "latencyMs": 257,
    "available": true
  },
  {
    "id": "pr-code-frontend-perf-v5",
    "slug": "pr-code-frontend-perf-v5",
    "name": "React & Web Performance (Tier 5)",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 258,
    "popularity": 8741,
    "rating": 96,
    "latencyMs": 231,
    "available": true
  },
  {
    "id": "pr-code-security-auditor-v5",
    "slug": "pr-code-security-auditor-v5",
    "name": "Application Security Auditor (Tier 5)",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 259,
    "popularity": 8740,
    "rating": 96,
    "latencyMs": 213,
    "available": true
  },
  {
    "id": "pr-code-refactor-clean-v5",
    "slug": "pr-code-refactor-clean-v5",
    "name": "Refactoring & Clean Code (Tier 5)",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 260,
    "popularity": 8739,
    "rating": 96,
    "latencyMs": 214,
    "available": true
  },
  {
    "id": "pr-code-fullstack-architect-v6",
    "slug": "pr-code-fullstack-architect-v6",
    "name": "Fullstack Architect (Tier 6)",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 261,
    "popularity": 8738,
    "rating": 96,
    "latencyMs": 211,
    "available": true
  },
  {
    "id": "pr-code-python-systems-v6",
    "slug": "pr-code-python-systems-v6",
    "name": "Python Systems Engineer (Tier 6)",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 262,
    "popularity": 8737,
    "rating": 96,
    "latencyMs": 186,
    "available": true
  },
  {
    "id": "pr-code-rust-memory-v6",
    "slug": "pr-code-rust-memory-v6",
    "name": "Rust & Systems Safety (Tier 6)",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 263,
    "popularity": 8736,
    "rating": 96,
    "latencyMs": 256,
    "available": true
  },
  {
    "id": "pr-code-database-internals-v6",
    "slug": "pr-code-database-internals-v6",
    "name": "Database & SQL Specialist (Tier 6)",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 264,
    "popularity": 8735,
    "rating": 96,
    "latencyMs": 238,
    "available": true
  },
  {
    "id": "pr-code-devops-cloud-v6",
    "slug": "pr-code-devops-cloud-v6",
    "name": "Cloud & Kubernetes Engineer (Tier 6)",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 265,
    "popularity": 8734,
    "rating": 96,
    "latencyMs": 183,
    "available": true
  },
  {
    "id": "pr-code-frontend-perf-v6",
    "slug": "pr-code-frontend-perf-v6",
    "name": "React & Web Performance (Tier 6)",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 266,
    "popularity": 8733,
    "rating": 96,
    "latencyMs": 191,
    "available": true
  },
  {
    "id": "pr-code-security-auditor-v6",
    "slug": "pr-code-security-auditor-v6",
    "name": "Application Security Auditor (Tier 6)",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 267,
    "popularity": 8732,
    "rating": 96,
    "latencyMs": 252,
    "available": true
  },
  {
    "id": "pr-code-refactor-clean-v6",
    "slug": "pr-code-refactor-clean-v6",
    "name": "Refactoring & Clean Code (Tier 6)",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 268,
    "popularity": 8731,
    "rating": 96,
    "latencyMs": 228,
    "available": true
  },
  {
    "id": "pr-code-fullstack-architect-v7",
    "slug": "pr-code-fullstack-architect-v7",
    "name": "Fullstack Architect (Tier 7)",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 269,
    "popularity": 8730,
    "rating": 96,
    "latencyMs": 199,
    "available": true
  },
  {
    "id": "pr-code-python-systems-v7",
    "slug": "pr-code-python-systems-v7",
    "name": "Python Systems Engineer (Tier 7)",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 270,
    "popularity": 8729,
    "rating": 96,
    "latencyMs": 181,
    "available": true
  },
  {
    "id": "pr-code-rust-memory-v7",
    "slug": "pr-code-rust-memory-v7",
    "name": "Rust & Systems Safety (Tier 7)",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 271,
    "popularity": 8728,
    "rating": 96,
    "latencyMs": 234,
    "available": true
  },
  {
    "id": "pr-code-database-internals-v7",
    "slug": "pr-code-database-internals-v7",
    "name": "Database & SQL Specialist (Tier 7)",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 272,
    "popularity": 8727,
    "rating": 96,
    "latencyMs": 182,
    "available": true
  },
  {
    "id": "pr-code-devops-cloud-v7",
    "slug": "pr-code-devops-cloud-v7",
    "name": "Cloud & Kubernetes Engineer (Tier 7)",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 273,
    "popularity": 8726,
    "rating": 96,
    "latencyMs": 198,
    "available": true
  },
  {
    "id": "pr-code-frontend-perf-v7",
    "slug": "pr-code-frontend-perf-v7",
    "name": "React & Web Performance (Tier 7)",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 274,
    "popularity": 8725,
    "rating": 96,
    "latencyMs": 253,
    "available": true
  },
  {
    "id": "pr-code-security-auditor-v7",
    "slug": "pr-code-security-auditor-v7",
    "name": "Application Security Auditor (Tier 7)",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 275,
    "popularity": 8724,
    "rating": 96,
    "latencyMs": 184,
    "available": true
  },
  {
    "id": "pr-code-refactor-clean-v7",
    "slug": "pr-code-refactor-clean-v7",
    "name": "Refactoring & Clean Code (Tier 7)",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 276,
    "popularity": 8723,
    "rating": 96,
    "latencyMs": 234,
    "available": true
  },
  {
    "id": "pr-code-fullstack-architect-v8",
    "slug": "pr-code-fullstack-architect-v8",
    "name": "Fullstack Architect (Tier 8)",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 277,
    "popularity": 8722,
    "rating": 96,
    "latencyMs": 208,
    "available": true
  },
  {
    "id": "pr-code-python-systems-v8",
    "slug": "pr-code-python-systems-v8",
    "name": "Python Systems Engineer (Tier 8)",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 278,
    "popularity": 8721,
    "rating": 96,
    "latencyMs": 186,
    "available": true
  },
  {
    "id": "pr-code-rust-memory-v8",
    "slug": "pr-code-rust-memory-v8",
    "name": "Rust & Systems Safety (Tier 8)",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 279,
    "popularity": 8720,
    "rating": 96,
    "latencyMs": 248,
    "available": true
  },
  {
    "id": "pr-code-database-internals-v8",
    "slug": "pr-code-database-internals-v8",
    "name": "Database & SQL Specialist (Tier 8)",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 280,
    "popularity": 8719,
    "rating": 96,
    "latencyMs": 249,
    "available": true
  },
  {
    "id": "pr-code-devops-cloud-v8",
    "slug": "pr-code-devops-cloud-v8",
    "name": "Cloud & Kubernetes Engineer (Tier 8)",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 281,
    "popularity": 8718,
    "rating": 96,
    "latencyMs": 242,
    "available": true
  },
  {
    "id": "pr-code-frontend-perf-v8",
    "slug": "pr-code-frontend-perf-v8",
    "name": "React & Web Performance (Tier 8)",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 282,
    "popularity": 8717,
    "rating": 96,
    "latencyMs": 219,
    "available": true
  },
  {
    "id": "pr-code-security-auditor-v8",
    "slug": "pr-code-security-auditor-v8",
    "name": "Application Security Auditor (Tier 8)",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 283,
    "popularity": 8716,
    "rating": 96,
    "latencyMs": 201,
    "available": true
  },
  {
    "id": "pr-code-refactor-clean-v8",
    "slug": "pr-code-refactor-clean-v8",
    "name": "Refactoring & Clean Code (Tier 8)",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 284,
    "popularity": 8715,
    "rating": 96,
    "latencyMs": 206,
    "available": true
  },
  {
    "id": "pr-code-fullstack-architect-v9",
    "slug": "pr-code-fullstack-architect-v9",
    "name": "Fullstack Architect (Tier 9)",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 285,
    "popularity": 8714,
    "rating": 96,
    "latencyMs": 232,
    "available": true
  },
  {
    "id": "pr-code-python-systems-v9",
    "slug": "pr-code-python-systems-v9",
    "name": "Python Systems Engineer (Tier 9)",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 286,
    "popularity": 8713,
    "rating": 96,
    "latencyMs": 208,
    "available": true
  },
  {
    "id": "pr-code-rust-memory-v9",
    "slug": "pr-code-rust-memory-v9",
    "name": "Rust & Systems Safety (Tier 9)",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 287,
    "popularity": 8712,
    "rating": 96,
    "latencyMs": 197,
    "available": true
  },
  {
    "id": "pr-code-database-internals-v9",
    "slug": "pr-code-database-internals-v9",
    "name": "Database & SQL Specialist (Tier 9)",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 288,
    "popularity": 8711,
    "rating": 96,
    "latencyMs": 238,
    "available": true
  },
  {
    "id": "pr-code-devops-cloud-v9",
    "slug": "pr-code-devops-cloud-v9",
    "name": "Cloud & Kubernetes Engineer (Tier 9)",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 289,
    "popularity": 8710,
    "rating": 96,
    "latencyMs": 225,
    "available": true
  },
  {
    "id": "pr-code-frontend-perf-v9",
    "slug": "pr-code-frontend-perf-v9",
    "name": "React & Web Performance (Tier 9)",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 290,
    "popularity": 8709,
    "rating": 96,
    "latencyMs": 204,
    "available": true
  },
  {
    "id": "pr-code-security-auditor-v9",
    "slug": "pr-code-security-auditor-v9",
    "name": "Application Security Auditor (Tier 9)",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 291,
    "popularity": 8708,
    "rating": 96,
    "latencyMs": 256,
    "available": true
  },
  {
    "id": "pr-code-refactor-clean-v9",
    "slug": "pr-code-refactor-clean-v9",
    "name": "Refactoring & Clean Code (Tier 9)",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 292,
    "popularity": 8707,
    "rating": 96,
    "latencyMs": 248,
    "available": true
  },
  {
    "id": "pr-code-fullstack-architect-v10",
    "slug": "pr-code-fullstack-architect-v10",
    "name": "Fullstack Architect (Tier 10)",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 293,
    "popularity": 8706,
    "rating": 96,
    "latencyMs": 202,
    "available": true
  },
  {
    "id": "pr-code-python-systems-v10",
    "slug": "pr-code-python-systems-v10",
    "name": "Python Systems Engineer (Tier 10)",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 294,
    "popularity": 8705,
    "rating": 96,
    "latencyMs": 196,
    "available": true
  },
  {
    "id": "pr-code-rust-memory-v10",
    "slug": "pr-code-rust-memory-v10",
    "name": "Rust & Systems Safety (Tier 10)",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 295,
    "popularity": 8704,
    "rating": 96,
    "latencyMs": 230,
    "available": true
  },
  {
    "id": "pr-code-database-internals-v10",
    "slug": "pr-code-database-internals-v10",
    "name": "Database & SQL Specialist (Tier 10)",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 296,
    "popularity": 8703,
    "rating": 96,
    "latencyMs": 183,
    "available": true
  },
  {
    "id": "pr-agent-workflow-runner",
    "slug": "pr-agent-workflow-runner",
    "name": "Autonomous Workflow Orchestrator",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 297,
    "popularity": 8702,
    "rating": 96,
    "latencyMs": 202,
    "available": true
  },
  {
    "id": "pr-agent-repo-synthesizer",
    "slug": "pr-agent-repo-synthesizer",
    "name": "Repo-Level Agent",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 298,
    "popularity": 8701,
    "rating": 96,
    "latencyMs": 203,
    "available": true
  },
  {
    "id": "pr-agent-schema-tooler",
    "slug": "pr-agent-schema-tooler",
    "name": "Strict Schema Invoker",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 299,
    "popularity": 8700,
    "rating": 96,
    "latencyMs": 246,
    "available": true
  },
  {
    "id": "pr-agent-sandbox-debugger",
    "slug": "pr-agent-sandbox-debugger",
    "name": "Runtime Sandbox Debugger",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 300,
    "popularity": 8699,
    "rating": 96,
    "latencyMs": 229,
    "available": true
  },
  {
    "id": "pr-agent-agent-swarm",
    "slug": "pr-agent-agent-swarm",
    "name": "Subagent Team Lead",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 301,
    "popularity": 8698,
    "rating": 96,
    "latencyMs": 227,
    "available": true
  },
  {
    "id": "pr-agent-workflow-runner-v2",
    "slug": "pr-agent-workflow-runner-v2",
    "name": "Autonomous Workflow Orchestrator (Tier 2)",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 302,
    "popularity": 8697,
    "rating": 96,
    "latencyMs": 198,
    "available": true
  },
  {
    "id": "pr-agent-repo-synthesizer-v2",
    "slug": "pr-agent-repo-synthesizer-v2",
    "name": "Repo-Level Agent (Tier 2)",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 303,
    "popularity": 8696,
    "rating": 96,
    "latencyMs": 206,
    "available": true
  },
  {
    "id": "pr-agent-schema-tooler-v2",
    "slug": "pr-agent-schema-tooler-v2",
    "name": "Strict Schema Invoker (Tier 2)",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 304,
    "popularity": 8695,
    "rating": 96,
    "latencyMs": 246,
    "available": true
  },
  {
    "id": "pr-agent-sandbox-debugger-v2",
    "slug": "pr-agent-sandbox-debugger-v2",
    "name": "Runtime Sandbox Debugger (Tier 2)",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 305,
    "popularity": 8694,
    "rating": 96,
    "latencyMs": 231,
    "available": true
  },
  {
    "id": "pr-agent-agent-swarm-v2",
    "slug": "pr-agent-agent-swarm-v2",
    "name": "Subagent Team Lead (Tier 2)",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 306,
    "popularity": 8693,
    "rating": 96,
    "latencyMs": 198,
    "available": true
  },
  {
    "id": "pr-agent-workflow-runner-v3",
    "slug": "pr-agent-workflow-runner-v3",
    "name": "Autonomous Workflow Orchestrator (Tier 3)",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 307,
    "popularity": 8692,
    "rating": 96,
    "latencyMs": 194,
    "available": true
  },
  {
    "id": "pr-agent-repo-synthesizer-v3",
    "slug": "pr-agent-repo-synthesizer-v3",
    "name": "Repo-Level Agent (Tier 3)",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 308,
    "popularity": 8691,
    "rating": 96,
    "latencyMs": 192,
    "available": true
  },
  {
    "id": "pr-agent-schema-tooler-v3",
    "slug": "pr-agent-schema-tooler-v3",
    "name": "Strict Schema Invoker (Tier 3)",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 309,
    "popularity": 8690,
    "rating": 96,
    "latencyMs": 216,
    "available": true
  },
  {
    "id": "pr-agent-sandbox-debugger-v3",
    "slug": "pr-agent-sandbox-debugger-v3",
    "name": "Runtime Sandbox Debugger (Tier 3)",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 310,
    "popularity": 8689,
    "rating": 96,
    "latencyMs": 253,
    "available": true
  },
  {
    "id": "pr-agent-agent-swarm-v3",
    "slug": "pr-agent-agent-swarm-v3",
    "name": "Subagent Team Lead (Tier 3)",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 311,
    "popularity": 8688,
    "rating": 96,
    "latencyMs": 187,
    "available": true
  },
  {
    "id": "pr-agent-workflow-runner-v4",
    "slug": "pr-agent-workflow-runner-v4",
    "name": "Autonomous Workflow Orchestrator (Tier 4)",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 312,
    "popularity": 8687,
    "rating": 96,
    "latencyMs": 253,
    "available": true
  },
  {
    "id": "pr-agent-repo-synthesizer-v4",
    "slug": "pr-agent-repo-synthesizer-v4",
    "name": "Repo-Level Agent (Tier 4)",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 313,
    "popularity": 8686,
    "rating": 96,
    "latencyMs": 202,
    "available": true
  },
  {
    "id": "pr-agent-schema-tooler-v4",
    "slug": "pr-agent-schema-tooler-v4",
    "name": "Strict Schema Invoker (Tier 4)",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 314,
    "popularity": 8685,
    "rating": 96,
    "latencyMs": 206,
    "available": true
  },
  {
    "id": "pr-agent-sandbox-debugger-v4",
    "slug": "pr-agent-sandbox-debugger-v4",
    "name": "Runtime Sandbox Debugger (Tier 4)",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 315,
    "popularity": 8684,
    "rating": 96,
    "latencyMs": 202,
    "available": true
  },
  {
    "id": "pr-agent-agent-swarm-v4",
    "slug": "pr-agent-agent-swarm-v4",
    "name": "Subagent Team Lead (Tier 4)",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 316,
    "popularity": 8683,
    "rating": 96,
    "latencyMs": 257,
    "available": true
  },
  {
    "id": "pr-agent-workflow-runner-v5",
    "slug": "pr-agent-workflow-runner-v5",
    "name": "Autonomous Workflow Orchestrator (Tier 5)",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 317,
    "popularity": 8682,
    "rating": 96,
    "latencyMs": 227,
    "available": true
  },
  {
    "id": "pr-agent-repo-synthesizer-v5",
    "slug": "pr-agent-repo-synthesizer-v5",
    "name": "Repo-Level Agent (Tier 5)",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 318,
    "popularity": 8681,
    "rating": 96,
    "latencyMs": 245,
    "available": true
  },
  {
    "id": "pr-agent-schema-tooler-v5",
    "slug": "pr-agent-schema-tooler-v5",
    "name": "Strict Schema Invoker (Tier 5)",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 319,
    "popularity": 8680,
    "rating": 96,
    "latencyMs": 218,
    "available": true
  },
  {
    "id": "pr-agent-sandbox-debugger-v5",
    "slug": "pr-agent-sandbox-debugger-v5",
    "name": "Runtime Sandbox Debugger (Tier 5)",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 320,
    "popularity": 8679,
    "rating": 96,
    "latencyMs": 259,
    "available": true
  },
  {
    "id": "pr-agent-agent-swarm-v5",
    "slug": "pr-agent-agent-swarm-v5",
    "name": "Subagent Team Lead (Tier 5)",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 321,
    "popularity": 8678,
    "rating": 96,
    "latencyMs": 211,
    "available": true
  },
  {
    "id": "pr-agent-workflow-runner-v6",
    "slug": "pr-agent-workflow-runner-v6",
    "name": "Autonomous Workflow Orchestrator (Tier 6)",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 322,
    "popularity": 8677,
    "rating": 96,
    "latencyMs": 235,
    "available": true
  },
  {
    "id": "pr-agent-repo-synthesizer-v6",
    "slug": "pr-agent-repo-synthesizer-v6",
    "name": "Repo-Level Agent (Tier 6)",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 323,
    "popularity": 8676,
    "rating": 96,
    "latencyMs": 218,
    "available": true
  },
  {
    "id": "pr-agent-schema-tooler-v6",
    "slug": "pr-agent-schema-tooler-v6",
    "name": "Strict Schema Invoker (Tier 6)",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 324,
    "popularity": 8675,
    "rating": 96,
    "latencyMs": 251,
    "available": true
  },
  {
    "id": "pr-agent-sandbox-debugger-v6",
    "slug": "pr-agent-sandbox-debugger-v6",
    "name": "Runtime Sandbox Debugger (Tier 6)",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 325,
    "popularity": 8674,
    "rating": 96,
    "latencyMs": 243,
    "available": true
  },
  {
    "id": "pr-agent-agent-swarm-v6",
    "slug": "pr-agent-agent-swarm-v6",
    "name": "Subagent Team Lead (Tier 6)",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 326,
    "popularity": 8673,
    "rating": 96,
    "latencyMs": 191,
    "available": true
  },
  {
    "id": "pr-agent-workflow-runner-v7",
    "slug": "pr-agent-workflow-runner-v7",
    "name": "Autonomous Workflow Orchestrator (Tier 7)",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 327,
    "popularity": 8672,
    "rating": 96,
    "latencyMs": 237,
    "available": true
  },
  {
    "id": "pr-agent-repo-synthesizer-v7",
    "slug": "pr-agent-repo-synthesizer-v7",
    "name": "Repo-Level Agent (Tier 7)",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 328,
    "popularity": 8671,
    "rating": 96,
    "latencyMs": 201,
    "available": true
  },
  {
    "id": "pr-agent-schema-tooler-v7",
    "slug": "pr-agent-schema-tooler-v7",
    "name": "Strict Schema Invoker (Tier 7)",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 329,
    "popularity": 8670,
    "rating": 96,
    "latencyMs": 228,
    "available": true
  },
  {
    "id": "pr-agent-sandbox-debugger-v7",
    "slug": "pr-agent-sandbox-debugger-v7",
    "name": "Runtime Sandbox Debugger (Tier 7)",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 330,
    "popularity": 8669,
    "rating": 96,
    "latencyMs": 195,
    "available": true
  },
  {
    "id": "pr-agent-agent-swarm-v7",
    "slug": "pr-agent-agent-swarm-v7",
    "name": "Subagent Team Lead (Tier 7)",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 331,
    "popularity": 8668,
    "rating": 96,
    "latencyMs": 183,
    "available": true
  },
  {
    "id": "pr-agent-workflow-runner-v8",
    "slug": "pr-agent-workflow-runner-v8",
    "name": "Autonomous Workflow Orchestrator (Tier 8)",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 332,
    "popularity": 8667,
    "rating": 96,
    "latencyMs": 194,
    "available": true
  },
  {
    "id": "pr-agent-repo-synthesizer-v8",
    "slug": "pr-agent-repo-synthesizer-v8",
    "name": "Repo-Level Agent (Tier 8)",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 333,
    "popularity": 8666,
    "rating": 96,
    "latencyMs": 217,
    "available": true
  },
  {
    "id": "pr-agent-schema-tooler-v8",
    "slug": "pr-agent-schema-tooler-v8",
    "name": "Strict Schema Invoker (Tier 8)",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 334,
    "popularity": 8665,
    "rating": 96,
    "latencyMs": 254,
    "available": true
  },
  {
    "id": "pr-agent-sandbox-debugger-v8",
    "slug": "pr-agent-sandbox-debugger-v8",
    "name": "Runtime Sandbox Debugger (Tier 8)",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 335,
    "popularity": 8664,
    "rating": 96,
    "latencyMs": 254,
    "available": true
  },
  {
    "id": "pr-agent-agent-swarm-v8",
    "slug": "pr-agent-agent-swarm-v8",
    "name": "Subagent Team Lead (Tier 8)",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 336,
    "popularity": 8663,
    "rating": 96,
    "latencyMs": 242,
    "available": true
  },
  {
    "id": "pr-agent-workflow-runner-v9",
    "slug": "pr-agent-workflow-runner-v9",
    "name": "Autonomous Workflow Orchestrator (Tier 9)",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 337,
    "popularity": 8662,
    "rating": 96,
    "latencyMs": 200,
    "available": true
  },
  {
    "id": "pr-agent-repo-synthesizer-v9",
    "slug": "pr-agent-repo-synthesizer-v9",
    "name": "Repo-Level Agent (Tier 9)",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 338,
    "popularity": 8661,
    "rating": 96,
    "latencyMs": 195,
    "available": true
  },
  {
    "id": "pr-agent-schema-tooler-v9",
    "slug": "pr-agent-schema-tooler-v9",
    "name": "Strict Schema Invoker (Tier 9)",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 339,
    "popularity": 8660,
    "rating": 96,
    "latencyMs": 232,
    "available": true
  },
  {
    "id": "pr-agent-sandbox-debugger-v9",
    "slug": "pr-agent-sandbox-debugger-v9",
    "name": "Runtime Sandbox Debugger (Tier 9)",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 340,
    "popularity": 8659,
    "rating": 96,
    "latencyMs": 197,
    "available": true
  },
  {
    "id": "pr-agent-agent-swarm-v9",
    "slug": "pr-agent-agent-swarm-v9",
    "name": "Subagent Team Lead (Tier 9)",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 341,
    "popularity": 8658,
    "rating": 96,
    "latencyMs": 189,
    "available": true
  },
  {
    "id": "pr-research-literature-review",
    "slug": "pr-research-literature-review",
    "name": "Literature Reviewer",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 342,
    "popularity": 8657,
    "rating": 96,
    "latencyMs": 257,
    "available": true
  },
  {
    "id": "pr-research-competitive-intel",
    "slug": "pr-research-competitive-intel",
    "name": "Market & Competitive Intel",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 343,
    "popularity": 8656,
    "rating": 96,
    "latencyMs": 185,
    "available": true
  },
  {
    "id": "pr-research-data-synthesizer",
    "slug": "pr-research-data-synthesizer",
    "name": "Qualitative Data Synthesizer",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 344,
    "popularity": 8655,
    "rating": 96,
    "latencyMs": 245,
    "available": true
  },
  {
    "id": "pr-research-meta-analyst",
    "slug": "pr-research-meta-analyst",
    "name": "Meta-Analysis Assistant",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 345,
    "popularity": 8654,
    "rating": 96,
    "latencyMs": 199,
    "available": true
  },
  {
    "id": "pr-research-deep-investigator",
    "slug": "pr-research-deep-investigator",
    "name": "Deep Research Specialist",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 346,
    "popularity": 8653,
    "rating": 96,
    "latencyMs": 214,
    "available": true
  },
  {
    "id": "pr-research-literature-review-v2",
    "slug": "pr-research-literature-review-v2",
    "name": "Literature Reviewer (Tier 2)",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 347,
    "popularity": 8652,
    "rating": 96,
    "latencyMs": 182,
    "available": true
  },
  {
    "id": "pr-research-competitive-intel-v2",
    "slug": "pr-research-competitive-intel-v2",
    "name": "Market & Competitive Intel (Tier 2)",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 348,
    "popularity": 8651,
    "rating": 96,
    "latencyMs": 208,
    "available": true
  },
  {
    "id": "pr-research-data-synthesizer-v2",
    "slug": "pr-research-data-synthesizer-v2",
    "name": "Qualitative Data Synthesizer (Tier 2)",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 349,
    "popularity": 8650,
    "rating": 96,
    "latencyMs": 191,
    "available": true
  },
  {
    "id": "pr-research-meta-analyst-v2",
    "slug": "pr-research-meta-analyst-v2",
    "name": "Meta-Analysis Assistant (Tier 2)",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 350,
    "popularity": 8649,
    "rating": 96,
    "latencyMs": 242,
    "available": true
  },
  {
    "id": "pr-research-deep-investigator-v2",
    "slug": "pr-research-deep-investigator-v2",
    "name": "Deep Research Specialist (Tier 2)",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 351,
    "popularity": 8648,
    "rating": 96,
    "latencyMs": 198,
    "available": true
  },
  {
    "id": "pr-research-literature-review-v3",
    "slug": "pr-research-literature-review-v3",
    "name": "Literature Reviewer (Tier 3)",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 352,
    "popularity": 8647,
    "rating": 96,
    "latencyMs": 205,
    "available": true
  },
  {
    "id": "pr-research-competitive-intel-v3",
    "slug": "pr-research-competitive-intel-v3",
    "name": "Market & Competitive Intel (Tier 3)",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 353,
    "popularity": 8646,
    "rating": 96,
    "latencyMs": 187,
    "available": true
  },
  {
    "id": "pr-research-data-synthesizer-v3",
    "slug": "pr-research-data-synthesizer-v3",
    "name": "Qualitative Data Synthesizer (Tier 3)",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 354,
    "popularity": 8645,
    "rating": 96,
    "latencyMs": 248,
    "available": true
  },
  {
    "id": "pr-research-meta-analyst-v3",
    "slug": "pr-research-meta-analyst-v3",
    "name": "Meta-Analysis Assistant (Tier 3)",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 355,
    "popularity": 8644,
    "rating": 96,
    "latencyMs": 198,
    "available": true
  },
  {
    "id": "pr-research-deep-investigator-v3",
    "slug": "pr-research-deep-investigator-v3",
    "name": "Deep Research Specialist (Tier 3)",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 356,
    "popularity": 8643,
    "rating": 96,
    "latencyMs": 186,
    "available": true
  },
  {
    "id": "pr-research-literature-review-v4",
    "slug": "pr-research-literature-review-v4",
    "name": "Literature Reviewer (Tier 4)",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 357,
    "popularity": 8642,
    "rating": 96,
    "latencyMs": 218,
    "available": true
  },
  {
    "id": "pr-research-competitive-intel-v4",
    "slug": "pr-research-competitive-intel-v4",
    "name": "Market & Competitive Intel (Tier 4)",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 358,
    "popularity": 8641,
    "rating": 96,
    "latencyMs": 199,
    "available": true
  },
  {
    "id": "pr-research-data-synthesizer-v4",
    "slug": "pr-research-data-synthesizer-v4",
    "name": "Qualitative Data Synthesizer (Tier 4)",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 359,
    "popularity": 8640,
    "rating": 96,
    "latencyMs": 248,
    "available": true
  },
  {
    "id": "pr-research-meta-analyst-v4",
    "slug": "pr-research-meta-analyst-v4",
    "name": "Meta-Analysis Assistant (Tier 4)",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 360,
    "popularity": 8639,
    "rating": 96,
    "latencyMs": 226,
    "available": true
  },
  {
    "id": "pr-research-deep-investigator-v4",
    "slug": "pr-research-deep-investigator-v4",
    "name": "Deep Research Specialist (Tier 4)",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 361,
    "popularity": 8638,
    "rating": 96,
    "latencyMs": 239,
    "available": true
  },
  {
    "id": "pr-research-literature-review-v5",
    "slug": "pr-research-literature-review-v5",
    "name": "Literature Reviewer (Tier 5)",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 362,
    "popularity": 8637,
    "rating": 96,
    "latencyMs": 244,
    "available": true
  },
  {
    "id": "pr-research-competitive-intel-v5",
    "slug": "pr-research-competitive-intel-v5",
    "name": "Market & Competitive Intel (Tier 5)",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 363,
    "popularity": 8636,
    "rating": 96,
    "latencyMs": 225,
    "available": true
  },
  {
    "id": "pr-research-data-synthesizer-v5",
    "slug": "pr-research-data-synthesizer-v5",
    "name": "Qualitative Data Synthesizer (Tier 5)",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 364,
    "popularity": 8635,
    "rating": 96,
    "latencyMs": 220,
    "available": true
  },
  {
    "id": "pr-research-meta-analyst-v5",
    "slug": "pr-research-meta-analyst-v5",
    "name": "Meta-Analysis Assistant (Tier 5)",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 365,
    "popularity": 8634,
    "rating": 96,
    "latencyMs": 213,
    "available": true
  },
  {
    "id": "pr-research-deep-investigator-v5",
    "slug": "pr-research-deep-investigator-v5",
    "name": "Deep Research Specialist (Tier 5)",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 366,
    "popularity": 8633,
    "rating": 96,
    "latencyMs": 252,
    "available": true
  },
  {
    "id": "pr-research-literature-review-v6",
    "slug": "pr-research-literature-review-v6",
    "name": "Literature Reviewer (Tier 6)",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 367,
    "popularity": 8632,
    "rating": 96,
    "latencyMs": 211,
    "available": true
  },
  {
    "id": "pr-research-competitive-intel-v6",
    "slug": "pr-research-competitive-intel-v6",
    "name": "Market & Competitive Intel (Tier 6)",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 368,
    "popularity": 8631,
    "rating": 96,
    "latencyMs": 257,
    "available": true
  },
  {
    "id": "pr-research-data-synthesizer-v6",
    "slug": "pr-research-data-synthesizer-v6",
    "name": "Qualitative Data Synthesizer (Tier 6)",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 369,
    "popularity": 8630,
    "rating": 96,
    "latencyMs": 199,
    "available": true
  },
  {
    "id": "pr-research-meta-analyst-v6",
    "slug": "pr-research-meta-analyst-v6",
    "name": "Meta-Analysis Assistant (Tier 6)",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 370,
    "popularity": 8629,
    "rating": 96,
    "latencyMs": 188,
    "available": true
  },
  {
    "id": "pr-research-deep-investigator-v6",
    "slug": "pr-research-deep-investigator-v6",
    "name": "Deep Research Specialist (Tier 6)",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 371,
    "popularity": 8628,
    "rating": 96,
    "latencyMs": 187,
    "available": true
  },
  {
    "id": "pr-research-literature-review-v7",
    "slug": "pr-research-literature-review-v7",
    "name": "Literature Reviewer (Tier 7)",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 372,
    "popularity": 8627,
    "rating": 96,
    "latencyMs": 254,
    "available": true
  },
  {
    "id": "pr-research-competitive-intel-v7",
    "slug": "pr-research-competitive-intel-v7",
    "name": "Market & Competitive Intel (Tier 7)",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 373,
    "popularity": 8626,
    "rating": 96,
    "latencyMs": 250,
    "available": true
  },
  {
    "id": "pr-research-data-synthesizer-v7",
    "slug": "pr-research-data-synthesizer-v7",
    "name": "Qualitative Data Synthesizer (Tier 7)",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 374,
    "popularity": 8625,
    "rating": 96,
    "latencyMs": 227,
    "available": true
  },
  {
    "id": "pr-research-meta-analyst-v7",
    "slug": "pr-research-meta-analyst-v7",
    "name": "Meta-Analysis Assistant (Tier 7)",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 375,
    "popularity": 8624,
    "rating": 96,
    "latencyMs": 231,
    "available": true
  },
  {
    "id": "pr-research-deep-investigator-v7",
    "slug": "pr-research-deep-investigator-v7",
    "name": "Deep Research Specialist (Tier 7)",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 376,
    "popularity": 8623,
    "rating": 96,
    "latencyMs": 225,
    "available": true
  },
  {
    "id": "pr-research-literature-review-v8",
    "slug": "pr-research-literature-review-v8",
    "name": "Literature Reviewer (Tier 8)",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 377,
    "popularity": 8622,
    "rating": 96,
    "latencyMs": 195,
    "available": true
  },
  {
    "id": "pr-research-competitive-intel-v8",
    "slug": "pr-research-competitive-intel-v8",
    "name": "Market & Competitive Intel (Tier 8)",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 378,
    "popularity": 8621,
    "rating": 96,
    "latencyMs": 227,
    "available": true
  },
  {
    "id": "pr-research-data-synthesizer-v8",
    "slug": "pr-research-data-synthesizer-v8",
    "name": "Qualitative Data Synthesizer (Tier 8)",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 379,
    "popularity": 8620,
    "rating": 96,
    "latencyMs": 250,
    "available": true
  },
  {
    "id": "pr-research-meta-analyst-v8",
    "slug": "pr-research-meta-analyst-v8",
    "name": "Meta-Analysis Assistant (Tier 8)",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 380,
    "popularity": 8619,
    "rating": 96,
    "latencyMs": 210,
    "available": true
  },
  {
    "id": "pr-research-deep-investigator-v8",
    "slug": "pr-research-deep-investigator-v8",
    "name": "Deep Research Specialist (Tier 8)",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 381,
    "popularity": 8618,
    "rating": 96,
    "latencyMs": 255,
    "available": true
  },
  {
    "id": "pr-research-literature-review-v9",
    "slug": "pr-research-literature-review-v9",
    "name": "Literature Reviewer (Tier 9)",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 382,
    "popularity": 8617,
    "rating": 96,
    "latencyMs": 193,
    "available": true
  },
  {
    "id": "pr-research-competitive-intel-v9",
    "slug": "pr-research-competitive-intel-v9",
    "name": "Market & Competitive Intel (Tier 9)",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 383,
    "popularity": 8616,
    "rating": 96,
    "latencyMs": 184,
    "available": true
  },
  {
    "id": "pr-research-data-synthesizer-v9",
    "slug": "pr-research-data-synthesizer-v9",
    "name": "Qualitative Data Synthesizer (Tier 9)",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 384,
    "popularity": 8615,
    "rating": 96,
    "latencyMs": 187,
    "available": true
  },
  {
    "id": "pr-research-meta-analyst-v9",
    "slug": "pr-research-meta-analyst-v9",
    "name": "Meta-Analysis Assistant (Tier 9)",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 385,
    "popularity": 8614,
    "rating": 96,
    "latencyMs": 193,
    "available": true
  },
  {
    "id": "pr-math-discrete-proofs",
    "slug": "pr-math-discrete-proofs",
    "name": "Discrete Math & Proof Assistant",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 386,
    "popularity": 8613,
    "rating": 96,
    "latencyMs": 189,
    "available": true
  },
  {
    "id": "pr-math-calculus-analysis",
    "slug": "pr-math-calculus-analysis",
    "name": "Continuous Calculus & ODEs",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 387,
    "popularity": 8612,
    "rating": 96,
    "latencyMs": 246,
    "available": true
  },
  {
    "id": "pr-math-linear-algebra",
    "slug": "pr-math-linear-algebra",
    "name": "Linear Algebra & Tensor Math",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 388,
    "popularity": 8611,
    "rating": 96,
    "latencyMs": 253,
    "available": true
  },
  {
    "id": "pr-math-physics-simulator",
    "slug": "pr-math-physics-simulator",
    "name": "Classical & Quantum Physics",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 389,
    "popularity": 8610,
    "rating": 96,
    "latencyMs": 205,
    "available": true
  },
  {
    "id": "pr-math-bio-cheminfo",
    "slug": "pr-math-bio-cheminfo",
    "name": "Biochemistry & Molecular Modeling",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 390,
    "popularity": 8609,
    "rating": 96,
    "latencyMs": 258,
    "available": true
  },
  {
    "id": "pr-math-discrete-proofs-v2",
    "slug": "pr-math-discrete-proofs-v2",
    "name": "Discrete Math & Proof Assistant (Tier 2)",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 391,
    "popularity": 8608,
    "rating": 96,
    "latencyMs": 194,
    "available": true
  },
  {
    "id": "pr-math-calculus-analysis-v2",
    "slug": "pr-math-calculus-analysis-v2",
    "name": "Continuous Calculus & ODEs (Tier 2)",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 392,
    "popularity": 8607,
    "rating": 96,
    "latencyMs": 201,
    "available": true
  },
  {
    "id": "pr-math-linear-algebra-v2",
    "slug": "pr-math-linear-algebra-v2",
    "name": "Linear Algebra & Tensor Math (Tier 2)",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 393,
    "popularity": 8606,
    "rating": 96,
    "latencyMs": 257,
    "available": true
  },
  {
    "id": "pr-math-physics-simulator-v2",
    "slug": "pr-math-physics-simulator-v2",
    "name": "Classical & Quantum Physics (Tier 2)",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 394,
    "popularity": 8605,
    "rating": 96,
    "latencyMs": 224,
    "available": true
  },
  {
    "id": "pr-math-bio-cheminfo-v2",
    "slug": "pr-math-bio-cheminfo-v2",
    "name": "Biochemistry & Molecular Modeling (Tier 2)",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 395,
    "popularity": 8604,
    "rating": 96,
    "latencyMs": 247,
    "available": true
  },
  {
    "id": "pr-math-discrete-proofs-v3",
    "slug": "pr-math-discrete-proofs-v3",
    "name": "Discrete Math & Proof Assistant (Tier 3)",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 396,
    "popularity": 8603,
    "rating": 96,
    "latencyMs": 190,
    "available": true
  },
  {
    "id": "pr-math-calculus-analysis-v3",
    "slug": "pr-math-calculus-analysis-v3",
    "name": "Continuous Calculus & ODEs (Tier 3)",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 397,
    "popularity": 8602,
    "rating": 96,
    "latencyMs": 184,
    "available": true
  },
  {
    "id": "pr-math-linear-algebra-v3",
    "slug": "pr-math-linear-algebra-v3",
    "name": "Linear Algebra & Tensor Math (Tier 3)",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 398,
    "popularity": 8601,
    "rating": 96,
    "latencyMs": 232,
    "available": true
  },
  {
    "id": "pr-math-physics-simulator-v3",
    "slug": "pr-math-physics-simulator-v3",
    "name": "Classical & Quantum Physics (Tier 3)",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 399,
    "popularity": 8600,
    "rating": 96,
    "latencyMs": 212,
    "available": true
  },
  {
    "id": "pr-math-bio-cheminfo-v3",
    "slug": "pr-math-bio-cheminfo-v3",
    "name": "Biochemistry & Molecular Modeling (Tier 3)",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 400,
    "popularity": 8599,
    "rating": 96,
    "latencyMs": 206,
    "available": true
  },
  {
    "id": "pr-math-discrete-proofs-v4",
    "slug": "pr-math-discrete-proofs-v4",
    "name": "Discrete Math & Proof Assistant (Tier 4)",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 401,
    "popularity": 8598,
    "rating": 96,
    "latencyMs": 248,
    "available": true
  },
  {
    "id": "pr-math-calculus-analysis-v4",
    "slug": "pr-math-calculus-analysis-v4",
    "name": "Continuous Calculus & ODEs (Tier 4)",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 402,
    "popularity": 8597,
    "rating": 96,
    "latencyMs": 208,
    "available": true
  },
  {
    "id": "pr-math-linear-algebra-v4",
    "slug": "pr-math-linear-algebra-v4",
    "name": "Linear Algebra & Tensor Math (Tier 4)",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 403,
    "popularity": 8596,
    "rating": 96,
    "latencyMs": 205,
    "available": true
  },
  {
    "id": "pr-math-physics-simulator-v4",
    "slug": "pr-math-physics-simulator-v4",
    "name": "Classical & Quantum Physics (Tier 4)",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 404,
    "popularity": 8595,
    "rating": 96,
    "latencyMs": 249,
    "available": true
  },
  {
    "id": "pr-math-bio-cheminfo-v4",
    "slug": "pr-math-bio-cheminfo-v4",
    "name": "Biochemistry & Molecular Modeling (Tier 4)",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 405,
    "popularity": 8594,
    "rating": 96,
    "latencyMs": 246,
    "available": true
  },
  {
    "id": "pr-math-discrete-proofs-v5",
    "slug": "pr-math-discrete-proofs-v5",
    "name": "Discrete Math & Proof Assistant (Tier 5)",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 406,
    "popularity": 8593,
    "rating": 96,
    "latencyMs": 256,
    "available": true
  },
  {
    "id": "pr-math-calculus-analysis-v5",
    "slug": "pr-math-calculus-analysis-v5",
    "name": "Continuous Calculus & ODEs (Tier 5)",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 407,
    "popularity": 8592,
    "rating": 96,
    "latencyMs": 229,
    "available": true
  },
  {
    "id": "pr-math-linear-algebra-v5",
    "slug": "pr-math-linear-algebra-v5",
    "name": "Linear Algebra & Tensor Math (Tier 5)",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 408,
    "popularity": 8591,
    "rating": 96,
    "latencyMs": 203,
    "available": true
  },
  {
    "id": "pr-math-physics-simulator-v5",
    "slug": "pr-math-physics-simulator-v5",
    "name": "Classical & Quantum Physics (Tier 5)",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 409,
    "popularity": 8590,
    "rating": 96,
    "latencyMs": 225,
    "available": true
  },
  {
    "id": "pr-math-bio-cheminfo-v5",
    "slug": "pr-math-bio-cheminfo-v5",
    "name": "Biochemistry & Molecular Modeling (Tier 5)",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 410,
    "popularity": 8589,
    "rating": 96,
    "latencyMs": 216,
    "available": true
  },
  {
    "id": "pr-math-discrete-proofs-v6",
    "slug": "pr-math-discrete-proofs-v6",
    "name": "Discrete Math & Proof Assistant (Tier 6)",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 411,
    "popularity": 8588,
    "rating": 96,
    "latencyMs": 222,
    "available": true
  },
  {
    "id": "pr-math-calculus-analysis-v6",
    "slug": "pr-math-calculus-analysis-v6",
    "name": "Continuous Calculus & ODEs (Tier 6)",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 412,
    "popularity": 8587,
    "rating": 96,
    "latencyMs": 239,
    "available": true
  },
  {
    "id": "pr-math-linear-algebra-v6",
    "slug": "pr-math-linear-algebra-v6",
    "name": "Linear Algebra & Tensor Math (Tier 6)",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 413,
    "popularity": 8586,
    "rating": 96,
    "latencyMs": 259,
    "available": true
  },
  {
    "id": "pr-math-physics-simulator-v6",
    "slug": "pr-math-physics-simulator-v6",
    "name": "Classical & Quantum Physics (Tier 6)",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 414,
    "popularity": 8585,
    "rating": 96,
    "latencyMs": 258,
    "available": true
  },
  {
    "id": "pr-math-bio-cheminfo-v6",
    "slug": "pr-math-bio-cheminfo-v6",
    "name": "Biochemistry & Molecular Modeling (Tier 6)",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 415,
    "popularity": 8584,
    "rating": 96,
    "latencyMs": 189,
    "available": true
  },
  {
    "id": "pr-lang-tamil-dravidian",
    "slug": "pr-lang-tamil-dravidian",
    "name": "Tamil & Dravidian Scholar",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 416,
    "popularity": 8583,
    "rating": 96,
    "latencyMs": 221,
    "available": true
  },
  {
    "id": "pr-lang-indic-translingual",
    "slug": "pr-lang-indic-translingual",
    "name": "Indic Polyglot",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 417,
    "popularity": 8582,
    "rating": 96,
    "latencyMs": 243,
    "available": true
  },
  {
    "id": "pr-lang-euro-multilingual",
    "slug": "pr-lang-euro-multilingual",
    "name": "European Romance & Germanic",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 418,
    "popularity": 8581,
    "rating": 96,
    "latencyMs": 200,
    "available": true
  },
  {
    "id": "pr-lang-cjk-specialist",
    "slug": "pr-lang-cjk-specialist",
    "name": "East Asian CJK Specialist",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 419,
    "popularity": 8580,
    "rating": 96,
    "latencyMs": 240,
    "available": true
  },
  {
    "id": "pr-lang-arabic-mena",
    "slug": "pr-lang-arabic-mena",
    "name": "Arabic & MENA Dialectics",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 420,
    "popularity": 8579,
    "rating": 96,
    "latencyMs": 247,
    "available": true
  },
  {
    "id": "pr-lang-tamil-dravidian-v2",
    "slug": "pr-lang-tamil-dravidian-v2",
    "name": "Tamil & Dravidian Scholar (Tier 2)",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 421,
    "popularity": 8578,
    "rating": 96,
    "latencyMs": 235,
    "available": true
  },
  {
    "id": "pr-lang-indic-translingual-v2",
    "slug": "pr-lang-indic-translingual-v2",
    "name": "Indic Polyglot (Tier 2)",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 422,
    "popularity": 8577,
    "rating": 96,
    "latencyMs": 249,
    "available": true
  },
  {
    "id": "pr-lang-euro-multilingual-v2",
    "slug": "pr-lang-euro-multilingual-v2",
    "name": "European Romance & Germanic (Tier 2)",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 423,
    "popularity": 8576,
    "rating": 96,
    "latencyMs": 247,
    "available": true
  },
  {
    "id": "pr-lang-cjk-specialist-v2",
    "slug": "pr-lang-cjk-specialist-v2",
    "name": "East Asian CJK Specialist (Tier 2)",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 424,
    "popularity": 8575,
    "rating": 96,
    "latencyMs": 212,
    "available": true
  },
  {
    "id": "pr-lang-arabic-mena-v2",
    "slug": "pr-lang-arabic-mena-v2",
    "name": "Arabic & MENA Dialectics (Tier 2)",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 425,
    "popularity": 8574,
    "rating": 96,
    "latencyMs": 227,
    "available": true
  },
  {
    "id": "pr-lang-tamil-dravidian-v3",
    "slug": "pr-lang-tamil-dravidian-v3",
    "name": "Tamil & Dravidian Scholar (Tier 3)",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 426,
    "popularity": 8573,
    "rating": 96,
    "latencyMs": 227,
    "available": true
  },
  {
    "id": "pr-lang-indic-translingual-v3",
    "slug": "pr-lang-indic-translingual-v3",
    "name": "Indic Polyglot (Tier 3)",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 427,
    "popularity": 8572,
    "rating": 96,
    "latencyMs": 255,
    "available": true
  },
  {
    "id": "pr-lang-euro-multilingual-v3",
    "slug": "pr-lang-euro-multilingual-v3",
    "name": "European Romance & Germanic (Tier 3)",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 428,
    "popularity": 8571,
    "rating": 96,
    "latencyMs": 198,
    "available": true
  },
  {
    "id": "pr-lang-cjk-specialist-v3",
    "slug": "pr-lang-cjk-specialist-v3",
    "name": "East Asian CJK Specialist (Tier 3)",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 429,
    "popularity": 8570,
    "rating": 96,
    "latencyMs": 247,
    "available": true
  },
  {
    "id": "pr-lang-arabic-mena-v3",
    "slug": "pr-lang-arabic-mena-v3",
    "name": "Arabic & MENA Dialectics (Tier 3)",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 430,
    "popularity": 8569,
    "rating": 96,
    "latencyMs": 241,
    "available": true
  },
  {
    "id": "pr-lang-tamil-dravidian-v4",
    "slug": "pr-lang-tamil-dravidian-v4",
    "name": "Tamil & Dravidian Scholar (Tier 4)",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 431,
    "popularity": 8568,
    "rating": 96,
    "latencyMs": 248,
    "available": true
  },
  {
    "id": "pr-lang-indic-translingual-v4",
    "slug": "pr-lang-indic-translingual-v4",
    "name": "Indic Polyglot (Tier 4)",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 432,
    "popularity": 8567,
    "rating": 96,
    "latencyMs": 186,
    "available": true
  },
  {
    "id": "pr-lang-euro-multilingual-v4",
    "slug": "pr-lang-euro-multilingual-v4",
    "name": "European Romance & Germanic (Tier 4)",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 433,
    "popularity": 8566,
    "rating": 96,
    "latencyMs": 184,
    "available": true
  },
  {
    "id": "pr-lang-cjk-specialist-v4",
    "slug": "pr-lang-cjk-specialist-v4",
    "name": "East Asian CJK Specialist (Tier 4)",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 434,
    "popularity": 8565,
    "rating": 96,
    "latencyMs": 186,
    "available": true
  },
  {
    "id": "pr-lang-arabic-mena-v4",
    "slug": "pr-lang-arabic-mena-v4",
    "name": "Arabic & MENA Dialectics (Tier 4)",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 435,
    "popularity": 8564,
    "rating": 96,
    "latencyMs": 204,
    "available": true
  },
  {
    "id": "pr-lang-tamil-dravidian-v5",
    "slug": "pr-lang-tamil-dravidian-v5",
    "name": "Tamil & Dravidian Scholar (Tier 5)",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 436,
    "popularity": 8563,
    "rating": 96,
    "latencyMs": 227,
    "available": true
  },
  {
    "id": "pr-lang-indic-translingual-v5",
    "slug": "pr-lang-indic-translingual-v5",
    "name": "Indic Polyglot (Tier 5)",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 437,
    "popularity": 8562,
    "rating": 96,
    "latencyMs": 187,
    "available": true
  },
  {
    "id": "pr-lang-euro-multilingual-v5",
    "slug": "pr-lang-euro-multilingual-v5",
    "name": "European Romance & Germanic (Tier 5)",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 438,
    "popularity": 8561,
    "rating": 96,
    "latencyMs": 245,
    "available": true
  },
  {
    "id": "pr-lang-cjk-specialist-v5",
    "slug": "pr-lang-cjk-specialist-v5",
    "name": "East Asian CJK Specialist (Tier 5)",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 439,
    "popularity": 8560,
    "rating": 96,
    "latencyMs": 252,
    "available": true
  },
  {
    "id": "pr-lang-arabic-mena-v5",
    "slug": "pr-lang-arabic-mena-v5",
    "name": "Arabic & MENA Dialectics (Tier 5)",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 440,
    "popularity": 8559,
    "rating": 96,
    "latencyMs": 191,
    "available": true
  },
  {
    "id": "pr-lang-tamil-dravidian-v6",
    "slug": "pr-lang-tamil-dravidian-v6",
    "name": "Tamil & Dravidian Scholar (Tier 6)",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 441,
    "popularity": 8558,
    "rating": 96,
    "latencyMs": 189,
    "available": true
  },
  {
    "id": "pr-lang-indic-translingual-v6",
    "slug": "pr-lang-indic-translingual-v6",
    "name": "Indic Polyglot (Tier 6)",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 442,
    "popularity": 8557,
    "rating": 96,
    "latencyMs": 218,
    "available": true
  },
  {
    "id": "pr-lang-euro-multilingual-v6",
    "slug": "pr-lang-euro-multilingual-v6",
    "name": "European Romance & Germanic (Tier 6)",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 443,
    "popularity": 8556,
    "rating": 96,
    "latencyMs": 214,
    "available": true
  },
  {
    "id": "pr-lang-cjk-specialist-v6",
    "slug": "pr-lang-cjk-specialist-v6",
    "name": "East Asian CJK Specialist (Tier 6)",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 444,
    "popularity": 8555,
    "rating": 96,
    "latencyMs": 223,
    "available": true
  },
  {
    "id": "pr-lang-arabic-mena-v6",
    "slug": "pr-lang-arabic-mena-v6",
    "name": "Arabic & MENA Dialectics (Tier 6)",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 445,
    "popularity": 8554,
    "rating": 96,
    "latencyMs": 215,
    "available": true
  },
  {
    "id": "pr-lang-tamil-dravidian-v7",
    "slug": "pr-lang-tamil-dravidian-v7",
    "name": "Tamil & Dravidian Scholar (Tier 7)",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 446,
    "popularity": 8553,
    "rating": 96,
    "latencyMs": 194,
    "available": true
  },
  {
    "id": "pr-lang-indic-translingual-v7",
    "slug": "pr-lang-indic-translingual-v7",
    "name": "Indic Polyglot (Tier 7)",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 447,
    "popularity": 8552,
    "rating": 96,
    "latencyMs": 199,
    "available": true
  },
  {
    "id": "pr-lang-euro-multilingual-v7",
    "slug": "pr-lang-euro-multilingual-v7",
    "name": "European Romance & Germanic (Tier 7)",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 448,
    "popularity": 8551,
    "rating": 96,
    "latencyMs": 227,
    "available": true
  },
  {
    "id": "pr-vision-ocr-doc-scanner",
    "slug": "pr-vision-ocr-doc-scanner",
    "name": "OCR Document Intelligence",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 449,
    "popularity": 8550,
    "rating": 96,
    "latencyMs": 246,
    "available": true
  },
  {
    "id": "pr-vision-chart-diagram",
    "slug": "pr-vision-chart-diagram",
    "name": "Chart & Architecture Visualizer",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 450,
    "popularity": 8549,
    "rating": 96,
    "latencyMs": 186,
    "available": true
  },
  {
    "id": "pr-vision-ui-ux-auditor",
    "slug": "pr-vision-ui-ux-auditor",
    "name": "UI/UX Screen Inspector",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 451,
    "popularity": 8548,
    "rating": 96,
    "latencyMs": 217,
    "available": true
  },
  {
    "id": "pr-vision-infographic-parser",
    "slug": "pr-vision-infographic-parser",
    "name": "Infographic Insight Extractor",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 452,
    "popularity": 8547,
    "rating": 96,
    "latencyMs": 200,
    "available": true
  },
  {
    "id": "pr-vision-scene-descriptor",
    "slug": "pr-vision-scene-descriptor",
    "name": "Spatial & Scene Comprehender",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 453,
    "popularity": 8546,
    "rating": 96,
    "latencyMs": 253,
    "available": true
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v2",
    "slug": "pr-vision-ocr-doc-scanner-v2",
    "name": "OCR Document Intelligence (Tier 2)",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 454,
    "popularity": 8545,
    "rating": 96,
    "latencyMs": 205,
    "available": true
  },
  {
    "id": "pr-vision-chart-diagram-v2",
    "slug": "pr-vision-chart-diagram-v2",
    "name": "Chart & Architecture Visualizer (Tier 2)",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 455,
    "popularity": 8544,
    "rating": 96,
    "latencyMs": 192,
    "available": true
  },
  {
    "id": "pr-vision-ui-ux-auditor-v2",
    "slug": "pr-vision-ui-ux-auditor-v2",
    "name": "UI/UX Screen Inspector (Tier 2)",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 456,
    "popularity": 8543,
    "rating": 96,
    "latencyMs": 237,
    "available": true
  },
  {
    "id": "pr-vision-infographic-parser-v2",
    "slug": "pr-vision-infographic-parser-v2",
    "name": "Infographic Insight Extractor (Tier 2)",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 457,
    "popularity": 8542,
    "rating": 96,
    "latencyMs": 244,
    "available": true
  },
  {
    "id": "pr-vision-scene-descriptor-v2",
    "slug": "pr-vision-scene-descriptor-v2",
    "name": "Spatial & Scene Comprehender (Tier 2)",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 458,
    "popularity": 8541,
    "rating": 96,
    "latencyMs": 241,
    "available": true
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v3",
    "slug": "pr-vision-ocr-doc-scanner-v3",
    "name": "OCR Document Intelligence (Tier 3)",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 459,
    "popularity": 8540,
    "rating": 96,
    "latencyMs": 244,
    "available": true
  },
  {
    "id": "pr-vision-chart-diagram-v3",
    "slug": "pr-vision-chart-diagram-v3",
    "name": "Chart & Architecture Visualizer (Tier 3)",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 460,
    "popularity": 8539,
    "rating": 96,
    "latencyMs": 209,
    "available": true
  },
  {
    "id": "pr-vision-ui-ux-auditor-v3",
    "slug": "pr-vision-ui-ux-auditor-v3",
    "name": "UI/UX Screen Inspector (Tier 3)",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 461,
    "popularity": 8538,
    "rating": 96,
    "latencyMs": 239,
    "available": true
  },
  {
    "id": "pr-vision-infographic-parser-v3",
    "slug": "pr-vision-infographic-parser-v3",
    "name": "Infographic Insight Extractor (Tier 3)",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 462,
    "popularity": 8537,
    "rating": 96,
    "latencyMs": 205,
    "available": true
  },
  {
    "id": "pr-vision-scene-descriptor-v3",
    "slug": "pr-vision-scene-descriptor-v3",
    "name": "Spatial & Scene Comprehender (Tier 3)",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 463,
    "popularity": 8536,
    "rating": 96,
    "latencyMs": 212,
    "available": true
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v4",
    "slug": "pr-vision-ocr-doc-scanner-v4",
    "name": "OCR Document Intelligence (Tier 4)",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 464,
    "popularity": 8535,
    "rating": 96,
    "latencyMs": 207,
    "available": true
  },
  {
    "id": "pr-vision-chart-diagram-v4",
    "slug": "pr-vision-chart-diagram-v4",
    "name": "Chart & Architecture Visualizer (Tier 4)",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 465,
    "popularity": 8534,
    "rating": 96,
    "latencyMs": 187,
    "available": true
  },
  {
    "id": "pr-vision-ui-ux-auditor-v4",
    "slug": "pr-vision-ui-ux-auditor-v4",
    "name": "UI/UX Screen Inspector (Tier 4)",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 466,
    "popularity": 8533,
    "rating": 96,
    "latencyMs": 248,
    "available": true
  },
  {
    "id": "pr-vision-infographic-parser-v4",
    "slug": "pr-vision-infographic-parser-v4",
    "name": "Infographic Insight Extractor (Tier 4)",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 467,
    "popularity": 8532,
    "rating": 96,
    "latencyMs": 188,
    "available": true
  },
  {
    "id": "pr-vision-scene-descriptor-v4",
    "slug": "pr-vision-scene-descriptor-v4",
    "name": "Spatial & Scene Comprehender (Tier 4)",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 468,
    "popularity": 8531,
    "rating": 96,
    "latencyMs": 255,
    "available": true
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v5",
    "slug": "pr-vision-ocr-doc-scanner-v5",
    "name": "OCR Document Intelligence (Tier 5)",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 469,
    "popularity": 8530,
    "rating": 96,
    "latencyMs": 249,
    "available": true
  },
  {
    "id": "pr-vision-chart-diagram-v5",
    "slug": "pr-vision-chart-diagram-v5",
    "name": "Chart & Architecture Visualizer (Tier 5)",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 470,
    "popularity": 8529,
    "rating": 96,
    "latencyMs": 203,
    "available": true
  },
  {
    "id": "pr-vision-ui-ux-auditor-v5",
    "slug": "pr-vision-ui-ux-auditor-v5",
    "name": "UI/UX Screen Inspector (Tier 5)",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 471,
    "popularity": 8528,
    "rating": 96,
    "latencyMs": 212,
    "available": true
  },
  {
    "id": "pr-vision-infographic-parser-v5",
    "slug": "pr-vision-infographic-parser-v5",
    "name": "Infographic Insight Extractor (Tier 5)",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 472,
    "popularity": 8527,
    "rating": 96,
    "latencyMs": 257,
    "available": true
  },
  {
    "id": "pr-vision-scene-descriptor-v5",
    "slug": "pr-vision-scene-descriptor-v5",
    "name": "Spatial & Scene Comprehender (Tier 5)",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 473,
    "popularity": 8526,
    "rating": 96,
    "latencyMs": 223,
    "available": true
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v6",
    "slug": "pr-vision-ocr-doc-scanner-v6",
    "name": "OCR Document Intelligence (Tier 6)",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 474,
    "popularity": 8525,
    "rating": 96,
    "latencyMs": 259,
    "available": true
  },
  {
    "id": "pr-vision-chart-diagram-v6",
    "slug": "pr-vision-chart-diagram-v6",
    "name": "Chart & Architecture Visualizer (Tier 6)",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 475,
    "popularity": 8524,
    "rating": 96,
    "latencyMs": 221,
    "available": true
  },
  {
    "id": "pr-vision-ui-ux-auditor-v6",
    "slug": "pr-vision-ui-ux-auditor-v6",
    "name": "UI/UX Screen Inspector (Tier 6)",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 476,
    "popularity": 8523,
    "rating": 96,
    "latencyMs": 184,
    "available": true
  },
  {
    "id": "pr-vision-infographic-parser-v6",
    "slug": "pr-vision-infographic-parser-v6",
    "name": "Infographic Insight Extractor (Tier 6)",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 477,
    "popularity": 8522,
    "rating": 96,
    "latencyMs": 180,
    "available": true
  },
  {
    "id": "pr-vision-scene-descriptor-v6",
    "slug": "pr-vision-scene-descriptor-v6",
    "name": "Spatial & Scene Comprehender (Tier 6)",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 478,
    "popularity": 8521,
    "rating": 96,
    "latencyMs": 180,
    "available": true
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v7",
    "slug": "pr-vision-ocr-doc-scanner-v7",
    "name": "OCR Document Intelligence (Tier 7)",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 479,
    "popularity": 8520,
    "rating": 96,
    "latencyMs": 196,
    "available": true
  },
  {
    "id": "pr-vision-chart-diagram-v7",
    "slug": "pr-vision-chart-diagram-v7",
    "name": "Chart & Architecture Visualizer (Tier 7)",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 480,
    "popularity": 8519,
    "rating": 96,
    "latencyMs": 248,
    "available": true
  },
  {
    "id": "pr-vision-ui-ux-auditor-v7",
    "slug": "pr-vision-ui-ux-auditor-v7",
    "name": "UI/UX Screen Inspector (Tier 7)",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "providerName": "OpenRouter",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text",
        "image"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": true,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 32768,
    "rank": 481,
    "popularity": 8518,
    "rating": 96,
    "latencyMs": 241,
    "available": true
  },
  {
    "id": "pr-fast-instant-reply",
    "slug": "pr-fast-instant-reply",
    "name": "Instant Customer Reply",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 482,
    "popularity": 8517,
    "rating": 96,
    "latencyMs": 210,
    "available": true
  },
  {
    "id": "pr-fast-realtime-moderator",
    "slug": "pr-fast-realtime-moderator",
    "name": "Realtime Stream Moderator",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 483,
    "popularity": 8516,
    "rating": 96,
    "latencyMs": 218,
    "available": true
  },
  {
    "id": "pr-fast-micro-parser",
    "slug": "pr-fast-micro-parser",
    "name": "Micro-Payload Parser",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 484,
    "popularity": 8515,
    "rating": 96,
    "latencyMs": 246,
    "available": true
  },
  {
    "id": "pr-fast-quick-editor",
    "slug": "pr-fast-quick-editor",
    "name": "Instant Grammar & Polish",
    "description": "Rapid spellcheck, active voice conversion, and sentence rhythm polishing. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 485,
    "popularity": 8514,
    "rating": 96,
    "latencyMs": 236,
    "available": true
  },
  {
    "id": "pr-fast-autocomplete-hint",
    "slug": "pr-fast-autocomplete-hint",
    "name": "Autocomplete Code Predictor",
    "description": "Ultra-low latency next-token suggestions for interactive editor autocompletion. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 486,
    "popularity": 8513,
    "rating": 96,
    "latencyMs": 189,
    "available": true
  },
  {
    "id": "pr-fast-instant-reply-v2",
    "slug": "pr-fast-instant-reply-v2",
    "name": "Instant Customer Reply (Tier 2)",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 487,
    "popularity": 8512,
    "rating": 96,
    "latencyMs": 256,
    "available": true
  },
  {
    "id": "pr-fast-realtime-moderator-v2",
    "slug": "pr-fast-realtime-moderator-v2",
    "name": "Realtime Stream Moderator (Tier 2)",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 488,
    "popularity": 8511,
    "rating": 96,
    "latencyMs": 189,
    "available": true
  },
  {
    "id": "pr-fast-micro-parser-v2",
    "slug": "pr-fast-micro-parser-v2",
    "name": "Micro-Payload Parser (Tier 2)",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 489,
    "popularity": 8510,
    "rating": 96,
    "latencyMs": 190,
    "available": true
  },
  {
    "id": "pr-fast-quick-editor-v2",
    "slug": "pr-fast-quick-editor-v2",
    "name": "Instant Grammar & Polish (Tier 2)",
    "description": "Rapid spellcheck, active voice conversion, and sentence rhythm polishing. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 490,
    "popularity": 8509,
    "rating": 96,
    "latencyMs": 222,
    "available": true
  },
  {
    "id": "pr-fast-autocomplete-hint-v2",
    "slug": "pr-fast-autocomplete-hint-v2",
    "name": "Autocomplete Code Predictor (Tier 2)",
    "description": "Ultra-low latency next-token suggestions for interactive editor autocompletion. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 491,
    "popularity": 8508,
    "rating": 96,
    "latencyMs": 199,
    "available": true
  },
  {
    "id": "pr-fast-instant-reply-v3",
    "slug": "pr-fast-instant-reply-v3",
    "name": "Instant Customer Reply (Tier 3)",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 492,
    "popularity": 8507,
    "rating": 96,
    "latencyMs": 209,
    "available": true
  },
  {
    "id": "pr-fast-realtime-moderator-v3",
    "slug": "pr-fast-realtime-moderator-v3",
    "name": "Realtime Stream Moderator (Tier 3)",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 493,
    "popularity": 8506,
    "rating": 96,
    "latencyMs": 227,
    "available": true
  },
  {
    "id": "pr-fast-micro-parser-v3",
    "slug": "pr-fast-micro-parser-v3",
    "name": "Micro-Payload Parser (Tier 3)",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 494,
    "popularity": 8505,
    "rating": 96,
    "latencyMs": 191,
    "available": true
  },
  {
    "id": "pr-fast-quick-editor-v3",
    "slug": "pr-fast-quick-editor-v3",
    "name": "Instant Grammar & Polish (Tier 3)",
    "description": "Rapid spellcheck, active voice conversion, and sentence rhythm polishing. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 495,
    "popularity": 8504,
    "rating": 96,
    "latencyMs": 213,
    "available": true
  },
  {
    "id": "pr-fast-autocomplete-hint-v3",
    "slug": "pr-fast-autocomplete-hint-v3",
    "name": "Autocomplete Code Predictor (Tier 3)",
    "description": "Ultra-low latency next-token suggestions for interactive editor autocompletion. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 496,
    "popularity": 8503,
    "rating": 96,
    "latencyMs": 235,
    "available": true
  },
  {
    "id": "pr-fast-instant-reply-v4",
    "slug": "pr-fast-instant-reply-v4",
    "name": "Instant Customer Reply (Tier 4)",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 497,
    "popularity": 8502,
    "rating": 96,
    "latencyMs": 202,
    "available": true
  },
  {
    "id": "pr-fast-realtime-moderator-v4",
    "slug": "pr-fast-realtime-moderator-v4",
    "name": "Realtime Stream Moderator (Tier 4)",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 498,
    "popularity": 8501,
    "rating": 96,
    "latencyMs": 190,
    "available": true
  },
  {
    "id": "pr-fast-micro-parser-v4",
    "slug": "pr-fast-micro-parser-v4",
    "name": "Micro-Payload Parser (Tier 4)",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 499,
    "popularity": 8500,
    "rating": 96,
    "latencyMs": 253,
    "available": true
  },
  {
    "id": "pr-fast-quick-editor-v4",
    "slug": "pr-fast-quick-editor-v4",
    "name": "Instant Grammar & Polish (Tier 4)",
    "description": "Rapid spellcheck, active voice conversion, and sentence rhythm polishing. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 500,
    "popularity": 8499,
    "rating": 96,
    "latencyMs": 240,
    "available": true
  },
  {
    "id": "pr-fast-autocomplete-hint-v4",
    "slug": "pr-fast-autocomplete-hint-v4",
    "name": "Autocomplete Code Predictor (Tier 4)",
    "description": "Ultra-low latency next-token suggestions for interactive editor autocompletion. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 501,
    "popularity": 8498,
    "rating": 96,
    "latencyMs": 211,
    "available": true
  },
  {
    "id": "pr-fast-instant-reply-v5",
    "slug": "pr-fast-instant-reply-v5",
    "name": "Instant Customer Reply (Tier 5)",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 502,
    "popularity": 8497,
    "rating": 96,
    "latencyMs": 240,
    "available": true
  },
  {
    "id": "pr-fast-realtime-moderator-v5",
    "slug": "pr-fast-realtime-moderator-v5",
    "name": "Realtime Stream Moderator (Tier 5)",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 503,
    "popularity": 8496,
    "rating": 96,
    "latencyMs": 218,
    "available": true
  },
  {
    "id": "pr-fast-micro-parser-v5",
    "slug": "pr-fast-micro-parser-v5",
    "name": "Micro-Payload Parser (Tier 5)",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 16384,
    "rank": 504,
    "popularity": 8495,
    "rating": 96,
    "latencyMs": 184,
    "available": true
  },
  {
    "id": "pr-ctx-million-token-auditor",
    "slug": "pr-ctx-million-token-auditor",
    "name": "1M+ Token Corpus Auditor",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 505,
    "popularity": 8494,
    "rating": 96,
    "latencyMs": 231,
    "available": true
  },
  {
    "id": "pr-ctx-codebase-indexer",
    "slug": "pr-ctx-codebase-indexer",
    "name": "Monorepo Codebase Indexer",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 506,
    "popularity": 8493,
    "rating": 96,
    "latencyMs": 246,
    "available": true
  },
  {
    "id": "pr-ctx-legal-contract-depot",
    "slug": "pr-ctx-legal-contract-depot",
    "name": "Multi-Contract Master Agreement",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 507,
    "popularity": 8492,
    "rating": 96,
    "latencyMs": 244,
    "available": true
  },
  {
    "id": "pr-ctx-financial-ledger-book",
    "slug": "pr-ctx-financial-ledger-book",
    "name": "Annual Report & 10-K Synthesizer",
    "description": "Audits GAAP reconciliations and footnote disclosures across multi-year SEC filings. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 508,
    "popularity": 8491,
    "rating": 96,
    "latencyMs": 241,
    "available": true
  },
  {
    "id": "pr-ctx-historical-archive",
    "slug": "pr-ctx-historical-archive",
    "name": "Full-Transcript Meeting Digest",
    "description": "Synthesizes hundreds of hours of raw audio transcripts into categorized decisions. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 509,
    "popularity": 8490,
    "rating": 96,
    "latencyMs": 253,
    "available": true
  },
  {
    "id": "pr-ctx-million-token-auditor-v2",
    "slug": "pr-ctx-million-token-auditor-v2",
    "name": "1M+ Token Corpus Auditor (Tier 2)",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 510,
    "popularity": 8489,
    "rating": 96,
    "latencyMs": 202,
    "available": true
  },
  {
    "id": "pr-ctx-codebase-indexer-v2",
    "slug": "pr-ctx-codebase-indexer-v2",
    "name": "Monorepo Codebase Indexer (Tier 2)",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 511,
    "popularity": 8488,
    "rating": 96,
    "latencyMs": 213,
    "available": true
  },
  {
    "id": "pr-ctx-legal-contract-depot-v2",
    "slug": "pr-ctx-legal-contract-depot-v2",
    "name": "Multi-Contract Master Agreement (Tier 2)",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 512,
    "popularity": 8487,
    "rating": 96,
    "latencyMs": 240,
    "available": true
  },
  {
    "id": "pr-ctx-financial-ledger-book-v2",
    "slug": "pr-ctx-financial-ledger-book-v2",
    "name": "Annual Report & 10-K Synthesizer (Tier 2)",
    "description": "Audits GAAP reconciliations and footnote disclosures across multi-year SEC filings. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 513,
    "popularity": 8486,
    "rating": 96,
    "latencyMs": 186,
    "available": true
  },
  {
    "id": "pr-ctx-historical-archive-v2",
    "slug": "pr-ctx-historical-archive-v2",
    "name": "Full-Transcript Meeting Digest (Tier 2)",
    "description": "Synthesizes hundreds of hours of raw audio transcripts into categorized decisions. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 514,
    "popularity": 8485,
    "rating": 96,
    "latencyMs": 183,
    "available": true
  },
  {
    "id": "pr-ctx-million-token-auditor-v3",
    "slug": "pr-ctx-million-token-auditor-v3",
    "name": "1M+ Token Corpus Auditor (Tier 3)",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 515,
    "popularity": 8484,
    "rating": 96,
    "latencyMs": 226,
    "available": true
  },
  {
    "id": "pr-ctx-codebase-indexer-v3",
    "slug": "pr-ctx-codebase-indexer-v3",
    "name": "Monorepo Codebase Indexer (Tier 3)",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 516,
    "popularity": 8483,
    "rating": 96,
    "latencyMs": 212,
    "available": true
  },
  {
    "id": "pr-ctx-legal-contract-depot-v3",
    "slug": "pr-ctx-legal-contract-depot-v3",
    "name": "Multi-Contract Master Agreement (Tier 3)",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 517,
    "popularity": 8482,
    "rating": 96,
    "latencyMs": 204,
    "available": true
  },
  {
    "id": "pr-ctx-financial-ledger-book-v3",
    "slug": "pr-ctx-financial-ledger-book-v3",
    "name": "Annual Report & 10-K Synthesizer (Tier 3)",
    "description": "Audits GAAP reconciliations and footnote disclosures across multi-year SEC filings. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 518,
    "popularity": 8481,
    "rating": 96,
    "latencyMs": 238,
    "available": true
  },
  {
    "id": "pr-ctx-historical-archive-v3",
    "slug": "pr-ctx-historical-archive-v3",
    "name": "Full-Transcript Meeting Digest (Tier 3)",
    "description": "Synthesizes hundreds of hours of raw audio transcripts into categorized decisions. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 519,
    "popularity": 8480,
    "rating": 96,
    "latencyMs": 251,
    "available": true
  },
  {
    "id": "pr-ctx-million-token-auditor-v4",
    "slug": "pr-ctx-million-token-auditor-v4",
    "name": "1M+ Token Corpus Auditor (Tier 4)",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 520,
    "popularity": 8479,
    "rating": 96,
    "latencyMs": 232,
    "available": true
  },
  {
    "id": "pr-ctx-codebase-indexer-v4",
    "slug": "pr-ctx-codebase-indexer-v4",
    "name": "Monorepo Codebase Indexer (Tier 4)",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 521,
    "popularity": 8478,
    "rating": 96,
    "latencyMs": 216,
    "available": true
  },
  {
    "id": "pr-ctx-legal-contract-depot-v4",
    "slug": "pr-ctx-legal-contract-depot-v4",
    "name": "Multi-Contract Master Agreement (Tier 4)",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 522,
    "popularity": 8477,
    "rating": 96,
    "latencyMs": 256,
    "available": true
  },
  {
    "id": "pr-ctx-financial-ledger-book-v4",
    "slug": "pr-ctx-financial-ledger-book-v4",
    "name": "Annual Report & 10-K Synthesizer (Tier 4)",
    "description": "Audits GAAP reconciliations and footnote disclosures across multi-year SEC filings. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 523,
    "popularity": 8476,
    "rating": 96,
    "latencyMs": 223,
    "available": true
  },
  {
    "id": "pr-ctx-historical-archive-v4",
    "slug": "pr-ctx-historical-archive-v4",
    "name": "Full-Transcript Meeting Digest (Tier 4)",
    "description": "Synthesizes hundreds of hours of raw audio transcripts into categorized decisions. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 524,
    "popularity": 8475,
    "rating": 96,
    "latencyMs": 188,
    "available": true
  },
  {
    "id": "pr-ctx-million-token-auditor-v5",
    "slug": "pr-ctx-million-token-auditor-v5",
    "name": "1M+ Token Corpus Auditor (Tier 5)",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 525,
    "popularity": 8474,
    "rating": 96,
    "latencyMs": 184,
    "available": true
  },
  {
    "id": "pr-ctx-codebase-indexer-v5",
    "slug": "pr-ctx-codebase-indexer-v5",
    "name": "Monorepo Codebase Indexer (Tier 5)",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 526,
    "popularity": 8473,
    "rating": 96,
    "latencyMs": 192,
    "available": true
  },
  {
    "id": "pr-ctx-legal-contract-depot-v5",
    "slug": "pr-ctx-legal-contract-depot-v5",
    "name": "Multi-Contract Master Agreement (Tier 5)",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "providerName": "Requesty AI",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1048576,
    "maxOutputTokens": 32768,
    "rank": 527,
    "popularity": 8472,
    "rating": 96,
    "latencyMs": 204,
    "available": true
  },
  {
    "id": "pr-creative-fiction-worldbuilder",
    "slug": "pr-creative-fiction-worldbuilder",
    "name": "Fiction & Worldbuilder",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 528,
    "popularity": 8471,
    "rating": 96,
    "latencyMs": 196,
    "available": true
  },
  {
    "id": "pr-creative-screenplay-dialogue",
    "slug": "pr-creative-screenplay-dialogue",
    "name": "Screenplay & Scene Writer",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 529,
    "popularity": 8470,
    "rating": 96,
    "latencyMs": 223,
    "available": true
  },
  {
    "id": "pr-creative-poetic-artisan",
    "slug": "pr-creative-poetic-artisan",
    "name": "Poetic & Metaphoric Artisan",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 530,
    "popularity": 8469,
    "rating": 96,
    "latencyMs": 213,
    "available": true
  },
  {
    "id": "pr-creative-game-lore-craftsman",
    "slug": "pr-creative-game-lore-craftsman",
    "name": "Game Lore & NPC Dialogue",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 531,
    "popularity": 8468,
    "rating": 96,
    "latencyMs": 218,
    "available": true
  },
  {
    "id": "pr-creative-fiction-worldbuilder-v2",
    "slug": "pr-creative-fiction-worldbuilder-v2",
    "name": "Fiction & Worldbuilder (Tier 2)",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 532,
    "popularity": 8467,
    "rating": 96,
    "latencyMs": 243,
    "available": true
  },
  {
    "id": "pr-creative-screenplay-dialogue-v2",
    "slug": "pr-creative-screenplay-dialogue-v2",
    "name": "Screenplay & Scene Writer (Tier 2)",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 533,
    "popularity": 8466,
    "rating": 96,
    "latencyMs": 230,
    "available": true
  },
  {
    "id": "pr-creative-poetic-artisan-v2",
    "slug": "pr-creative-poetic-artisan-v2",
    "name": "Poetic & Metaphoric Artisan (Tier 2)",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 534,
    "popularity": 8465,
    "rating": 96,
    "latencyMs": 220,
    "available": true
  },
  {
    "id": "pr-creative-game-lore-craftsman-v2",
    "slug": "pr-creative-game-lore-craftsman-v2",
    "name": "Game Lore & NPC Dialogue (Tier 2)",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 535,
    "popularity": 8464,
    "rating": 96,
    "latencyMs": 186,
    "available": true
  },
  {
    "id": "pr-creative-fiction-worldbuilder-v3",
    "slug": "pr-creative-fiction-worldbuilder-v3",
    "name": "Fiction & Worldbuilder (Tier 3)",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 536,
    "popularity": 8463,
    "rating": 96,
    "latencyMs": 213,
    "available": true
  },
  {
    "id": "pr-creative-screenplay-dialogue-v3",
    "slug": "pr-creative-screenplay-dialogue-v3",
    "name": "Screenplay & Scene Writer (Tier 3)",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 537,
    "popularity": 8462,
    "rating": 96,
    "latencyMs": 227,
    "available": true
  },
  {
    "id": "pr-creative-poetic-artisan-v3",
    "slug": "pr-creative-poetic-artisan-v3",
    "name": "Poetic & Metaphoric Artisan (Tier 3)",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 538,
    "popularity": 8461,
    "rating": 96,
    "latencyMs": 250,
    "available": true
  },
  {
    "id": "pr-creative-game-lore-craftsman-v3",
    "slug": "pr-creative-game-lore-craftsman-v3",
    "name": "Game Lore & NPC Dialogue (Tier 3)",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 539,
    "popularity": 8460,
    "rating": 96,
    "latencyMs": 202,
    "available": true
  },
  {
    "id": "pr-creative-fiction-worldbuilder-v4",
    "slug": "pr-creative-fiction-worldbuilder-v4",
    "name": "Fiction & Worldbuilder (Tier 4)",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 540,
    "popularity": 8459,
    "rating": 96,
    "latencyMs": 234,
    "available": true
  },
  {
    "id": "pr-creative-screenplay-dialogue-v4",
    "slug": "pr-creative-screenplay-dialogue-v4",
    "name": "Screenplay & Scene Writer (Tier 4)",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 541,
    "popularity": 8458,
    "rating": 96,
    "latencyMs": 216,
    "available": true
  },
  {
    "id": "pr-creative-poetic-artisan-v4",
    "slug": "pr-creative-poetic-artisan-v4",
    "name": "Poetic & Metaphoric Artisan (Tier 4)",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 542,
    "popularity": 8457,
    "rating": 96,
    "latencyMs": 191,
    "available": true
  },
  {
    "id": "pr-creative-game-lore-craftsman-v4",
    "slug": "pr-creative-game-lore-craftsman-v4",
    "name": "Game Lore & NPC Dialogue (Tier 4)",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 543,
    "popularity": 8456,
    "rating": 96,
    "latencyMs": 191,
    "available": true
  },
  {
    "id": "pr-creative-fiction-worldbuilder-v5",
    "slug": "pr-creative-fiction-worldbuilder-v5",
    "name": "Fiction & Worldbuilder (Tier 5)",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 544,
    "popularity": 8455,
    "rating": 96,
    "latencyMs": 203,
    "available": true
  },
  {
    "id": "pr-creative-screenplay-dialogue-v5",
    "slug": "pr-creative-screenplay-dialogue-v5",
    "name": "Screenplay & Scene Writer (Tier 5)",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 545,
    "popularity": 8454,
    "rating": 96,
    "latencyMs": 219,
    "available": true
  },
  {
    "id": "pr-creative-poetic-artisan-v5",
    "slug": "pr-creative-poetic-artisan-v5",
    "name": "Poetic & Metaphoric Artisan (Tier 5)",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 546,
    "popularity": 8453,
    "rating": 96,
    "latencyMs": 230,
    "available": true
  },
  {
    "id": "pr-creative-game-lore-craftsman-v5",
    "slug": "pr-creative-game-lore-craftsman-v5",
    "name": "Game Lore & NPC Dialogue (Tier 5)",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "providerName": "ProRouter Gateway",
    "providerSlug": "prorouter-gateway",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 547,
    "popularity": 8452,
    "rating": 96,
    "latencyMs": 215,
    "available": true
  },
  {
    "id": "pr-biz-board-memo",
    "slug": "pr-biz-board-memo",
    "name": "Board Memo & Investor Update",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 548,
    "popularity": 8451,
    "rating": 96,
    "latencyMs": 249,
    "available": true
  },
  {
    "id": "pr-biz-sales-pitch-craft",
    "slug": "pr-biz-sales-pitch-craft",
    "name": "Enterprise Sales Strategist",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 549,
    "popularity": 8450,
    "rating": 96,
    "latencyMs": 239,
    "available": true
  },
  {
    "id": "pr-biz-product-spec-lead",
    "slug": "pr-biz-product-spec-lead",
    "name": "PRD & Product Spec Lead",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 550,
    "popularity": 8449,
    "rating": 96,
    "latencyMs": 195,
    "available": true
  },
  {
    "id": "pr-biz-board-memo-v2",
    "slug": "pr-biz-board-memo-v2",
    "name": "Board Memo & Investor Update (Tier 2)",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 551,
    "popularity": 8448,
    "rating": 96,
    "latencyMs": 247,
    "available": true
  },
  {
    "id": "pr-biz-sales-pitch-craft-v2",
    "slug": "pr-biz-sales-pitch-craft-v2",
    "name": "Enterprise Sales Strategist (Tier 2)",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 552,
    "popularity": 8447,
    "rating": 96,
    "latencyMs": 212,
    "available": true
  },
  {
    "id": "pr-biz-product-spec-lead-v2",
    "slug": "pr-biz-product-spec-lead-v2",
    "name": "PRD & Product Spec Lead (Tier 2)",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 553,
    "popularity": 8446,
    "rating": 96,
    "latencyMs": 202,
    "available": true
  },
  {
    "id": "pr-biz-board-memo-v3",
    "slug": "pr-biz-board-memo-v3",
    "name": "Board Memo & Investor Update (Tier 3)",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 554,
    "popularity": 8445,
    "rating": 96,
    "latencyMs": 247,
    "available": true
  },
  {
    "id": "pr-biz-sales-pitch-craft-v3",
    "slug": "pr-biz-sales-pitch-craft-v3",
    "name": "Enterprise Sales Strategist (Tier 3)",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 555,
    "popularity": 8444,
    "rating": 96,
    "latencyMs": 209,
    "available": true
  },
  {
    "id": "pr-biz-product-spec-lead-v3",
    "slug": "pr-biz-product-spec-lead-v3",
    "name": "PRD & Product Spec Lead (Tier 3)",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 556,
    "popularity": 8443,
    "rating": 96,
    "latencyMs": 232,
    "available": true
  },
  {
    "id": "pr-biz-board-memo-v4",
    "slug": "pr-biz-board-memo-v4",
    "name": "Board Memo & Investor Update (Tier 4)",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 557,
    "popularity": 8442,
    "rating": 96,
    "latencyMs": 234,
    "available": true
  },
  {
    "id": "pr-biz-sales-pitch-craft-v4",
    "slug": "pr-biz-sales-pitch-craft-v4",
    "name": "Enterprise Sales Strategist (Tier 4)",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 558,
    "popularity": 8441,
    "rating": 96,
    "latencyMs": 238,
    "available": true
  },
  {
    "id": "pr-biz-product-spec-lead-v4",
    "slug": "pr-biz-product-spec-lead-v4",
    "name": "PRD & Product Spec Lead (Tier 4)",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 559,
    "popularity": 8440,
    "rating": 96,
    "latencyMs": 185,
    "available": true
  },
  {
    "id": "pr-biz-board-memo-v5",
    "slug": "pr-biz-board-memo-v5",
    "name": "Board Memo & Investor Update (Tier 5)",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 560,
    "popularity": 8439,
    "rating": 96,
    "latencyMs": 228,
    "available": true
  },
  {
    "id": "pr-biz-sales-pitch-craft-v5",
    "slug": "pr-biz-sales-pitch-craft-v5",
    "name": "Enterprise Sales Strategist (Tier 5)",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 561,
    "popularity": 8438,
    "rating": 96,
    "latencyMs": 229,
    "available": true
  },
  {
    "id": "pr-biz-product-spec-lead-v5",
    "slug": "pr-biz-product-spec-lead-v5",
    "name": "PRD & Product Spec Lead (Tier 5)",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "providerName": "Groq LPU",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricing": {
      "inputPerMillion": 0,
      "outputPerMillion": 0,
      "cachedInputPerMillion": 0,
      "currency": "INR"
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 562,
    "popularity": 8437,
    "rating": 96,
    "latencyMs": 252,
    "available": true
  }
];

export const ALL_MODELS_500: WebModelEntry[] = [
  {
    "id": "claude-sonnet",
    "name": "Claude Sonnet",
    "object": "model",
    "created": 1710000000,
    "owned_by": "anthropic",
    "category": "Coding & Software Engineering",
    "tier": "standard",
    "description": "Anthropic Claude Sonnet — balanced intelligence, high coding precision, and nuanced creative writing.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "claude-opus",
    "name": "Claude Opus",
    "object": "model",
    "created": 1710000000,
    "owned_by": "anthropic",
    "category": "Advanced Reasoning",
    "tier": "standard",
    "description": "Anthropic Claude Opus — deep analysis, nuanced reasoning, and complex task decomposition.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "claude-opus-5",
    "name": "Claude Opus 5",
    "object": "model",
    "created": 1710000000,
    "owned_by": "anthropic",
    "category": "Advanced Reasoning",
    "tier": "standard",
    "description": "Anthropic Claude Opus 5 — next-generation frontier intelligence for research and coding.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "gemini-pro",
    "name": "Gemini Pro",
    "object": "model",
    "created": 1710000000,
    "owned_by": "google",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Google Gemini Pro — powerful multimodal model with vast context window and world knowledge.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "grok",
    "name": "Grok",
    "object": "model",
    "created": 1710000000,
    "owned_by": "xai",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "xAI Grok — direct, truthful AI with real-time insight and witty demeanor.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "mistral-large",
    "name": "Mistral Large",
    "object": "model",
    "created": 1710000000,
    "owned_by": "mistral",
    "category": "Advanced Reasoning",
    "tier": "standard",
    "description": "Mistral Large — flagship model for complex multilingual reasoning and precise instruction following.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "devstral-24b",
    "name": "Devstral 24B",
    "object": "model",
    "created": 1710000000,
    "owned_by": "mistral",
    "category": "Coding & Software Engineering",
    "tier": "standard",
    "description": "Mistral Devstral 24B — developer-tuned open weights optimized for software engineering workflows.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "gpt-6.1-sol",
    "name": "GPT-6.1 Sol",
    "object": "model",
    "created": 1710000000,
    "owned_by": "openai",
    "category": "Advanced Reasoning",
    "tier": "standard",
    "description": "OpenAI GPT-6.1 Sol — frontier cloud model optimized for high-speed reasoning and synthesis.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "gpt-6.1-terra",
    "name": "GPT-6.1 Terra",
    "object": "model",
    "created": 1710000000,
    "owned_by": "openai",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "OpenAI GPT-6.1 Terra — flagship multimodal intelligence with deep scientific knowledge.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "gpt-6-luna",
    "name": "GPT-6 Luna",
    "object": "model",
    "created": 1710000000,
    "owned_by": "openai",
    "category": "Fast-Response AI",
    "tier": "standard",
    "description": "OpenAI GPT-6 Luna — low-latency next-gen assistant for rapid task execution.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "kimi-k3",
    "name": "Kimi K3",
    "object": "model",
    "created": 1710000000,
    "owned_by": "moonshot",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Moonshot Kimi K3 — ultra long-context frontier model with high-speed reasoning and deep comprehension.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "kimi-k2.7-code",
    "name": "Kimi K2.7 Code",
    "object": "model",
    "created": 1710000000,
    "owned_by": "moonshot",
    "category": "Coding & Software Engineering",
    "tier": "standard",
    "description": "Moonshot Kimi K2.7 Code — specialized code intelligence and agentic workflow automation.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "glm-5.3",
    "name": "GLM-5.3",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "standard",
    "description": "Zhipu GLM-5.3 — flagship bilingual reasoning, analytical thinking, and tool execution.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "glm-5.3-flash",
    "name": "GLM-5.3-Flash",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "standard",
    "description": "Zhipu GLM 5.3 Flash — fast multilingual reasoning with high-speed tool execution.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "mimo-v2.6-pro",
    "name": "MiMo-V2.6-Pro",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "standard",
    "description": "Xiaomi MiMo V2.6 Pro — flagship multimodal reasoning model for advanced synthesis and coding.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "mimo-v2.6-flash",
    "name": "MiMo-V2.6-Flash",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "standard",
    "description": "Xiaomi MiMo Flash — quick responses with solid reasoning.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "minimax-m3.1-flash",
    "name": "MiniMax M3.1 Flash",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "standard",
    "description": "MiniMax M3.1 Flash — fast multimodal model with reliable tool calling and low latency.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "qwen3-coder-next",
    "name": "Qwen3-Coder-Next",
    "object": "model",
    "created": 1710000000,
    "owned_by": "alibaba",
    "category": "Coding & Software Engineering",
    "tier": "standard",
    "description": "Alibaba Qwen3 Coder Next — specialized coding model for repository synthesis and multi-file debugging.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "deepseek-v4-pro-0813",
    "name": "DeepSeek-V4-Pro-0813",
    "object": "model",
    "created": 1710000000,
    "owned_by": "deepseek",
    "category": "Coding & Software Engineering",
    "tier": "standard",
    "description": "DeepSeek V4 Pro — high-throughput frontier reasoning and deep architectural coding.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "beam",
    "name": "Beam",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Fast general-purpose model for everyday chat and drafting.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "longcat-2.5-preview",
    "name": "LongCat 2.5 Preview",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Meituan LongCat 2.5 — long-context preview with strong multilingual reasoning.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "jev-1.13",
    "name": "Jev 1.13",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Jev 1.13 — general-purpose assistant with balanced speed and quality.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "gpt-oss-20b",
    "name": "GPT OSS 20B",
    "object": "model",
    "created": 1710000000,
    "owned_by": "openai",
    "category": "Advanced Reasoning",
    "tier": "standard",
    "description": "Open-weight 20B parameter reasoning and chat model with high speed and chain-of-thought capabilities.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "gpt-oss-120b",
    "name": "GPT OSS 120B",
    "object": "model",
    "created": 1710000000,
    "owned_by": "openai",
    "category": "Advanced Reasoning",
    "tier": "standard",
    "description": "OpenAI open-weight 120B parameter MoE reasoning architecture running on Groq LPU.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "qwen/qwen3.8-27b",
    "name": "Qwen 3.8 27B",
    "object": "model",
    "created": 1710000000,
    "owned_by": "alibaba",
    "category": "Coding & Software Engineering",
    "tier": "standard",
    "description": "Alibaba Qwen3.8 27B — high-performance open-weight model with strong multilingual and reasoning abilities.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "qwen3.8-27b",
    "name": "Qwen3.8-27B (Standard)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "alibaba",
    "category": "Coding & Software Engineering",
    "tier": "standard",
    "description": "Alibaba Qwen3.8 27B standard model alias running on high-speed inference.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "nemotron-3-ultra-550b-a55b",
    "name": "Nemotron 3 Ultra 550B A55B",
    "object": "model",
    "created": 1710000000,
    "owned_by": "nvidia",
    "category": "Advanced Reasoning",
    "tier": "standard",
    "description": "NVIDIA Nemotron 3 Ultra 550B A55B — ultra-scale frontier reasoning engine with 1M context.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "nemotron-3-nano-omni-30b-a3b-reasoning",
    "name": "Nemotron 3 Nano Omni 30B Reasoning",
    "object": "model",
    "created": 1710000000,
    "owned_by": "nvidia",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "NVIDIA Nemotron 3 Nano Omni 30B — deep chain-of-thought reasoning and multimodal STEM problem-solving.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "nemotron-3.5-lightning-30b-a3b",
    "name": "Nemotron 3.5 Lightning 30B A3B",
    "object": "model",
    "created": 1710000000,
    "owned_by": "nvidia",
    "category": "Fast-Response AI",
    "tier": "standard",
    "description": "NVIDIA Nemotron 3.5 Lightning 30B A3B — lightning-fast inference with an extraordinary 1M context window.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "nemotron-3.5-lightning",
    "name": "Nemotron 3.5 Lightning",
    "object": "model",
    "created": 1710000000,
    "owned_by": "nvidia",
    "category": "Fast-Response AI",
    "tier": "standard",
    "description": "NVIDIA Nemotron 3.5 Lightning — low-latency assistant for high-volume work.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "nemotron-3.5-super-vl",
    "name": "Nemotron 3.5 Super VL",
    "object": "model",
    "created": 1710000000,
    "owned_by": "nvidia",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "NVIDIA Nemotron 3.5 Super — high-capacity vision-language reasoning.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "gemma-4-31b-it",
    "name": "Gemma 4 31B IT",
    "object": "model",
    "created": 1710000000,
    "owned_by": "google",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Google Gemma 4 31B Instruction-Tuned — Google's latest open frontier architecture featuring 262K context.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "leanstral-1-5",
    "name": "Leanstral 1.5",
    "object": "model",
    "created": 1710000000,
    "owned_by": "mistral",
    "category": "Advanced Reasoning",
    "tier": "standard",
    "description": "Mistral Leanstral 1.5 — high-efficiency reasoning model with massive 262K context.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "ling-3.1-flash",
    "name": "Ling 3.1 Flash",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "standard",
    "description": "Novita Ling 3.1 Flash — ultra-responsive 262K context model for conversational speed.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "allam-2-7b",
    "name": "Allam 2 7B",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "SDAIA high-performance bilingual Arabic & English foundational language model.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "deepseek-v4.1-flash-1017",
    "name": "DeepSeek-V4.1-Flash-1017",
    "object": "model",
    "created": 1710000000,
    "owned_by": "deepseek",
    "category": "Coding & Software Engineering",
    "tier": "standard",
    "description": "DeepSeek V4.1 Flash checkpoint 1017 — latest frontier open-weight reasoning model.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "deepseek-v4.1-flash",
    "name": "DeepSeek V4.1 Flash",
    "object": "model",
    "created": 1710000000,
    "owned_by": "deepseek",
    "category": "Coding & Software Engineering",
    "tier": "standard",
    "description": "DeepSeek V4.1 Flash — state-of-the-art high-speed reasoning, coding, and multilingual intelligence.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-omni-core",
    "name": "Omni Core",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-dialogue-pro",
    "name": "Dialogue Pro",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-knowledge-base",
    "name": "Knowledge Base",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-briefing-desk",
    "name": "Briefing Desk",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-clarity-engine",
    "name": "Clarity Engine",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-writer-companion",
    "name": "Writer Companion",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-inquiry-agent",
    "name": "Inquiry Agent",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-omni-core-v2",
    "name": "Omni Core (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-dialogue-pro-v2",
    "name": "Dialogue Pro (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-knowledge-base-v2",
    "name": "Knowledge Base (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-briefing-desk-v2",
    "name": "Briefing Desk (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-clarity-engine-v2",
    "name": "Clarity Engine (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-writer-companion-v2",
    "name": "Writer Companion (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-inquiry-agent-v2",
    "name": "Inquiry Agent (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-omni-core-v3",
    "name": "Omni Core (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-dialogue-pro-v3",
    "name": "Dialogue Pro (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-knowledge-base-v3",
    "name": "Knowledge Base (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-briefing-desk-v3",
    "name": "Briefing Desk (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-clarity-engine-v3",
    "name": "Clarity Engine (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-writer-companion-v3",
    "name": "Writer Companion (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-inquiry-agent-v3",
    "name": "Inquiry Agent (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-omni-core-v4",
    "name": "Omni Core (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-dialogue-pro-v4",
    "name": "Dialogue Pro (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-knowledge-base-v4",
    "name": "Knowledge Base (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-briefing-desk-v4",
    "name": "Briefing Desk (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-clarity-engine-v4",
    "name": "Clarity Engine (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-writer-companion-v4",
    "name": "Writer Companion (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-inquiry-agent-v4",
    "name": "Inquiry Agent (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-omni-core-v5",
    "name": "Omni Core (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-dialogue-pro-v5",
    "name": "Dialogue Pro (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-knowledge-base-v5",
    "name": "Knowledge Base (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-briefing-desk-v5",
    "name": "Briefing Desk (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-clarity-engine-v5",
    "name": "Clarity Engine (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-writer-companion-v5",
    "name": "Writer Companion (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-inquiry-agent-v5",
    "name": "Inquiry Agent (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-omni-core-v6",
    "name": "Omni Core (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-dialogue-pro-v6",
    "name": "Dialogue Pro (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-knowledge-base-v6",
    "name": "Knowledge Base (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-briefing-desk-v6",
    "name": "Briefing Desk (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-clarity-engine-v6",
    "name": "Clarity Engine (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-writer-companion-v6",
    "name": "Writer Companion (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-inquiry-agent-v6",
    "name": "Inquiry Agent (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-omni-core-v7",
    "name": "Omni Core (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-dialogue-pro-v7",
    "name": "Dialogue Pro (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-knowledge-base-v7",
    "name": "Knowledge Base (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-briefing-desk-v7",
    "name": "Briefing Desk (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-clarity-engine-v7",
    "name": "Clarity Engine (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-writer-companion-v7",
    "name": "Writer Companion (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-inquiry-agent-v7",
    "name": "Inquiry Agent (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-omni-core-v8",
    "name": "Omni Core (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-dialogue-pro-v8",
    "name": "Dialogue Pro (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-knowledge-base-v8",
    "name": "Knowledge Base (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-briefing-desk-v8",
    "name": "Briefing Desk (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-clarity-engine-v8",
    "name": "Clarity Engine (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-writer-companion-v8",
    "name": "Writer Companion (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-inquiry-agent-v8",
    "name": "Inquiry Agent (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-omni-core-v9",
    "name": "Omni Core (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-dialogue-pro-v9",
    "name": "Dialogue Pro (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-knowledge-base-v9",
    "name": "Knowledge Base (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-briefing-desk-v9",
    "name": "Briefing Desk (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-clarity-engine-v9",
    "name": "Clarity Engine (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-writer-companion-v9",
    "name": "Writer Companion (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-inquiry-agent-v9",
    "name": "Inquiry Agent (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-omni-core-v10",
    "name": "Omni Core (Tier 10)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-dialogue-pro-v10",
    "name": "Dialogue Pro (Tier 10)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-gen-knowledge-base-v10",
    "name": "Knowledge Base (Tier 10)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "General-Purpose AI",
    "tier": "standard",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-cot-analytical",
    "name": "Chain-of-Thought Analyst",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-deductive-logic",
    "name": "Deductive Logic Engine",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-causal-inference",
    "name": "Causal Inference Model",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-systems-thinker",
    "name": "Systems Architecture Thinker",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-fallacy-detector",
    "name": "Cognitive Auditor",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-decision-matrix",
    "name": "Decision Matrix Pro",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-hypothesis-tester",
    "name": "Scientific Hypothesizer",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-cot-analytical-v2",
    "name": "Chain-of-Thought Analyst (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-deductive-logic-v2",
    "name": "Deductive Logic Engine (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-causal-inference-v2",
    "name": "Causal Inference Model (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-systems-thinker-v2",
    "name": "Systems Architecture Thinker (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-fallacy-detector-v2",
    "name": "Cognitive Auditor (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-decision-matrix-v2",
    "name": "Decision Matrix Pro (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-hypothesis-tester-v2",
    "name": "Scientific Hypothesizer (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-cot-analytical-v3",
    "name": "Chain-of-Thought Analyst (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-deductive-logic-v3",
    "name": "Deductive Logic Engine (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-causal-inference-v3",
    "name": "Causal Inference Model (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-systems-thinker-v3",
    "name": "Systems Architecture Thinker (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-fallacy-detector-v3",
    "name": "Cognitive Auditor (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-decision-matrix-v3",
    "name": "Decision Matrix Pro (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-hypothesis-tester-v3",
    "name": "Scientific Hypothesizer (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-cot-analytical-v4",
    "name": "Chain-of-Thought Analyst (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-deductive-logic-v4",
    "name": "Deductive Logic Engine (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-causal-inference-v4",
    "name": "Causal Inference Model (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-systems-thinker-v4",
    "name": "Systems Architecture Thinker (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-fallacy-detector-v4",
    "name": "Cognitive Auditor (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-decision-matrix-v4",
    "name": "Decision Matrix Pro (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-hypothesis-tester-v4",
    "name": "Scientific Hypothesizer (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-cot-analytical-v5",
    "name": "Chain-of-Thought Analyst (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-deductive-logic-v5",
    "name": "Deductive Logic Engine (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-causal-inference-v5",
    "name": "Causal Inference Model (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-systems-thinker-v5",
    "name": "Systems Architecture Thinker (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-fallacy-detector-v5",
    "name": "Cognitive Auditor (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-decision-matrix-v5",
    "name": "Decision Matrix Pro (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-hypothesis-tester-v5",
    "name": "Scientific Hypothesizer (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-cot-analytical-v6",
    "name": "Chain-of-Thought Analyst (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-deductive-logic-v6",
    "name": "Deductive Logic Engine (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-causal-inference-v6",
    "name": "Causal Inference Model (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-systems-thinker-v6",
    "name": "Systems Architecture Thinker (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-fallacy-detector-v6",
    "name": "Cognitive Auditor (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-decision-matrix-v6",
    "name": "Decision Matrix Pro (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-hypothesis-tester-v6",
    "name": "Scientific Hypothesizer (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-cot-analytical-v7",
    "name": "Chain-of-Thought Analyst (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-deductive-logic-v7",
    "name": "Deductive Logic Engine (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-causal-inference-v7",
    "name": "Causal Inference Model (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-systems-thinker-v7",
    "name": "Systems Architecture Thinker (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-fallacy-detector-v7",
    "name": "Cognitive Auditor (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-decision-matrix-v7",
    "name": "Decision Matrix Pro (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-hypothesis-tester-v7",
    "name": "Scientific Hypothesizer (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-cot-analytical-v8",
    "name": "Chain-of-Thought Analyst (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-deductive-logic-v8",
    "name": "Deductive Logic Engine (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-causal-inference-v8",
    "name": "Causal Inference Model (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-systems-thinker-v8",
    "name": "Systems Architecture Thinker (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-fallacy-detector-v8",
    "name": "Cognitive Auditor (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-reason-decision-matrix-v8",
    "name": "Decision Matrix Pro (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Advanced Reasoning",
    "tier": "code",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-fullstack-architect",
    "name": "Fullstack Architect",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-python-systems",
    "name": "Python Systems Engineer",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-rust-memory",
    "name": "Rust & Systems Safety",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-database-internals",
    "name": "Database & SQL Specialist",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-devops-cloud",
    "name": "Cloud & Kubernetes Engineer",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-frontend-perf",
    "name": "React & Web Performance",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-security-auditor",
    "name": "Application Security Auditor",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-refactor-clean",
    "name": "Refactoring & Clean Code",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-fullstack-architect-v2",
    "name": "Fullstack Architect (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-python-systems-v2",
    "name": "Python Systems Engineer (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-rust-memory-v2",
    "name": "Rust & Systems Safety (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-database-internals-v2",
    "name": "Database & SQL Specialist (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-devops-cloud-v2",
    "name": "Cloud & Kubernetes Engineer (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-frontend-perf-v2",
    "name": "React & Web Performance (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-security-auditor-v2",
    "name": "Application Security Auditor (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-refactor-clean-v2",
    "name": "Refactoring & Clean Code (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-fullstack-architect-v3",
    "name": "Fullstack Architect (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-python-systems-v3",
    "name": "Python Systems Engineer (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-rust-memory-v3",
    "name": "Rust & Systems Safety (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-database-internals-v3",
    "name": "Database & SQL Specialist (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-devops-cloud-v3",
    "name": "Cloud & Kubernetes Engineer (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-frontend-perf-v3",
    "name": "React & Web Performance (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-security-auditor-v3",
    "name": "Application Security Auditor (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-refactor-clean-v3",
    "name": "Refactoring & Clean Code (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-fullstack-architect-v4",
    "name": "Fullstack Architect (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-python-systems-v4",
    "name": "Python Systems Engineer (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-rust-memory-v4",
    "name": "Rust & Systems Safety (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-database-internals-v4",
    "name": "Database & SQL Specialist (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-devops-cloud-v4",
    "name": "Cloud & Kubernetes Engineer (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-frontend-perf-v4",
    "name": "React & Web Performance (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-security-auditor-v4",
    "name": "Application Security Auditor (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-refactor-clean-v4",
    "name": "Refactoring & Clean Code (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-fullstack-architect-v5",
    "name": "Fullstack Architect (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-python-systems-v5",
    "name": "Python Systems Engineer (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-rust-memory-v5",
    "name": "Rust & Systems Safety (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-database-internals-v5",
    "name": "Database & SQL Specialist (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-devops-cloud-v5",
    "name": "Cloud & Kubernetes Engineer (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-frontend-perf-v5",
    "name": "React & Web Performance (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-security-auditor-v5",
    "name": "Application Security Auditor (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-refactor-clean-v5",
    "name": "Refactoring & Clean Code (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-fullstack-architect-v6",
    "name": "Fullstack Architect (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-python-systems-v6",
    "name": "Python Systems Engineer (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-rust-memory-v6",
    "name": "Rust & Systems Safety (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-database-internals-v6",
    "name": "Database & SQL Specialist (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-devops-cloud-v6",
    "name": "Cloud & Kubernetes Engineer (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-frontend-perf-v6",
    "name": "React & Web Performance (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-security-auditor-v6",
    "name": "Application Security Auditor (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-refactor-clean-v6",
    "name": "Refactoring & Clean Code (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-fullstack-architect-v7",
    "name": "Fullstack Architect (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-python-systems-v7",
    "name": "Python Systems Engineer (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-rust-memory-v7",
    "name": "Rust & Systems Safety (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-database-internals-v7",
    "name": "Database & SQL Specialist (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-devops-cloud-v7",
    "name": "Cloud & Kubernetes Engineer (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-frontend-perf-v7",
    "name": "React & Web Performance (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-security-auditor-v7",
    "name": "Application Security Auditor (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-refactor-clean-v7",
    "name": "Refactoring & Clean Code (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-fullstack-architect-v8",
    "name": "Fullstack Architect (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-python-systems-v8",
    "name": "Python Systems Engineer (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-rust-memory-v8",
    "name": "Rust & Systems Safety (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-database-internals-v8",
    "name": "Database & SQL Specialist (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-devops-cloud-v8",
    "name": "Cloud & Kubernetes Engineer (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-frontend-perf-v8",
    "name": "React & Web Performance (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-security-auditor-v8",
    "name": "Application Security Auditor (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-refactor-clean-v8",
    "name": "Refactoring & Clean Code (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-fullstack-architect-v9",
    "name": "Fullstack Architect (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-python-systems-v9",
    "name": "Python Systems Engineer (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-rust-memory-v9",
    "name": "Rust & Systems Safety (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-database-internals-v9",
    "name": "Database & SQL Specialist (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-devops-cloud-v9",
    "name": "Cloud & Kubernetes Engineer (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-frontend-perf-v9",
    "name": "React & Web Performance (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-security-auditor-v9",
    "name": "Application Security Auditor (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-refactor-clean-v9",
    "name": "Refactoring & Clean Code (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-fullstack-architect-v10",
    "name": "Fullstack Architect (Tier 10)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-python-systems-v10",
    "name": "Python Systems Engineer (Tier 10)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-rust-memory-v10",
    "name": "Rust & Systems Safety (Tier 10)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-code-database-internals-v10",
    "name": "Database & SQL Specialist (Tier 10)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Coding & Software Engineering",
    "tier": "code",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-workflow-runner",
    "name": "Autonomous Workflow Orchestrator",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-repo-synthesizer",
    "name": "Repo-Level Agent",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-schema-tooler",
    "name": "Strict Schema Invoker",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-sandbox-debugger",
    "name": "Runtime Sandbox Debugger",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-agent-swarm",
    "name": "Subagent Team Lead",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-workflow-runner-v2",
    "name": "Autonomous Workflow Orchestrator (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-repo-synthesizer-v2",
    "name": "Repo-Level Agent (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-schema-tooler-v2",
    "name": "Strict Schema Invoker (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-sandbox-debugger-v2",
    "name": "Runtime Sandbox Debugger (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-agent-swarm-v2",
    "name": "Subagent Team Lead (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-workflow-runner-v3",
    "name": "Autonomous Workflow Orchestrator (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-repo-synthesizer-v3",
    "name": "Repo-Level Agent (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-schema-tooler-v3",
    "name": "Strict Schema Invoker (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-sandbox-debugger-v3",
    "name": "Runtime Sandbox Debugger (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-agent-swarm-v3",
    "name": "Subagent Team Lead (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-workflow-runner-v4",
    "name": "Autonomous Workflow Orchestrator (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-repo-synthesizer-v4",
    "name": "Repo-Level Agent (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-schema-tooler-v4",
    "name": "Strict Schema Invoker (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-sandbox-debugger-v4",
    "name": "Runtime Sandbox Debugger (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-agent-swarm-v4",
    "name": "Subagent Team Lead (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-workflow-runner-v5",
    "name": "Autonomous Workflow Orchestrator (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-repo-synthesizer-v5",
    "name": "Repo-Level Agent (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-schema-tooler-v5",
    "name": "Strict Schema Invoker (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-sandbox-debugger-v5",
    "name": "Runtime Sandbox Debugger (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-agent-swarm-v5",
    "name": "Subagent Team Lead (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-workflow-runner-v6",
    "name": "Autonomous Workflow Orchestrator (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-repo-synthesizer-v6",
    "name": "Repo-Level Agent (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-schema-tooler-v6",
    "name": "Strict Schema Invoker (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-sandbox-debugger-v6",
    "name": "Runtime Sandbox Debugger (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-agent-swarm-v6",
    "name": "Subagent Team Lead (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-workflow-runner-v7",
    "name": "Autonomous Workflow Orchestrator (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-repo-synthesizer-v7",
    "name": "Repo-Level Agent (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-schema-tooler-v7",
    "name": "Strict Schema Invoker (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-sandbox-debugger-v7",
    "name": "Runtime Sandbox Debugger (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-agent-swarm-v7",
    "name": "Subagent Team Lead (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-workflow-runner-v8",
    "name": "Autonomous Workflow Orchestrator (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-repo-synthesizer-v8",
    "name": "Repo-Level Agent (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-schema-tooler-v8",
    "name": "Strict Schema Invoker (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-sandbox-debugger-v8",
    "name": "Runtime Sandbox Debugger (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-agent-swarm-v8",
    "name": "Subagent Team Lead (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-workflow-runner-v9",
    "name": "Autonomous Workflow Orchestrator (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-repo-synthesizer-v9",
    "name": "Repo-Level Agent (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-schema-tooler-v9",
    "name": "Strict Schema Invoker (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-sandbox-debugger-v9",
    "name": "Runtime Sandbox Debugger (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-agent-agent-swarm-v9",
    "name": "Subagent Team Lead (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Agentic Coding & Tools",
    "tier": "standard",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-literature-review",
    "name": "Literature Reviewer",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-competitive-intel",
    "name": "Market & Competitive Intel",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-data-synthesizer",
    "name": "Qualitative Data Synthesizer",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-meta-analyst",
    "name": "Meta-Analysis Assistant",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-deep-investigator",
    "name": "Deep Research Specialist",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-literature-review-v2",
    "name": "Literature Reviewer (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-competitive-intel-v2",
    "name": "Market & Competitive Intel (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-data-synthesizer-v2",
    "name": "Qualitative Data Synthesizer (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-meta-analyst-v2",
    "name": "Meta-Analysis Assistant (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-deep-investigator-v2",
    "name": "Deep Research Specialist (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-literature-review-v3",
    "name": "Literature Reviewer (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-competitive-intel-v3",
    "name": "Market & Competitive Intel (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-data-synthesizer-v3",
    "name": "Qualitative Data Synthesizer (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-meta-analyst-v3",
    "name": "Meta-Analysis Assistant (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-deep-investigator-v3",
    "name": "Deep Research Specialist (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-literature-review-v4",
    "name": "Literature Reviewer (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-competitive-intel-v4",
    "name": "Market & Competitive Intel (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-data-synthesizer-v4",
    "name": "Qualitative Data Synthesizer (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-meta-analyst-v4",
    "name": "Meta-Analysis Assistant (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-deep-investigator-v4",
    "name": "Deep Research Specialist (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-literature-review-v5",
    "name": "Literature Reviewer (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-competitive-intel-v5",
    "name": "Market & Competitive Intel (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-data-synthesizer-v5",
    "name": "Qualitative Data Synthesizer (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-meta-analyst-v5",
    "name": "Meta-Analysis Assistant (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-deep-investigator-v5",
    "name": "Deep Research Specialist (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-literature-review-v6",
    "name": "Literature Reviewer (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-competitive-intel-v6",
    "name": "Market & Competitive Intel (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-data-synthesizer-v6",
    "name": "Qualitative Data Synthesizer (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-meta-analyst-v6",
    "name": "Meta-Analysis Assistant (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-deep-investigator-v6",
    "name": "Deep Research Specialist (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-literature-review-v7",
    "name": "Literature Reviewer (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-competitive-intel-v7",
    "name": "Market & Competitive Intel (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-data-synthesizer-v7",
    "name": "Qualitative Data Synthesizer (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-meta-analyst-v7",
    "name": "Meta-Analysis Assistant (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-deep-investigator-v7",
    "name": "Deep Research Specialist (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-literature-review-v8",
    "name": "Literature Reviewer (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-competitive-intel-v8",
    "name": "Market & Competitive Intel (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-data-synthesizer-v8",
    "name": "Qualitative Data Synthesizer (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-meta-analyst-v8",
    "name": "Meta-Analysis Assistant (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-deep-investigator-v8",
    "name": "Deep Research Specialist (Tier 8)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-literature-review-v9",
    "name": "Literature Reviewer (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-competitive-intel-v9",
    "name": "Market & Competitive Intel (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-data-synthesizer-v9",
    "name": "Qualitative Data Synthesizer (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-research-meta-analyst-v9",
    "name": "Meta-Analysis Assistant (Tier 9)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Research & Analysis",
    "tier": "standard",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-discrete-proofs",
    "name": "Discrete Math & Proof Assistant",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-calculus-analysis",
    "name": "Continuous Calculus & ODEs",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-linear-algebra",
    "name": "Linear Algebra & Tensor Math",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-physics-simulator",
    "name": "Classical & Quantum Physics",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-bio-cheminfo",
    "name": "Biochemistry & Molecular Modeling",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-discrete-proofs-v2",
    "name": "Discrete Math & Proof Assistant (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-calculus-analysis-v2",
    "name": "Continuous Calculus & ODEs (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-linear-algebra-v2",
    "name": "Linear Algebra & Tensor Math (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-physics-simulator-v2",
    "name": "Classical & Quantum Physics (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-bio-cheminfo-v2",
    "name": "Biochemistry & Molecular Modeling (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-discrete-proofs-v3",
    "name": "Discrete Math & Proof Assistant (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-calculus-analysis-v3",
    "name": "Continuous Calculus & ODEs (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-linear-algebra-v3",
    "name": "Linear Algebra & Tensor Math (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-physics-simulator-v3",
    "name": "Classical & Quantum Physics (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-bio-cheminfo-v3",
    "name": "Biochemistry & Molecular Modeling (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-discrete-proofs-v4",
    "name": "Discrete Math & Proof Assistant (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-calculus-analysis-v4",
    "name": "Continuous Calculus & ODEs (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-linear-algebra-v4",
    "name": "Linear Algebra & Tensor Math (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-physics-simulator-v4",
    "name": "Classical & Quantum Physics (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-bio-cheminfo-v4",
    "name": "Biochemistry & Molecular Modeling (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-discrete-proofs-v5",
    "name": "Discrete Math & Proof Assistant (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-calculus-analysis-v5",
    "name": "Continuous Calculus & ODEs (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-linear-algebra-v5",
    "name": "Linear Algebra & Tensor Math (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-physics-simulator-v5",
    "name": "Classical & Quantum Physics (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-bio-cheminfo-v5",
    "name": "Biochemistry & Molecular Modeling (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-discrete-proofs-v6",
    "name": "Discrete Math & Proof Assistant (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-calculus-analysis-v6",
    "name": "Continuous Calculus & ODEs (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-linear-algebra-v6",
    "name": "Linear Algebra & Tensor Math (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-physics-simulator-v6",
    "name": "Classical & Quantum Physics (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-math-bio-cheminfo-v6",
    "name": "Biochemistry & Molecular Modeling (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Mathematics & Science",
    "tier": "standard",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-tamil-dravidian",
    "name": "Tamil & Dravidian Scholar",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-indic-translingual",
    "name": "Indic Polyglot",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-euro-multilingual",
    "name": "European Romance & Germanic",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-cjk-specialist",
    "name": "East Asian CJK Specialist",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-arabic-mena",
    "name": "Arabic & MENA Dialectics",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-tamil-dravidian-v2",
    "name": "Tamil & Dravidian Scholar (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-indic-translingual-v2",
    "name": "Indic Polyglot (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-euro-multilingual-v2",
    "name": "European Romance & Germanic (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-cjk-specialist-v2",
    "name": "East Asian CJK Specialist (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-arabic-mena-v2",
    "name": "Arabic & MENA Dialectics (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-tamil-dravidian-v3",
    "name": "Tamil & Dravidian Scholar (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-indic-translingual-v3",
    "name": "Indic Polyglot (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-euro-multilingual-v3",
    "name": "European Romance & Germanic (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-cjk-specialist-v3",
    "name": "East Asian CJK Specialist (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-arabic-mena-v3",
    "name": "Arabic & MENA Dialectics (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-tamil-dravidian-v4",
    "name": "Tamil & Dravidian Scholar (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-indic-translingual-v4",
    "name": "Indic Polyglot (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-euro-multilingual-v4",
    "name": "European Romance & Germanic (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-cjk-specialist-v4",
    "name": "East Asian CJK Specialist (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-arabic-mena-v4",
    "name": "Arabic & MENA Dialectics (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-tamil-dravidian-v5",
    "name": "Tamil & Dravidian Scholar (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-indic-translingual-v5",
    "name": "Indic Polyglot (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-euro-multilingual-v5",
    "name": "European Romance & Germanic (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-cjk-specialist-v5",
    "name": "East Asian CJK Specialist (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-arabic-mena-v5",
    "name": "Arabic & MENA Dialectics (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-tamil-dravidian-v6",
    "name": "Tamil & Dravidian Scholar (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-indic-translingual-v6",
    "name": "Indic Polyglot (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-euro-multilingual-v6",
    "name": "European Romance & Germanic (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-cjk-specialist-v6",
    "name": "East Asian CJK Specialist (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-arabic-mena-v6",
    "name": "Arabic & MENA Dialectics (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-tamil-dravidian-v7",
    "name": "Tamil & Dravidian Scholar (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-indic-translingual-v7",
    "name": "Indic Polyglot (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-lang-euro-multilingual-v7",
    "name": "European Romance & Germanic (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Multilingual & Indic AI",
    "tier": "standard",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-ocr-doc-scanner",
    "name": "OCR Document Intelligence",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-chart-diagram",
    "name": "Chart & Architecture Visualizer",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-ui-ux-auditor",
    "name": "UI/UX Screen Inspector",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-infographic-parser",
    "name": "Infographic Insight Extractor",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-scene-descriptor",
    "name": "Spatial & Scene Comprehender",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v2",
    "name": "OCR Document Intelligence (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-chart-diagram-v2",
    "name": "Chart & Architecture Visualizer (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-ui-ux-auditor-v2",
    "name": "UI/UX Screen Inspector (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-infographic-parser-v2",
    "name": "Infographic Insight Extractor (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-scene-descriptor-v2",
    "name": "Spatial & Scene Comprehender (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v3",
    "name": "OCR Document Intelligence (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-chart-diagram-v3",
    "name": "Chart & Architecture Visualizer (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-ui-ux-auditor-v3",
    "name": "UI/UX Screen Inspector (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-infographic-parser-v3",
    "name": "Infographic Insight Extractor (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-scene-descriptor-v3",
    "name": "Spatial & Scene Comprehender (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v4",
    "name": "OCR Document Intelligence (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-chart-diagram-v4",
    "name": "Chart & Architecture Visualizer (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-ui-ux-auditor-v4",
    "name": "UI/UX Screen Inspector (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-infographic-parser-v4",
    "name": "Infographic Insight Extractor (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-scene-descriptor-v4",
    "name": "Spatial & Scene Comprehender (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v5",
    "name": "OCR Document Intelligence (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-chart-diagram-v5",
    "name": "Chart & Architecture Visualizer (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-ui-ux-auditor-v5",
    "name": "UI/UX Screen Inspector (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-infographic-parser-v5",
    "name": "Infographic Insight Extractor (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-scene-descriptor-v5",
    "name": "Spatial & Scene Comprehender (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v6",
    "name": "OCR Document Intelligence (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-chart-diagram-v6",
    "name": "Chart & Architecture Visualizer (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-ui-ux-auditor-v6",
    "name": "UI/UX Screen Inspector (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-infographic-parser-v6",
    "name": "Infographic Insight Extractor (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-scene-descriptor-v6",
    "name": "Spatial & Scene Comprehender (Tier 6)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v7",
    "name": "OCR Document Intelligence (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-chart-diagram-v7",
    "name": "Chart & Architecture Visualizer (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-vision-ui-ux-auditor-v7",
    "name": "UI/UX Screen Inspector (Tier 7)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Vision & Document Intelligence",
    "tier": "standard",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-instant-reply",
    "name": "Instant Customer Reply",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-realtime-moderator",
    "name": "Realtime Stream Moderator",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-micro-parser",
    "name": "Micro-Payload Parser",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-quick-editor",
    "name": "Instant Grammar & Polish",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Rapid spellcheck, active voice conversion, and sentence rhythm polishing. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-autocomplete-hint",
    "name": "Autocomplete Code Predictor",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Ultra-low latency next-token suggestions for interactive editor autocompletion. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-instant-reply-v2",
    "name": "Instant Customer Reply (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-realtime-moderator-v2",
    "name": "Realtime Stream Moderator (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-micro-parser-v2",
    "name": "Micro-Payload Parser (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-quick-editor-v2",
    "name": "Instant Grammar & Polish (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Rapid spellcheck, active voice conversion, and sentence rhythm polishing. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-autocomplete-hint-v2",
    "name": "Autocomplete Code Predictor (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Ultra-low latency next-token suggestions for interactive editor autocompletion. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-instant-reply-v3",
    "name": "Instant Customer Reply (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-realtime-moderator-v3",
    "name": "Realtime Stream Moderator (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-micro-parser-v3",
    "name": "Micro-Payload Parser (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-quick-editor-v3",
    "name": "Instant Grammar & Polish (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Rapid spellcheck, active voice conversion, and sentence rhythm polishing. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-autocomplete-hint-v3",
    "name": "Autocomplete Code Predictor (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Ultra-low latency next-token suggestions for interactive editor autocompletion. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-instant-reply-v4",
    "name": "Instant Customer Reply (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-realtime-moderator-v4",
    "name": "Realtime Stream Moderator (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-micro-parser-v4",
    "name": "Micro-Payload Parser (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-quick-editor-v4",
    "name": "Instant Grammar & Polish (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Rapid spellcheck, active voice conversion, and sentence rhythm polishing. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-autocomplete-hint-v4",
    "name": "Autocomplete Code Predictor (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Ultra-low latency next-token suggestions for interactive editor autocompletion. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-instant-reply-v5",
    "name": "Instant Customer Reply (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-realtime-moderator-v5",
    "name": "Realtime Stream Moderator (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-fast-micro-parser-v5",
    "name": "Micro-Payload Parser (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Fast-Response AI",
    "tier": "lite",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-million-token-auditor",
    "name": "1M+ Token Corpus Auditor",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-codebase-indexer",
    "name": "Monorepo Codebase Indexer",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-legal-contract-depot",
    "name": "Multi-Contract Master Agreement",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-financial-ledger-book",
    "name": "Annual Report & 10-K Synthesizer",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Audits GAAP reconciliations and footnote disclosures across multi-year SEC filings. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-historical-archive",
    "name": "Full-Transcript Meeting Digest",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Synthesizes hundreds of hours of raw audio transcripts into categorized decisions. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-million-token-auditor-v2",
    "name": "1M+ Token Corpus Auditor (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-codebase-indexer-v2",
    "name": "Monorepo Codebase Indexer (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-legal-contract-depot-v2",
    "name": "Multi-Contract Master Agreement (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-financial-ledger-book-v2",
    "name": "Annual Report & 10-K Synthesizer (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Audits GAAP reconciliations and footnote disclosures across multi-year SEC filings. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-historical-archive-v2",
    "name": "Full-Transcript Meeting Digest (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Synthesizes hundreds of hours of raw audio transcripts into categorized decisions. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-million-token-auditor-v3",
    "name": "1M+ Token Corpus Auditor (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-codebase-indexer-v3",
    "name": "Monorepo Codebase Indexer (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-legal-contract-depot-v3",
    "name": "Multi-Contract Master Agreement (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-financial-ledger-book-v3",
    "name": "Annual Report & 10-K Synthesizer (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Audits GAAP reconciliations and footnote disclosures across multi-year SEC filings. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-historical-archive-v3",
    "name": "Full-Transcript Meeting Digest (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Synthesizes hundreds of hours of raw audio transcripts into categorized decisions. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-million-token-auditor-v4",
    "name": "1M+ Token Corpus Auditor (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-codebase-indexer-v4",
    "name": "Monorepo Codebase Indexer (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-legal-contract-depot-v4",
    "name": "Multi-Contract Master Agreement (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-financial-ledger-book-v4",
    "name": "Annual Report & 10-K Synthesizer (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Audits GAAP reconciliations and footnote disclosures across multi-year SEC filings. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-historical-archive-v4",
    "name": "Full-Transcript Meeting Digest (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Synthesizes hundreds of hours of raw audio transcripts into categorized decisions. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-million-token-auditor-v5",
    "name": "1M+ Token Corpus Auditor (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-codebase-indexer-v5",
    "name": "Monorepo Codebase Indexer (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-ctx-legal-contract-depot-v5",
    "name": "Multi-Contract Master Agreement (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Long-Context AI",
    "tier": "standard",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-fiction-worldbuilder",
    "name": "Fiction & Worldbuilder",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-screenplay-dialogue",
    "name": "Screenplay & Scene Writer",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-poetic-artisan",
    "name": "Poetic & Metaphoric Artisan",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-game-lore-craftsman",
    "name": "Game Lore & NPC Dialogue",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-fiction-worldbuilder-v2",
    "name": "Fiction & Worldbuilder (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-screenplay-dialogue-v2",
    "name": "Screenplay & Scene Writer (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-poetic-artisan-v2",
    "name": "Poetic & Metaphoric Artisan (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-game-lore-craftsman-v2",
    "name": "Game Lore & NPC Dialogue (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-fiction-worldbuilder-v3",
    "name": "Fiction & Worldbuilder (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-screenplay-dialogue-v3",
    "name": "Screenplay & Scene Writer (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-poetic-artisan-v3",
    "name": "Poetic & Metaphoric Artisan (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-game-lore-craftsman-v3",
    "name": "Game Lore & NPC Dialogue (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-fiction-worldbuilder-v4",
    "name": "Fiction & Worldbuilder (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-screenplay-dialogue-v4",
    "name": "Screenplay & Scene Writer (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-poetic-artisan-v4",
    "name": "Poetic & Metaphoric Artisan (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-game-lore-craftsman-v4",
    "name": "Game Lore & NPC Dialogue (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-fiction-worldbuilder-v5",
    "name": "Fiction & Worldbuilder (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-screenplay-dialogue-v5",
    "name": "Screenplay & Scene Writer (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-poetic-artisan-v5",
    "name": "Poetic & Metaphoric Artisan (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-creative-game-lore-craftsman-v5",
    "name": "Game Lore & NPC Dialogue (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Creative Writing",
    "tier": "standard",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-board-memo",
    "name": "Board Memo & Investor Update",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-sales-pitch-craft",
    "name": "Enterprise Sales Strategist",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-product-spec-lead",
    "name": "PRD & Product Spec Lead",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-board-memo-v2",
    "name": "Board Memo & Investor Update (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-sales-pitch-craft-v2",
    "name": "Enterprise Sales Strategist (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-product-spec-lead-v2",
    "name": "PRD & Product Spec Lead (Tier 2)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-board-memo-v3",
    "name": "Board Memo & Investor Update (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-sales-pitch-craft-v3",
    "name": "Enterprise Sales Strategist (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-product-spec-lead-v3",
    "name": "PRD & Product Spec Lead (Tier 3)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-board-memo-v4",
    "name": "Board Memo & Investor Update (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-sales-pitch-craft-v4",
    "name": "Enterprise Sales Strategist (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-product-spec-lead-v4",
    "name": "PRD & Product Spec Lead (Tier 4)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-board-memo-v5",
    "name": "Board Memo & Investor Update (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-sales-pitch-craft-v5",
    "name": "Enterprise Sales Strategist (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  },
  {
    "id": "pr-biz-product-spec-lead-v5",
    "name": "PRD & Product Spec Lead (Tier 5)",
    "object": "model",
    "created": 1710000000,
    "owned_by": "prorouter",
    "category": "Business & Productivity",
    "tier": "standard",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "pricing": {
      "input_usd_per_million": 0,
      "output_usd_per_million": 0
    }
  }
];
