import defaultTheme from 'tailwindcss/defaultTheme';
// import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.vue',
    './src/js/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        page: "rgb(var(--color-page))",
        fm: {
          DEFAULT: "rgb(var(--color-fm-orange))",
          orange: "rgb(var(--color-fm-orange))",
          pink: "rgb(var(--color-fm-pink))",
          teal: "rgb(var(--color-fm-teal))",
          blue: "rgb(var(--color-fm-blue))",
        },
      },
      fontFamily: {
        sans: ['"Exo 2"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-xl': {
          textShadow: '5px 5px 9px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-2xl': {
          textShadow: '5px 5px 9px rgba(0, 0, 0, 0.8)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },],
}

