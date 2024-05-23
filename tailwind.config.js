/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        app: "url('/src/assets/images/app-bg.png')",
        home: "url('/src/assets/images/home-background.png')",
        contact: "url('/src/assets/images/contact-form-bg.png')",
      },

      colors: {
        "personal-gray": "#E7E7E7",
        "neon-green": "#2EF8A0",
        "neon-blue": "#4D4DFF",
        "neon-cian": "#15E6CC",
        "neon-red": "#FF5B5B",
      },
    },
    fontFamily: {
      "gothic": ["Gothic A1", "sans-serif"],
      "roboto": ["Roboto", "sans-serif"],
      "bebas-neue": ["Bebas Neue", "sans-serif"],
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
  important: true,
};
