/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    screens: {
      'sm': {'max': '600px'}
    },
  },
  plugins: [],
}

