/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "special": '0px 80px 150px 5px rgb(255, 255, 255, 0.2)',
      }
    },
  },
  plugins: [],
}

