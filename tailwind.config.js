/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#181818',  
        secondary: '#ebddc4', 
        accent: '#A7D477',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
