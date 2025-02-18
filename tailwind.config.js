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
        customPurple: '#923FFD',
        darkColor: '#0c0b0d',
        secondaryColor: '#0e0e10',

        cardColor: '#27272d',
        primaryColor: '#8325fd',
        lowPriority: '#BDBDBD',
        secondaryText: '#708C88',
        cardTitle: '#fdfdfd'
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

