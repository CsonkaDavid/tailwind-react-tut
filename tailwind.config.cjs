/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundLight': '#151d24',
        'backgroundDark': '#10141c',
        'navigationBackgroundColor': '#192533',
      },
      backgroundImage: {
        'reactIconBackgroundGradient': "linear-gradient(to right top, #06b6d4, #67e8f9)"
      },
    },
  },
  plugins: [],
}
