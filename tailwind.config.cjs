const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  darkMode: 'class',

  plugins: [
    require('@tailwindcss/typography'),
  ],
  presets: [require('./tailwind.theme.cjs')]
}

module.exports = config
