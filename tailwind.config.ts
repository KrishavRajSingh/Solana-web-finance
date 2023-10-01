/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        lightslategray: "#848895",
        gray: {
          "100": "#1a1a1a",
          "200": "#19161c",
          "300": "#141414",
          "400": "#111",
          "500": "#000508",
          "600": "rgba(0, 0, 0, 0.28)",
          "700": "rgba(38, 31, 38, 0.3)",
          "800": "rgba(0, 0, 0, 0.6)",
        },
        white: "#fff",
        silver: {
          "100": "#c4c4c4",
          "200": "#bababa",
        },
        darkturquoise: "#00bcd4",
        gold: {
          "100": "#ffeb3b",
          "200": "#ffd512",
        },
        mediumspringgreen: "#19fb9b",
        violet: "#f087ff",
        darkorchid: "#a962ff",
        blueviolet: "#9945ff",
        skyblue: "#1fcff1",
        cornflowerblue: "#618adc",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        helvetica: "Helvetica",
      },
      borderRadius: {
        "17xl": "36px",
        mini: "15px",
        "31xl": "50px",
      },
    },
    fontSize: {
      mid: "17px",
      lg: "18px",
      mini: "15px",
      base: "16px",
      "19xl": "38px",
      "2xl": "21px",
      xs: "12px",
      "17xl": "36px",
      xl: "20px",
      "23xl": "42px",
      "18xl": "37px",
      "9xl": "28px",
      "7xl": "26px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
