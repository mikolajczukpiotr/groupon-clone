module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          light: "#a9d18c",
          DEFAULT: "#53A318",
          dark: "#318200",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
