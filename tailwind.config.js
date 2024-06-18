/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
      'aurumblack': '#050505',
      'aurumgrey' : '#0f0f0f',
      'aurumgold' : '#9c8c64',
      'logogreen' : '#059c5c',
      'mantis': {
        '50': '#f2f9ec',
        '100': '#e1f2d5',
        '200': '#c5e6b0',
        '300': '#a0d581',
        '400': '#6fbb45',
        '500': '#5fa73b',
        '600': '#48852b',
        '700': '#396625',
        '800': '#305222',
        '900': '#2b4621',
        '950': '#13260d',
      },
      'renosand': {
        '50': '#faf7ec',
        '100': '#f4ebcd',
        '200': '#e9d69f',
        '300': '#ddbb67',
        '400': '#d1a13e',
        '500': '#c28b30',
        '600': '#a26a26',
        '700': '#865022',
        '800': '#704223',
        '900': '#603823',
        '950': '#371c11',
      },
    
    
    },},
  },
  plugins: [],
}