'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import { Web3Provider } from '../components/providers/Web3Provider';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Plankton - Decentralized Agent Ecosystem',
  description: 'Small agents, massive intelligence. Join the future of decentralized AI agents.',
  keywords: ['AI', 'agents', 'blockchain', 'web3', 'decentralized', 'marketplace'],
  authors: [{ name: 'Дмитрий', url: 'https://github.com/borealdrive' }],
  creator: 'Дмитрий',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0284c7' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://plankton-ecosystem.ai',
    siteName: 'Plankton',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Plankton - Decentralized Agent Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plankton - Decentralized Agent Ecosystem',
    description: 'Small agents, massive intelligence',
    creator: '@borealdrive',
    images: ['/images/og-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Web3Provider>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
            {children}
          </div>
        </Web3Provider>
      </body>
    </html>
  );
}