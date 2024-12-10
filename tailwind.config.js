/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: "#5fb4a2",
        darkBlue: "#203a4c",
        grayBlue: "#33323d",
        lightGray: "#fafafa",
        silver: "#eaeaeb",
        brightRed: "#f43030",
      },
      fontFamily: {
        ibarra: ['"Ibarra Real Nova"', "serif"],
        public: ['"Public Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
