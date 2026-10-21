import type { NextConfig } from "next";

const API_BASE = process.env.API_BASE_URL || "http://localhost:4000";

const nextConfig: NextConfig = {
  transpilePackages: ["@uno/shared", "@uno/database", "@uno/routing", "@uno/providers"],
  // Proxy API calls through the web origin: same-origin cookies, no CORS pain.
  // /v1/* exposes the OpenAI-compatible endpoint on the web port too, so
  // http://localhost:3000/v1 works as a drop-in base URL for SDKs.
  async rewrites() {
    return [
      { source: "/api/:path*", destination: `${API_BASE}/:path*` },
      { source: "/v1/:path*", destination: `${API_BASE}/v1/:path*` },
    ];
  },
  poweredByHeader: false,
};

export default nextConfig;