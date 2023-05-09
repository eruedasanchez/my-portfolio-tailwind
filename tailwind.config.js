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
        claro: '#A0A7AC',
        contenido: '#697477',
        greensheet: '#A9D300',
      },
      fontFamily:{
        caslon:['Libre Caslon Text', defaultTheme.fontFamily.serif], /* Si el usuario no tiene roboto, usa default theme */
      }
    },
  },
  plugins: [],
}

