/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          850: '#141b24',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      boxShadow: {
        'blue-lg': '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
}
