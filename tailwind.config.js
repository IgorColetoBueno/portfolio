/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Teko', 'serif'],
      },
      colors: {
        'rich-black': '#0c1717',
        'midnight-green': '#034444',
        'misty-rose': '#f9e1e2',
        'bittersweet-shimmer': '#cf4a51',
        'melon': '#f3a9ab',
      },
    },
  },
  plugins: [],
}
