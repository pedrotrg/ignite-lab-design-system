/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18, 
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {

      transparent: 'transparent',

      grey: {
        900:'#121214',
        800:'#202024',
        400:'#7C7C8A',
        900:'#C4C4CC',
        100:'#E1E1E6',
      },

      cyan: {
        500:'#81d8f7',
        300:'#bde3f1',
      },

      black: '#000',
      white: '#fff',
      
    },
    extend: {
      fontFamily: {
        sans: 'Inter, Sans-serif'
      }
    },
  },
  plugins: [],
}
