/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'myka-red': '#FF0000',
        'myka-black': '#000000',
        'myka-gray': '#888888',
        'myka-dark': '#0f0f0f',
      },
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};