module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'forge-gold': '#a87830',
        'deep-ink': '#1a1a14',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Source Serif 4', 'serif'],
      },
    },
  },
  plugins: [],
};
