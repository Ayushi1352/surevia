import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
    agentUpgrade: "security",
  },
  images: {
    qualities: [75, 90],
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
