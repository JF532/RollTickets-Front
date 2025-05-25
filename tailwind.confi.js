const flowbite = require('flowbite/plugin');
const scrollbar = require('tailwind-scrollbar');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  plugins: [flowbite,scrollbar],
};
