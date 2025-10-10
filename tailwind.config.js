const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        night: "#030712",
        "night-200": "#0f172a",
        accent: "#22d3ee",
        "accent-soft": "#67e8f9",
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at top, rgba(34,211,238,0.25) 0, transparent 55%)",
        "grid-linear":
          "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(2,6,23,0.95) 100%)",
      },
      boxShadow: {
        glow: "0 10px 40px rgba(34,211,238,0.35)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
