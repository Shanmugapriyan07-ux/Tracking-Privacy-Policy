/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#6D4AFF', dark: '#5636E0', soft: '#F5F2FF' },
        ink: '#171717',
        muted: '#5B6577', // slightly darker than #64748B to keep AA contrast on tinted backgrounds
        sand: '#F7F1E8',
        line: '#E5E7EB',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
