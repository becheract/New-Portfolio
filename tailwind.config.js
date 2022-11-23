/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        "green-site": "#0EBE2C",
        site: "#0EBE2C",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      extend: {
        fontSize: {
          phHeading: "2rem",
          phBody: "1rem",
          phProject: "1rem",
          phText: "0.625rem",

          tbHeading: "3rem",
          tbBody: "2rem",
          tbProject: "1.5rem",
          tbText: "1rem",

          deHeading: "4rem",
          deBody: "2.5rem",
          deProject: "1.5rem",
          deText: "1rem",
        },
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
    keyframes: {
      wave: {
        "0%": { transform: "rotate(0.0deg)" },
        "10%": { transform: "rotate(14deg)" },
        "20%": { transform: "rotate(-8deg)" },
        "30%": { transform: "rotate(14deg)" },
        "40%": { transform: "rotate(-4deg)" },
        "50%": { transform: "rotate(10.0deg)" },
        "60%": { transform: "rotate(0.0deg)" },
        "100%": { transform: "rotate(0.0deg)" },
      },

      slide: {
        "0%": { translate: "200px 0px" },
      },
    },
    animation: {
      "waving-hand": "wave 2s linear infinite",
      "sliding-emoji": "slide 2s linear infinite",
    },
  },
  plugins: [],
};
