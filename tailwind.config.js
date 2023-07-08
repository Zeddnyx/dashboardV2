/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fffadd",
        secondary: "#0E151D",
        dark0: "#27374d",
        yellow: "#F2C94C",
        blue: "#3AAAB6",
        red: "#E74633",
        green: "#1DB954",
      },
    },
  },
  plugins: [],
};
