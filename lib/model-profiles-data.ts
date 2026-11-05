/**
 * Pre-compiled 500+ Frontend Model Profiles dataset.
 * Synchronized with the central dynamic pricing engine and ModelProfileRegistry.
 * STRICT POLICY: Only deepseek-v4.1-flash and qwen3.8-27b receive 48h free promotion.
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
    "canonicalModelId": "claude-3-5-sonnet",
    "name": "Claude Sonnet",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Anthropic Claude Sonnet — balanced intelligence, high coding precision, and nuanced creative writing.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 37715,
      "outputPerMillion": 188572,
      "cachedInputPerMillion": 18857,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 4.7143,
      "outputPerMillion": 23.5714,
      "cachedInputPerMillion": 2.3571
    },
    "upstreamCostUsd": {
      "inputPerMillion": 3,
      "outputPerMillion": 15,
      "cachedInputPerMillion": 1.5
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 88.7,
        "source": "Anthropic Technical Report",
        "evaluationDate": "2024-10-22"
      },
      {
        "name": "HumanEval",
        "score": 92,
        "source": "Anthropic Evaluation",
        "evaluationDate": "2024-10-22"
      }
    ]
  },
  {
    "id": "claude-opus",
    "slug": "claude-opus",
    "canonicalModelId": "claude-3-opus",
    "name": "Claude Opus",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Anthropic Claude Opus — deep analysis, nuanced reasoning, and complex task decomposition.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 62857,
      "outputPerMillion": 314286,
      "cachedInputPerMillion": 31429,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 7.8571,
      "outputPerMillion": 39.2857,
      "cachedInputPerMillion": 3.9285
    },
    "upstreamCostUsd": {
      "inputPerMillion": 5,
      "outputPerMillion": 25,
      "cachedInputPerMillion": 2.5
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 88.2,
        "source": "Anthropic Benchmark",
        "evaluationDate": "2024-03-04"
      },
      {
        "name": "HumanEval",
        "score": 84.9,
        "source": "Anthropic Benchmark",
        "evaluationDate": "2024-03-04"
      }
    ]
  },
  {
    "id": "claude-opus-5",
    "slug": "claude-opus-5",
    "canonicalModelId": "claude-opus-5",
    "name": "Claude Opus 5",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Anthropic Claude Opus 5 — next-generation frontier intelligence for research and coding.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 75429,
      "outputPerMillion": 377144,
      "cachedInputPerMillion": 37715,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 9.4286,
      "outputPerMillion": 47.1429,
      "cachedInputPerMillion": 4.7143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 6,
      "outputPerMillion": 30,
      "cachedInputPerMillion": 3
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 250000,
    "maxOutputTokens": 64000,
    "rank": 12,
    "popularity": 9870,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "gemini-pro",
    "slug": "gemini-pro",
    "canonicalModelId": "gemini-1.5-pro",
    "name": "Gemini Pro",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Google Gemini Pro — powerful multimodal model with vast context window and world knowledge.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 15715,
      "outputPerMillion": 62857,
      "cachedInputPerMillion": 7857,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 1.9643,
      "outputPerMillion": 7.8571,
      "cachedInputPerMillion": 0.9821
    },
    "upstreamCostUsd": {
      "inputPerMillion": 1.25,
      "outputPerMillion": 5,
      "cachedInputPerMillion": 0.625
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "maxOutputTokens": 64000,
    "rank": 13,
    "popularity": 9855,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 85.9,
        "source": "Google DeepMind Report",
        "evaluationDate": "2024-08-15"
      }
    ]
  },
  {
    "id": "grok",
    "slug": "grok",
    "canonicalModelId": "grok-2",
    "name": "Grok",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "xAI Grok — direct, truthful AI with real-time insight and witty demeanor.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 25144,
      "outputPerMillion": 125715,
      "cachedInputPerMillion": 12572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 3.1429,
      "outputPerMillion": 15.7143,
      "cachedInputPerMillion": 1.5715
    },
    "upstreamCostUsd": {
      "inputPerMillion": 2,
      "outputPerMillion": 10,
      "cachedInputPerMillion": 1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 64000,
    "rank": 14,
    "popularity": 9840,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "mistral-large",
    "slug": "mistral-large",
    "canonicalModelId": "mistral-large-2407",
    "name": "Mistral Large",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Mistral Large — flagship model for complex multilingual reasoning and precise instruction following.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 25144,
      "outputPerMillion": 75429,
      "cachedInputPerMillion": 12572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 3.1429,
      "outputPerMillion": 9.4286,
      "cachedInputPerMillion": 1.5715
    },
    "upstreamCostUsd": {
      "inputPerMillion": 2,
      "outputPerMillion": 6,
      "cachedInputPerMillion": 1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 64000,
    "rank": 15,
    "popularity": 9825,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 84,
        "source": "Mistral AI Report",
        "evaluationDate": "2024-07-24"
      }
    ]
  },
  {
    "id": "devstral-24b",
    "slug": "devstral-24b",
    "canonicalModelId": "devstral-24b",
    "name": "Devstral 24B",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Mistral Devstral 24B — developer-tuned open weights optimized for software engineering workflows.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 128000,
    "maxOutputTokens": 64000,
    "rank": 16,
    "popularity": 9810,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "HumanEval",
        "score": 79.2,
        "source": "Mistral Benchmark",
        "evaluationDate": "2024-09-10"
      }
    ]
  },
  {
    "id": "gpt-6.1-sol",
    "slug": "gpt-6.1-sol",
    "canonicalModelId": "gpt-6.1-sol",
    "name": "GPT-6.1 Sol",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "OpenAI GPT-6.1 Sol — frontier cloud model optimized for high-speed reasoning and synthesis.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 31429,
      "outputPerMillion": 125715,
      "cachedInputPerMillion": 15715,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 3.9286,
      "outputPerMillion": 15.7143,
      "cachedInputPerMillion": 1.9643
    },
    "upstreamCostUsd": {
      "inputPerMillion": 2.5,
      "outputPerMillion": 10,
      "cachedInputPerMillion": 1.25
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 256000,
    "maxOutputTokens": 64000,
    "rank": 17,
    "popularity": 9795,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "gpt-6.1-terra",
    "slug": "gpt-6.1-terra",
    "canonicalModelId": "gpt-6.1-terra",
    "name": "GPT-6.1 Terra",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "OpenAI GPT-6.1 Terra — flagship multimodal intelligence with deep scientific knowledge.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 44000,
      "outputPerMillion": 176000,
      "cachedInputPerMillion": 22000,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 5.5,
      "outputPerMillion": 22,
      "cachedInputPerMillion": 2.75
    },
    "upstreamCostUsd": {
      "inputPerMillion": 3.5,
      "outputPerMillion": 14,
      "cachedInputPerMillion": 1.75
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 256000,
    "maxOutputTokens": 64000,
    "rank": 18,
    "popularity": 9780,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "gpt-6-luna",
    "slug": "gpt-6-luna",
    "canonicalModelId": "gpt-6-luna",
    "name": "GPT-6 Luna",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "OpenAI GPT-6 Luna — low-latency next-gen assistant for rapid task execution.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 20115,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 2.5143,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.6,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 256000,
    "maxOutputTokens": 64000,
    "rank": 19,
    "popularity": 9765,
    "rating": 98,
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "kimi-k3",
    "slug": "kimi-k3",
    "canonicalModelId": "kimi-k3",
    "name": "Kimi K3",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Moonshot Kimi K3 — ultra long-context frontier model with high-speed reasoning and deep comprehension.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 10057,
      "outputPerMillion": 30172,
      "cachedInputPerMillion": 5029,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 1.2571,
      "outputPerMillion": 3.7714,
      "cachedInputPerMillion": 0.6286
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.8,
      "outputPerMillion": 2.4,
      "cachedInputPerMillion": 0.4
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 200000,
    "maxOutputTokens": 64000,
    "rank": 20,
    "popularity": 9750,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "kimi-k2.7-code",
    "slug": "kimi-k2.7-code",
    "canonicalModelId": "kimi-k2.7-code",
    "name": "Kimi K2.7 Code",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Moonshot Kimi K2.7 Code — specialized code intelligence and agentic workflow automation.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 8800,
      "outputPerMillion": 26400,
      "cachedInputPerMillion": 4400,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 1.1,
      "outputPerMillion": 3.3,
      "cachedInputPerMillion": 0.55
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.7,
      "outputPerMillion": 2.1,
      "cachedInputPerMillion": 0.35
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 200000,
    "maxOutputTokens": 64000,
    "rank": 21,
    "popularity": 9735,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "glm-5.3",
    "slug": "glm-5.3",
    "canonicalModelId": "glm-5.3",
    "name": "GLM-5.3",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Zhipu GLM-5.3 — flagship bilingual reasoning, analytical thinking, and tool execution.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 7544,
      "outputPerMillion": 22629,
      "cachedInputPerMillion": 3772,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.9429,
      "outputPerMillion": 2.8286,
      "cachedInputPerMillion": 0.4714
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.6,
      "outputPerMillion": 1.8,
      "cachedInputPerMillion": 0.3
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 200000,
    "maxOutputTokens": 128000,
    "rank": 22,
    "popularity": 9720,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "glm-5.3-flash",
    "slug": "glm-5.3-flash",
    "canonicalModelId": "glm-5.3-flash",
    "name": "GLM-5.3-Flash",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Zhipu GLM 5.3 Flash — fast multilingual reasoning with high-speed tool execution.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 200000,
    "maxOutputTokens": 128000,
    "rank": 23,
    "popularity": 9705,
    "rating": 98,
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "mimo-v2.6-pro",
    "slug": "mimo-v2.6-pro",
    "canonicalModelId": "mimo-v2.6-pro",
    "name": "MiMo-V2.6-Pro",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Xiaomi MiMo V2.6 Pro — flagship multimodal reasoning model for advanced synthesis and coding.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 11315,
      "outputPerMillion": 33944,
      "cachedInputPerMillion": 5657,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 1.4143,
      "outputPerMillion": 4.2429,
      "cachedInputPerMillion": 0.7071
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.9,
      "outputPerMillion": 2.7,
      "cachedInputPerMillion": 0.45
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "maxOutputTokens": 131072,
    "rank": 24,
    "popularity": 9690,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "mimo-v2.6-flash",
    "slug": "mimo-v2.6-flash",
    "canonicalModelId": "mimo-v2.6-flash",
    "name": "MiMo-V2.6-Flash",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Xiaomi MiMo Flash — quick responses with solid reasoning.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1257,
      "outputPerMillion": 3772,
      "cachedInputPerMillion": 628,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1571,
      "outputPerMillion": 0.4714,
      "cachedInputPerMillion": 0.0785
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.1,
      "outputPerMillion": 0.3,
      "cachedInputPerMillion": 0.05
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "maxOutputTokens": 131072,
    "rank": 25,
    "popularity": 9675,
    "rating": 98,
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "minimax-m3.1-flash",
    "slug": "minimax-m3.1-flash",
    "canonicalModelId": "minimax-m3.1-flash",
    "name": "MiniMax M3.1 Flash",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "MiniMax M3.1 Flash — fast multimodal model with reliable tool calling and low latency.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 1000000,
    "maxOutputTokens": 131072,
    "rank": 26,
    "popularity": 9660,
    "rating": 98,
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "qwen3-coder-next",
    "slug": "qwen3-coder-next",
    "canonicalModelId": "qwen3-coder-next",
    "name": "Qwen3-Coder-Next",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Alibaba Qwen3 Coder Next — specialized coding model for repository synthesis and multi-file debugging.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 6286,
      "outputPerMillion": 18857,
      "cachedInputPerMillion": 3143,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.7857,
      "outputPerMillion": 2.3571,
      "cachedInputPerMillion": 0.3928
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.5,
      "outputPerMillion": 1.5,
      "cachedInputPerMillion": 0.25
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 64000,
    "rank": 27,
    "popularity": 9645,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "deepseek-v4-pro-0813",
    "slug": "deepseek-v4-pro-0813",
    "canonicalModelId": "deepseek-v4-pro-0813",
    "name": "DeepSeek-V4-Pro-0813",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "DeepSeek V4 Pro — high-throughput frontier reasoning and deep architectural coding.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 10057,
      "outputPerMillion": 30172,
      "cachedInputPerMillion": 5029,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 1.2571,
      "outputPerMillion": 3.7714,
      "cachedInputPerMillion": 0.6286
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.8,
      "outputPerMillion": 2.4,
      "cachedInputPerMillion": 0.4
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "maxOutputTokens": 128000,
    "rank": 28,
    "popularity": 9630,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "beam",
    "slug": "beam",
    "canonicalModelId": "beam-v1",
    "name": "Beam",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Fast general-purpose model for everyday chat and drafting.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1257,
      "outputPerMillion": 3772,
      "cachedInputPerMillion": 628,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1571,
      "outputPerMillion": 0.4714,
      "cachedInputPerMillion": 0.0785
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.1,
      "outputPerMillion": 0.3,
      "cachedInputPerMillion": 0.05
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 200000,
    "maxOutputTokens": 64000,
    "rank": 29,
    "popularity": 9615,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "longcat-2.5-preview",
    "slug": "longcat-2.5-preview",
    "canonicalModelId": "longcat-2.5-preview",
    "name": "LongCat 2.5 Preview",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Meituan LongCat 2.5 — long-context preview with strong multilingual reasoning.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 200000,
    "maxOutputTokens": 64000,
    "rank": 30,
    "popularity": 9600,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "jev-1.13",
    "slug": "jev-1.13",
    "canonicalModelId": "jev-1.13",
    "name": "Jev 1.13",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Jev 1.13 — general-purpose assistant with balanced speed and quality.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1257,
      "outputPerMillion": 3772,
      "cachedInputPerMillion": 628,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1571,
      "outputPerMillion": 0.4714,
      "cachedInputPerMillion": 0.0785
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.1,
      "outputPerMillion": 0.3,
      "cachedInputPerMillion": 0.05
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 31,
    "popularity": 9585,
    "rating": 98,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "deepseek-v4.1-flash",
    "slug": "deepseek-v4.1-flash",
    "canonicalModelId": "deepseek-v4.1-flash",
    "name": "DeepSeek V4.1 Flash",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "DeepSeek V4.1 Flash — state-of-the-art high-speed reasoning, coding, and multilingual intelligence. Eligible for 48H launch free access.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1761,
      "outputPerMillion": 3521,
      "cachedInputPerMillion": 881,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.22,
      "outputPerMillion": 0.44,
      "cachedInputPerMillion": 0.11
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.14,
      "outputPerMillion": 0.28,
      "cachedInputPerMillion": 0.07
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "maxOutputTokens": 128000,
    "rank": 1,
    "popularity": 9950,
    "rating": 99,
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 88.5,
        "source": "DeepSeek AI Technical Report",
        "evaluationDate": "2024-10-17"
      },
      {
        "name": "HumanEval",
        "score": 89.2,
        "source": "DeepSeek AI Benchmark",
        "evaluationDate": "2024-10-17"
      }
    ]
  },
  {
    "id": "deepseek-v4.1-flash-1017",
    "slug": "deepseek-v4.1-flash-1017",
    "canonicalModelId": "deepseek-v4.1-flash",
    "name": "DeepSeek-V4.1-Flash-1017",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "DeepSeek V4.1 Flash checkpoint 1017 — latest frontier open-weight reasoning model. Direct alias sharing 48H launch free entitlement.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1761,
      "outputPerMillion": 3521,
      "cachedInputPerMillion": 881,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.22,
      "outputPerMillion": 0.44,
      "cachedInputPerMillion": 0.11
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.14,
      "outputPerMillion": 0.28,
      "cachedInputPerMillion": 0.07
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "maxOutputTokens": 128000,
    "rank": 2,
    "popularity": 9940,
    "rating": 99,
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 88.5,
        "source": "DeepSeek AI Technical Report",
        "evaluationDate": "2024-10-17"
      }
    ]
  },
  {
    "id": "qwen3.8-27b",
    "slug": "qwen3.8-27b",
    "canonicalModelId": "qwen3.8-27b",
    "name": "Qwen3.8-27B",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Alibaba Qwen3.8 27B — high-performance open-weight model with strong multilingual and reasoning abilities. Eligible for 48H launch free access.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": true,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 10057,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 1.2571,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.8,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 64000,
    "rank": 3,
    "popularity": 9930,
    "rating": 99,
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 85.3,
        "source": "Alibaba Cloud Benchmark",
        "evaluationDate": "2024-09-20"
      },
      {
        "name": "HumanEval",
        "score": 86.4,
        "source": "Alibaba Cloud Benchmark",
        "evaluationDate": "2024-09-20"
      }
    ]
  },
  {
    "id": "qwen/qwen3.8-27b",
    "slug": "qwen/qwen3.8-27b",
    "canonicalModelId": "qwen3.8-27b",
    "name": "Qwen 3.8 27B (Groq LPU)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Alibaba Qwen3.8 27B running on Groq LPU inference. Shares promotional entitlement with canonical Qwen3.8-27B.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 10057,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 1.2571,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.8,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 64000,
    "rank": 4,
    "popularity": 9920,
    "rating": 99,
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 85.3,
        "source": "Alibaba Cloud Benchmark",
        "evaluationDate": "2024-09-20"
      }
    ]
  },
  {
    "id": "gpt-oss-20b",
    "slug": "gpt-oss-20b",
    "canonicalModelId": "gpt-oss-20b",
    "name": "GPT OSS 20B",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Open-weight 20B parameter reasoning and chat model with high speed and chain-of-thought capabilities.",
    "providerName": "NABH",
    "providerSlug": "nabh",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "rank": 5,
    "popularity": 9910,
    "rating": 99,
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 78.4,
        "source": "Open Benchmark",
        "evaluationDate": "2024-08-10"
      }
    ]
  },
  {
    "id": "gpt-oss-120b",
    "slug": "gpt-oss-120b",
    "canonicalModelId": "gpt-oss-120b",
    "name": "GPT OSS 120B",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "OpenAI open-weight 120B parameter MoE reasoning architecture running on Groq LPU.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 131072,
    "maxOutputTokens": 32768,
    "rank": 6,
    "popularity": 9900,
    "rating": 99,
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 86.1,
        "source": "Independent Eval",
        "evaluationDate": "2024-08-18"
      }
    ]
  },
  {
    "id": "nemotron-3-ultra-550b-a55b",
    "slug": "nemotron-3-ultra-550b-a55b",
    "canonicalModelId": "nemotron-3-ultra-550b",
    "name": "Nemotron 3 Ultra 550B A55B",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "NVIDIA Nemotron 3 Ultra 550B A55B — ultra-scale frontier reasoning engine with 1M context.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 8800,
      "outputPerMillion": 26400,
      "cachedInputPerMillion": 4400,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 1.1,
      "outputPerMillion": 3.3,
      "cachedInputPerMillion": 0.55
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.7,
      "outputPerMillion": 2.1,
      "cachedInputPerMillion": 0.35
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "maxOutputTokens": 65536,
    "rank": 7,
    "popularity": 9890,
    "rating": 99,
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 89.4,
        "source": "NVIDIA Technical Report",
        "evaluationDate": "2024-10-15"
      }
    ]
  },
  {
    "id": "nemotron-3-nano-omni-30b-a3b-reasoning",
    "slug": "nemotron-3-nano-omni-30b-a3b-reasoning",
    "canonicalModelId": "nemotron-3-nano-omni-30b",
    "name": "Nemotron 3 Nano Omni 30B Reasoning",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "NVIDIA Nemotron 3 Nano Omni 30B — deep chain-of-thought reasoning and multimodal STEM problem-solving.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
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
    "maxOutputTokens": 20480,
    "rank": 8,
    "popularity": 9880,
    "rating": 99,
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 82.1,
        "source": "NVIDIA Technical Report",
        "evaluationDate": "2024-10-15"
      }
    ]
  },
  {
    "id": "nemotron-3.5-lightning-30b-a3b",
    "slug": "nemotron-3.5-lightning-30b-a3b",
    "canonicalModelId": "nemotron-3.5-lightning",
    "name": "Nemotron 3.5 Lightning 30B A3B",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "NVIDIA Nemotron 3.5 Lightning 30B A3B — lightning-fast inference with an extraordinary 1M context window.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1257,
      "outputPerMillion": 3772,
      "cachedInputPerMillion": 628,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1571,
      "outputPerMillion": 0.4714,
      "cachedInputPerMillion": 0.0785
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.1,
      "outputPerMillion": 0.3,
      "cachedInputPerMillion": 0.05
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "maxOutputTokens": 65536,
    "rank": 9,
    "popularity": 9870,
    "rating": 99,
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "nemotron-3.5-lightning",
    "slug": "nemotron-3.5-lightning",
    "canonicalModelId": "nemotron-3.5-lightning",
    "name": "Nemotron 3.5 Lightning",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "NVIDIA Nemotron 3.5 Lightning — low-latency assistant for high-volume work.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1257,
      "outputPerMillion": 3772,
      "cachedInputPerMillion": 628,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1571,
      "outputPerMillion": 0.4714,
      "cachedInputPerMillion": 0.0785
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.1,
      "outputPerMillion": 0.3,
      "cachedInputPerMillion": 0.05
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "maxOutputTokens": 65536,
    "rank": 10,
    "popularity": 9860,
    "rating": 99,
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "nemotron-3.5-super-vl",
    "slug": "nemotron-3.5-super-vl",
    "canonicalModelId": "nemotron-3.5-super-vl",
    "name": "Nemotron 3.5 Super VL",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "NVIDIA Nemotron 3.5 Super — high-capacity vision-language reasoning.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
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
    "maxOutputTokens": 64000,
    "rank": 11,
    "popularity": 9850,
    "rating": 99,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "gemma-4-31b-it",
    "slug": "gemma-4-31b-it",
    "canonicalModelId": "gemma-4-31b-it",
    "name": "Gemma 4 31B IT",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Google Gemma 4 31B Instruction-Tuned — Google's latest open frontier architecture featuring 262K context.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1761,
      "outputPerMillion": 5280,
      "cachedInputPerMillion": 881,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.22,
      "outputPerMillion": 0.66,
      "cachedInputPerMillion": 0.11
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.14,
      "outputPerMillion": 0.42,
      "cachedInputPerMillion": 0.07
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "maxOutputTokens": 8192,
    "rank": 12,
    "popularity": 9840,
    "rating": 99,
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 83.2,
        "source": "Google DeepMind Evaluation",
        "evaluationDate": "2024-09-25"
      }
    ]
  },
  {
    "id": "leanstral-1-5",
    "slug": "leanstral-1-5",
    "canonicalModelId": "leanstral-1-5",
    "name": "Leanstral 1.5",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Mistral Leanstral 1.5 — high-efficiency reasoning model with massive 262K context.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1509,
      "outputPerMillion": 4526,
      "cachedInputPerMillion": 755,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1886,
      "outputPerMillion": 0.5657,
      "cachedInputPerMillion": 0.0943
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.12,
      "outputPerMillion": 0.36,
      "cachedInputPerMillion": 0.06
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "maxOutputTokens": 32768,
    "rank": 13,
    "popularity": 9830,
    "rating": 99,
    "latencyMs": 180,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 81,
        "source": "Mistral Evaluation",
        "evaluationDate": "2024-08-30"
      }
    ]
  },
  {
    "id": "ling-3.1-flash",
    "slug": "ling-3.1-flash",
    "canonicalModelId": "ling-3.1-flash",
    "name": "Ling 3.1 Flash",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Novita Ling 3.1 Flash — ultra-responsive 262K context model for conversational speed.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "maxOutputTokens": 32768,
    "rank": 14,
    "popularity": 9820,
    "rating": 99,
    "latencyMs": 95,
    "available": true,
    "benchmarks": [
      {
        "name": "MMLU",
        "score": 79.8,
        "source": "Novita AI Benchmark",
        "evaluationDate": "2024-07-15"
      }
    ]
  },
  {
    "id": "allam-2-7b",
    "slug": "allam-2-7b",
    "canonicalModelId": "allam-2-7b",
    "name": "Allam 2 7B",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "SDAIA high-performance bilingual Arabic & English foundational language model.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 629,
      "outputPerMillion": 1886,
      "cachedInputPerMillion": 315,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.0786,
      "outputPerMillion": 0.2357,
      "cachedInputPerMillion": 0.0393
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.05,
      "outputPerMillion": 0.15,
      "cachedInputPerMillion": 0.025
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
      "structuredOutputs": true,
      "reasoning": true,
      "vision": false,
      "imageGeneration": false,
      "audio": false,
      "jsonMode": true
    },
    "contextWindow": 4096,
    "maxOutputTokens": 2048,
    "rank": 15,
    "popularity": 9810,
    "rating": 99,
    "latencyMs": 180,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-omni-core",
    "slug": "pr-gen-omni-core",
    "canonicalModelId": "pr-gen-omni-core",
    "name": "Omni Core",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-dialogue-pro",
    "slug": "pr-gen-dialogue-pro",
    "canonicalModelId": "pr-gen-dialogue-pro",
    "name": "Dialogue Pro",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-knowledge-base",
    "slug": "pr-gen-knowledge-base",
    "canonicalModelId": "pr-gen-knowledge-base",
    "name": "Knowledge Base",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-briefing-desk",
    "slug": "pr-gen-briefing-desk",
    "canonicalModelId": "pr-gen-briefing-desk",
    "name": "Briefing Desk",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-clarity-engine",
    "slug": "pr-gen-clarity-engine",
    "canonicalModelId": "pr-gen-clarity-engine",
    "name": "Clarity Engine",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-writer-companion",
    "slug": "pr-gen-writer-companion",
    "canonicalModelId": "pr-gen-writer-companion",
    "name": "Writer Companion",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-inquiry-agent",
    "slug": "pr-gen-inquiry-agent",
    "canonicalModelId": "pr-gen-inquiry-agent",
    "name": "Inquiry Agent",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-omni-core-v2",
    "slug": "pr-gen-omni-core-v2",
    "canonicalModelId": "pr-gen-omni-core-v2",
    "name": "Omni Core (Tier 2)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-dialogue-pro-v2",
    "slug": "pr-gen-dialogue-pro-v2",
    "canonicalModelId": "pr-gen-dialogue-pro-v2",
    "name": "Dialogue Pro (Tier 2)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-knowledge-base-v2",
    "slug": "pr-gen-knowledge-base-v2",
    "canonicalModelId": "pr-gen-knowledge-base-v2",
    "name": "Knowledge Base (Tier 2)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-briefing-desk-v2",
    "slug": "pr-gen-briefing-desk-v2",
    "canonicalModelId": "pr-gen-briefing-desk-v2",
    "name": "Briefing Desk (Tier 2)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-clarity-engine-v2",
    "slug": "pr-gen-clarity-engine-v2",
    "canonicalModelId": "pr-gen-clarity-engine-v2",
    "name": "Clarity Engine (Tier 2)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-writer-companion-v2",
    "slug": "pr-gen-writer-companion-v2",
    "canonicalModelId": "pr-gen-writer-companion-v2",
    "name": "Writer Companion (Tier 2)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-inquiry-agent-v2",
    "slug": "pr-gen-inquiry-agent-v2",
    "canonicalModelId": "pr-gen-inquiry-agent-v2",
    "name": "Inquiry Agent (Tier 2)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-omni-core-v3",
    "slug": "pr-gen-omni-core-v3",
    "canonicalModelId": "pr-gen-omni-core-v3",
    "name": "Omni Core (Tier 3)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-dialogue-pro-v3",
    "slug": "pr-gen-dialogue-pro-v3",
    "canonicalModelId": "pr-gen-dialogue-pro-v3",
    "name": "Dialogue Pro (Tier 3)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-knowledge-base-v3",
    "slug": "pr-gen-knowledge-base-v3",
    "canonicalModelId": "pr-gen-knowledge-base-v3",
    "name": "Knowledge Base (Tier 3)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-briefing-desk-v3",
    "slug": "pr-gen-briefing-desk-v3",
    "canonicalModelId": "pr-gen-briefing-desk-v3",
    "name": "Briefing Desk (Tier 3)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-clarity-engine-v3",
    "slug": "pr-gen-clarity-engine-v3",
    "canonicalModelId": "pr-gen-clarity-engine-v3",
    "name": "Clarity Engine (Tier 3)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-writer-companion-v3",
    "slug": "pr-gen-writer-companion-v3",
    "canonicalModelId": "pr-gen-writer-companion-v3",
    "name": "Writer Companion (Tier 3)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-inquiry-agent-v3",
    "slug": "pr-gen-inquiry-agent-v3",
    "canonicalModelId": "pr-gen-inquiry-agent-v3",
    "name": "Inquiry Agent (Tier 3)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-omni-core-v4",
    "slug": "pr-gen-omni-core-v4",
    "canonicalModelId": "pr-gen-omni-core-v4",
    "name": "Omni Core (Tier 4)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-dialogue-pro-v4",
    "slug": "pr-gen-dialogue-pro-v4",
    "canonicalModelId": "pr-gen-dialogue-pro-v4",
    "name": "Dialogue Pro (Tier 4)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-knowledge-base-v4",
    "slug": "pr-gen-knowledge-base-v4",
    "canonicalModelId": "pr-gen-knowledge-base-v4",
    "name": "Knowledge Base (Tier 4)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-briefing-desk-v4",
    "slug": "pr-gen-briefing-desk-v4",
    "canonicalModelId": "pr-gen-briefing-desk-v4",
    "name": "Briefing Desk (Tier 4)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-clarity-engine-v4",
    "slug": "pr-gen-clarity-engine-v4",
    "canonicalModelId": "pr-gen-clarity-engine-v4",
    "name": "Clarity Engine (Tier 4)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-writer-companion-v4",
    "slug": "pr-gen-writer-companion-v4",
    "canonicalModelId": "pr-gen-writer-companion-v4",
    "name": "Writer Companion (Tier 4)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-inquiry-agent-v4",
    "slug": "pr-gen-inquiry-agent-v4",
    "canonicalModelId": "pr-gen-inquiry-agent-v4",
    "name": "Inquiry Agent (Tier 4)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-omni-core-v5",
    "slug": "pr-gen-omni-core-v5",
    "canonicalModelId": "pr-gen-omni-core-v5",
    "name": "Omni Core (Tier 5)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-dialogue-pro-v5",
    "slug": "pr-gen-dialogue-pro-v5",
    "canonicalModelId": "pr-gen-dialogue-pro-v5",
    "name": "Dialogue Pro (Tier 5)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-knowledge-base-v5",
    "slug": "pr-gen-knowledge-base-v5",
    "canonicalModelId": "pr-gen-knowledge-base-v5",
    "name": "Knowledge Base (Tier 5)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-briefing-desk-v5",
    "slug": "pr-gen-briefing-desk-v5",
    "canonicalModelId": "pr-gen-briefing-desk-v5",
    "name": "Briefing Desk (Tier 5)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-clarity-engine-v5",
    "slug": "pr-gen-clarity-engine-v5",
    "canonicalModelId": "pr-gen-clarity-engine-v5",
    "name": "Clarity Engine (Tier 5)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-writer-companion-v5",
    "slug": "pr-gen-writer-companion-v5",
    "canonicalModelId": "pr-gen-writer-companion-v5",
    "name": "Writer Companion (Tier 5)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-inquiry-agent-v5",
    "slug": "pr-gen-inquiry-agent-v5",
    "canonicalModelId": "pr-gen-inquiry-agent-v5",
    "name": "Inquiry Agent (Tier 5)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-omni-core-v6",
    "slug": "pr-gen-omni-core-v6",
    "canonicalModelId": "pr-gen-omni-core-v6",
    "name": "Omni Core (Tier 6)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-dialogue-pro-v6",
    "slug": "pr-gen-dialogue-pro-v6",
    "canonicalModelId": "pr-gen-dialogue-pro-v6",
    "name": "Dialogue Pro (Tier 6)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-knowledge-base-v6",
    "slug": "pr-gen-knowledge-base-v6",
    "canonicalModelId": "pr-gen-knowledge-base-v6",
    "name": "Knowledge Base (Tier 6)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-briefing-desk-v6",
    "slug": "pr-gen-briefing-desk-v6",
    "canonicalModelId": "pr-gen-briefing-desk-v6",
    "name": "Briefing Desk (Tier 6)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-clarity-engine-v6",
    "slug": "pr-gen-clarity-engine-v6",
    "canonicalModelId": "pr-gen-clarity-engine-v6",
    "name": "Clarity Engine (Tier 6)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-writer-companion-v6",
    "slug": "pr-gen-writer-companion-v6",
    "canonicalModelId": "pr-gen-writer-companion-v6",
    "name": "Writer Companion (Tier 6)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-inquiry-agent-v6",
    "slug": "pr-gen-inquiry-agent-v6",
    "canonicalModelId": "pr-gen-inquiry-agent-v6",
    "name": "Inquiry Agent (Tier 6)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-omni-core-v7",
    "slug": "pr-gen-omni-core-v7",
    "canonicalModelId": "pr-gen-omni-core-v7",
    "name": "Omni Core (Tier 7)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-dialogue-pro-v7",
    "slug": "pr-gen-dialogue-pro-v7",
    "canonicalModelId": "pr-gen-dialogue-pro-v7",
    "name": "Dialogue Pro (Tier 7)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-knowledge-base-v7",
    "slug": "pr-gen-knowledge-base-v7",
    "canonicalModelId": "pr-gen-knowledge-base-v7",
    "name": "Knowledge Base (Tier 7)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-briefing-desk-v7",
    "slug": "pr-gen-briefing-desk-v7",
    "canonicalModelId": "pr-gen-briefing-desk-v7",
    "name": "Briefing Desk (Tier 7)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-clarity-engine-v7",
    "slug": "pr-gen-clarity-engine-v7",
    "canonicalModelId": "pr-gen-clarity-engine-v7",
    "name": "Clarity Engine (Tier 7)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-writer-companion-v7",
    "slug": "pr-gen-writer-companion-v7",
    "canonicalModelId": "pr-gen-writer-companion-v7",
    "name": "Writer Companion (Tier 7)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-inquiry-agent-v7",
    "slug": "pr-gen-inquiry-agent-v7",
    "canonicalModelId": "pr-gen-inquiry-agent-v7",
    "name": "Inquiry Agent (Tier 7)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-omni-core-v8",
    "slug": "pr-gen-omni-core-v8",
    "canonicalModelId": "pr-gen-omni-core-v8",
    "name": "Omni Core (Tier 8)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-dialogue-pro-v8",
    "slug": "pr-gen-dialogue-pro-v8",
    "canonicalModelId": "pr-gen-dialogue-pro-v8",
    "name": "Dialogue Pro (Tier 8)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-knowledge-base-v8",
    "slug": "pr-gen-knowledge-base-v8",
    "canonicalModelId": "pr-gen-knowledge-base-v8",
    "name": "Knowledge Base (Tier 8)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-briefing-desk-v8",
    "slug": "pr-gen-briefing-desk-v8",
    "canonicalModelId": "pr-gen-briefing-desk-v8",
    "name": "Briefing Desk (Tier 8)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-clarity-engine-v8",
    "slug": "pr-gen-clarity-engine-v8",
    "canonicalModelId": "pr-gen-clarity-engine-v8",
    "name": "Clarity Engine (Tier 8)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-writer-companion-v8",
    "slug": "pr-gen-writer-companion-v8",
    "canonicalModelId": "pr-gen-writer-companion-v8",
    "name": "Writer Companion (Tier 8)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-inquiry-agent-v8",
    "slug": "pr-gen-inquiry-agent-v8",
    "canonicalModelId": "pr-gen-inquiry-agent-v8",
    "name": "Inquiry Agent (Tier 8)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-omni-core-v9",
    "slug": "pr-gen-omni-core-v9",
    "canonicalModelId": "pr-gen-omni-core-v9",
    "name": "Omni Core (Tier 9)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-dialogue-pro-v9",
    "slug": "pr-gen-dialogue-pro-v9",
    "canonicalModelId": "pr-gen-dialogue-pro-v9",
    "name": "Dialogue Pro (Tier 9)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-knowledge-base-v9",
    "slug": "pr-gen-knowledge-base-v9",
    "canonicalModelId": "pr-gen-knowledge-base-v9",
    "name": "Knowledge Base (Tier 9)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-briefing-desk-v9",
    "slug": "pr-gen-briefing-desk-v9",
    "canonicalModelId": "pr-gen-briefing-desk-v9",
    "name": "Briefing Desk (Tier 9)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Executive summarizer designed for crisp briefings and high-density digests. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-clarity-engine-v9",
    "slug": "pr-gen-clarity-engine-v9",
    "canonicalModelId": "pr-gen-clarity-engine-v9",
    "name": "Clarity Engine (Tier 9)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Transparent assistant focusing on plain language breakdown of convoluted topics. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-writer-companion-v9",
    "slug": "pr-gen-writer-companion-v9",
    "canonicalModelId": "pr-gen-writer-companion-v9",
    "name": "Writer Companion (Tier 9)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Collaborative drafting assistant for memos, emails, and structured outlines. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-inquiry-agent-v9",
    "slug": "pr-gen-inquiry-agent-v9",
    "canonicalModelId": "pr-gen-inquiry-agent-v9",
    "name": "Inquiry Agent (Tier 9)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Active-listening assistant asking clarifying questions to hone requirements. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-omni-core-v10",
    "slug": "pr-gen-omni-core-v10",
    "canonicalModelId": "pr-gen-omni-core-v10",
    "name": "Omni Core (Tier 10)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Balanced everyday conversational intelligence and multi-topic comprehension. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-dialogue-pro-v10",
    "slug": "pr-gen-dialogue-pro-v10",
    "canonicalModelId": "pr-gen-dialogue-pro-v10",
    "name": "Dialogue Pro (Tier 10)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Fluent, interactive assistant tuned for multi-turn brainstorming and dialogue. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-gen-knowledge-base-v10",
    "slug": "pr-gen-knowledge-base-v10",
    "canonicalModelId": "pr-gen-knowledge-base-v10",
    "name": "Knowledge Base (Tier 10)",
    "category": "general",
    "categoryLabel": "General-Purpose AI",
    "description": "Encyclopedic inquiry assistant for contextual lookups and factual explanation. Calibrated for general workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-cot-analytical",
    "slug": "pr-reason-cot-analytical",
    "canonicalModelId": "pr-reason-cot-analytical",
    "name": "Chain-of-Thought Analyst",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-deductive-logic",
    "slug": "pr-reason-deductive-logic",
    "canonicalModelId": "pr-reason-deductive-logic",
    "name": "Deductive Logic Engine",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-causal-inference",
    "slug": "pr-reason-causal-inference",
    "canonicalModelId": "pr-reason-causal-inference",
    "name": "Causal Inference Model",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-systems-thinker",
    "slug": "pr-reason-systems-thinker",
    "canonicalModelId": "pr-reason-systems-thinker",
    "name": "Systems Architecture Thinker",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-fallacy-detector",
    "slug": "pr-reason-fallacy-detector",
    "canonicalModelId": "pr-reason-fallacy-detector",
    "name": "Cognitive Auditor",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-decision-matrix",
    "slug": "pr-reason-decision-matrix",
    "canonicalModelId": "pr-reason-decision-matrix",
    "name": "Decision Matrix Pro",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-hypothesis-tester",
    "slug": "pr-reason-hypothesis-tester",
    "canonicalModelId": "pr-reason-hypothesis-tester",
    "name": "Scientific Hypothesizer",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-cot-analytical-v2",
    "slug": "pr-reason-cot-analytical-v2",
    "canonicalModelId": "pr-reason-cot-analytical-v2",
    "name": "Chain-of-Thought Analyst (Tier 2)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-deductive-logic-v2",
    "slug": "pr-reason-deductive-logic-v2",
    "canonicalModelId": "pr-reason-deductive-logic-v2",
    "name": "Deductive Logic Engine (Tier 2)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-causal-inference-v2",
    "slug": "pr-reason-causal-inference-v2",
    "canonicalModelId": "pr-reason-causal-inference-v2",
    "name": "Causal Inference Model (Tier 2)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-systems-thinker-v2",
    "slug": "pr-reason-systems-thinker-v2",
    "canonicalModelId": "pr-reason-systems-thinker-v2",
    "name": "Systems Architecture Thinker (Tier 2)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-fallacy-detector-v2",
    "slug": "pr-reason-fallacy-detector-v2",
    "canonicalModelId": "pr-reason-fallacy-detector-v2",
    "name": "Cognitive Auditor (Tier 2)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-decision-matrix-v2",
    "slug": "pr-reason-decision-matrix-v2",
    "canonicalModelId": "pr-reason-decision-matrix-v2",
    "name": "Decision Matrix Pro (Tier 2)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-hypothesis-tester-v2",
    "slug": "pr-reason-hypothesis-tester-v2",
    "canonicalModelId": "pr-reason-hypothesis-tester-v2",
    "name": "Scientific Hypothesizer (Tier 2)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-cot-analytical-v3",
    "slug": "pr-reason-cot-analytical-v3",
    "canonicalModelId": "pr-reason-cot-analytical-v3",
    "name": "Chain-of-Thought Analyst (Tier 3)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-deductive-logic-v3",
    "slug": "pr-reason-deductive-logic-v3",
    "canonicalModelId": "pr-reason-deductive-logic-v3",
    "name": "Deductive Logic Engine (Tier 3)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-causal-inference-v3",
    "slug": "pr-reason-causal-inference-v3",
    "canonicalModelId": "pr-reason-causal-inference-v3",
    "name": "Causal Inference Model (Tier 3)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-systems-thinker-v3",
    "slug": "pr-reason-systems-thinker-v3",
    "canonicalModelId": "pr-reason-systems-thinker-v3",
    "name": "Systems Architecture Thinker (Tier 3)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-fallacy-detector-v3",
    "slug": "pr-reason-fallacy-detector-v3",
    "canonicalModelId": "pr-reason-fallacy-detector-v3",
    "name": "Cognitive Auditor (Tier 3)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-decision-matrix-v3",
    "slug": "pr-reason-decision-matrix-v3",
    "canonicalModelId": "pr-reason-decision-matrix-v3",
    "name": "Decision Matrix Pro (Tier 3)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-hypothesis-tester-v3",
    "slug": "pr-reason-hypothesis-tester-v3",
    "canonicalModelId": "pr-reason-hypothesis-tester-v3",
    "name": "Scientific Hypothesizer (Tier 3)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-cot-analytical-v4",
    "slug": "pr-reason-cot-analytical-v4",
    "canonicalModelId": "pr-reason-cot-analytical-v4",
    "name": "Chain-of-Thought Analyst (Tier 4)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-deductive-logic-v4",
    "slug": "pr-reason-deductive-logic-v4",
    "canonicalModelId": "pr-reason-deductive-logic-v4",
    "name": "Deductive Logic Engine (Tier 4)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-causal-inference-v4",
    "slug": "pr-reason-causal-inference-v4",
    "canonicalModelId": "pr-reason-causal-inference-v4",
    "name": "Causal Inference Model (Tier 4)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-systems-thinker-v4",
    "slug": "pr-reason-systems-thinker-v4",
    "canonicalModelId": "pr-reason-systems-thinker-v4",
    "name": "Systems Architecture Thinker (Tier 4)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-fallacy-detector-v4",
    "slug": "pr-reason-fallacy-detector-v4",
    "canonicalModelId": "pr-reason-fallacy-detector-v4",
    "name": "Cognitive Auditor (Tier 4)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-decision-matrix-v4",
    "slug": "pr-reason-decision-matrix-v4",
    "canonicalModelId": "pr-reason-decision-matrix-v4",
    "name": "Decision Matrix Pro (Tier 4)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-hypothesis-tester-v4",
    "slug": "pr-reason-hypothesis-tester-v4",
    "canonicalModelId": "pr-reason-hypothesis-tester-v4",
    "name": "Scientific Hypothesizer (Tier 4)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-cot-analytical-v5",
    "slug": "pr-reason-cot-analytical-v5",
    "canonicalModelId": "pr-reason-cot-analytical-v5",
    "name": "Chain-of-Thought Analyst (Tier 5)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-deductive-logic-v5",
    "slug": "pr-reason-deductive-logic-v5",
    "canonicalModelId": "pr-reason-deductive-logic-v5",
    "name": "Deductive Logic Engine (Tier 5)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-causal-inference-v5",
    "slug": "pr-reason-causal-inference-v5",
    "canonicalModelId": "pr-reason-causal-inference-v5",
    "name": "Causal Inference Model (Tier 5)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-systems-thinker-v5",
    "slug": "pr-reason-systems-thinker-v5",
    "canonicalModelId": "pr-reason-systems-thinker-v5",
    "name": "Systems Architecture Thinker (Tier 5)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-fallacy-detector-v5",
    "slug": "pr-reason-fallacy-detector-v5",
    "canonicalModelId": "pr-reason-fallacy-detector-v5",
    "name": "Cognitive Auditor (Tier 5)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-decision-matrix-v5",
    "slug": "pr-reason-decision-matrix-v5",
    "canonicalModelId": "pr-reason-decision-matrix-v5",
    "name": "Decision Matrix Pro (Tier 5)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-hypothesis-tester-v5",
    "slug": "pr-reason-hypothesis-tester-v5",
    "canonicalModelId": "pr-reason-hypothesis-tester-v5",
    "name": "Scientific Hypothesizer (Tier 5)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-cot-analytical-v6",
    "slug": "pr-reason-cot-analytical-v6",
    "canonicalModelId": "pr-reason-cot-analytical-v6",
    "name": "Chain-of-Thought Analyst (Tier 6)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-deductive-logic-v6",
    "slug": "pr-reason-deductive-logic-v6",
    "canonicalModelId": "pr-reason-deductive-logic-v6",
    "name": "Deductive Logic Engine (Tier 6)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-causal-inference-v6",
    "slug": "pr-reason-causal-inference-v6",
    "canonicalModelId": "pr-reason-causal-inference-v6",
    "name": "Causal Inference Model (Tier 6)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-systems-thinker-v6",
    "slug": "pr-reason-systems-thinker-v6",
    "canonicalModelId": "pr-reason-systems-thinker-v6",
    "name": "Systems Architecture Thinker (Tier 6)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-fallacy-detector-v6",
    "slug": "pr-reason-fallacy-detector-v6",
    "canonicalModelId": "pr-reason-fallacy-detector-v6",
    "name": "Cognitive Auditor (Tier 6)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-decision-matrix-v6",
    "slug": "pr-reason-decision-matrix-v6",
    "canonicalModelId": "pr-reason-decision-matrix-v6",
    "name": "Decision Matrix Pro (Tier 6)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-hypothesis-tester-v6",
    "slug": "pr-reason-hypothesis-tester-v6",
    "canonicalModelId": "pr-reason-hypothesis-tester-v6",
    "name": "Scientific Hypothesizer (Tier 6)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-cot-analytical-v7",
    "slug": "pr-reason-cot-analytical-v7",
    "canonicalModelId": "pr-reason-cot-analytical-v7",
    "name": "Chain-of-Thought Analyst (Tier 7)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-deductive-logic-v7",
    "slug": "pr-reason-deductive-logic-v7",
    "canonicalModelId": "pr-reason-deductive-logic-v7",
    "name": "Deductive Logic Engine (Tier 7)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-causal-inference-v7",
    "slug": "pr-reason-causal-inference-v7",
    "canonicalModelId": "pr-reason-causal-inference-v7",
    "name": "Causal Inference Model (Tier 7)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-systems-thinker-v7",
    "slug": "pr-reason-systems-thinker-v7",
    "canonicalModelId": "pr-reason-systems-thinker-v7",
    "name": "Systems Architecture Thinker (Tier 7)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-fallacy-detector-v7",
    "slug": "pr-reason-fallacy-detector-v7",
    "canonicalModelId": "pr-reason-fallacy-detector-v7",
    "name": "Cognitive Auditor (Tier 7)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-decision-matrix-v7",
    "slug": "pr-reason-decision-matrix-v7",
    "canonicalModelId": "pr-reason-decision-matrix-v7",
    "name": "Decision Matrix Pro (Tier 7)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-hypothesis-tester-v7",
    "slug": "pr-reason-hypothesis-tester-v7",
    "canonicalModelId": "pr-reason-hypothesis-tester-v7",
    "name": "Scientific Hypothesizer (Tier 7)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Falsification testing and empirical experimental protocol design. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-cot-analytical-v8",
    "slug": "pr-reason-cot-analytical-v8",
    "canonicalModelId": "pr-reason-cot-analytical-v8",
    "name": "Chain-of-Thought Analyst (Tier 8)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rigorous step-by-step chain-of-thought breakdown of multi-constraint problems. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-deductive-logic-v8",
    "slug": "pr-reason-deductive-logic-v8",
    "canonicalModelId": "pr-reason-deductive-logic-v8",
    "name": "Deductive Logic Engine (Tier 8)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Formal propositional and first-order predicate logic validator. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-causal-inference-v8",
    "slug": "pr-reason-causal-inference-v8",
    "canonicalModelId": "pr-reason-causal-inference-v8",
    "name": "Causal Inference Model (Tier 8)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Counterfactual reasoning and root-cause analysis across complex variables. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-systems-thinker-v8",
    "slug": "pr-reason-systems-thinker-v8",
    "canonicalModelId": "pr-reason-systems-thinker-v8",
    "name": "Systems Architecture Thinker (Tier 8)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Macro-level feedback loop evaluation and second-order effect modeling. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-fallacy-detector-v8",
    "slug": "pr-reason-fallacy-detector-v8",
    "canonicalModelId": "pr-reason-fallacy-detector-v8",
    "name": "Cognitive Auditor (Tier 8)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Rhetorical bias identification, argument stress-testing, and assumption auditing. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-reason-decision-matrix-v8",
    "slug": "pr-reason-decision-matrix-v8",
    "canonicalModelId": "pr-reason-decision-matrix-v8",
    "name": "Decision Matrix Pro (Tier 8)",
    "category": "reasoning",
    "categoryLabel": "Advanced Reasoning",
    "description": "Multi-criteria tradeoff evaluator weighting risks, costs, and strategic outcomes. Calibrated for reasoning workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-fullstack-architect",
    "slug": "pr-code-fullstack-architect",
    "canonicalModelId": "pr-code-fullstack-architect",
    "name": "Fullstack Architect",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-python-systems",
    "slug": "pr-code-python-systems",
    "canonicalModelId": "pr-code-python-systems",
    "name": "Python Systems Engineer",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-rust-memory",
    "slug": "pr-code-rust-memory",
    "canonicalModelId": "pr-code-rust-memory",
    "name": "Rust & Systems Safety",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-database-internals",
    "slug": "pr-code-database-internals",
    "canonicalModelId": "pr-code-database-internals",
    "name": "Database & SQL Specialist",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-devops-cloud",
    "slug": "pr-code-devops-cloud",
    "canonicalModelId": "pr-code-devops-cloud",
    "name": "Cloud & Kubernetes Engineer",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-frontend-perf",
    "slug": "pr-code-frontend-perf",
    "canonicalModelId": "pr-code-frontend-perf",
    "name": "React & Web Performance",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-security-auditor",
    "slug": "pr-code-security-auditor",
    "canonicalModelId": "pr-code-security-auditor",
    "name": "Application Security Auditor",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-refactor-clean",
    "slug": "pr-code-refactor-clean",
    "canonicalModelId": "pr-code-refactor-clean",
    "name": "Refactoring & Clean Code",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-fullstack-architect-v2",
    "slug": "pr-code-fullstack-architect-v2",
    "canonicalModelId": "pr-code-fullstack-architect-v2",
    "name": "Fullstack Architect (Tier 2)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-python-systems-v2",
    "slug": "pr-code-python-systems-v2",
    "canonicalModelId": "pr-code-python-systems-v2",
    "name": "Python Systems Engineer (Tier 2)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-rust-memory-v2",
    "slug": "pr-code-rust-memory-v2",
    "canonicalModelId": "pr-code-rust-memory-v2",
    "name": "Rust & Systems Safety (Tier 2)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-database-internals-v2",
    "slug": "pr-code-database-internals-v2",
    "canonicalModelId": "pr-code-database-internals-v2",
    "name": "Database & SQL Specialist (Tier 2)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-devops-cloud-v2",
    "slug": "pr-code-devops-cloud-v2",
    "canonicalModelId": "pr-code-devops-cloud-v2",
    "name": "Cloud & Kubernetes Engineer (Tier 2)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-frontend-perf-v2",
    "slug": "pr-code-frontend-perf-v2",
    "canonicalModelId": "pr-code-frontend-perf-v2",
    "name": "React & Web Performance (Tier 2)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-security-auditor-v2",
    "slug": "pr-code-security-auditor-v2",
    "canonicalModelId": "pr-code-security-auditor-v2",
    "name": "Application Security Auditor (Tier 2)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-refactor-clean-v2",
    "slug": "pr-code-refactor-clean-v2",
    "canonicalModelId": "pr-code-refactor-clean-v2",
    "name": "Refactoring & Clean Code (Tier 2)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-fullstack-architect-v3",
    "slug": "pr-code-fullstack-architect-v3",
    "canonicalModelId": "pr-code-fullstack-architect-v3",
    "name": "Fullstack Architect (Tier 3)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-python-systems-v3",
    "slug": "pr-code-python-systems-v3",
    "canonicalModelId": "pr-code-python-systems-v3",
    "name": "Python Systems Engineer (Tier 3)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-rust-memory-v3",
    "slug": "pr-code-rust-memory-v3",
    "canonicalModelId": "pr-code-rust-memory-v3",
    "name": "Rust & Systems Safety (Tier 3)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-database-internals-v3",
    "slug": "pr-code-database-internals-v3",
    "canonicalModelId": "pr-code-database-internals-v3",
    "name": "Database & SQL Specialist (Tier 3)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-devops-cloud-v3",
    "slug": "pr-code-devops-cloud-v3",
    "canonicalModelId": "pr-code-devops-cloud-v3",
    "name": "Cloud & Kubernetes Engineer (Tier 3)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-frontend-perf-v3",
    "slug": "pr-code-frontend-perf-v3",
    "canonicalModelId": "pr-code-frontend-perf-v3",
    "name": "React & Web Performance (Tier 3)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-security-auditor-v3",
    "slug": "pr-code-security-auditor-v3",
    "canonicalModelId": "pr-code-security-auditor-v3",
    "name": "Application Security Auditor (Tier 3)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-refactor-clean-v3",
    "slug": "pr-code-refactor-clean-v3",
    "canonicalModelId": "pr-code-refactor-clean-v3",
    "name": "Refactoring & Clean Code (Tier 3)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-fullstack-architect-v4",
    "slug": "pr-code-fullstack-architect-v4",
    "canonicalModelId": "pr-code-fullstack-architect-v4",
    "name": "Fullstack Architect (Tier 4)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-python-systems-v4",
    "slug": "pr-code-python-systems-v4",
    "canonicalModelId": "pr-code-python-systems-v4",
    "name": "Python Systems Engineer (Tier 4)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-rust-memory-v4",
    "slug": "pr-code-rust-memory-v4",
    "canonicalModelId": "pr-code-rust-memory-v4",
    "name": "Rust & Systems Safety (Tier 4)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-database-internals-v4",
    "slug": "pr-code-database-internals-v4",
    "canonicalModelId": "pr-code-database-internals-v4",
    "name": "Database & SQL Specialist (Tier 4)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-devops-cloud-v4",
    "slug": "pr-code-devops-cloud-v4",
    "canonicalModelId": "pr-code-devops-cloud-v4",
    "name": "Cloud & Kubernetes Engineer (Tier 4)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-frontend-perf-v4",
    "slug": "pr-code-frontend-perf-v4",
    "canonicalModelId": "pr-code-frontend-perf-v4",
    "name": "React & Web Performance (Tier 4)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-security-auditor-v4",
    "slug": "pr-code-security-auditor-v4",
    "canonicalModelId": "pr-code-security-auditor-v4",
    "name": "Application Security Auditor (Tier 4)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-refactor-clean-v4",
    "slug": "pr-code-refactor-clean-v4",
    "canonicalModelId": "pr-code-refactor-clean-v4",
    "name": "Refactoring & Clean Code (Tier 4)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-fullstack-architect-v5",
    "slug": "pr-code-fullstack-architect-v5",
    "canonicalModelId": "pr-code-fullstack-architect-v5",
    "name": "Fullstack Architect (Tier 5)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-python-systems-v5",
    "slug": "pr-code-python-systems-v5",
    "canonicalModelId": "pr-code-python-systems-v5",
    "name": "Python Systems Engineer (Tier 5)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-rust-memory-v5",
    "slug": "pr-code-rust-memory-v5",
    "canonicalModelId": "pr-code-rust-memory-v5",
    "name": "Rust & Systems Safety (Tier 5)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-database-internals-v5",
    "slug": "pr-code-database-internals-v5",
    "canonicalModelId": "pr-code-database-internals-v5",
    "name": "Database & SQL Specialist (Tier 5)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-devops-cloud-v5",
    "slug": "pr-code-devops-cloud-v5",
    "canonicalModelId": "pr-code-devops-cloud-v5",
    "name": "Cloud & Kubernetes Engineer (Tier 5)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-frontend-perf-v5",
    "slug": "pr-code-frontend-perf-v5",
    "canonicalModelId": "pr-code-frontend-perf-v5",
    "name": "React & Web Performance (Tier 5)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-security-auditor-v5",
    "slug": "pr-code-security-auditor-v5",
    "canonicalModelId": "pr-code-security-auditor-v5",
    "name": "Application Security Auditor (Tier 5)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-refactor-clean-v5",
    "slug": "pr-code-refactor-clean-v5",
    "canonicalModelId": "pr-code-refactor-clean-v5",
    "name": "Refactoring & Clean Code (Tier 5)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-fullstack-architect-v6",
    "slug": "pr-code-fullstack-architect-v6",
    "canonicalModelId": "pr-code-fullstack-architect-v6",
    "name": "Fullstack Architect (Tier 6)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-python-systems-v6",
    "slug": "pr-code-python-systems-v6",
    "canonicalModelId": "pr-code-python-systems-v6",
    "name": "Python Systems Engineer (Tier 6)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-rust-memory-v6",
    "slug": "pr-code-rust-memory-v6",
    "canonicalModelId": "pr-code-rust-memory-v6",
    "name": "Rust & Systems Safety (Tier 6)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-database-internals-v6",
    "slug": "pr-code-database-internals-v6",
    "canonicalModelId": "pr-code-database-internals-v6",
    "name": "Database & SQL Specialist (Tier 6)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-devops-cloud-v6",
    "slug": "pr-code-devops-cloud-v6",
    "canonicalModelId": "pr-code-devops-cloud-v6",
    "name": "Cloud & Kubernetes Engineer (Tier 6)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-frontend-perf-v6",
    "slug": "pr-code-frontend-perf-v6",
    "canonicalModelId": "pr-code-frontend-perf-v6",
    "name": "React & Web Performance (Tier 6)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-security-auditor-v6",
    "slug": "pr-code-security-auditor-v6",
    "canonicalModelId": "pr-code-security-auditor-v6",
    "name": "Application Security Auditor (Tier 6)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-refactor-clean-v6",
    "slug": "pr-code-refactor-clean-v6",
    "canonicalModelId": "pr-code-refactor-clean-v6",
    "name": "Refactoring & Clean Code (Tier 6)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-fullstack-architect-v7",
    "slug": "pr-code-fullstack-architect-v7",
    "canonicalModelId": "pr-code-fullstack-architect-v7",
    "name": "Fullstack Architect (Tier 7)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-python-systems-v7",
    "slug": "pr-code-python-systems-v7",
    "canonicalModelId": "pr-code-python-systems-v7",
    "name": "Python Systems Engineer (Tier 7)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-rust-memory-v7",
    "slug": "pr-code-rust-memory-v7",
    "canonicalModelId": "pr-code-rust-memory-v7",
    "name": "Rust & Systems Safety (Tier 7)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-database-internals-v7",
    "slug": "pr-code-database-internals-v7",
    "canonicalModelId": "pr-code-database-internals-v7",
    "name": "Database & SQL Specialist (Tier 7)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-devops-cloud-v7",
    "slug": "pr-code-devops-cloud-v7",
    "canonicalModelId": "pr-code-devops-cloud-v7",
    "name": "Cloud & Kubernetes Engineer (Tier 7)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-frontend-perf-v7",
    "slug": "pr-code-frontend-perf-v7",
    "canonicalModelId": "pr-code-frontend-perf-v7",
    "name": "React & Web Performance (Tier 7)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-security-auditor-v7",
    "slug": "pr-code-security-auditor-v7",
    "canonicalModelId": "pr-code-security-auditor-v7",
    "name": "Application Security Auditor (Tier 7)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-refactor-clean-v7",
    "slug": "pr-code-refactor-clean-v7",
    "canonicalModelId": "pr-code-refactor-clean-v7",
    "name": "Refactoring & Clean Code (Tier 7)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-fullstack-architect-v8",
    "slug": "pr-code-fullstack-architect-v8",
    "canonicalModelId": "pr-code-fullstack-architect-v8",
    "name": "Fullstack Architect (Tier 8)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-python-systems-v8",
    "slug": "pr-code-python-systems-v8",
    "canonicalModelId": "pr-code-python-systems-v8",
    "name": "Python Systems Engineer (Tier 8)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-rust-memory-v8",
    "slug": "pr-code-rust-memory-v8",
    "canonicalModelId": "pr-code-rust-memory-v8",
    "name": "Rust & Systems Safety (Tier 8)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-database-internals-v8",
    "slug": "pr-code-database-internals-v8",
    "canonicalModelId": "pr-code-database-internals-v8",
    "name": "Database & SQL Specialist (Tier 8)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-devops-cloud-v8",
    "slug": "pr-code-devops-cloud-v8",
    "canonicalModelId": "pr-code-devops-cloud-v8",
    "name": "Cloud & Kubernetes Engineer (Tier 8)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-frontend-perf-v8",
    "slug": "pr-code-frontend-perf-v8",
    "canonicalModelId": "pr-code-frontend-perf-v8",
    "name": "React & Web Performance (Tier 8)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-security-auditor-v8",
    "slug": "pr-code-security-auditor-v8",
    "canonicalModelId": "pr-code-security-auditor-v8",
    "name": "Application Security Auditor (Tier 8)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-refactor-clean-v8",
    "slug": "pr-code-refactor-clean-v8",
    "canonicalModelId": "pr-code-refactor-clean-v8",
    "name": "Refactoring & Clean Code (Tier 8)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-fullstack-architect-v9",
    "slug": "pr-code-fullstack-architect-v9",
    "canonicalModelId": "pr-code-fullstack-architect-v9",
    "name": "Fullstack Architect (Tier 9)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-python-systems-v9",
    "slug": "pr-code-python-systems-v9",
    "canonicalModelId": "pr-code-python-systems-v9",
    "name": "Python Systems Engineer (Tier 9)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-rust-memory-v9",
    "slug": "pr-code-rust-memory-v9",
    "canonicalModelId": "pr-code-rust-memory-v9",
    "name": "Rust & Systems Safety (Tier 9)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-database-internals-v9",
    "slug": "pr-code-database-internals-v9",
    "canonicalModelId": "pr-code-database-internals-v9",
    "name": "Database & SQL Specialist (Tier 9)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-devops-cloud-v9",
    "slug": "pr-code-devops-cloud-v9",
    "canonicalModelId": "pr-code-devops-cloud-v9",
    "name": "Cloud & Kubernetes Engineer (Tier 9)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Terraform IaC, Helm charts, CI/CD GitHub workflows, and container networking. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-frontend-perf-v9",
    "slug": "pr-code-frontend-perf-v9",
    "canonicalModelId": "pr-code-frontend-perf-v9",
    "name": "React & Web Performance (Tier 9)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Hydration minimization, memoization, WebGL, and micro-frontend design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-security-auditor-v9",
    "slug": "pr-code-security-auditor-v9",
    "canonicalModelId": "pr-code-security-auditor-v9",
    "name": "Application Security Auditor (Tier 9)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "OWASP Top 10 mitigation, auth handshake verification, and sanitize checks. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-refactor-clean-v9",
    "slug": "pr-code-refactor-clean-v9",
    "canonicalModelId": "pr-code-refactor-clean-v9",
    "name": "Refactoring & Clean Code (Tier 9)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Dead code elimination, design pattern retrofitting, and cyclomatic complexity reduction. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-fullstack-architect-v10",
    "slug": "pr-code-fullstack-architect-v10",
    "canonicalModelId": "pr-code-fullstack-architect-v10",
    "name": "Fullstack Architect (Tier 10)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Next.js, TypeScript, Tailwind, and serverless distributed architecture synthesis. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-python-systems-v10",
    "slug": "pr-code-python-systems-v10",
    "canonicalModelId": "pr-code-python-systems-v10",
    "name": "Python Systems Engineer (Tier 10)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "AsyncIO, FastAPI, PyTorch, and high-performance backend Python pipeline design. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-rust-memory-v10",
    "slug": "pr-code-rust-memory-v10",
    "canonicalModelId": "pr-code-rust-memory-v10",
    "name": "Rust & Systems Safety (Tier 10)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "Zero-cost abstractions, borrow-checker resolution, and unsafe audit engineering. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-code-database-internals-v10",
    "slug": "pr-code-database-internals-v10",
    "canonicalModelId": "pr-code-database-internals-v10",
    "name": "Database & SQL Specialist (Tier 10)",
    "category": "coding",
    "categoryLabel": "Coding & Software Engineering",
    "description": "PostgreSQL query plan optimization, indexing strategies, and schema migrations. Calibrated for coding workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-workflow-runner",
    "slug": "pr-agent-workflow-runner",
    "canonicalModelId": "pr-agent-workflow-runner",
    "name": "Autonomous Workflow Orchestrator",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-repo-synthesizer",
    "slug": "pr-agent-repo-synthesizer",
    "canonicalModelId": "pr-agent-repo-synthesizer",
    "name": "Repo-Level Agent",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-schema-tooler",
    "slug": "pr-agent-schema-tooler",
    "canonicalModelId": "pr-agent-schema-tooler",
    "name": "Strict Schema Invoker",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-sandbox-debugger",
    "slug": "pr-agent-sandbox-debugger",
    "canonicalModelId": "pr-agent-sandbox-debugger",
    "name": "Runtime Sandbox Debugger",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-agent-swarm",
    "slug": "pr-agent-agent-swarm",
    "canonicalModelId": "pr-agent-agent-swarm",
    "name": "Subagent Team Lead",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-workflow-runner-v2",
    "slug": "pr-agent-workflow-runner-v2",
    "canonicalModelId": "pr-agent-workflow-runner-v2",
    "name": "Autonomous Workflow Orchestrator (Tier 2)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-repo-synthesizer-v2",
    "slug": "pr-agent-repo-synthesizer-v2",
    "canonicalModelId": "pr-agent-repo-synthesizer-v2",
    "name": "Repo-Level Agent (Tier 2)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-schema-tooler-v2",
    "slug": "pr-agent-schema-tooler-v2",
    "canonicalModelId": "pr-agent-schema-tooler-v2",
    "name": "Strict Schema Invoker (Tier 2)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-sandbox-debugger-v2",
    "slug": "pr-agent-sandbox-debugger-v2",
    "canonicalModelId": "pr-agent-sandbox-debugger-v2",
    "name": "Runtime Sandbox Debugger (Tier 2)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-agent-swarm-v2",
    "slug": "pr-agent-agent-swarm-v2",
    "canonicalModelId": "pr-agent-agent-swarm-v2",
    "name": "Subagent Team Lead (Tier 2)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-workflow-runner-v3",
    "slug": "pr-agent-workflow-runner-v3",
    "canonicalModelId": "pr-agent-workflow-runner-v3",
    "name": "Autonomous Workflow Orchestrator (Tier 3)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-repo-synthesizer-v3",
    "slug": "pr-agent-repo-synthesizer-v3",
    "canonicalModelId": "pr-agent-repo-synthesizer-v3",
    "name": "Repo-Level Agent (Tier 3)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-schema-tooler-v3",
    "slug": "pr-agent-schema-tooler-v3",
    "canonicalModelId": "pr-agent-schema-tooler-v3",
    "name": "Strict Schema Invoker (Tier 3)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-sandbox-debugger-v3",
    "slug": "pr-agent-sandbox-debugger-v3",
    "canonicalModelId": "pr-agent-sandbox-debugger-v3",
    "name": "Runtime Sandbox Debugger (Tier 3)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-agent-swarm-v3",
    "slug": "pr-agent-agent-swarm-v3",
    "canonicalModelId": "pr-agent-agent-swarm-v3",
    "name": "Subagent Team Lead (Tier 3)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-workflow-runner-v4",
    "slug": "pr-agent-workflow-runner-v4",
    "canonicalModelId": "pr-agent-workflow-runner-v4",
    "name": "Autonomous Workflow Orchestrator (Tier 4)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-repo-synthesizer-v4",
    "slug": "pr-agent-repo-synthesizer-v4",
    "canonicalModelId": "pr-agent-repo-synthesizer-v4",
    "name": "Repo-Level Agent (Tier 4)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-schema-tooler-v4",
    "slug": "pr-agent-schema-tooler-v4",
    "canonicalModelId": "pr-agent-schema-tooler-v4",
    "name": "Strict Schema Invoker (Tier 4)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-sandbox-debugger-v4",
    "slug": "pr-agent-sandbox-debugger-v4",
    "canonicalModelId": "pr-agent-sandbox-debugger-v4",
    "name": "Runtime Sandbox Debugger (Tier 4)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-agent-swarm-v4",
    "slug": "pr-agent-agent-swarm-v4",
    "canonicalModelId": "pr-agent-agent-swarm-v4",
    "name": "Subagent Team Lead (Tier 4)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-workflow-runner-v5",
    "slug": "pr-agent-workflow-runner-v5",
    "canonicalModelId": "pr-agent-workflow-runner-v5",
    "name": "Autonomous Workflow Orchestrator (Tier 5)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-repo-synthesizer-v5",
    "slug": "pr-agent-repo-synthesizer-v5",
    "canonicalModelId": "pr-agent-repo-synthesizer-v5",
    "name": "Repo-Level Agent (Tier 5)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-schema-tooler-v5",
    "slug": "pr-agent-schema-tooler-v5",
    "canonicalModelId": "pr-agent-schema-tooler-v5",
    "name": "Strict Schema Invoker (Tier 5)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-sandbox-debugger-v5",
    "slug": "pr-agent-sandbox-debugger-v5",
    "canonicalModelId": "pr-agent-sandbox-debugger-v5",
    "name": "Runtime Sandbox Debugger (Tier 5)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-agent-swarm-v5",
    "slug": "pr-agent-agent-swarm-v5",
    "canonicalModelId": "pr-agent-agent-swarm-v5",
    "name": "Subagent Team Lead (Tier 5)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-workflow-runner-v6",
    "slug": "pr-agent-workflow-runner-v6",
    "canonicalModelId": "pr-agent-workflow-runner-v6",
    "name": "Autonomous Workflow Orchestrator (Tier 6)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-repo-synthesizer-v6",
    "slug": "pr-agent-repo-synthesizer-v6",
    "canonicalModelId": "pr-agent-repo-synthesizer-v6",
    "name": "Repo-Level Agent (Tier 6)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-schema-tooler-v6",
    "slug": "pr-agent-schema-tooler-v6",
    "canonicalModelId": "pr-agent-schema-tooler-v6",
    "name": "Strict Schema Invoker (Tier 6)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-sandbox-debugger-v6",
    "slug": "pr-agent-sandbox-debugger-v6",
    "canonicalModelId": "pr-agent-sandbox-debugger-v6",
    "name": "Runtime Sandbox Debugger (Tier 6)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-agent-swarm-v6",
    "slug": "pr-agent-agent-swarm-v6",
    "canonicalModelId": "pr-agent-agent-swarm-v6",
    "name": "Subagent Team Lead (Tier 6)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-workflow-runner-v7",
    "slug": "pr-agent-workflow-runner-v7",
    "canonicalModelId": "pr-agent-workflow-runner-v7",
    "name": "Autonomous Workflow Orchestrator (Tier 7)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-repo-synthesizer-v7",
    "slug": "pr-agent-repo-synthesizer-v7",
    "canonicalModelId": "pr-agent-repo-synthesizer-v7",
    "name": "Repo-Level Agent (Tier 7)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-schema-tooler-v7",
    "slug": "pr-agent-schema-tooler-v7",
    "canonicalModelId": "pr-agent-schema-tooler-v7",
    "name": "Strict Schema Invoker (Tier 7)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-sandbox-debugger-v7",
    "slug": "pr-agent-sandbox-debugger-v7",
    "canonicalModelId": "pr-agent-sandbox-debugger-v7",
    "name": "Runtime Sandbox Debugger (Tier 7)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-agent-swarm-v7",
    "slug": "pr-agent-agent-swarm-v7",
    "canonicalModelId": "pr-agent-agent-swarm-v7",
    "name": "Subagent Team Lead (Tier 7)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-workflow-runner-v8",
    "slug": "pr-agent-workflow-runner-v8",
    "canonicalModelId": "pr-agent-workflow-runner-v8",
    "name": "Autonomous Workflow Orchestrator (Tier 8)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-repo-synthesizer-v8",
    "slug": "pr-agent-repo-synthesizer-v8",
    "canonicalModelId": "pr-agent-repo-synthesizer-v8",
    "name": "Repo-Level Agent (Tier 8)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-schema-tooler-v8",
    "slug": "pr-agent-schema-tooler-v8",
    "canonicalModelId": "pr-agent-schema-tooler-v8",
    "name": "Strict Schema Invoker (Tier 8)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-sandbox-debugger-v8",
    "slug": "pr-agent-sandbox-debugger-v8",
    "canonicalModelId": "pr-agent-sandbox-debugger-v8",
    "name": "Runtime Sandbox Debugger (Tier 8)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-agent-swarm-v8",
    "slug": "pr-agent-agent-swarm-v8",
    "canonicalModelId": "pr-agent-agent-swarm-v8",
    "name": "Subagent Team Lead (Tier 8)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-workflow-runner-v9",
    "slug": "pr-agent-workflow-runner-v9",
    "canonicalModelId": "pr-agent-workflow-runner-v9",
    "name": "Autonomous Workflow Orchestrator (Tier 9)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-step tool calling, API sequencing, and rollback-aware execution. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-repo-synthesizer-v9",
    "slug": "pr-agent-repo-synthesizer-v9",
    "canonicalModelId": "pr-agent-repo-synthesizer-v9",
    "name": "Repo-Level Agent (Tier 9)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Multi-file repository navigation, diff synthesis, and test runner verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-schema-tooler-v9",
    "slug": "pr-agent-schema-tooler-v9",
    "canonicalModelId": "pr-agent-schema-tooler-v9",
    "name": "Strict Schema Invoker (Tier 9)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Deterministic JSON Schema and Zod tool call parameter generation without hallucinations. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-sandbox-debugger-v9",
    "slug": "pr-agent-sandbox-debugger-v9",
    "canonicalModelId": "pr-agent-sandbox-debugger-v9",
    "name": "Runtime Sandbox Debugger (Tier 9)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Terminal stderr triage, stack trace inspection, and iterative patch verification. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-agent-agent-swarm-v9",
    "slug": "pr-agent-agent-swarm-v9",
    "canonicalModelId": "pr-agent-agent-swarm-v9",
    "name": "Subagent Team Lead (Tier 9)",
    "category": "agentic",
    "categoryLabel": "Agentic Coding & Tools",
    "description": "Decomposes complex requests into parallel delegate task queues. Calibrated for agentic workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3772,
      "outputPerMillion": 11315,
      "cachedInputPerMillion": 1886,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.4714,
      "outputPerMillion": 1.4143,
      "cachedInputPerMillion": 0.2357
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.3,
      "outputPerMillion": 0.9,
      "cachedInputPerMillion": 0.15
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-literature-review",
    "slug": "pr-research-literature-review",
    "canonicalModelId": "pr-research-literature-review",
    "name": "Literature Reviewer",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-competitive-intel",
    "slug": "pr-research-competitive-intel",
    "canonicalModelId": "pr-research-competitive-intel",
    "name": "Market & Competitive Intel",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-data-synthesizer",
    "slug": "pr-research-data-synthesizer",
    "canonicalModelId": "pr-research-data-synthesizer",
    "name": "Qualitative Data Synthesizer",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-meta-analyst",
    "slug": "pr-research-meta-analyst",
    "canonicalModelId": "pr-research-meta-analyst",
    "name": "Meta-Analysis Assistant",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-deep-investigator",
    "slug": "pr-research-deep-investigator",
    "canonicalModelId": "pr-research-deep-investigator",
    "name": "Deep Research Specialist",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-literature-review-v2",
    "slug": "pr-research-literature-review-v2",
    "canonicalModelId": "pr-research-literature-review-v2",
    "name": "Literature Reviewer (Tier 2)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-competitive-intel-v2",
    "slug": "pr-research-competitive-intel-v2",
    "canonicalModelId": "pr-research-competitive-intel-v2",
    "name": "Market & Competitive Intel (Tier 2)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-data-synthesizer-v2",
    "slug": "pr-research-data-synthesizer-v2",
    "canonicalModelId": "pr-research-data-synthesizer-v2",
    "name": "Qualitative Data Synthesizer (Tier 2)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-meta-analyst-v2",
    "slug": "pr-research-meta-analyst-v2",
    "canonicalModelId": "pr-research-meta-analyst-v2",
    "name": "Meta-Analysis Assistant (Tier 2)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-deep-investigator-v2",
    "slug": "pr-research-deep-investigator-v2",
    "canonicalModelId": "pr-research-deep-investigator-v2",
    "name": "Deep Research Specialist (Tier 2)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-literature-review-v3",
    "slug": "pr-research-literature-review-v3",
    "canonicalModelId": "pr-research-literature-review-v3",
    "name": "Literature Reviewer (Tier 3)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-competitive-intel-v3",
    "slug": "pr-research-competitive-intel-v3",
    "canonicalModelId": "pr-research-competitive-intel-v3",
    "name": "Market & Competitive Intel (Tier 3)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-data-synthesizer-v3",
    "slug": "pr-research-data-synthesizer-v3",
    "canonicalModelId": "pr-research-data-synthesizer-v3",
    "name": "Qualitative Data Synthesizer (Tier 3)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-meta-analyst-v3",
    "slug": "pr-research-meta-analyst-v3",
    "canonicalModelId": "pr-research-meta-analyst-v3",
    "name": "Meta-Analysis Assistant (Tier 3)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-deep-investigator-v3",
    "slug": "pr-research-deep-investigator-v3",
    "canonicalModelId": "pr-research-deep-investigator-v3",
    "name": "Deep Research Specialist (Tier 3)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-literature-review-v4",
    "slug": "pr-research-literature-review-v4",
    "canonicalModelId": "pr-research-literature-review-v4",
    "name": "Literature Reviewer (Tier 4)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-competitive-intel-v4",
    "slug": "pr-research-competitive-intel-v4",
    "canonicalModelId": "pr-research-competitive-intel-v4",
    "name": "Market & Competitive Intel (Tier 4)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-data-synthesizer-v4",
    "slug": "pr-research-data-synthesizer-v4",
    "canonicalModelId": "pr-research-data-synthesizer-v4",
    "name": "Qualitative Data Synthesizer (Tier 4)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-meta-analyst-v4",
    "slug": "pr-research-meta-analyst-v4",
    "canonicalModelId": "pr-research-meta-analyst-v4",
    "name": "Meta-Analysis Assistant (Tier 4)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-deep-investigator-v4",
    "slug": "pr-research-deep-investigator-v4",
    "canonicalModelId": "pr-research-deep-investigator-v4",
    "name": "Deep Research Specialist (Tier 4)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-literature-review-v5",
    "slug": "pr-research-literature-review-v5",
    "canonicalModelId": "pr-research-literature-review-v5",
    "name": "Literature Reviewer (Tier 5)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-competitive-intel-v5",
    "slug": "pr-research-competitive-intel-v5",
    "canonicalModelId": "pr-research-competitive-intel-v5",
    "name": "Market & Competitive Intel (Tier 5)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-data-synthesizer-v5",
    "slug": "pr-research-data-synthesizer-v5",
    "canonicalModelId": "pr-research-data-synthesizer-v5",
    "name": "Qualitative Data Synthesizer (Tier 5)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-meta-analyst-v5",
    "slug": "pr-research-meta-analyst-v5",
    "canonicalModelId": "pr-research-meta-analyst-v5",
    "name": "Meta-Analysis Assistant (Tier 5)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-deep-investigator-v5",
    "slug": "pr-research-deep-investigator-v5",
    "canonicalModelId": "pr-research-deep-investigator-v5",
    "name": "Deep Research Specialist (Tier 5)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-literature-review-v6",
    "slug": "pr-research-literature-review-v6",
    "canonicalModelId": "pr-research-literature-review-v6",
    "name": "Literature Reviewer (Tier 6)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-competitive-intel-v6",
    "slug": "pr-research-competitive-intel-v6",
    "canonicalModelId": "pr-research-competitive-intel-v6",
    "name": "Market & Competitive Intel (Tier 6)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-data-synthesizer-v6",
    "slug": "pr-research-data-synthesizer-v6",
    "canonicalModelId": "pr-research-data-synthesizer-v6",
    "name": "Qualitative Data Synthesizer (Tier 6)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-meta-analyst-v6",
    "slug": "pr-research-meta-analyst-v6",
    "canonicalModelId": "pr-research-meta-analyst-v6",
    "name": "Meta-Analysis Assistant (Tier 6)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-deep-investigator-v6",
    "slug": "pr-research-deep-investigator-v6",
    "canonicalModelId": "pr-research-deep-investigator-v6",
    "name": "Deep Research Specialist (Tier 6)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-literature-review-v7",
    "slug": "pr-research-literature-review-v7",
    "canonicalModelId": "pr-research-literature-review-v7",
    "name": "Literature Reviewer (Tier 7)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-competitive-intel-v7",
    "slug": "pr-research-competitive-intel-v7",
    "canonicalModelId": "pr-research-competitive-intel-v7",
    "name": "Market & Competitive Intel (Tier 7)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-data-synthesizer-v7",
    "slug": "pr-research-data-synthesizer-v7",
    "canonicalModelId": "pr-research-data-synthesizer-v7",
    "name": "Qualitative Data Synthesizer (Tier 7)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-meta-analyst-v7",
    "slug": "pr-research-meta-analyst-v7",
    "canonicalModelId": "pr-research-meta-analyst-v7",
    "name": "Meta-Analysis Assistant (Tier 7)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-deep-investigator-v7",
    "slug": "pr-research-deep-investigator-v7",
    "canonicalModelId": "pr-research-deep-investigator-v7",
    "name": "Deep Research Specialist (Tier 7)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-literature-review-v8",
    "slug": "pr-research-literature-review-v8",
    "canonicalModelId": "pr-research-literature-review-v8",
    "name": "Literature Reviewer (Tier 8)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-competitive-intel-v8",
    "slug": "pr-research-competitive-intel-v8",
    "canonicalModelId": "pr-research-competitive-intel-v8",
    "name": "Market & Competitive Intel (Tier 8)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-data-synthesizer-v8",
    "slug": "pr-research-data-synthesizer-v8",
    "canonicalModelId": "pr-research-data-synthesizer-v8",
    "name": "Qualitative Data Synthesizer (Tier 8)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-meta-analyst-v8",
    "slug": "pr-research-meta-analyst-v8",
    "canonicalModelId": "pr-research-meta-analyst-v8",
    "name": "Meta-Analysis Assistant (Tier 8)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-deep-investigator-v8",
    "slug": "pr-research-deep-investigator-v8",
    "canonicalModelId": "pr-research-deep-investigator-v8",
    "name": "Deep Research Specialist (Tier 8)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Multi-layered investigation exploring historical precedent, modern context, and edge risks. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-literature-review-v9",
    "slug": "pr-research-literature-review-v9",
    "canonicalModelId": "pr-research-literature-review-v9",
    "name": "Literature Reviewer (Tier 9)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Cross-disciplinary paper synthesis, citation mapping, and methodology evaluation. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-competitive-intel-v9",
    "slug": "pr-research-competitive-intel-v9",
    "canonicalModelId": "pr-research-competitive-intel-v9",
    "name": "Market & Competitive Intel (Tier 9)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Moat analysis, unit economics breakdown, and patent landscape survey. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-data-synthesizer-v9",
    "slug": "pr-research-data-synthesizer-v9",
    "canonicalModelId": "pr-research-data-synthesizer-v9",
    "name": "Qualitative Data Synthesizer (Tier 9)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Extracts key findings, clusters themes, and summarizes long unstructured transcripts. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-research-meta-analyst-v9",
    "slug": "pr-research-meta-analyst-v9",
    "canonicalModelId": "pr-research-meta-analyst-v9",
    "name": "Meta-Analysis Assistant (Tier 9)",
    "category": "research",
    "categoryLabel": "Research & Analysis",
    "description": "Reconciles conflicting studies, evaluates sample sizes, and quantifies statistical significance. Calibrated for research workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 4400,
      "outputPerMillion": 13200,
      "cachedInputPerMillion": 2200,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.55,
      "outputPerMillion": 1.65,
      "cachedInputPerMillion": 0.275
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.35,
      "outputPerMillion": 1.05,
      "cachedInputPerMillion": 0.175
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-discrete-proofs",
    "slug": "pr-math-discrete-proofs",
    "canonicalModelId": "pr-math-discrete-proofs",
    "name": "Discrete Math & Proof Assistant",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-calculus-analysis",
    "slug": "pr-math-calculus-analysis",
    "canonicalModelId": "pr-math-calculus-analysis",
    "name": "Continuous Calculus & ODEs",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-linear-algebra",
    "slug": "pr-math-linear-algebra",
    "canonicalModelId": "pr-math-linear-algebra",
    "name": "Linear Algebra & Tensor Math",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-physics-simulator",
    "slug": "pr-math-physics-simulator",
    "canonicalModelId": "pr-math-physics-simulator",
    "name": "Classical & Quantum Physics",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-bio-cheminfo",
    "slug": "pr-math-bio-cheminfo",
    "canonicalModelId": "pr-math-bio-cheminfo",
    "name": "Biochemistry & Molecular Modeling",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-discrete-proofs-v2",
    "slug": "pr-math-discrete-proofs-v2",
    "canonicalModelId": "pr-math-discrete-proofs-v2",
    "name": "Discrete Math & Proof Assistant (Tier 2)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-calculus-analysis-v2",
    "slug": "pr-math-calculus-analysis-v2",
    "canonicalModelId": "pr-math-calculus-analysis-v2",
    "name": "Continuous Calculus & ODEs (Tier 2)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-linear-algebra-v2",
    "slug": "pr-math-linear-algebra-v2",
    "canonicalModelId": "pr-math-linear-algebra-v2",
    "name": "Linear Algebra & Tensor Math (Tier 2)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-physics-simulator-v2",
    "slug": "pr-math-physics-simulator-v2",
    "canonicalModelId": "pr-math-physics-simulator-v2",
    "name": "Classical & Quantum Physics (Tier 2)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-bio-cheminfo-v2",
    "slug": "pr-math-bio-cheminfo-v2",
    "canonicalModelId": "pr-math-bio-cheminfo-v2",
    "name": "Biochemistry & Molecular Modeling (Tier 2)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-discrete-proofs-v3",
    "slug": "pr-math-discrete-proofs-v3",
    "canonicalModelId": "pr-math-discrete-proofs-v3",
    "name": "Discrete Math & Proof Assistant (Tier 3)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-calculus-analysis-v3",
    "slug": "pr-math-calculus-analysis-v3",
    "canonicalModelId": "pr-math-calculus-analysis-v3",
    "name": "Continuous Calculus & ODEs (Tier 3)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-linear-algebra-v3",
    "slug": "pr-math-linear-algebra-v3",
    "canonicalModelId": "pr-math-linear-algebra-v3",
    "name": "Linear Algebra & Tensor Math (Tier 3)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-physics-simulator-v3",
    "slug": "pr-math-physics-simulator-v3",
    "canonicalModelId": "pr-math-physics-simulator-v3",
    "name": "Classical & Quantum Physics (Tier 3)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-bio-cheminfo-v3",
    "slug": "pr-math-bio-cheminfo-v3",
    "canonicalModelId": "pr-math-bio-cheminfo-v3",
    "name": "Biochemistry & Molecular Modeling (Tier 3)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-discrete-proofs-v4",
    "slug": "pr-math-discrete-proofs-v4",
    "canonicalModelId": "pr-math-discrete-proofs-v4",
    "name": "Discrete Math & Proof Assistant (Tier 4)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-calculus-analysis-v4",
    "slug": "pr-math-calculus-analysis-v4",
    "canonicalModelId": "pr-math-calculus-analysis-v4",
    "name": "Continuous Calculus & ODEs (Tier 4)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-linear-algebra-v4",
    "slug": "pr-math-linear-algebra-v4",
    "canonicalModelId": "pr-math-linear-algebra-v4",
    "name": "Linear Algebra & Tensor Math (Tier 4)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-physics-simulator-v4",
    "slug": "pr-math-physics-simulator-v4",
    "canonicalModelId": "pr-math-physics-simulator-v4",
    "name": "Classical & Quantum Physics (Tier 4)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-bio-cheminfo-v4",
    "slug": "pr-math-bio-cheminfo-v4",
    "canonicalModelId": "pr-math-bio-cheminfo-v4",
    "name": "Biochemistry & Molecular Modeling (Tier 4)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-discrete-proofs-v5",
    "slug": "pr-math-discrete-proofs-v5",
    "canonicalModelId": "pr-math-discrete-proofs-v5",
    "name": "Discrete Math & Proof Assistant (Tier 5)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-calculus-analysis-v5",
    "slug": "pr-math-calculus-analysis-v5",
    "canonicalModelId": "pr-math-calculus-analysis-v5",
    "name": "Continuous Calculus & ODEs (Tier 5)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-linear-algebra-v5",
    "slug": "pr-math-linear-algebra-v5",
    "canonicalModelId": "pr-math-linear-algebra-v5",
    "name": "Linear Algebra & Tensor Math (Tier 5)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-physics-simulator-v5",
    "slug": "pr-math-physics-simulator-v5",
    "canonicalModelId": "pr-math-physics-simulator-v5",
    "name": "Classical & Quantum Physics (Tier 5)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-bio-cheminfo-v5",
    "slug": "pr-math-bio-cheminfo-v5",
    "canonicalModelId": "pr-math-bio-cheminfo-v5",
    "name": "Biochemistry & Molecular Modeling (Tier 5)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-discrete-proofs-v6",
    "slug": "pr-math-discrete-proofs-v6",
    "canonicalModelId": "pr-math-discrete-proofs-v6",
    "name": "Discrete Math & Proof Assistant (Tier 6)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Inductive proofs, combinatorics, graph theory, and formal lemma verification. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-calculus-analysis-v6",
    "slug": "pr-math-calculus-analysis-v6",
    "canonicalModelId": "pr-math-calculus-analysis-v6",
    "name": "Continuous Calculus & ODEs (Tier 6)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Multivariable differentiation, integration bounds, and differential equation modeling. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-linear-algebra-v6",
    "slug": "pr-math-linear-algebra-v6",
    "canonicalModelId": "pr-math-linear-algebra-v6",
    "name": "Linear Algebra & Tensor Math (Tier 6)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Eigenvalue decomposition, vector space transformations, and matrix rank calculation. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-physics-simulator-v6",
    "slug": "pr-math-physics-simulator-v6",
    "canonicalModelId": "pr-math-physics-simulator-v6",
    "name": "Classical & Quantum Physics (Tier 6)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Thermodynamics, Lagrangian mechanics, and quantum state formalism analysis. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-math-bio-cheminfo-v6",
    "slug": "pr-math-bio-cheminfo-v6",
    "canonicalModelId": "pr-math-bio-cheminfo-v6",
    "name": "Biochemistry & Molecular Modeling (Tier 6)",
    "category": "math_science",
    "categoryLabel": "Mathematics & Science",
    "description": "Reaction kinematics, ligand-receptor binding affinity, and metabolic pathway exploration. Calibrated for math science workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-tamil-dravidian",
    "slug": "pr-lang-tamil-dravidian",
    "canonicalModelId": "pr-lang-tamil-dravidian",
    "name": "Tamil & Dravidian Scholar",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-indic-translingual",
    "slug": "pr-lang-indic-translingual",
    "canonicalModelId": "pr-lang-indic-translingual",
    "name": "Indic Polyglot",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-euro-multilingual",
    "slug": "pr-lang-euro-multilingual",
    "canonicalModelId": "pr-lang-euro-multilingual",
    "name": "European Romance & Germanic",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-cjk-specialist",
    "slug": "pr-lang-cjk-specialist",
    "canonicalModelId": "pr-lang-cjk-specialist",
    "name": "East Asian CJK Specialist",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-arabic-mena",
    "slug": "pr-lang-arabic-mena",
    "canonicalModelId": "pr-lang-arabic-mena",
    "name": "Arabic & MENA Dialectics",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-tamil-dravidian-v2",
    "slug": "pr-lang-tamil-dravidian-v2",
    "canonicalModelId": "pr-lang-tamil-dravidian-v2",
    "name": "Tamil & Dravidian Scholar (Tier 2)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-indic-translingual-v2",
    "slug": "pr-lang-indic-translingual-v2",
    "canonicalModelId": "pr-lang-indic-translingual-v2",
    "name": "Indic Polyglot (Tier 2)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-euro-multilingual-v2",
    "slug": "pr-lang-euro-multilingual-v2",
    "canonicalModelId": "pr-lang-euro-multilingual-v2",
    "name": "European Romance & Germanic (Tier 2)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-cjk-specialist-v2",
    "slug": "pr-lang-cjk-specialist-v2",
    "canonicalModelId": "pr-lang-cjk-specialist-v2",
    "name": "East Asian CJK Specialist (Tier 2)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-arabic-mena-v2",
    "slug": "pr-lang-arabic-mena-v2",
    "canonicalModelId": "pr-lang-arabic-mena-v2",
    "name": "Arabic & MENA Dialectics (Tier 2)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-tamil-dravidian-v3",
    "slug": "pr-lang-tamil-dravidian-v3",
    "canonicalModelId": "pr-lang-tamil-dravidian-v3",
    "name": "Tamil & Dravidian Scholar (Tier 3)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-indic-translingual-v3",
    "slug": "pr-lang-indic-translingual-v3",
    "canonicalModelId": "pr-lang-indic-translingual-v3",
    "name": "Indic Polyglot (Tier 3)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-euro-multilingual-v3",
    "slug": "pr-lang-euro-multilingual-v3",
    "canonicalModelId": "pr-lang-euro-multilingual-v3",
    "name": "European Romance & Germanic (Tier 3)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-cjk-specialist-v3",
    "slug": "pr-lang-cjk-specialist-v3",
    "canonicalModelId": "pr-lang-cjk-specialist-v3",
    "name": "East Asian CJK Specialist (Tier 3)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-arabic-mena-v3",
    "slug": "pr-lang-arabic-mena-v3",
    "canonicalModelId": "pr-lang-arabic-mena-v3",
    "name": "Arabic & MENA Dialectics (Tier 3)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-tamil-dravidian-v4",
    "slug": "pr-lang-tamil-dravidian-v4",
    "canonicalModelId": "pr-lang-tamil-dravidian-v4",
    "name": "Tamil & Dravidian Scholar (Tier 4)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-indic-translingual-v4",
    "slug": "pr-lang-indic-translingual-v4",
    "canonicalModelId": "pr-lang-indic-translingual-v4",
    "name": "Indic Polyglot (Tier 4)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-euro-multilingual-v4",
    "slug": "pr-lang-euro-multilingual-v4",
    "canonicalModelId": "pr-lang-euro-multilingual-v4",
    "name": "European Romance & Germanic (Tier 4)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-cjk-specialist-v4",
    "slug": "pr-lang-cjk-specialist-v4",
    "canonicalModelId": "pr-lang-cjk-specialist-v4",
    "name": "East Asian CJK Specialist (Tier 4)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-arabic-mena-v4",
    "slug": "pr-lang-arabic-mena-v4",
    "canonicalModelId": "pr-lang-arabic-mena-v4",
    "name": "Arabic & MENA Dialectics (Tier 4)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-tamil-dravidian-v5",
    "slug": "pr-lang-tamil-dravidian-v5",
    "canonicalModelId": "pr-lang-tamil-dravidian-v5",
    "name": "Tamil & Dravidian Scholar (Tier 5)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-indic-translingual-v5",
    "slug": "pr-lang-indic-translingual-v5",
    "canonicalModelId": "pr-lang-indic-translingual-v5",
    "name": "Indic Polyglot (Tier 5)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-euro-multilingual-v5",
    "slug": "pr-lang-euro-multilingual-v5",
    "canonicalModelId": "pr-lang-euro-multilingual-v5",
    "name": "European Romance & Germanic (Tier 5)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-cjk-specialist-v5",
    "slug": "pr-lang-cjk-specialist-v5",
    "canonicalModelId": "pr-lang-cjk-specialist-v5",
    "name": "East Asian CJK Specialist (Tier 5)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-arabic-mena-v5",
    "slug": "pr-lang-arabic-mena-v5",
    "canonicalModelId": "pr-lang-arabic-mena-v5",
    "name": "Arabic & MENA Dialectics (Tier 5)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-tamil-dravidian-v6",
    "slug": "pr-lang-tamil-dravidian-v6",
    "canonicalModelId": "pr-lang-tamil-dravidian-v6",
    "name": "Tamil & Dravidian Scholar (Tier 6)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-indic-translingual-v6",
    "slug": "pr-lang-indic-translingual-v6",
    "canonicalModelId": "pr-lang-indic-translingual-v6",
    "name": "Indic Polyglot (Tier 6)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-euro-multilingual-v6",
    "slug": "pr-lang-euro-multilingual-v6",
    "canonicalModelId": "pr-lang-euro-multilingual-v6",
    "name": "European Romance & Germanic (Tier 6)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-cjk-specialist-v6",
    "slug": "pr-lang-cjk-specialist-v6",
    "canonicalModelId": "pr-lang-cjk-specialist-v6",
    "name": "East Asian CJK Specialist (Tier 6)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "High-precision Japanese, Korean, and Simplified/Traditional Chinese translation with honorifics. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-arabic-mena-v6",
    "slug": "pr-lang-arabic-mena-v6",
    "canonicalModelId": "pr-lang-arabic-mena-v6",
    "name": "Arabic & MENA Dialectics (Tier 6)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Modern Standard Arabic and regional Levantine/Gulf dialect synthesis powered by Allam foundation. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-tamil-dravidian-v7",
    "slug": "pr-lang-tamil-dravidian-v7",
    "canonicalModelId": "pr-lang-tamil-dravidian-v7",
    "name": "Tamil & Dravidian Scholar (Tier 7)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Classical and modern Tamil linguistic fluency, Sangam literature translation, and grammar verification. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-indic-translingual-v7",
    "slug": "pr-lang-indic-translingual-v7",
    "canonicalModelId": "pr-lang-indic-translingual-v7",
    "name": "Indic Polyglot (Tier 7)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "High-accuracy cross-translation between Hindi, Tamil, Telugu, Kannada, Bengali, and English. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-lang-euro-multilingual-v7",
    "slug": "pr-lang-euro-multilingual-v7",
    "canonicalModelId": "pr-lang-euro-multilingual-v7",
    "name": "European Romance & Germanic (Tier 7)",
    "category": "multilingual",
    "categoryLabel": "Multilingual & Indic AI",
    "description": "Nuanced idiomatic translation across French, German, Spanish, Italian, and Portuguese. Calibrated for multilingual workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1886,
      "outputPerMillion": 5657,
      "cachedInputPerMillion": 943,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.2357,
      "outputPerMillion": 0.7071,
      "cachedInputPerMillion": 0.1178
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.15,
      "outputPerMillion": 0.45,
      "cachedInputPerMillion": 0.075
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-ocr-doc-scanner",
    "slug": "pr-vision-ocr-doc-scanner",
    "canonicalModelId": "pr-vision-ocr-doc-scanner",
    "name": "OCR Document Intelligence",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-chart-diagram",
    "slug": "pr-vision-chart-diagram",
    "canonicalModelId": "pr-vision-chart-diagram",
    "name": "Chart & Architecture Visualizer",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-ui-ux-auditor",
    "slug": "pr-vision-ui-ux-auditor",
    "canonicalModelId": "pr-vision-ui-ux-auditor",
    "name": "UI/UX Screen Inspector",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-infographic-parser",
    "slug": "pr-vision-infographic-parser",
    "canonicalModelId": "pr-vision-infographic-parser",
    "name": "Infographic Insight Extractor",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-scene-descriptor",
    "slug": "pr-vision-scene-descriptor",
    "canonicalModelId": "pr-vision-scene-descriptor",
    "name": "Spatial & Scene Comprehender",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v2",
    "slug": "pr-vision-ocr-doc-scanner-v2",
    "canonicalModelId": "pr-vision-ocr-doc-scanner-v2",
    "name": "OCR Document Intelligence (Tier 2)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-chart-diagram-v2",
    "slug": "pr-vision-chart-diagram-v2",
    "canonicalModelId": "pr-vision-chart-diagram-v2",
    "name": "Chart & Architecture Visualizer (Tier 2)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-ui-ux-auditor-v2",
    "slug": "pr-vision-ui-ux-auditor-v2",
    "canonicalModelId": "pr-vision-ui-ux-auditor-v2",
    "name": "UI/UX Screen Inspector (Tier 2)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-infographic-parser-v2",
    "slug": "pr-vision-infographic-parser-v2",
    "canonicalModelId": "pr-vision-infographic-parser-v2",
    "name": "Infographic Insight Extractor (Tier 2)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-scene-descriptor-v2",
    "slug": "pr-vision-scene-descriptor-v2",
    "canonicalModelId": "pr-vision-scene-descriptor-v2",
    "name": "Spatial & Scene Comprehender (Tier 2)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v3",
    "slug": "pr-vision-ocr-doc-scanner-v3",
    "canonicalModelId": "pr-vision-ocr-doc-scanner-v3",
    "name": "OCR Document Intelligence (Tier 3)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-chart-diagram-v3",
    "slug": "pr-vision-chart-diagram-v3",
    "canonicalModelId": "pr-vision-chart-diagram-v3",
    "name": "Chart & Architecture Visualizer (Tier 3)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-ui-ux-auditor-v3",
    "slug": "pr-vision-ui-ux-auditor-v3",
    "canonicalModelId": "pr-vision-ui-ux-auditor-v3",
    "name": "UI/UX Screen Inspector (Tier 3)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-infographic-parser-v3",
    "slug": "pr-vision-infographic-parser-v3",
    "canonicalModelId": "pr-vision-infographic-parser-v3",
    "name": "Infographic Insight Extractor (Tier 3)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-scene-descriptor-v3",
    "slug": "pr-vision-scene-descriptor-v3",
    "canonicalModelId": "pr-vision-scene-descriptor-v3",
    "name": "Spatial & Scene Comprehender (Tier 3)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v4",
    "slug": "pr-vision-ocr-doc-scanner-v4",
    "canonicalModelId": "pr-vision-ocr-doc-scanner-v4",
    "name": "OCR Document Intelligence (Tier 4)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-chart-diagram-v4",
    "slug": "pr-vision-chart-diagram-v4",
    "canonicalModelId": "pr-vision-chart-diagram-v4",
    "name": "Chart & Architecture Visualizer (Tier 4)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-ui-ux-auditor-v4",
    "slug": "pr-vision-ui-ux-auditor-v4",
    "canonicalModelId": "pr-vision-ui-ux-auditor-v4",
    "name": "UI/UX Screen Inspector (Tier 4)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-infographic-parser-v4",
    "slug": "pr-vision-infographic-parser-v4",
    "canonicalModelId": "pr-vision-infographic-parser-v4",
    "name": "Infographic Insight Extractor (Tier 4)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-scene-descriptor-v4",
    "slug": "pr-vision-scene-descriptor-v4",
    "canonicalModelId": "pr-vision-scene-descriptor-v4",
    "name": "Spatial & Scene Comprehender (Tier 4)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v5",
    "slug": "pr-vision-ocr-doc-scanner-v5",
    "canonicalModelId": "pr-vision-ocr-doc-scanner-v5",
    "name": "OCR Document Intelligence (Tier 5)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-chart-diagram-v5",
    "slug": "pr-vision-chart-diagram-v5",
    "canonicalModelId": "pr-vision-chart-diagram-v5",
    "name": "Chart & Architecture Visualizer (Tier 5)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-ui-ux-auditor-v5",
    "slug": "pr-vision-ui-ux-auditor-v5",
    "canonicalModelId": "pr-vision-ui-ux-auditor-v5",
    "name": "UI/UX Screen Inspector (Tier 5)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-infographic-parser-v5",
    "slug": "pr-vision-infographic-parser-v5",
    "canonicalModelId": "pr-vision-infographic-parser-v5",
    "name": "Infographic Insight Extractor (Tier 5)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-scene-descriptor-v5",
    "slug": "pr-vision-scene-descriptor-v5",
    "canonicalModelId": "pr-vision-scene-descriptor-v5",
    "name": "Spatial & Scene Comprehender (Tier 5)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v6",
    "slug": "pr-vision-ocr-doc-scanner-v6",
    "canonicalModelId": "pr-vision-ocr-doc-scanner-v6",
    "name": "OCR Document Intelligence (Tier 6)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-chart-diagram-v6",
    "slug": "pr-vision-chart-diagram-v6",
    "canonicalModelId": "pr-vision-chart-diagram-v6",
    "name": "Chart & Architecture Visualizer (Tier 6)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-ui-ux-auditor-v6",
    "slug": "pr-vision-ui-ux-auditor-v6",
    "canonicalModelId": "pr-vision-ui-ux-auditor-v6",
    "name": "UI/UX Screen Inspector (Tier 6)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-infographic-parser-v6",
    "slug": "pr-vision-infographic-parser-v6",
    "canonicalModelId": "pr-vision-infographic-parser-v6",
    "name": "Infographic Insight Extractor (Tier 6)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Converts dense pictorial infographics into structured hierarchical bullet points and JSON. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-scene-descriptor-v6",
    "slug": "pr-vision-scene-descriptor-v6",
    "canonicalModelId": "pr-vision-scene-descriptor-v6",
    "name": "Spatial & Scene Comprehender (Tier 6)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Detailed scene decomposition, object bounding analysis, and visual relationship mapping. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-ocr-doc-scanner-v7",
    "slug": "pr-vision-ocr-doc-scanner-v7",
    "canonicalModelId": "pr-vision-ocr-doc-scanner-v7",
    "name": "OCR Document Intelligence (Tier 7)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Extracts tabular data, forms, and handwritten annotations from high-resolution PDF/image documents. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-chart-diagram-v7",
    "slug": "pr-vision-chart-diagram-v7",
    "canonicalModelId": "pr-vision-chart-diagram-v7",
    "name": "Chart & Architecture Visualizer (Tier 7)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Interprets Gantt charts, network topologies, UML diagrams, and financial histograms. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-vision-ui-ux-auditor-v7",
    "slug": "pr-vision-ui-ux-auditor-v7",
    "canonicalModelId": "pr-vision-ui-ux-auditor-v7",
    "name": "UI/UX Screen Inspector (Tier 7)",
    "category": "vision",
    "categoryLabel": "Vision & Document Intelligence",
    "description": "Audits wireframes, Figma mocks, and mobile screenshots for accessibility and visual hierarchy. Calibrated for vision workloads.",
    "providerName": "OPENROUTER",
    "providerSlug": "openrouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 3144,
      "outputPerMillion": 9429,
      "cachedInputPerMillion": 1572,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3929,
      "outputPerMillion": 1.1786,
      "cachedInputPerMillion": 0.1965
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.25,
      "outputPerMillion": 0.75,
      "cachedInputPerMillion": 0.125
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-instant-reply",
    "slug": "pr-fast-instant-reply",
    "canonicalModelId": "pr-fast-instant-reply",
    "name": "Instant Customer Reply",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-realtime-moderator",
    "slug": "pr-fast-realtime-moderator",
    "canonicalModelId": "pr-fast-realtime-moderator",
    "name": "Realtime Stream Moderator",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-micro-parser",
    "slug": "pr-fast-micro-parser",
    "canonicalModelId": "pr-fast-micro-parser",
    "name": "Micro-Payload Parser",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-quick-editor",
    "slug": "pr-fast-quick-editor",
    "canonicalModelId": "pr-fast-quick-editor",
    "name": "Instant Grammar & Polish",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Rapid spellcheck, active voice conversion, and sentence rhythm polishing. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-autocomplete-hint",
    "slug": "pr-fast-autocomplete-hint",
    "canonicalModelId": "pr-fast-autocomplete-hint",
    "name": "Autocomplete Code Predictor",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Ultra-low latency next-token suggestions for interactive editor autocompletion. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-instant-reply-v2",
    "slug": "pr-fast-instant-reply-v2",
    "canonicalModelId": "pr-fast-instant-reply-v2",
    "name": "Instant Customer Reply (Tier 2)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-realtime-moderator-v2",
    "slug": "pr-fast-realtime-moderator-v2",
    "canonicalModelId": "pr-fast-realtime-moderator-v2",
    "name": "Realtime Stream Moderator (Tier 2)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-micro-parser-v2",
    "slug": "pr-fast-micro-parser-v2",
    "canonicalModelId": "pr-fast-micro-parser-v2",
    "name": "Micro-Payload Parser (Tier 2)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-quick-editor-v2",
    "slug": "pr-fast-quick-editor-v2",
    "canonicalModelId": "pr-fast-quick-editor-v2",
    "name": "Instant Grammar & Polish (Tier 2)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Rapid spellcheck, active voice conversion, and sentence rhythm polishing. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-autocomplete-hint-v2",
    "slug": "pr-fast-autocomplete-hint-v2",
    "canonicalModelId": "pr-fast-autocomplete-hint-v2",
    "name": "Autocomplete Code Predictor (Tier 2)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Ultra-low latency next-token suggestions for interactive editor autocompletion. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-instant-reply-v3",
    "slug": "pr-fast-instant-reply-v3",
    "canonicalModelId": "pr-fast-instant-reply-v3",
    "name": "Instant Customer Reply (Tier 3)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-realtime-moderator-v3",
    "slug": "pr-fast-realtime-moderator-v3",
    "canonicalModelId": "pr-fast-realtime-moderator-v3",
    "name": "Realtime Stream Moderator (Tier 3)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-micro-parser-v3",
    "slug": "pr-fast-micro-parser-v3",
    "canonicalModelId": "pr-fast-micro-parser-v3",
    "name": "Micro-Payload Parser (Tier 3)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-quick-editor-v3",
    "slug": "pr-fast-quick-editor-v3",
    "canonicalModelId": "pr-fast-quick-editor-v3",
    "name": "Instant Grammar & Polish (Tier 3)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Rapid spellcheck, active voice conversion, and sentence rhythm polishing. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-autocomplete-hint-v3",
    "slug": "pr-fast-autocomplete-hint-v3",
    "canonicalModelId": "pr-fast-autocomplete-hint-v3",
    "name": "Autocomplete Code Predictor (Tier 3)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Ultra-low latency next-token suggestions for interactive editor autocompletion. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-instant-reply-v4",
    "slug": "pr-fast-instant-reply-v4",
    "canonicalModelId": "pr-fast-instant-reply-v4",
    "name": "Instant Customer Reply (Tier 4)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-realtime-moderator-v4",
    "slug": "pr-fast-realtime-moderator-v4",
    "canonicalModelId": "pr-fast-realtime-moderator-v4",
    "name": "Realtime Stream Moderator (Tier 4)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-micro-parser-v4",
    "slug": "pr-fast-micro-parser-v4",
    "canonicalModelId": "pr-fast-micro-parser-v4",
    "name": "Micro-Payload Parser (Tier 4)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-quick-editor-v4",
    "slug": "pr-fast-quick-editor-v4",
    "canonicalModelId": "pr-fast-quick-editor-v4",
    "name": "Instant Grammar & Polish (Tier 4)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Rapid spellcheck, active voice conversion, and sentence rhythm polishing. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-autocomplete-hint-v4",
    "slug": "pr-fast-autocomplete-hint-v4",
    "canonicalModelId": "pr-fast-autocomplete-hint-v4",
    "name": "Autocomplete Code Predictor (Tier 4)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Ultra-low latency next-token suggestions for interactive editor autocompletion. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-instant-reply-v5",
    "slug": "pr-fast-instant-reply-v5",
    "canonicalModelId": "pr-fast-instant-reply-v5",
    "name": "Instant Customer Reply (Tier 5)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Sub-second turnaround assistant for high-throughput live customer chat and help desks. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-realtime-moderator-v5",
    "slug": "pr-fast-realtime-moderator-v5",
    "canonicalModelId": "pr-fast-realtime-moderator-v5",
    "name": "Realtime Stream Moderator (Tier 5)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Rapid toxicity filtering, policy verification, and community guideline enforcement. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-fast-micro-parser-v5",
    "slug": "pr-fast-micro-parser-v5",
    "canonicalModelId": "pr-fast-micro-parser-v5",
    "name": "Micro-Payload Parser (Tier 5)",
    "category": "fast",
    "categoryLabel": "Fast-Response AI",
    "description": "Lightweight JSON sanitizer for webhook transformation and micro-service routing. Calibrated for fast workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 1006,
      "outputPerMillion": 3017,
      "cachedInputPerMillion": 504,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.1257,
      "outputPerMillion": 0.3771,
      "cachedInputPerMillion": 0.0629
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.08,
      "outputPerMillion": 0.24,
      "cachedInputPerMillion": 0.04
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-million-token-auditor",
    "slug": "pr-ctx-million-token-auditor",
    "canonicalModelId": "pr-ctx-million-token-auditor",
    "name": "1M+ Token Corpus Auditor",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-codebase-indexer",
    "slug": "pr-ctx-codebase-indexer",
    "canonicalModelId": "pr-ctx-codebase-indexer",
    "name": "Monorepo Codebase Indexer",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-legal-contract-depot",
    "slug": "pr-ctx-legal-contract-depot",
    "canonicalModelId": "pr-ctx-legal-contract-depot",
    "name": "Multi-Contract Master Agreement",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-financial-ledger-book",
    "slug": "pr-ctx-financial-ledger-book",
    "canonicalModelId": "pr-ctx-financial-ledger-book",
    "name": "Annual Report & 10-K Synthesizer",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Audits GAAP reconciliations and footnote disclosures across multi-year SEC filings. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-historical-archive",
    "slug": "pr-ctx-historical-archive",
    "canonicalModelId": "pr-ctx-historical-archive",
    "name": "Full-Transcript Meeting Digest",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Synthesizes hundreds of hours of raw audio transcripts into categorized decisions. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-million-token-auditor-v2",
    "slug": "pr-ctx-million-token-auditor-v2",
    "canonicalModelId": "pr-ctx-million-token-auditor-v2",
    "name": "1M+ Token Corpus Auditor (Tier 2)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-codebase-indexer-v2",
    "slug": "pr-ctx-codebase-indexer-v2",
    "canonicalModelId": "pr-ctx-codebase-indexer-v2",
    "name": "Monorepo Codebase Indexer (Tier 2)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-legal-contract-depot-v2",
    "slug": "pr-ctx-legal-contract-depot-v2",
    "canonicalModelId": "pr-ctx-legal-contract-depot-v2",
    "name": "Multi-Contract Master Agreement (Tier 2)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-financial-ledger-book-v2",
    "slug": "pr-ctx-financial-ledger-book-v2",
    "canonicalModelId": "pr-ctx-financial-ledger-book-v2",
    "name": "Annual Report & 10-K Synthesizer (Tier 2)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Audits GAAP reconciliations and footnote disclosures across multi-year SEC filings. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-historical-archive-v2",
    "slug": "pr-ctx-historical-archive-v2",
    "canonicalModelId": "pr-ctx-historical-archive-v2",
    "name": "Full-Transcript Meeting Digest (Tier 2)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Synthesizes hundreds of hours of raw audio transcripts into categorized decisions. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-million-token-auditor-v3",
    "slug": "pr-ctx-million-token-auditor-v3",
    "canonicalModelId": "pr-ctx-million-token-auditor-v3",
    "name": "1M+ Token Corpus Auditor (Tier 3)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-codebase-indexer-v3",
    "slug": "pr-ctx-codebase-indexer-v3",
    "canonicalModelId": "pr-ctx-codebase-indexer-v3",
    "name": "Monorepo Codebase Indexer (Tier 3)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-legal-contract-depot-v3",
    "slug": "pr-ctx-legal-contract-depot-v3",
    "canonicalModelId": "pr-ctx-legal-contract-depot-v3",
    "name": "Multi-Contract Master Agreement (Tier 3)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-financial-ledger-book-v3",
    "slug": "pr-ctx-financial-ledger-book-v3",
    "canonicalModelId": "pr-ctx-financial-ledger-book-v3",
    "name": "Annual Report & 10-K Synthesizer (Tier 3)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Audits GAAP reconciliations and footnote disclosures across multi-year SEC filings. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-historical-archive-v3",
    "slug": "pr-ctx-historical-archive-v3",
    "canonicalModelId": "pr-ctx-historical-archive-v3",
    "name": "Full-Transcript Meeting Digest (Tier 3)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Synthesizes hundreds of hours of raw audio transcripts into categorized decisions. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-million-token-auditor-v4",
    "slug": "pr-ctx-million-token-auditor-v4",
    "canonicalModelId": "pr-ctx-million-token-auditor-v4",
    "name": "1M+ Token Corpus Auditor (Tier 4)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-codebase-indexer-v4",
    "slug": "pr-ctx-codebase-indexer-v4",
    "canonicalModelId": "pr-ctx-codebase-indexer-v4",
    "name": "Monorepo Codebase Indexer (Tier 4)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-legal-contract-depot-v4",
    "slug": "pr-ctx-legal-contract-depot-v4",
    "canonicalModelId": "pr-ctx-legal-contract-depot-v4",
    "name": "Multi-Contract Master Agreement (Tier 4)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-financial-ledger-book-v4",
    "slug": "pr-ctx-financial-ledger-book-v4",
    "canonicalModelId": "pr-ctx-financial-ledger-book-v4",
    "name": "Annual Report & 10-K Synthesizer (Tier 4)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Audits GAAP reconciliations and footnote disclosures across multi-year SEC filings. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-historical-archive-v4",
    "slug": "pr-ctx-historical-archive-v4",
    "canonicalModelId": "pr-ctx-historical-archive-v4",
    "name": "Full-Transcript Meeting Digest (Tier 4)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Synthesizes hundreds of hours of raw audio transcripts into categorized decisions. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-million-token-auditor-v5",
    "slug": "pr-ctx-million-token-auditor-v5",
    "canonicalModelId": "pr-ctx-million-token-auditor-v5",
    "name": "1M+ Token Corpus Auditor (Tier 5)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Deep haystack search and cross-chapter reconciliation across 1,000,000 token archives. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-codebase-indexer-v5",
    "slug": "pr-ctx-codebase-indexer-v5",
    "canonicalModelId": "pr-ctx-codebase-indexer-v5",
    "name": "Monorepo Codebase Indexer (Tier 5)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Maintains architectural consistency across hundreds of source files in a single prompt. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-ctx-legal-contract-depot-v5",
    "slug": "pr-ctx-legal-contract-depot-v5",
    "canonicalModelId": "pr-ctx-legal-contract-depot-v5",
    "name": "Multi-Contract Master Agreement (Tier 5)",
    "category": "long_context",
    "categoryLabel": "Long-Context AI",
    "description": "Compares revisions, exhibits, and indemnity clauses across massive legal dockets. Calibrated for long context workloads.",
    "providerName": "REQUESTY",
    "providerSlug": "requesty",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 5029,
      "outputPerMillion": 15086,
      "cachedInputPerMillion": 2515,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.6286,
      "outputPerMillion": 1.8857,
      "cachedInputPerMillion": 0.3143
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.4,
      "outputPerMillion": 1.2,
      "cachedInputPerMillion": 0.2
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-fiction-worldbuilder",
    "slug": "pr-creative-fiction-worldbuilder",
    "canonicalModelId": "pr-creative-fiction-worldbuilder",
    "name": "Fiction & Worldbuilder",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-screenplay-dialogue",
    "slug": "pr-creative-screenplay-dialogue",
    "canonicalModelId": "pr-creative-screenplay-dialogue",
    "name": "Screenplay & Scene Writer",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-poetic-artisan",
    "slug": "pr-creative-poetic-artisan",
    "canonicalModelId": "pr-creative-poetic-artisan",
    "name": "Poetic & Metaphoric Artisan",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-game-lore-craftsman",
    "slug": "pr-creative-game-lore-craftsman",
    "canonicalModelId": "pr-creative-game-lore-craftsman",
    "name": "Game Lore & NPC Dialogue",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-fiction-worldbuilder-v2",
    "slug": "pr-creative-fiction-worldbuilder-v2",
    "canonicalModelId": "pr-creative-fiction-worldbuilder-v2",
    "name": "Fiction & Worldbuilder (Tier 2)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-screenplay-dialogue-v2",
    "slug": "pr-creative-screenplay-dialogue-v2",
    "canonicalModelId": "pr-creative-screenplay-dialogue-v2",
    "name": "Screenplay & Scene Writer (Tier 2)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-poetic-artisan-v2",
    "slug": "pr-creative-poetic-artisan-v2",
    "canonicalModelId": "pr-creative-poetic-artisan-v2",
    "name": "Poetic & Metaphoric Artisan (Tier 2)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-game-lore-craftsman-v2",
    "slug": "pr-creative-game-lore-craftsman-v2",
    "canonicalModelId": "pr-creative-game-lore-craftsman-v2",
    "name": "Game Lore & NPC Dialogue (Tier 2)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-fiction-worldbuilder-v3",
    "slug": "pr-creative-fiction-worldbuilder-v3",
    "canonicalModelId": "pr-creative-fiction-worldbuilder-v3",
    "name": "Fiction & Worldbuilder (Tier 3)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-screenplay-dialogue-v3",
    "slug": "pr-creative-screenplay-dialogue-v3",
    "canonicalModelId": "pr-creative-screenplay-dialogue-v3",
    "name": "Screenplay & Scene Writer (Tier 3)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-poetic-artisan-v3",
    "slug": "pr-creative-poetic-artisan-v3",
    "canonicalModelId": "pr-creative-poetic-artisan-v3",
    "name": "Poetic & Metaphoric Artisan (Tier 3)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-game-lore-craftsman-v3",
    "slug": "pr-creative-game-lore-craftsman-v3",
    "canonicalModelId": "pr-creative-game-lore-craftsman-v3",
    "name": "Game Lore & NPC Dialogue (Tier 3)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-fiction-worldbuilder-v4",
    "slug": "pr-creative-fiction-worldbuilder-v4",
    "canonicalModelId": "pr-creative-fiction-worldbuilder-v4",
    "name": "Fiction & Worldbuilder (Tier 4)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-screenplay-dialogue-v4",
    "slug": "pr-creative-screenplay-dialogue-v4",
    "canonicalModelId": "pr-creative-screenplay-dialogue-v4",
    "name": "Screenplay & Scene Writer (Tier 4)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-poetic-artisan-v4",
    "slug": "pr-creative-poetic-artisan-v4",
    "canonicalModelId": "pr-creative-poetic-artisan-v4",
    "name": "Poetic & Metaphoric Artisan (Tier 4)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-game-lore-craftsman-v4",
    "slug": "pr-creative-game-lore-craftsman-v4",
    "canonicalModelId": "pr-creative-game-lore-craftsman-v4",
    "name": "Game Lore & NPC Dialogue (Tier 4)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-fiction-worldbuilder-v5",
    "slug": "pr-creative-fiction-worldbuilder-v5",
    "canonicalModelId": "pr-creative-fiction-worldbuilder-v5",
    "name": "Fiction & Worldbuilder (Tier 5)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Intricate worldbuilding, consistent character dialogue, and dynamic narrative pacing. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-screenplay-dialogue-v5",
    "slug": "pr-creative-screenplay-dialogue-v5",
    "canonicalModelId": "pr-creative-screenplay-dialogue-v5",
    "name": "Screenplay & Scene Writer (Tier 5)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Industry-standard script formatting with punchy subtext and dramatic tension. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-poetic-artisan-v5",
    "slug": "pr-creative-poetic-artisan-v5",
    "canonicalModelId": "pr-creative-poetic-artisan-v5",
    "name": "Poetic & Metaphoric Artisan (Tier 5)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Lyrical meter, imagery-rich verse, and innovative metaphorical structures. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-creative-game-lore-craftsman-v5",
    "slug": "pr-creative-game-lore-craftsman-v5",
    "canonicalModelId": "pr-creative-game-lore-craftsman-v5",
    "name": "Game Lore & NPC Dialogue (Tier 5)",
    "category": "creative",
    "categoryLabel": "Creative Writing",
    "description": "Branching quest design, character backstories, and interactive environmental lore. Calibrated for creative workloads.",
    "providerName": "PROROUTER",
    "providerSlug": "prorouter",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-board-memo",
    "slug": "pr-biz-board-memo",
    "canonicalModelId": "pr-biz-board-memo",
    "name": "Board Memo & Investor Update",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-sales-pitch-craft",
    "slug": "pr-biz-sales-pitch-craft",
    "canonicalModelId": "pr-biz-sales-pitch-craft",
    "name": "Enterprise Sales Strategist",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-product-spec-lead",
    "slug": "pr-biz-product-spec-lead",
    "canonicalModelId": "pr-biz-product-spec-lead",
    "name": "PRD & Product Spec Lead",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-board-memo-v2",
    "slug": "pr-biz-board-memo-v2",
    "canonicalModelId": "pr-biz-board-memo-v2",
    "name": "Board Memo & Investor Update (Tier 2)",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-sales-pitch-craft-v2",
    "slug": "pr-biz-sales-pitch-craft-v2",
    "canonicalModelId": "pr-biz-sales-pitch-craft-v2",
    "name": "Enterprise Sales Strategist (Tier 2)",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-product-spec-lead-v2",
    "slug": "pr-biz-product-spec-lead-v2",
    "canonicalModelId": "pr-biz-product-spec-lead-v2",
    "name": "PRD & Product Spec Lead (Tier 2)",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-board-memo-v3",
    "slug": "pr-biz-board-memo-v3",
    "canonicalModelId": "pr-biz-board-memo-v3",
    "name": "Board Memo & Investor Update (Tier 3)",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-sales-pitch-craft-v3",
    "slug": "pr-biz-sales-pitch-craft-v3",
    "canonicalModelId": "pr-biz-sales-pitch-craft-v3",
    "name": "Enterprise Sales Strategist (Tier 3)",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-product-spec-lead-v3",
    "slug": "pr-biz-product-spec-lead-v3",
    "canonicalModelId": "pr-biz-product-spec-lead-v3",
    "name": "PRD & Product Spec Lead (Tier 3)",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-board-memo-v4",
    "slug": "pr-biz-board-memo-v4",
    "canonicalModelId": "pr-biz-board-memo-v4",
    "name": "Board Memo & Investor Update (Tier 4)",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-sales-pitch-craft-v4",
    "slug": "pr-biz-sales-pitch-craft-v4",
    "canonicalModelId": "pr-biz-sales-pitch-craft-v4",
    "name": "Enterprise Sales Strategist (Tier 4)",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-product-spec-lead-v4",
    "slug": "pr-biz-product-spec-lead-v4",
    "canonicalModelId": "pr-biz-product-spec-lead-v4",
    "name": "PRD & Product Spec Lead (Tier 4)",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-board-memo-v5",
    "slug": "pr-biz-board-memo-v5",
    "canonicalModelId": "pr-biz-board-memo-v5",
    "name": "Board Memo & Investor Update (Tier 5)",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Crisp executive updates, OKR summaries, and unit economics presentations. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-sales-pitch-craft-v5",
    "slug": "pr-biz-sales-pitch-craft-v5",
    "canonicalModelId": "pr-biz-sales-pitch-craft-v5",
    "name": "Enterprise Sales Strategist (Tier 5)",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Objection handling, RFP responses, and value proposition alignment. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  },
  {
    "id": "pr-biz-product-spec-lead-v5",
    "slug": "pr-biz-product-spec-lead-v5",
    "canonicalModelId": "pr-biz-product-spec-lead-v5",
    "name": "PRD & Product Spec Lead (Tier 5)",
    "category": "business",
    "categoryLabel": "Business & Productivity",
    "description": "Detailed feature specs, acceptance criteria, edge case lists, and user journey flows. Calibrated for business workloads.",
    "providerName": "GROQ",
    "providerSlug": "groq",
    "type": "chat",
    "status": "active",
    "isFree": false,
    "pricingStatus": "approved",
    "pricing": {
      "inputPerMillion": 2515,
      "outputPerMillion": 7544,
      "cachedInputPerMillion": 1258,
      "currency": "INR"
    },
    "customerPricingUsd": {
      "inputPerMillion": 0.3143,
      "outputPerMillion": 0.9429,
      "cachedInputPerMillion": 0.1572
    },
    "upstreamCostUsd": {
      "inputPerMillion": 0.2,
      "outputPerMillion": 0.6,
      "cachedInputPerMillion": 0.1
    },
    "capabilities": {
      "modalities": [
        "text"
      ],
      "streaming": true,
      "toolCalls": true,
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
    "latencyMs": 95,
    "available": true,
    "benchmarks": []
  }
];

export const ALL_MODELS_500: WebModelEntry[] = MODEL_PROFILES_500.map((m) => ({
  id: m.slug,
  name: m.name,
  object: "model",
  created: 1710000000,
  owned_by: m.providerSlug || "prorouter",
  category: m.category,
  description: m.description,
  pricing: {
    input_usd_per_million: m.customerPricingUsd?.inputPerMillion ?? (m.pricing.inputPerMillion / 8000),
    output_usd_per_million: m.customerPricingUsd?.outputPerMillion ?? (m.pricing.outputPerMillion / 8000),
  },
}));
