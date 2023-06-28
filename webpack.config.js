const path = require('path');

module.exports = {
  entry: './js/fzui.js',
  output: {
    filename: 'fzui.js',
    path: path.resolve(__dirname, 'dist'),
  },
};