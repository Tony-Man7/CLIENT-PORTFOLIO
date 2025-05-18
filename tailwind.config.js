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
        accent: '#d6c6a8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
