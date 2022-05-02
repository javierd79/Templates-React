const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // false or 'media'
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        emerald: colors.emerald,
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray-light': '#d3dce6',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
