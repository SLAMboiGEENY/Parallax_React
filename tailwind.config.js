/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "linear-gradient(0deg, rgba(34,193,195,1) 7%, rgba(236,173,37,1) 92%);"
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: false,
  },
}

