/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#7562E0',
        darkColor: '#121214',
        secondaryColor: '#18181b',
        primaryColor: '#7562E0',
        lowPrioriry: '#BDBDBD',
        secondaryText: '#708C88'
      },
    },
  },
  plugins: [],
}

