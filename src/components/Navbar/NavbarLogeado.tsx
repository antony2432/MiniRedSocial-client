'use client';
import React, { useState } from 'react';
import { inder } from '../resours';
import {
  BsSearch,
  BsFillHouseFill,
  BsChatSquareDotsFill,
  BsPersonCircle,
  BsBoxArrowInRight,
  BsFillGearFill,
} from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import SwitchDarkMode from './SwitchDarkMode';
import Image from 'next/image';

function MobileMenuNav() {
  const router = useRouter();

  return (
    <div className="absolute w-screen right-0 top-[9.9vh] sm:hidden py-2 shadow-md bg-white rounded-b-lg dark:bg-[#3E4342] duration-300 flex flex-col items-center px-4">
      <BsFillHouseFill
        className="text-4xl text-teal-500 my-4 dark:text-white duration-300"
        onClick={() => router.push('/home')}
      />
      <hr className="w-full border-black dark:border-white" />
      <BsChatSquareDotsFill
        className="text-4xl text-teal-500 my-4 dark:text-white duration-300"
        onClick={() => router.push('/chat')}
      />
      <hr className="w-full border-black dark:border-white" />
      <section className="w-full flex flex-col justify-center items-center mt-4 px-4 gap-1">
        <SwitchDarkMode />
        <section
          className="w-full px-1 py-1 flex items-center justify-between border border-transparent rounded-md hover:bg-teal-200  dark:hover:border dark:hover:border-white dark:hover:bg-transparent duration-300 mt-3"
          onClick={() => router.push('/profile')}
        >
          <div className="flex items-center gap-2 text-xl dark:text-white">
            <BsPersonCircle />
            <span>Perfil</span>
          </div>
          <BsChevronRight className="dark:text-white" />
        </section>
        <section
          className="w-full px-1 py-1 flex items-center justify-between border border-transparent rounded-md hover:bg-teal-200  dark:hover:border dark:hover:border-white dark:hover:bg-transparent duration-300"
          onClick={() => router.push('/configuration')}
        >
          <section className="flex items-center gap-2 text-xl dark:text-white">
            <BsFillGearFill />
            <span>Configuracion</span>
          </section>
          <BsChevronRight className="dark:text-white" />
        </section>
        <section
          className="w-full px-1 py-1 flex items-center justify-between border border-transparent rounded-md hover:bg-red-200  dark:hover:border dark:hover:border-white dark:hover:bg-transparent duration-300 mb-2"
          onClick={() => router.push('/')}
        >
          <section className="flex items-center gap-2 text-xl dark:text-white">
            <BsBoxArrowInRight />
            <span>Salir</span>
          </section>
          <BsChevronRight className="dark:text-white" />
        </section>
      </section>
    </div>
  );
}

function MenuNav() {
  const router = useRouter();

  return (
    <div className="hidden absolute w-80 right-5 sm:top-[12vh] md:top-[6.5vh] py-2 bg-white rounded-b-lg dark:bg-[#3E4342] duration-300 sm:flex flex-col items-center px-4 shadow-lg border">
      <section className="w-full flex flex-col justify-center items-center mt-4 px-4 gap-1">
        <SwitchDarkMode />
        <section
          className="w-full px-1 py-1 flex items-center justify-between border border-transparent rounded-md hover:bg-teal-200  dark:hover:border dark:hover:border-white dark:hover:bg-transparent duration-300 mt-3"
          onClick={() => router.push('/profile')}
        >
          <div className="flex items-center gap-2 text-xl dark:text-white">
            <BsPersonCircle />
            <span>Perfil</span>
          </div>
          <BsChevronRight className="dark:text-white" />
        </section>
        <section
          className="w-full px-1 py-1 flex items-center justify-between border border-transparent rounded-md hover:bg-teal-200  dark:hover:border dark:hover:border-white dark:hover:bg-transparent duration-300"
          onClick={() => router.push('/configuration')}
        >
          <section className="flex items-center gap-2 text-xl dark:text-white">
            <BsFillGearFill />
            <span>Configuracion</span>
          </section>
          <BsChevronRight className="dark:text-white" />
        </section>
        <section
          className="w-full px-1 py-1 flex items-center justify-between border border-transparent rounded-md hover:bg-red-200  dark:hover:border dark:hover:border-white dark:hover:bg-transparent duration-300 mb-2"
          onClick={() => router.push('/')}
        >
          <section className="flex items-center gap-2 text-xl dark:text-white">
            <BsBoxArrowInRight />
            <span>Salir</span>
          </section>
          <BsChevronRight className="dark:text-white" />
        </section>
      </section>
    </div>
  );
}

export default function NavbarLogeado() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setMobileMenu((prev) => !prev);
  };
  const handleClick2 = () => {
    setMenu((prev) => !prev);
  };
  return (
    <>
      <section className="w-full flex items-center justify-between sm:justify-normal sm:gap-5">
        <h1
          className={`${inder.className} text-6xl text-teal-500 ml-3 dark:text-white duration-300`}
          onClick={handleClick}
        >
          R
        </h1>

        <label className="flex items-center border border-teal-500 rounded-lg mr-4 dark:border-none dark:bg-white dark:bg-opacity-20">
          <input
            type="text"
            className=" bg-transparent outline-none px-3 py-1 placeholder-slate-400 dark:text-white dark:placeholder-white sm:text-xl"
            placeholder="Busca..."
          />
          <BsSearch className="text-teal-500 mr-2 dark:text-white sm:text-xl" />
        </label>
      </section>
      {mobileMenu ? <MobileMenuNav /> : null}
      <section className="hidden sm:flex justify-between items-center gap-5 mr-5">
        <BsFillHouseFill
          className="text-4xl text-teal-500 my-4 dark:text-white duration-300"
          onClick={() => router.push('/home')}
        />
        <BsChatSquareDotsFill
          className="text-4xl text-teal-500 my-4 dark:text-white duration-300"
          onClick={() => router.push('/chat')}
        />
        <Image
          src="https://avatars.githubusercontent.com/u/81434228?s=40&v=4"
          width={50}
          height={50}
          alt="perfil"
          className="rounded-full w-11 h-11"
          onClick={handleClick2}
        />
      </section>
      {menu ? <MenuNav /> : null}
    </>
  );
}
