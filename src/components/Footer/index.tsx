'use client';
import React from 'react';
import { BsTwitch, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { usePathname } from 'next/navigation';
import { inder } from '../resours';

function SocialIcons({ responsive }: { responsive: string }) {
  return (
    <ul className={`flex items-center gap-3 text-3xl lg:gap-10 ${responsive}`}>
      <li>
        <BsTwitch className="cursor-pointer" />
      </li>
      <li>
        <BsTwitter className="cursor-pointer" />
      </li>
      <li>
        <BsLinkedin className="cursor-pointer" />
      </li>
    </ul>
  );
}

function FooterSection() {
  return (
    <section className="lg:flex lg:gap-5 lg:justify-between xl:gap-28">
      <div className="flex items-center">
        <p className="text-sm text-justify lg:w-[45vw] 2xl:text-md">
          REDMI es tu pasaporte global para conocer nuevas personas y compartir
          experiencias. Con características de personalización únicas,
          oportunidades de aprendizaje y una comunidad inclusiva, READMI te
          permite expresar tu individualidad mientras te conectas con otros.
          Sumérgete en un mundo de descubrimiento, amistad y diversión. ¡Ven y
          únete a la aventura en READMI!
        </p>
      </div>
      <div className="flex gap-7 md:mt-5 lg:mt-0 lg:gap-14">
        <section className="flex md:flex-col gap-5 mt-5 md:mt-0 w-full">
          <span className="hidden md:block text-2xl md:text-xl">
            Funcionalidades
          </span>
          <ul className="flex justify-between md:flex-col md:gap-1 w-full md:text-sm  2xl:text-md">
            <li>General</li>
            <li>Blog</li>
            <li>Security</li>
            <li>Notifications</li>
          </ul>
        </section>
        <section className="hidden md:flex md:flex-col md:gap-5 pr-6 w-full md:items-center">
          <p className="lg:text-lg">Encuentranos en:</p>
          <SocialIcons responsive="" />
        </section>
      </div>
    </section>
  );
}

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className={`bg-teal-600 text-white px-5 py-4 flex flex-col ${
        pathname === '/' ? 'gap-5 xl:gap-0' : null
      }  dark:bg-teal-800 xl:items-center absolute bottom-0 w-full`}
    >
      <section className="flex justify-between xl:w-full">
        <section className="flex gap-2 items-center">
          <div className="bg-white rounded-full px-3 py-1 inline-block">
            <h2 className={`text-3xl  text-teal-500 ${inder.className}`}>R</h2>
          </div>
          <span className={`text-2xl ${inder.className}`}>REDMI</span>
        </section>
        <SocialIcons responsive={pathname === '/' ? 'md:hidden' : ''} />
      </section>
      {pathname === '/' ? <FooterSection /> : null}

      <section className="text-center text-xs lg:mt-5">
        <div className="md:flex md:justify-center gap-2">
          <p>2022 © ExitoWeb, Inc.</p>
          <p className="">Todos los derechos reservados.</p>
        </div>
        <ul className="hidden md:flex md:justify-center md:gap-16 mt-5 duration-300">
          <li>Términos de servicio</li>
          <li>Politica de privacidad</li>
          <li>Report Vulnerability</li>
        </ul>
      </section>
    </footer>
  );
}
