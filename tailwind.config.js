/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",
        secondary: "#FBA980",
        third: "#475569",
        firstMuted: "#64748B",
        secondMuted: "#CBD5E1",
        green: "#34D399",
        lightGray: "#F8FAFC",
      },
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
      },
      fontFamily: {
        Poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
