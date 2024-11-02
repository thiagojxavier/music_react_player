/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    screens: {
      'sm': {'min': '600px'},
      'md': {'min': '900px'}
    },
  },
  plugins: [],
}

