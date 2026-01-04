/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "gray-50": "#fafafa",
        "gray-100": "#f5f5f5",
        "gray-200": "#e5e5e5",
        "gray-300": "#d4d4d4",
        "gray-400": "#a3a3a3",
        "gray-500": "#737373",
        "gray-600": "#525252",
        "gray-700": "#404040",
        "gray-800": "#262626",
        "gray-900": "#171717",
        "gray-950": "#0a0a0a",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
