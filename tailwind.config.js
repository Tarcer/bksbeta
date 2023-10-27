/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f6f6f9",
        white: "#fff",
        darkgray: "#a19daf",
        black: "#000",
        lightcoral: "#da6b7a",
        darkslategray: "#313131",
        lightgreen: {
          "100": "#61c454",
          "200": "#62c354",
          "300": "#5fc452",
        },
        gray: {
          "100": "#fafafa",
          "200": "#111",
          "300": "#000f37",
        },
        salmon: {
          "100": "#ed6a5e",
          "200": "#ec6a5e",
        },
        dimgray: {
          "100": "#696969",
          "200": "#575757",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        roboto: "Roboto",
        inter: "Inter",
        "abhaya-libre": "'Abhaya Libre'",
        allerta: "Allerta",
      },
    },
    fontSize: {
      "2xl": "21px",
      xl: "20px",
      "70xl": "89px",
      smi: "13px",
      "10xl": "29px",
      "17xl": "36px",
      "18xl": "37px",
      "85xl": "104px",
      "8xl": "27px",
      "33xl": "52px",
      "7xl": "26px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
