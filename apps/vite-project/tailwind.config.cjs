const shareConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  ...shareConfig,
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./index.html"],
};
