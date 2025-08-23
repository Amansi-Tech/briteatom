import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    },
  },
};

export default nextConfig;
