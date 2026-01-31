import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // tells Next.js to export a static site
  basePath: "/design-co-coding-challenge",
  assetPrefix: "/design-co-coding-challenge/",
};

export default nextConfig;
