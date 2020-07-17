const {CleanWebpackPlugin} = require('clean-webpack-plugin')
//压缩css插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
  mode: 'production',
  optimization: {
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin()
  ]
}