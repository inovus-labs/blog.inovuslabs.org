/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#FBFBFF', // background primary
        primary: '#111928', // text 
        secondary: '#6C2BD9', // selection / hover
        dark: '6C2BD9', // Darkmod
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}