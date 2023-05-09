/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: 'class', 
  theme: {
    extend: {
      colors:{
        primary: '#0f172a',
        darkThemeBackground: '#192229',
        darkThemeText: '#C8CDD0',
      },
      fontFamily:{
        caslon:['Libre Caslon Text', defaultTheme.fontFamily.serif], /* Si el usuario no tiene roboto, usa default theme */
      }
    },
  },
  plugins: [],
}

