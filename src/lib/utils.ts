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

export function formatNumber(number: number | undefined) {
  if (!number) return 0;
  // Convert number to absolute value to handle negative numbers
  const absNumber = Math.abs(number);

  // Define an array of suffixes for different magnitudes
  const suffixes = ['', 'K', 'M', 'B', 'T'];

  // Determine the magnitude (index of the suffix)
  const magnitude = Math.floor(Math.log10(absNumber) / 3);

  // Calculate the scaled number
  const scaledNumber = absNumber / Math.pow(10, magnitude * 3);

  // Round the scaled number to 2 decimal places
  const roundedNumber = Math.round(scaledNumber * 100) / 100;

  // Add the suffix to the rounded number
  const formattedNumber = roundedNumber + suffixes[magnitude];

  // If the original number was negative, add the negative sign back
  return number < 0 ? '-' + formattedNumber : formattedNumber;
}
