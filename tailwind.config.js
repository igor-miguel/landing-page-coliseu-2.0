/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#D4AF37',
          500: '#C5A028',
          600: '#B08D1F',
          gradient: 'linear-gradient(to right, #D4AF37, #F2D06B, #D4AF37)',
        },
        'rich-black': '#050505',
        'rich-charcoal': '#0A0A0A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
