const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: 'Spartan, Helvetica, Arial, sans-serif',
      brand: 'MuseoModerno, Helvetica, Arial, sans-serif'
    },
    extend: {
      colors: {
        primary: colors.gray[900]
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover']
    },
  },
  plugins: [],
}
