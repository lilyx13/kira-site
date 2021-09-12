const colors = require("tailwindcss/colors");
module.exports = {
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      /* These are placeholder colors -- TODO set brand colors */
      gray: colors.blueGray,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
    },
  },
  fontFamily: {
    sans: [],
    serif: [],
    slab: [],
  },
  plugins: [],
};
