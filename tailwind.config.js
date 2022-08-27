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
      'mobile': '512px',
      // => @media (min-width: 512px) { ... }
      'tablet': '720px',
      // => @media (min-width: 720px) { ... }
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
};