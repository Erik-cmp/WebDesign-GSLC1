module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  purge: false,
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'gojek-green': '#00AA13',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}