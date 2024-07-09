/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {    
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 35s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      colors: {
      'aurumblack': '#050505',
      'aurumgrey' : '#0f0f0f',
      'aurumgold' : '#FFDF00',
      'aurumgold' : {
        '500': '#FFD700',
        '600': '#FFC300',
        '700': '#DAA520',
        '800': '#B8860B',
      },
      aurumaqua: {
        background: '#004223', // Deep Green
        primary: '#8FBC8F', // Dark Sea Green for main text
        secondary: '#2E8B57', // Sea Green
        header: '#006400', // Dark Green
        accent1: '#66CDAA', // Medium Aquamarine
        accent2: '#20B2AA', // Light Sea Green
      },
      'naturegreen': {
        '200': '#66CDAA',
        '300': '#2E8B57',
        '400': '#008080',
        '500': '#044b2a',
        '600': '#004223',
        '800': '#004223',
        '900': '#002b13',
        '950': '##010b09',
      },
      'aurumwhite' : '#efeee5',
      'aurumgreen': {
        '50': '#effef1',
        '100': '#dafedf',
        '200': '#b8fac3',
        '300': '#81f496',
        '400': '#43e560',
        '500': '#1acd3b',
        '600': '#10b72f',
        '700': '#108527',
        '800': '#126923',
        '900': '#11561f',
        '950': '#03300e',
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
      },
    },
  },
  plugins: [],
}