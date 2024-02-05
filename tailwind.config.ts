import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 18s linear infinite",
      },
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    fontFamily: {
      heading: ["Amiri", "sans-serif"],
      body: ["Poppins", "sans-serif"],
    },
    fontSize: {
      //  11.111px → 12.5px
      small: ["clamp(0.694rem, 0.595rem + 0.248vi, 0.781rem)", "1.5"],

      //  13.333px → 15px
      body2: ["clamp(0.833rem, 0.714rem + 0.298vi, 0.938rem)", "1.5"],

      // 16px → 18px
      body1: ["clamp(1rem, 0.857rem + 0.357vi, 1.125rem)", "1.5"],

      // 19.2px → 21.6px
      h5: [
        "clamp(1.2rem, 1.029rem + 0.429vi, 1.35rem)",
        {
          lineHeight: "1em",
          letterSpacing: "0em",
          fontWeight: "bold",
        },
      ],

      // 23.04px → 25.92px
      h4: ["clamp(1.44rem, 1.234rem + 0.514vi, 1.62rem)", "1.5"],

      // 27.648px → 31.104px
      h3: ["clamp(1.728rem, 1.481rem + 0.617vi, 1.944rem)", "1.5"],

      // 33.178px → 37.325px
      h2: [
        "clamp(2.074rem, 1.777rem + 0.741vi, 2.333rem)",
        {
          lineHeight: "1em",
          letterSpacing: "0em",
          fontWeight: "extrabold",
        },
      ],

      // 39.813px → 44.79px
      // h1: [
      //   "clamp(2.488rem, 2.133rem + 0.889vi, 2.799rem)",
      //   {
      //     lineHeight: "1.2em",
      //     letterSpacing: "0em",
      //     fontWeight: "bold",
      //   },
      // ],
      /* 47.776px → 53.748px */
      h1: [
        "clamp(2.488rem, 2.133rem + 0.889vi, 2.799rem)",
        {
          lineHeight: "1.2em",
          letterSpacing: "0em",
          fontWeight: "bold",
        },
      ],
      // },
      /* 57.331px → 64.497px */
      //    h1: [
      //   "clamp(3.583rem, 3.071rem + 1.28vi, 4.031rem)",
      //   {
      //     lineHeight: "1.2em",
      //     letterSpacing: "0em",
      //     fontWeight: "normal",
      //   },
      // ],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },

    colors: {
      primary: {
        "50": "#f6f6f6",
        "100": "#e7e7e7",
        "200": "#d1d1d1",
        "300": "#b0b0b0",
        "400": "#929292",
        "500": "#6d6d6d",
        "600": "#5d5d5d",
        "700": "#4f4f4f",
        "800": "#454545",
        "900": "#3d3d3d",
        "950": "#262626",
      },
      secondary: {
        "50": "#f5f8f7",
        "100": "#ddeae8",
        "200": "#bad5d3",
        "300": "#90b8b6",
        "400": "#699897",
        "500": "#528282",
        "600": "#3d6464",
        "700": "#345051",
        "800": "#2d4142",
        "900": "#283839",
        "950": "#132020",
      },
      accent: {
        "50": "#fef2f2",
        "100": "#ffe1e1",
        "200": "#ffc9c9",
        "300": "#fea3a3",
        "400": "#fb6e6e",
        "500": "#f34040",
        "600": "#e02222",
        "700": "#b31717",
        "800": "#9c1818",
        "900": "#811b1b",
        "950": "#460909",
      },
      white: "#E9E9E9",
      black: "#000",
    },
    backgroundImage: {
      explosion: 'url("/bg-explosion.webp")',
      circles: 'url("/bg-circles.png")',
      circleStar: 'url("/circle-star.svg")',
      site: 'url("/bg-image.webp")',
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
