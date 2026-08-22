
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'myka-red': '#FF0000',
        'myka-black': '#000000',
        'myka-gray': '#888888',
      },
      fontFamily: {
        'archivo': ['"Archivo Black"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};