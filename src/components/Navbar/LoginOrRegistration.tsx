import React, { useState } from 'react';
import Link from 'next/link';
import { BsList } from 'react-icons/bs';
import { inder } from '../resours';
import SwitchDarkMode from './SwitchDarkMode';
import Button from '../Button';
import { useRouter, usePathname } from 'next/navigation';

function Buttons() {
  const router = useRouter();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/login');
  };

  const hanldeRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/registration');
  };
  return (
    <>
      <Button variand="default" color="teal" onClick={handleLogin}>
        Iniciar Sesion
      </Button>
      <Button variand="content" color="teal" onClick={hanldeRegistration}>
        Registrarse
      </Button>
    </>
  );
}

function SectionButton() {
  const [open, setOpen] = useState(false);
  const handleopen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <BsList
        className="sm:hidden text-3xl mr-5 dark:text-white"
        onClick={handleopen}
      />
      {open ? (
        <div className="absolute w-full right-0 top-[9.9vh] sm:hidden py-2 shadow-md bg-white rounded-b-lg dark:bg-[#3E4342] duration-300">
          <section className="flex flex-col gap-4 justify-center items-center">
            <Buttons />
          </section>
        </div>
      ) : null}
      <section className="hidden sm:flex gap-4 mr-3">
        <Buttons />
      </section>
    </>
  );
}

export default function LoginOrRegistration() {
  const path = usePathname();
  return (
    <>
      <section className="flex items-center gap-5">
        <Link href="/" className="flex">
          <h1
            className={`${inder.className} text-5xl text-teal-500 ml-3 sm:text-4xl dark:text-white duration-300`}
          >
            R
          </h1>
          <span className="text-teal-500 text-4xl hidden sm:block dark:text-white duration-300">
            edmi
          </span>
        </Link>
        <SwitchDarkMode />
      </section>

      {path === '/login' || path === '/registration' ? (
        <>
          <section className="mr-3 flex gap-10 items-center">
            <span className="hidden sm:block dark:text-white">
              {path === '/login'
                ? '¿No tienes una cuenta?'
                : '¿Ya tienes una cuenta?'}
            </span>
            <Link
              href={path === '/login' ? '/registration' : '/login'}
              className="underline decoration-1 decoration-teal-500 text-teal-500 text-lg dark:text-white dark:decoration-white"
            >
              {path === '/login' ? 'Sign up.' : 'Sign in.'}
            </Link>
          </section>
        </>
      ) : (
        <SectionButton />
      )}
    </>
  );
}
