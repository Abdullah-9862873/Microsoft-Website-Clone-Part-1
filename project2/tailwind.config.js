/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        sliderBtnBorder: "0.125rem solid transparent",
      },
      screens: {
        xxsm: "216px",
        xsm: "480px",
      },
      backgroundImage: {
        backToTopBtn: "linear-gradient(rgba(0,0,0,.15),rgba(0,0,0,.15))",
      },
    },
  },
  plugins: [],
};
