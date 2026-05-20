import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.vertex-llc.jp",
        pathname: "/**",
      },
      /* Add CDN / other WordPress media hostnames here if needed */
    ],
  },
};

export default nextConfig;
