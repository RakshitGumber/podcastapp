import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["graphik"],
        bodyText: ["cabin"],
      },
    },
  },
  plugins: [],
} satisfies Config;
