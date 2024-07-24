import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: ["montserrat"],
      bodyText: ["lato"],
    },

    colors: {
      background: "#0D0017",
      secondary: "#1C052A",
      buttonBackground: "#1B0035",
      hover: "#E65959",
    },

    textColor: {
      accent: "#E65959",
      primary: "#FFFFFF",
    },
  },
  plugins: [],
} satisfies Config;
