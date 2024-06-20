/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#7562E0',
        darkColor: '#0c0b0d',
        secondaryColor: '#0f0f0f',
        
        cardColor: '#1b1a37',
        primaryColor: '#7562E0',
        lowPriority: '#BDBDBD',
        secondaryText: '#708C88'
      },
      fontFamily: {
        'cherry': ['Sua Fonte Personalizada', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

