/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontSize: {
        xs: '1rem',       //16px
        sm: '1.25rem',    //20px
        base: '1.313rem', //21px
        xl: "2rem",       //32px
        '2xl': '2.25rem', //36px
        '3xl': '3.75rem', //60px
      },
      color: {
        'dimBlack1': '#04080F',
        'dimBlack2': '#212223',
        lightSteelBlue: '#BBD1EA',
        blue1: '#507DBC',
        dimBlack3: '#0D192E',
        dimBlack4: '#212223',
        gainboro: '#DAE3E5',
        babyBlue: '#A1C6EA',
      },
      backgroundGradientColors: {
        'blackGradient' : ['#04080F', '#212223'],
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
