/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Nunito": "Nunito"
      },
      colors: {
        blue: "var(--blue)",
        "base-title": "var(--base-title)",
        "base-subtitle": "var(--base-subtitle)",
        "base-text": "var(--base-text)",
        "base-span": "var(--base-span)",
        "base-label": "var(--base-label)",
        "base-border": "var(--base-border)",
        "base-post": "var(--base-post)",
        "base-profile": "var(--base-profile)",
        "base-background": "var(--base-background)",
        "base-input": "var(--base-input)",
      },
    },
  },
  plugins: [],
};
