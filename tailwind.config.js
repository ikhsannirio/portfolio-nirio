/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#A79273',
        secondary:'#50817B'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

