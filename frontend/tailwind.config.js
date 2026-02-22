/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a',
          hover: '#172554',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#eff6ff',
          foreground: '#1e3a8a',
        },
        neutral: {
          background: '#ffffff',
          surface: '#f8fafc',
          border: '#e2e8f0',
          text: {
            primary: '#0f172a',
            secondary: '#475569',
            muted: '#94a3b8',
          },
        },
      },
      fontFamily: {
        sans: ['Aptos', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Aptos', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
        'dropdown': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}
