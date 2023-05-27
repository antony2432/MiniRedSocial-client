'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { useAppSelector } from '@/redux/hooks';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RealLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const darks = useAppSelector((state) => state.sistem.darkMode);
  return (
    <html lang="en" className={`${darks ? 'dark' : null}`}>
      <body
        className={`bg-teal-50 h-screen dark:bg-neutral-800 ${inter.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
