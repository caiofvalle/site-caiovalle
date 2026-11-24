import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/coverage", destination: "/coverage.html" }];
  },
  async redirects() {
    return [{ source: "/paris-open", destination: "/coverage", permanent: false }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
