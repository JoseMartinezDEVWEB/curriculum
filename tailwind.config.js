/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0ea5e9', dark: '#0284c7', light: '#38bdf8' },
        teal: { DEFAULT: '#14b8a6' },
        mint: { DEFAULT: '#a7f3d0', dark: '#34d399' }
      },
      container: { center: true, padding: '1rem' },
      boxShadow: { soft: '0 10px 30px -12px rgba(2,132,199,0.15)' }
    }
  },
  plugins: []
}
