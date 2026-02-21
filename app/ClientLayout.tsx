'use client';

import React from 'react';
import { Web3Provider } from '../components/providers/Web3Provider';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Web3Provider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        {children}
      </div>
    </Web3Provider>
  );
}