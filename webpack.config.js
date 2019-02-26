const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title: "Easy Demo",
      inject: 'head'
    })
  ],
  module: {
    rules: [
      { test: /\.jsx$/,
        use: [{
          loader: 'babel-loader',
          options: { cacheDirectory: 'tmp/babel-loader-cache' }
        }],
        exclude: '/node_modules/'
      },
      { test: /\.css$/, use: ExtractTextPlugin.extract({use: 'css-loader'})}
    ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js]',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), "node_modules"]
  }
};
