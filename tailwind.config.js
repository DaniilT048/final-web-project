/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        main: "#323264",
        alt: '#46466E',
        soft: '#686887',
        accent: '#F0145A',
        active: '#24A3FF',
        active_hover: '#0085FF',
        grey: '#B3B3BA',
      }
    },
  },
  plugins: [],
}

