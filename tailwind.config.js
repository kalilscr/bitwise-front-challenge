/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxHeight: {
        112: '28rem',
        120: '30rem',
        128: '32rem',
      },
    },
  },
  plugins: [],
}
