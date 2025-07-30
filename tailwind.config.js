/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#F6FBFF", 
        HeadlineBlue:"#DEFCFF",
        primary:"#089BAB",
        customBlack:"#505050",
        secondaryBlue:"#2D86AF",
        DarkTeal:"#00544F",
        activeGreen:"#009206"
      },
      screens:{
        "2xl":"1450px",
        "3xl":"1650px",
        "4xl":"1750px",
      },
      fontFamily:{
        roboto : ["Roboto", "serif" ],
        poppins : ["Poppins", "serif"],
      }
    },
  },
  plugins: [],
};
