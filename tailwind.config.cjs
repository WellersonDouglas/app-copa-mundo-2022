/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      xs: ['0.75rem', '16px'],
      sm: ['0.875rem', '18px'],
      md: ['1rem', '24px'],
      lg: ['1.25rem', '28px'],
      xl: ['1.5rem', '32px'],
      '2xl': ['2rem', '40px'],
      '3xl': ['3rem', '56px'],
    },
    extend: {
      colors: {
        red: {
          300: '#bb2e57',
          500: '#af053f',
          700: '#300219',
        },
        gray: {
          300: '#b1b4bd',
          500: '#91949d',
          700: '#696c74',
        },
        black: '#300219',
        white: '#f4f6ff',
      },
    },
  },
  plugins: [],
}
