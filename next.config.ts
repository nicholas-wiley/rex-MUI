import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Static HTML export (GitHub Pages)
  distDir: 'docs',   // Build output to docs/ folder for GitHub Pages
  basePath: '/rex-MUI',  // GitHub Pages subdirectory
  images: {
    unoptimized: true,  // GitHub Pages doesn't support Next.js Image Optimization
  },
};

export default nextConfig;
