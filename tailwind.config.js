/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables dark mode via class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       boxShadow: {
      'green-glow': '0 0 16px rgba(34,197,94,0.25)',
      'green-glow-hover': '0 0 24px rgba(34,197,94,0.35)',
    },
      colors: {
        primary: "#e6e6e6",
        "background-light": "#ffffff",
        "background-dark": "#050505",
        "terminal-gray": "#1a1a1a",
         accent: "#22c55e",
        "accent-blue": "#206381",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Noto Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
      animation: {
        blink: "blink 1.5s step-end infinite",
        pulseSlow: "pulse 4s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
