const theme = require('./src/config/theme');

const tailwindConfig = {
  darkMode: 'media', // or 'class'
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme,
  plugins: [],
};

module.exports = tailwindConfig;
