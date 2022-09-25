/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pk-red': '#bd0f34',
        'pk-yellow': '#e2e615',
        'pk-blue': '#31a7f1',
        'pk-black': '#032d29',
        'pk-light-gray': '#dedede',
        'pk-dark-gray': '#6a6a72',
        'pk-green': '#55ab62',
        'pk-light-yellow': '#f1f2d3',
        'pk-dark-blue': '#095378',
        'pk-dark-red': '#9c0a26'
      },
    },
  },
  plugins: [],
}
