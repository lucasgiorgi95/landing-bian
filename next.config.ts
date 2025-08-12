import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.pixabay.com'],
    unoptimized: true
  }
};

export default nextConfig;
