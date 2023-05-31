/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-fast-once": "pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1)",
      },
      colors: {
        brand: "#183439",
        cream: "#F8F6F3",
        peachy: "#F5CCB6",
        sunshine: "#F7F7B6",
        pink: "#FFA9A2",
        teal: {
          50: "#EDF6F7",
          100: "#DBEDF0",
          200: "#B7DAE1",
          300: "#93C8D2",
          400: "#6FB6C3",
          500: "#4CA4B3",
          600: "#3C8390",
          700: "#2D626C",
          800: "#1E4148",
          900: "#0F2124",
          950: "#081012",
        },
        sky: "#CBECF7",
        grass: "#C4EA98",
      },
      fontFamily: {
        sans: ["Karla", "sans-serif"],
        brand: ["Tenor Sans", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      transitionDuration: {
        fast: "300ms",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#183439",
          secondary: "#F7F7B6",
          accent: "#F5CCB6",
          neutral: "#262626",
          "neutral-content": "#F8F6F3",
        },
      },
    ],
  },
};
