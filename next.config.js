/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Environment variables
  env: {
    NEXT_PUBLIC_APP_NAME: 'Plankton',
    NEXT_PUBLIC_APP_VERSION: '0.1.0',
    NEXT_PUBLIC_APP_DESCRIPTION: 'Decentralized Agent Ecosystem',
    NEXT_PUBLIC_API_URL: process.env.API_URL || 'http://localhost:8000',
    NEXT_PUBLIC_WEB3_PROVIDER: process.env.WEB3_PROVIDER || 'https://polygon-mumbai.infura.io/v3/your-project-id',
    NEXT_PUBLIC_AGENTCOIN_CONTRACT: process.env.AGENTCOIN_CONTRACT || '',
  },

  // Images configuration
  images: {
    domains: [
      'localhost',
      'plankton-ecosystem.ai',
      'cdn.plankton-ecosystem.ai',
      'ipfs.io',
    ],
  },

  // Headers for security and PWA
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Rewrites for API proxy
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL || 'http://localhost:8000'}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;