/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        Red400: "hsl(0, 100%, 68%)",

        // Neutral
        Blue950: "hsl(230, 29%, 20%)",
        Blue100: "hsl(207, 33%, 95%)",
      },
      fontFamily: {
        Barlow: ["Barlow", "sans-serif"],
        BarlowCondensed: ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
