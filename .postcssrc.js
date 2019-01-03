module.exports = {
  parser: 'postcss-syntax',
  plugins: {
    'autoprefixer': {browsers: 'defaults, ie > 9'},
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': {},
  }
}
