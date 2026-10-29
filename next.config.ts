import type { NextConfig } from "next";

const API_BASE = process.env.API_BASE_URL || "http://127.0.0.1:4000";

const nextConfig: NextConfig = {
  // Proxy API calls through the web origin: same-origin cookies, no CORS pain.
  // /v1/* exposes the OpenAI-compatible endpoint on the web port too.
  async rewrites() {
    return [
      { source: "/api/:path*", destination: `${API_BASE}/:path*` },
      { source: "/v1/:path*", destination: `${API_BASE}/v1/:path*` },
    ];
  },
  poweredByHeader: false,
};

export default nextConfig;
