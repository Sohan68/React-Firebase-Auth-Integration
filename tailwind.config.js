import daisyui from "daisyui";
import react from "@vitejs/plugin-react";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{sjs,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [react(), daisyui],
};
