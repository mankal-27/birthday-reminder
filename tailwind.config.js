/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Add this
    './public/index.html',         // Add this
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

