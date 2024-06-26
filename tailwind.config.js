/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
      'aurumblack': '#050505',
      'aurumgrey' : '#0e0e0e',
      'galliano-300' : '#9c8c64',
      'logogreen' : '#059c5c',
      'aurumgreen': {
        '50': '#ecfdf3',
        '100': '#d1fae0',
        '200': '#a7f3c7',
        '300': '#6ee7a9',
        '400': '#34d387',
        '500': '#10b96e',
        '600': '#059c5c',
        '700': '#04784a',
        '800': '#065f3c',
        '900': '#064e33',
        '950': '#022c1d',
      },
      'galliano': {
        '50': '#fcfaea',
        '100': '#f9f3c8',
        '200': '#f5e593',
        '300': '#efd055',
        '400': '#e8b923',
        '500': '#d9a319',
        '600': '#bb7f13',
        '700': '#955b13',
        '800': '#7c4817',
        '900': '#6a3c19',
        '950': '#3d1f0b',
    },
    
    
    
    },},
  },
  plugins: [],
}