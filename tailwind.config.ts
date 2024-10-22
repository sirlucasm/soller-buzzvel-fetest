import { theme } from "./src/styles/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "350px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      sl: "1440px",
    },
    extend: {
      colors: theme.colors,
    },
  },
  plugins: [],
};
export default config;
