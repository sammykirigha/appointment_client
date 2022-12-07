/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#0d6efd",
          dark: "#0b5ed7",
          default: "#396cfo",
        },
      },
      backgroundImage: {
        bg: "url('/public/landing_two.jpg')",
      },
      screens: {
        xs: "380px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
  daisyui: {
    themes: false,
  },
};
