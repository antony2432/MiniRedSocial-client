'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { useAppSelector } from '@/redux/hooks';
import { inter } from '@/components/resours';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';

export default function RealLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const darks = useAppSelector((state) => state.sistem.darkMode);
  const pathname = usePathname();
  return (
    <html lang="en" className={`${darks ? 'dark' : null}`}>
      <body
        className={`bg-teal-50 h-screen dark:bg-neutral-800 ${inter.className}`}
      >
        <Navbar />
        {children}
        {pathname === '/login' || pathname === '/registration' ? null : (
          <Footer />
        )}
      </body>
    </html>
  );
}
