module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Noto Sans', 'sans-serif']
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
