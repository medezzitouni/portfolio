/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: 'wheat',
        secondary: 'rgba(56, 65, 59, .8)',
        white: 'whitesmoke',
        black: 'black',
        instagram: 'purple'
      },
      flexBasis: {
        '3/10': '30%',
        '100': '99%'
      },
      height:{
        '1/12': '8.33%'
      },
      fontFamily: {
        amatic:  ['AmaticSC', 'cursive']
      },
      textShadow: {
        shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
