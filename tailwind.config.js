/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      
    },
    extend: {
      colors:{
        blue: "#4A69E2",
        yellow:  "#FFA52F",
        white: "#FFFFFF",
        fa_white: "#FAFAFA",
        gray: "#e7e7e3",
        gray_main: "#70706E",
        dark: "#232321",
      }
    },
  },
  plugins: [],
}

