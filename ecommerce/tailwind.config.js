/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        qht: {
          dark: "#162418",
          primary: "#1b392b",
          primaryHover: "#284c3b",
          olive: "#52664d",
          oliveLight: "#596d53",
          oliveDark: "#43543e",
          accent: "#b1fc85",
          vividGreen: "#00d084",
          lightBg: "#f8faf8",
          lightBgAlt: "#eff5f1",
          cardBorder: "#e4eae4",
          textMuted: "#5c685f",
          textDark: "#1b221d",
          gold: "#ffb400",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 24px rgba(0, 0, 0, 0.04)",
        cardHover: "0 16px 36px rgba(27, 57, 43, 0.12)",
        button: "0 4px 14px rgba(27, 57, 43, 0.2)",
      },
    },
  },
  plugins: [],
};
