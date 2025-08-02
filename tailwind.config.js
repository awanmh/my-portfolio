/** @type {import('tailwindcss').Config} */
export default {
  // 1. Menambahkan mode gelap berbasis class
  darkMode: "class", 
  
  content: [
    // 2. Menambahkan index.html ke dalam path
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}