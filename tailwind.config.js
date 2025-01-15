/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'box-blue': '#0061D5',
        'box-navy': '#222835',
        'box-light-blue': '#E8F2FF',
        'box-gray': '#616C84',
        'box-light-gray': '#F4F5F7',
        'box-green': '#00B642',
        'success-light': '#E3FCF2',
      },
    },
  },
  plugins: [],
}
