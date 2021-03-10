module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        13: "3.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {},
};
