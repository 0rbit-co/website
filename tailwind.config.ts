import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "420px",
        xs: "500px",
        xl: "1440px",
        xxl: "2100px",
        cardlg: "1440px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blackOlive: "#25291C",
        beige: "#E3E7D3",
        orange: "#EB8F44",
        onyx: "#444444",
        "anti-white": "#EFEFEF",
        night: "#161515",
        background: "#efeae3",
      },
    },
  },
  plugins: [],
};
export default config;
