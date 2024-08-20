/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  themes: ["light", "dark", "cupcake"],
  plugins: [require('daisyui')],
}

