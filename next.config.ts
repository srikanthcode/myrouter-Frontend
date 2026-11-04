import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/dashboard/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          },
        ],
      },
      {
        source: "/dashboard",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/v1/v1/:path*",
        destination: "/v1/:path*",
      },
      {
        source: "/api/v1/:path*",
        destination: "/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
