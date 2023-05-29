'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import LoginOrRegistration from './LoginOrRegistration';
import NavbarLogeado from './NavbarLogeado';

export default function Navbar() {
  const path = usePathname();
  return (
    <header className="order-first w-screem h-[10vh] bg-white flex justify-between items-center shadow-md shadow-teal-500/50 sm:h-[15vh] md:h-[7vh] dark:bg-[#3E4342] duration-300">
      {path === '/login' || path === '/registration' || path === '/' ? (
        <LoginOrRegistration />
      ) : (
        <NavbarLogeado />
      )}
    </header>
  );
}
