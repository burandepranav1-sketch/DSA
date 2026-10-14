/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        difficulty: {
          easy: {
            bg: 'rgba(34, 197, 94, 0.12)',
            text: '#15803d',
            darkText: '#4ade80',
            border: 'rgba(34, 197, 94, 0.3)',
          },
          medium: {
            bg: 'rgba(245, 158, 11, 0.12)',
            text: '#b45309',
            darkText: '#fbbf24',
            border: 'rgba(245, 158, 11, 0.3)',
          },
          hard: {
            bg: 'rgba(239, 68, 68, 0.12)',
            text: '#b91c1c',
            darkText: '#f87171',
            border: 'rgba(239, 68, 68, 0.3)',
          },
        },
      },
    },
  },
  plugins: [],
}
