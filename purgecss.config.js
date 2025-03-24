module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  css: ['./build/static/css/*.css'],
  output: './build/static/css/',
  safelist: [
    /^fade/,
    /^slide/,
    /^animate/,
    /^swiper/,
    /^modal/,
    /^active/,
    /^show/,
    /^hide/,
    /^open/,
    /^close/,
    /^expanded/,
    /^collapsed/
  ]
}; 