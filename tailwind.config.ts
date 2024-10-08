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
      screens: {
        xs: '400px',
      },
      fontSize: {
        xxs: [
          '10px',
          {
            lineHeight: '16px',
          },
        ],
      },
      colors: {
        primary: {
          DEFAULT: '#4f46e5',
          foreground: '#ffffff',
          background: '#fafafa',
          ...colors.indigo,
        },
        secondary: {
          DEFAULT: '#14532d',
          foreground: '#ffffff',
          ...colors.green,
        },
        danger: colors.red,
        neutral: colors.neutral,
        'mute-1': '#263238',
        'mute-2': '#EBEBEB',
        'mute-3': '#70777f',
        destructive: {
          DEFAULT: 'hsl(0 72.22% 50.59%)',
          foreground: '#FFF',
        },

        // Inbox Colors

        dark: {
          primary: '#343338',
          primaryDark: '#312E81',
          background: '#272729',
          messageBackground: '#98979d',
          background2: '#191d28',
          background3: '#424348',
          backgroundDark: '#040718',
          nameWhite: '#f8f9f6',
          name: '#b2b1b6',
          nameHalfWhite: '#98979d',
          greenLight: '#3a8f64',
          greenDark: '#305142',
        },
      },
      borderRadius: {
        'custom-20': '20px',
        theme: 'var(--radius)',
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
        minor: '0px 4px 4px 0px #0000000D',
        card: '0px 4px 20px 0px #0000000D',
      },
      backgroundImage: {
        'secondary-gradient':
          'linear-gradient(92.04deg, #F9FFFD 1.76%, rgba(187, 247, 227, 0.3) 51.52%, #F9FFFD 102.29%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
