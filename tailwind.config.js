/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // background: "#e6e6ff",
        primary1: '#5e53ff',
        primary2: '#57ffc5',
        secondary1: '#b9b4ff',
        secondary2: '#bdffe8',
        darkPrimary1: '#0a0099',
        lightPrimary1: "#b9b4ff",
        neutral1: "#8c8c8c"
      },
      fontFamily: {
        // 'ubuntu-bold' : ['Ubuntu-Bold', 'sans-serif'],
        // 'ubuntu-bolditalic' : ['Ubuntu-BoldItalic', 'sans-serif'],
        // 'ubuntu-italic' : ['Ubuntu-Italic', 'sans-serif'],
        // 'ubuntu-light' : ['Ubuntu-Light', 'sans-serif'],
        // 'ubuntu-lightitalic' : ['Ubuntu-LightItalic', 'sans-serif'],
        // 'ubuntu-medium' : ['Ubuntu-Medium', 'sans-serif'],
        // 'ubuntu-mediumitalic' : ['Ubuntu-MediumItalic', 'sans-serif'],
        // 'ubuntu-regular' : ['Ubuntu-Regular', 'sans-serif']
      }
    },
  },
  plugins: [],
}

