/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['Noto Sans', 'sans'],
        'poppins': ['Poppins', 'mono'],
      },
    },
  },
  plugins: [],
}

