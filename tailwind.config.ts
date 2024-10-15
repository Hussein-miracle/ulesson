import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        skeleton: "#f8fafc",
        "primary-blue": {
          100: "#006DFF",
          75: "#3C8FFF",
          50: "#88BAFF",
          25: "#B6D4FF",
        },
        grey: {
          70: "#4C689E",
        },
        secondary: {
          blue: "#4169E1",
        },
        background: "#F0F6FE",
        table: "#F8FBFF",
        neutral: {
          black: "#000000",
          white: "#FFFFFF",
        },
        accent: {
          blue: "#71CAFF",
          "light-blue": "#E5F5FF",
          orange: "#FF9E6A",
          "light-orange": "#FFEFE7",
          green: "#4ACA67",
          "light-green": "#EBFEEF",
          purple: "#B37DF5",
          "light-purple": "#F1E7FF",
          red: "#F2446D",
          "light-red": "#FCEDF1",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        "text-shade": {
          100: "#222222",
          75: "#333333",
          50: "#595959",
          25: "#969696",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        app: "url(/images/background-image.png)",
        "login-bg": "url(/images/loginBg.png)",
        "sch-img": "url(/images/school-image.png)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
