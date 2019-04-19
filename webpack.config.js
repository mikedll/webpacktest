const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin.js')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: {
    main: './jstests/videoForm.js'
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: ['dist/**/*']}),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    })
  ],
  module: {
    rules: [
      { test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { cacheDirectory: 'tmp/babel-loader-cache' }
        }],
        exclude: '/node_modules/'
      },      
      { test: /\.vue$/, use: 'vue-loader'}
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
