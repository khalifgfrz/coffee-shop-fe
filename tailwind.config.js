/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      xxsm: "321px",
      xsm: "376px",
      tbt: "426px",
      sm: "641px",
      md: "769px",
      lg: "1025px",
      xl: "1281px",
      "2xl": "1537px",
      "4xl": "1441px",
      uw: "2041px",
    },
    extend: {
      backgroundImage: {
        "bg-login": "url('/assets/images/background-login.webp')",
        "bg-home": "url('/assets/images/header-img.webp')",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#ff8906",
        darkprimary: "#e77d04",
        darkprimary2: "#EF8001",
        lightprimary: "#FFE5C8",
        secondary: "#a0a3bd",
        homebg: "#202020",
        black: "#0b0909",
        lightblack: "#353030",
        lightblack2: "#0b132a",
        gray: "#aaaaaa",
        lightgray: "#4f5665",
        lightgray2: "#afb5c0",
        darkgray: "#f8f8f8",
        darkgray2: "#e8e8e8",
        darkgray3: "#f1f1f1",
        darkwhite: "#dedede",
        darkwhite2: "#f3f3f3",
        green: "#00A700",
        greenbg: "#C9E6C9",
        span: "#8e6447",
      },
      padding: {
        "0.5%": "0.5%",
        "1%": "1%",
        "2%": "2%",
        "5%": "5%",
        "10%": "10%",
      },
      margin: {
        "5%": "5%",
        "7%": "7%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "35%": "35%",
        "45%": "45%",
        "50%": "50%",
        "75%": "75%",
        "80%": "80%",
        "85%": "85%",
        "100%": "100%",
      },
      inset: {
        "52%": "52%",
        "60%": "60%",
        "65%": "65%",
        "68%": "68%",
        "-100%": "-100%",
        "-150%": "-150%",
        "-200%": "-200%",
      },
      width: {
        "30rem": "30rem",
        "45%": "45%",
        "55%": "55%",
        "60%": "60%",
        "63%": "63%",
        "65%": "65%",
        "70%": "70%",
      },
      fontSize: {
        "0.5rem": "0.5rem",
        "0.6rem": "0.6rem",
        "0.7rem": "0.7rem",
      },
      gridTemplateColumns: {
        custom: "100px minmax(100px, 1fr) 200px",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
