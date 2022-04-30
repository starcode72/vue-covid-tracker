module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    // 特定のクラスに対して規定のCSSを当てる
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
