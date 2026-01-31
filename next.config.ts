// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/design-co-coding-challenge",
  assetPrefix: "./",   // MUST be relative for GH Pages
};

export default nextConfig;
