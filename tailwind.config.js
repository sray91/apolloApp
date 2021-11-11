module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Noto Sans', 'sans-serif']
      },
      colors: {
        background: "000000",
        primary: "611f69"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
