/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Cinzel', 'sans-serif'],
        'sub': ['Montserrat', 'sans-serif'],
        'text': ['Oxygen', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#f6f5f3;',
          200: '#e6dfd9;',
          300: '#bcab99;',
          400: '#A8856B;',
          500: '#282726;',
        },
      },
      fontSize: {
        'lg': '40px',
        'md': '18px',
        'base': '16px',
        'sm': '14px',
        'xs': '12px'
      },
    },
  },
  plugins: [],
}

