/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/components/template/**/*.{html,ts}",
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#8CB060"
      }
    },
  },
  plugins: [],
}

