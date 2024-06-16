/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#ff8906",
        darkprimary: "#e77d04",
        black: "#0b0909",
        lightblack: "#353030",
        lightblack2: "#0b132a",
        lightgrey: "#4f5665",
        darkwhite: "#dedede",
      },
      padding: {
        "0.5%": "0.5%",
        "10%": "10%",
      },
      margin: {
        "10%": "10%",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
