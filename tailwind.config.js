/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{tsx, css}",
    "./src/frontend/pages/**/**/*.tsx",
    "./src/frontend/components/**/**/*.tsx",
    "./src/frontend/static/*.css",
    "./src/backend/appwrite/*.tsx",
    "./src/backend/conf/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
