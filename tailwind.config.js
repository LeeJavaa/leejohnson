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
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        noto: ["var(--font-noto-serif)"],
      },
      borderWidth: {
        0.5: "0.5px",
      },
    },
  },
  plugins: [],
};
