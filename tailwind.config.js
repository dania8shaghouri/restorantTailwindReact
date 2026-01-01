/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        forum: ["var(--fontFamily-forum)", "serif"],
        cursive: ["cursive"],
        nunito: ["Nunito"],
        dmsans: ["var(--fontFamily-dm_sans)", "sans-serif"],
      },
      fontWeight: {
        regular: "var(--weight-regular)",
        bold: "var(--weight-bold)",
      },
      keyframes: {
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveAnim: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(30px)" },
        },
        menuBtn: {
          "0%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(0.5)" },
        },
      },
      animation: {
        rotate360: "rotate360 15s linear infinite",
        moveAnim: "moveAnim 5s linear infinite",
        menuBtn: "menuBtn 400ms ease-in-out alternate infinite",
      },
    },
  },
  plugins: [],
};
