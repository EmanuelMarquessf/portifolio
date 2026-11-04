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
        // Primary for text and buttons; primaryColorHover for hover; accent for image backgrounds.
        accentColor: '#51416b',
        darkColor: '#0c0b0d',
        secondaryColor: '#0e0e10',

        cardColor: '#27272d',
        cardDark: '#17151D',
        cardBorder: '#343039',
        primaryColor: '#8B5CF6',
        primaryColorHover: '#A78BFA',
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

