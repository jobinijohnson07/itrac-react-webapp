/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        screens:{
          '3xl':'1700px',
          '4xl': '1925px'
          }
      },
    },
    plugins: [],
  }
  