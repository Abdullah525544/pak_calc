/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './services/**/*.{js,ts,jsx,tsx}',
    './constants.tsx',
    './types.ts',
  ],
  theme: {
    extend: {
      colors: {
        pak: {
          green: '#065f46',
          gold: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        urdu: ['"Noto Nastaliq Urdu"', 'serif'],
      },
    },
  },
  plugins: [],
};
