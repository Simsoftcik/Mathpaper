/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: '#5e53ff',
        primary2: '#57ffc5',
        secondary1: '#b9b4ff',
        secondary2: '#bdffe8'
      }
    },
  },
  plugins: [],
}

