const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new VueLoaderPlugin(),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title: "Easy Demo",
      inject: 'head'
    })
  ],
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ExtractTextPlugin.extract({use: 'css-loader', fallback: 'vue-style-loader'})}
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
