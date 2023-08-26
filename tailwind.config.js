/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backg: '#0C4271',
        fonts: {
          white: '#FFFFFF',
          black: '#000000',
        },
        darkBlue: '#0C4271',
        blue: '#0A81AB',
        pink: '#F9DFDC'
      }
    },
  },
  plugins: [],
}

