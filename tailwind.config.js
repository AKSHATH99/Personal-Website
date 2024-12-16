const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode:"jit",
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '800': '800px', 
        '320': '320px'
        // Set a custom breakpoint for 800px width
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        edu: ['"Edu AU VIC WA NT Pre"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],

      },
    },
  },
  plugins: [],
}