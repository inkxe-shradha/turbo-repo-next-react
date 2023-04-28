const shareConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  ...shareConfig,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
