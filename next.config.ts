import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    'http://*.nepcare.local:3000', // allow any subdomain under nepcare.local
  ],
  images: {
    domains: ['images.pexels.com'], // added Pexels domain here
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.1.40',
        port: '5139',
        pathname: '/Doctors/**',
      },
    ],
  },
};

export default nextConfig;
