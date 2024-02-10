/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Include MDX files if you're using them
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
    },
  },
  plugins: [],
};
