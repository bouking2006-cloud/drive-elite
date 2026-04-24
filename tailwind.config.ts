import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          lighter: "var(--color-primary-lighter)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
        },
        secondary: "var(--color-secondary)",
        text: {
          main: "var(--color-text-main)",
          muted: "var(--color-text-muted)",
        },
        success: "var(--color-success)",
        danger: "var(--color-danger)",
      },
      fontFamily: {
        title: ["var(--font-title)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "sans-serif"],
      },
      boxShadow: {
        gold: "0 4px 20px rgba(212, 175, 55, 0.15)",
      },
      scale: {
        "102": "1.02",
      },
    },
  },
  plugins: [],
};
export default config;
