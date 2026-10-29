import type { NextConfig } from "next";

// The API runs beside the web app in production (see scripts/start-prod.mjs),
// so the default target is loopback. This value is baked in at build time —
// set API_BASE_URL before `next build` if the API is hosted elsewhere.
const API_BASE = process.env.API_BASE_URL || "http://127.0.0.1:4000";

const nextConfig: NextConfig = {
  transpilePackages: ["@pro/shared", "@pro/database", "@pro/routing", "@pro/providers"],
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