import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        xxs: [
          '10px',
          {
            lineHeight: '16px',
          },
        ],
      },
      colors: {
        primary: colors.blue,
        secondary: colors.green,
        danger: colors.red,
        neutral: colors.neutral,
        'mute-1': '#263238',
        'mute-2': '#EBEBEB',
        'mute-3': '#70777f',
      },
      borderRadius: {
        'custom-20': '20px',
      },
      width: {
        81: '21.25rem', //340px
        82: '22.5rem', //360px
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
      boxShadow: {
        theme: '0px 4px 60px 0px #0000000D',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
