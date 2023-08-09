/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Bold: "Epilogue-Bold",
        Med:"Epilogue-Med"
      },
      colors:{
        'white':'hsl(0, 0%, 98%)',
        'gray':'hsl(0, 0%, 41%)',
        'black':'hsl(0, 0%, 8%)'
      }
    },
  },
  plugins: [],
}

