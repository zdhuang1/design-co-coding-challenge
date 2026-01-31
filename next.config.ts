import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",                          // static HTML export
  basePath: isProd ? "/design-co-coding-challenge" : "",
  assetPrefix: isProd ? "./" : "",           // relative paths for GH Pages
};

export default nextConfig;
