/** @type {import('tailwindcss').Config} */
import { colors } from './src/styles/theme'

module.exports = {
  content: [
    './src/**/*.{ts, tsx, html, js, jsx}'
  ],
  theme: {
    colors: { ...colors },
    extend: {},
  },
  plugins: [],
}

