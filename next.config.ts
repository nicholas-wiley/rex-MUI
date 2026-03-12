import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Static HTML export (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/rex-on-mui' : '',
  images: {
    unoptimized: true,  // GitHub Pages doesn't support Next.js Image Optimization
  },
};

export default nextConfig;
