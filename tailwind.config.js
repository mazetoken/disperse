module.exports = {
  content: [
    //'./public/**/*.html',
    '.*.html',
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
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
};