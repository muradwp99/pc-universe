module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js",

  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        toolsTheme: {
          primary: "#74b929",
          secondary: "#40ba00",
          accent: "#1c1d22",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui"), require('tw-elements/dist/plugin')],
}
