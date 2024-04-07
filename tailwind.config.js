/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        app: "url('/src/assets/img/app-bg.png')",
        home: "url('/src/assets/img/home-background.png')",
        contact: "url('/src/assets/img/contact-form-bg.png')"
      },
      
      colors: {
        "personal-gray": "#E7E7E7",
        "neon-green": "#2EF8A0",
        "neon-blue": "#4D4DFF",
        "neon-cian": "#15E6CC",
        "neon-red": "#FF5B5B",
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
  important: true,
};
