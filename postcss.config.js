// postcss.config.js
module.exports = {
  plugins: [
    require("tailwindcss"), // Tailwind 설정을 자동으로 읽어들입니다.
    require("autoprefixer"),
  ],
};
