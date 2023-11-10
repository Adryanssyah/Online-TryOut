/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    },
    colors: {
      'custom-dark': '#121212'
    }
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar')({ nocompatible: true })]
}
