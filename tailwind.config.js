/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backg: '#160040',
        fonts: {
          white: '#FFFFFF',
          black: '#000000',
        },
        principal: '#160040',
        blue: '#0A81AB',
        pink: '#F9DFDC',
        violet: '#7360DF',
        violetLight: '#C499F3'
      }
    },
  },
  plugins: [],
}

