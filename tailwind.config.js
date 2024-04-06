/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#FBFBFF', // background primary white
        primary: '#111928', // text  black
        secondary: '#6C2BD9', // selection / hover violet
        dark: '6C2BD9', // Darkmod darkviolet
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}