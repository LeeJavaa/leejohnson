/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        veryDark: "#050505",
        dark: "#101010",
        leeRed: "#A10000",
        light: "#D9D9D9",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        noto: ["var(--font-noto-serif)"],
      },
      borderWidth: {
        0.5: "0.5px",
      },
      animation: {
        fadeIn: "fade 1s linear",
        fadeInLong: "fade 2s linear",
        textFlip: "flip 1.5s linear",
        borderFade: "borderFadeIn 3s linear",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: "100%" },
        },
        flip: {
          "0%, 80%": {
            transform: "rotateY(360deg)",
          },
        },
        borderFadeIn: {
          "0%": { border: "1px solid rgba(255, 255, 255, 0)" },
          "100%": { border: "1px solid rgba(255, 255, 255, 0.03)" },
        },
      },
    },
  },
  plugins: [],
};
