const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "purple-themed": {
          DEFAULT: "#7B54FF",
          light: "#2f2f49",
        },
        "green-themed": {
          DEFAULT: "#70EC9D",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
