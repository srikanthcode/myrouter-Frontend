import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/v1/",
          "/dashboard/inspector",
          "/dashboard/settings",
          "/dashboard/activity",
        ],
      },
      // Search engine primary crawlers
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "Sogou",
          "Slurp",
        ],
        allow: "/",
      },
      // Generative AI search crawlers (Perplexity, ChatGPT, Claude search, etc.)
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended",
          "CCBot",
          "cohere-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.prorouter.in/sitemap.xml",
    host: "https://www.prorouter.in",
  };
}
