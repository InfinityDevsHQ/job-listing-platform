import type { Config } from "tailwindcss";

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
        26: "26px",
        mid: "11px",
        "mid-1": "38px",
        "mid-2": "32px",
      },
      colors: {
        border: "hsl(var(--border))",
        gray: "#70777f",
        "gray-medium": "#151515",
        "gray-third": "#5a5a5a",
        "gray-dark": "#383838",
        "gray-1": "#d1d1d1",
        "gray-2": "#d9d9d9",
        "gray-basic": "#f7f7f7",
        greenish: "#43b97f",
        third: "##ffede5",
        "deep-green": "#2A7B29",
        "deep-blue": "#1D192F",
        "deep-purple": "#3B4786",
        "deep-red": "#9A3535",
        "deep-orange": "#BD5B00",
        "light-orange": "#FFEDB6",
        "light-green": "#C6E2C5",
        "light-purple": "#E3E6FF",
        "light-red": "#FFC7C7",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "5": "5px",
        "10": "10px",
        "20": "20px",
        "100": "100px",
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
