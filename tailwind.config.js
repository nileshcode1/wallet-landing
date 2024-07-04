/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#167E27",
      },
      fontFamily: {
        primary: ["Space Grotesk", "sans-serif"],
      },
      screens: {
        'sm': '1040px',
        // => @media (min-width: 1040px) { ... }
  
        'md': '1218px',
        // => @media (min-width: 1218px) { ... }
  
        'lg': '1264px',
        // => @media (min-width: 1264px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}