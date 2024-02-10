/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 
  purge: ["./pages/**/*.js", "./components/**/*.js"],
   
  theme: {
    extend: {
      fontFamily: {
        primary:["Poppins"],
      },
    },
  },
  plugins: [],
}

