import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          teal: "#2D6A4F",
          "teal-dark": "#1B4332",
          "teal-light": "#40916C",
          peach: "#FDDCC8",
          "peach-light": "#FFF0E5",
          "peach-dark": "#F4C4A0",
          mint: "#E8EDE5",
          "mint-light": "#F0F4ED",
          cream: "#FFF8F0",
          coral: "#C1553B",
          "coral-light": "#D4785F",
          dark: "#1A1A1A",
          sage: "#E8EDE5",
          "sage-light": "#F0F4ED",
        },
      },
      fontFamily: {
        heading: ["Boogaloo", "cursive"],
        body: ["Poppins", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "sparkle-spin": "sparkle-spin 4s linear infinite",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "sparkle-spin": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.2)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
