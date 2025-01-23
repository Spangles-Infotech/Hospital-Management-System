/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#F6FBFF", 
        HeadlineBlue:"#DEFCFF",
        primary:"#089BAB",
        customBlack:"#505050"
      },
    },
  },
  plugins: [],
};
