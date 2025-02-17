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
        customPurple: '#614cd9',
        darkColor: '#03010D',
        secondaryColor: '#060312',
        
        cardColor: '#15192B',
        primaryColor: '#614cd9',
        lowPriority: '#BDBDBD',
        secondaryText: '#708C88',
        cardTitle: '#7C7CED'
      },
      fontFamily: {
        'poppins': 'poppins',
        'roboto': 'roboto',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

