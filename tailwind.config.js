module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage : {
        'home-splash': "url('/src/assets/farm-home.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
