module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        "fylo-Dark-Blue-1": "hsl(217, 28%, 15%)",
        "fylo-Dark-Blue-2": "hsl(218, 28%, 13%)",
        "fylo-Dark-Blue-3": "hsl(216, 53%, 9%)",
        "fylo-Dark-Blue-4": "hsl(219, 30%, 18%)",

        "fylo-Cyan": "hsl(176, 68%, 64%)",
        "fylo-Blue": "hsl(198, 60%, 50%)",
        "fylo-Light-Red": "hsl(0, 100%, 63%)",
      },
      width: {
        // card: "370px",
        "90vw": "85vw",
        "36percent": "36%",
        "30%": "30%",
      },
    },
    fontFamily: {
      OpenSans: ["Open Sans", "sans-serif"],
      Raleway: ["Raleway", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1440px",
        xl: "1440px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
