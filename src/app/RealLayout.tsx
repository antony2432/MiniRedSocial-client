'use client';
import React from 'react';
import { useAppSelector } from '@/redux/hooks';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RealLayout({ children }: { children: React.ReactNode }) {
  const darks = useAppSelector((state) => state.sistem.darkMode);
  return (
    <html lang="en" className={`${darks ? 'dark' : null}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
