'use client';
import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setDarkMode } from '@/redux/slice/sistem.slice';
import { BsFillMoonFill, BsBrightnessHigh } from 'react-icons/bs';

export default function SwitchDarkMode() {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setDarkMode());
  };
  return (
    <div className="h-7 w-14 flex justify-between items-center rounded-xl bg-teal-500 dark:bg-neutral-800 shadow-md border border-white">
      <BsBrightnessHigh className="ml-1 text-white dark:hidden text-xl duration-300" />
      <div
        className="w-5 h-5 rounded-full duration-300 dark:ml-0.5 bg-white mr-0.5"
        onClick={handleClick}
      ></div>
      <BsFillMoonFill className="text-white mr-0.5 hidden dark:block duration-300" />
    </div>
  );
}
