import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        ibrand: ["var(--font-ibrand)", "sans-serif"],
      },
      colors: {
        cream: "#FFFBE4",
        leaf: "#144400",
        amber: "#FFB000",
        "leaf-light": "#c8e8a0",
        "leaf-dark": "#1e6600",
        "leaf-check": "#6aab3a",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
