/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        google: {
          blue: "#4285f4",
          red: "#ea4335",
          yellow: "#fbbc04",
          green: "#34a853",
        },
      },
      fontFamily: {
        sans: ["Google Sans Code"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
