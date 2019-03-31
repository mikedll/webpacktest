const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: {
    main: './src/main.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
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
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
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
