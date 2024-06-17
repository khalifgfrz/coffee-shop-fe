/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      xsm: "376px",
      tbt: "426px",
      sm: "641px",
      md: "769px",
      lg: "1025px",
      xl: "1281px",
      "2xl": "1537px",
      uw: "2041px",
    },
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
        lightgray: "#4f5665",
        lightgray2: "#afb5c0",
        darkgray: "#f8f8f8",
        darkgray2: "#E8E8E8",
        darkwhite: "#dedede",
        green: "#00A700",
        greenbg: "#C9E6C9",
      },
      padding: {
        "0.5%": "0.5%",
        "1%": "1%",
        "2%": "2%",
        "10%": "10%",
      },
      margin: {
        "10%": "10%",
        "20%": "20%",
      },
      inset: {
        "-100%": "-100%",
        "-200%": "-200%",
      },
      width: {
        "30rem": "30rem",
      },
      fontSize: {
        "0.5rem": "0.5rem",
        "0.6rem": "0.6rem",
        "0.7rem": "0.7rem",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
