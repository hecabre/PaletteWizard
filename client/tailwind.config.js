/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.jsx", "./components/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Poppins", 'sans-serif']
      },
      colors: {
        grey: "#929292",
        blueSky: "#7BC4F9",
        greenTurtle: "#7CC37C",
        black: "#202020",
        white: "#FFF",
      },
    },
  },
  plugins: [],
};
