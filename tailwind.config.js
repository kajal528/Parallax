/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: "#f3ecfb",
        primary: "#7e57d4",
        secondary: "#FA8072",
        pinkorange:"#F89880",
        neutral: "#d7bceb",
        border: "linear-gradient(102deg, rgba(3, 5, 29, 0.85)"
      }
    },
  },
  plugins: [],
}

