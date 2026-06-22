import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/advokati-kb',
  assetPrefix: '/advokati-kb/',
  images: { unoptimized: true },
};

export default nextConfig;
