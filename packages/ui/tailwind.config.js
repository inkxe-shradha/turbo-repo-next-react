const shareConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  ...shareConfig,
  content: ["./**/*.{js,ts,jsx,tsx,mdx}"],
};
