import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {
        high: "30px",
        higher: "35px",
        "1.3": "5px",
        "2.8": "11.21px",
        "3.9": "15px",
      },
      lineHeight: {
        "3.5": "14px",
        "3.9": "15px",
        "4.3": "19px",
        30: "30px",
        11: "44px",
        12: "48px",
      },

      letterSpacing: {
        tightest: "-0.0075em",
        weak: "-0.001em",
        fit: "-0.002em",
      },
      fontSize: {
        10: "10px",
        16: "16px",
        18: "18px",
        26: "26px",
        mid: "11px",
        "mid-1": "38px",
        "mid-2": "32px",
      },
      colors: {
        primary: colors.blue,
        secondary: colors.green,
        neutral: colors.neutral,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["Geist", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;