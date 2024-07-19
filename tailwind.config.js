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
        border: "linear-gradient(102deg, rgba(3, 5, 29, 0.85)",
        active: "bg-[#65f229]",
        disabled: "#f1efef"
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.before-content': {
          content: '""',
          position: 'absolute',
          left: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '10px',
          height: '10px',
          'background-color': '#7e57d4',
          'border-radius': '50%',
        },
        '.background-gradient':{
           background: 'linear-gradient(to bottom right,#7e57d4,#FA8072)'
        }
      }
      addUtilities(newUtilities, ['before'])
    }
  ],
}

