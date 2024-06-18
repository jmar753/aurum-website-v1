/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
      'aurumblack': '#050505',
      'aurumgrey' : '#0f0f0f'
    },},
  },
  plugins: [],
}