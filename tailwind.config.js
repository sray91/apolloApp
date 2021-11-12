module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    extend: {
      fontFamily: {
        notosans: ["Noto Sans, sans-serif"],
      },
      colors: {
        background: "ffffff",
        primary: "BE29EC"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
