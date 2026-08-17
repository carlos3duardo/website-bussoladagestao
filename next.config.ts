import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.bussoladagestao.com.br',
      },
      {
        protocol: 'http',
        hostname: 'jarvis.localhost',
      },
    ],
  },
  serverExternalPackages: ['handlebars'],
};

export default nextConfig;
