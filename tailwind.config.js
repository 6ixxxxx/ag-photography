/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:"#191919",
        secondary:"#FDFDFD",
        tertiary:"#FECC04",
        button:"#6a5dcf"
      }
    },
    fontFamily: {
      sans: ["Montserrat","sans-serif"]
    }
  },
  plugins: [],
}
