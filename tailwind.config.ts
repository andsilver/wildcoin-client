import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#dd9933",
        dark: "#0d111c",
        "dark-purple": "#070816",
        "light-blue": "#4c82fb",
      },
      boxShadow: {
        b: "0 5px 8px -1px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|color|border)-(white|dark|primary|dark-purple)/,
    },
  ],
  plugins: [],
};
export default config;
