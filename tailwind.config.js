module.exports = {
  content: [
    //'./public/**/*.html',
    './**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
    cursor: ({ after }) => after(["disabled"]),
    extend: {},
  },
  plugins: [],
};