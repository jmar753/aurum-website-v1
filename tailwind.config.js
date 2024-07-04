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
      colors: {
      'aurumblack': '#050505',
      'aurumgrey' : '#0f0f0f',
      'aurumgold' : '#9c8c64',
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