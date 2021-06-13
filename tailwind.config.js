const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './*.html',
    './**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-dark-blue': '#2d304e',
        'primary-lime-green': '#22d555',
        'primary-bright-cyan': '#1cb7dc',
        'neutral-grayish-blue': '#9698a7',
        'neutral-light-grayish-blue': '#f3f4f6',
        'neutral-light-gray': '#fafafa',
      },
      boxShadow: {
        'big': '0px 29px 150px 150px rgba(150,152,167,0.75)'
      }
    },
    fontFamily: {
      'sans': ['Public Sans', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {
      height: ['hover']
    },
  },
  plugins: [],
}
