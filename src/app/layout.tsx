'use client';
import React from 'react';
import ProviderRedux from '@/redux/Provider';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProviderRedux>
      <html lang="en" className="dark">
        <body className={inter.className}>{children}</body>
      </html>
    </ProviderRedux>
  );
}
