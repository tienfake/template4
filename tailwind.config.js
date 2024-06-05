/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'arima': ['Arima Madurai', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
        'Lato':['Lato','sans-serif'],
      },
    },
  },
  plugins: [],
}

