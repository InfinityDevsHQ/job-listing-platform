import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getColorClasses(val: number) {
  const textColors = [
    'text-yellow-700',
    'text-indigo-700',
    'text-red-700',
    'text-green-700',
    'text-orange-700',
    'text-purple-700',
    'text-cyan-700',
    'text-fuchsia-700',
    'text-emerald-700',
    'text-sky-700',
  ];
  const bgColors = [
    'bg-yellow-100',
    'bg-indigo-100',
    'bg-red-100',
    'bg-green-100',
    'bg-orange-100',
    'bg-purple-100',
    'bg-cyan-100',
    'bg-fuchsia-100',
    'bg-emerald-100',
    'bg-sky-100',
  ];

  const index = val % 10;

  return {
    textColor: textColors[index],
    bgColor: bgColors[index],
  };
}
