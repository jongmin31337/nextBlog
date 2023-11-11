/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      'banner-image' : "url('/images/banner.jpg)",

      colors: {
        'white' : '#ffffff',
      },
    },
  },
  plugins: [],
}
