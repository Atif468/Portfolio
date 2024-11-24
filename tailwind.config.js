const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        qwitcher: ['Qwitcher Grypen', 'cursive'],
        jersey: ['"Jersey 10"', 'sans-serif'],
      },
      backgroundImage: {
        'custom-radial-gradient': 'radial-gradient(circle, #d05f9f, #a55999, #7c528b, #574976, #3a3d5d, #374562, #374d65, #3a5467, #4a768a, #5c9baa, #72c0c7, #8fe7e1)',
      },
      boxShadow: {
        'blue': '0 10px 10px rgba(0, 0, 255, 0.5)',
        // 'white': '.5px .5px rgba( 0, 0 , 1, )', // Custom blue shadow
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
