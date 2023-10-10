/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Cinzel', 'sans-serif'],
        'sub': ['Oxygen', 'sans-serif'],
        'text': ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#f6f5f3;',
          200: '#e6dfd9;',
          300: '#d6c1aa;',
          400: '#a8856b;',
          500: '#282726;',
        },
      },
      fontSize: {
        'xl': '50px',
        'lg': '30px',
        'md': '18px',
        'base': '16px',
        'sm': '14px',
        'xs': '12px'
      },
    },
  },
  plugins: [],
}