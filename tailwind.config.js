/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#023047", // Color base
          light: "#023047",  // Variación más clara
          dark: "#023047",   // Variación más oscura
        },
        secondary: {
          DEFAULT: "#ffb703",
          light: "#ffb703",
          dark: "#ffb703",
        },
        neutral: {
          DEFAULT: "#fb8500",
          light: "#fb8500",
          dark: "#fb8500",
        },
      },
    },
  },
  plugins: [],
}

