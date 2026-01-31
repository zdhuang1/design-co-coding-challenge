/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",        // App Router pages
    "./components/**/*.{ts,tsx}"  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      scale: {
        'y-150': '1.5',   // 150% vertical scale
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],   // optional Tailwind plugins
};
