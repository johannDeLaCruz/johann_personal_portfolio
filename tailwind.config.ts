import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    fontFamily: {
      body: ["Amiri", "sans-serif"],
    },
    fontSize: {
      // 9.72px → 11.52px
      tiny: ["clamp(0.6075rem, 0.4789rem + 0.3214vw, 0.72rem)", "1.5"],

      // 11.67px → 14.40px
      small: ["clamp(0.7294rem, 0.5344rem + 0.4875vw, 0.9rem)", "1.5"],

      // 14.00px → 18.00px
      body2: ["clamp(0.875rem, 0.5893rem + 0.7143vw, 1.125rem)", "1.5"],

      // 16.80px → 22.50px
      body1: ["clamp(1.05rem, 0.6429rem + 1.0179vw, 1.4063rem)", "1.5"],

      // 20.16px → 28.13px
      h5: ["clamp(1.26rem, 0.6907rem + 1.4232vw, 1.7581rem)", "1.5"],

      // 24.19px → 35.16px
      h4: ["clamp(1.5119rem, 0.7283rem + 1.9589vw, 2.1975rem)", "1.5"],

      // 29.03px → 43.95px
      h3: ["clamp(1.8144rem, 0.7487rem + 2.6643vw, 2.7469rem)", "1.5"],

      // 34.84px → 54.93px
      h2: ["clamp(2.1775rem, 0.7425rem + 3.5875vw, 3.4331rem)", "1.5"],

      // Not 41.80px → 68.66px
      h1: ["clamp(2.6125rem, 0.6939rem + 4.7964vw, 4.2913rem)", "1.5"],
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
      white: "E9E9E9",
      black: "#000",
    },
    backgroundImage: {
      explosion: 'url("/bg-explosion.png")',
      circles: 'url("/bg-circles.png")',
      circleStar: 'url("/circle-star.svg")',
      site: 'url("/site-bg.svg")',
    },
    animation: {
      "spin-slow": "spin 6s linear infinite",
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
