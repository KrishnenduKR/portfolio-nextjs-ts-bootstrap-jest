import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',                 // Enable static export
  trailingSlash: true,             // Required for GitHub Pages
  images: { unoptimized: true },   // Disable image optimization
  basePath: '/portfolio-nextjs-ts-bootstrap-jest/',  
};

export default nextConfig;
