import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  allowedDevOrigins: ['purrbook.kayk.club'],
  async headers() {
    return [
      {
        // Cache Next.js static chunks (JS/CSS bundles) for 1 year at the edge
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache public folder assets (images, fonts, etc.) for 1 week
        source: '/(.*)\\.(png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|otf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
    ];
  },
};

export default nextConfig;
