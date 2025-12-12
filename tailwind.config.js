// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        meteor: {
          "0%": { transform: "translate(0,0)", opacity: 1 },
          "100%": { transform: "translate(-300px,300px)", opacity: 0 },
        },
      },
      animation: {
        meteor: "meteor 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
