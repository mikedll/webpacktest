const path = require('path');

module.exports = {
  entry: {
    main: './main.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
