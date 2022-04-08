module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile": { "raw": "(max-width: 1024px)" }
      },
    },
  },
  plugins: [],
}
