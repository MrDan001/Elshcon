import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2A4A",
          700: "#123A63",
          900: "#071B31",
        },
        teal: {
          DEFAULT: "#0E8F8F",
          600: "#0B7777",
          100: "#D6EFEF",
        },
        sand: {
          DEFAULT: "#F3EEE4",
          200: "#E8E0D0",
        },
        tbc: {
          bg: "#FFF4D6",
          border: "#E0B84A",
          text: "#6B4E00",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
