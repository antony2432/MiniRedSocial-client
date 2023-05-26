import React from 'react';
import { Props } from './props.entity';

export default function Button({ children, variand, color }: Props) {
  let styles;
  const styleContent = {
    teal: 'bg-teal-500 text-white hover:bg-teal-600',
    red: 'bg-red-500 text-white hover:bg-red-600',
  };
  const styleDefault = {
    teal: 'text-black hover:bg-teal-100',
    red: 'text-black hover:bg-red-100',
  };
  const styleOutline = {
    teal: 'text-teal-600 border-teal-400 hover:border-teal-600 hover:bg-teal-100',
    red: 'text-red-600 border-red-400 hover:border-red-600 hover:bg-red-100',
  };

  switch (variand) {
    case 'content':
      styles = `rounded-md shadow-xl duration-200 ${styleContent[color]}`;
      break;
    case 'default':
      styles = `rounded-md duration-200 ${styleDefault[color]}`;
      break;
    case 'outline':
      styles = `rounded-md border duration-200 ${styleOutline[color]}`;
      break;
    default:
      break;
  }
  return <button className={`px-4 py-3 ${styles}`}>{children}</button>;
}
