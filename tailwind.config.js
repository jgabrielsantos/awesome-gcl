/** @type {import('tailwindcss').Config} */
const Theme = require('./src/styles/theme')

export default {
  content: [
    './src/**/*.{ts, tsx, html, js, jsx}'
  ],
  theme: {
    colors: { ...Theme.colors },
    extend: {
      inset: {
        '2px': '2px'
      }
    },
  }
}
