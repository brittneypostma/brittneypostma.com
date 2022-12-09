const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  // theme: {
  //   extend: {},
  // },

  plugins: [],
  presets: [require('./theme.cjs')]
}

module.exports = config
