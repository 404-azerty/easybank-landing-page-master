const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './*.html',
    './**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary-dark-blue': '#2d304e',
      'primary-lime-green': '#22d555',
      'primary-bright-cyan': '#1cb7dc',
      'neutral-grayish-blue': '#9698a7',
      'neutral-light-grayish-blue': '#f3f4f6',
      'neutral-light-gray': '#fafafa',
    }),
    fontFamily: {
      'sans': ['Public Sans', ...defaultTheme.fontFamily.sans],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
