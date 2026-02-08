import type { Config } from "tailwindcss";
// @ts-ignore: No type definitions for 'daisyui'
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")({
      themes: true,
    }),
  ],
};

export default config;
