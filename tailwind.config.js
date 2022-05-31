module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem',
      },
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '640px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '640px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
