
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 使用min-css-extract-plugin 替代
const MiniCssExtract = require('mini-css-extract-plugin');
// const px2rem = require('postcss-px2rem');// 移动端使用

const devMode = process.env.NODE_ENV !== 'production'
let config = {
  entry: {
    main: './src/main.jsx',
    mainTwo: './src/mianTwo.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        // 多个 loader 的时候执行顺序和排列顺序相反
        use: [
          // {
          //   loader: 'style-loader'  // 可以把css放在页面上
          // },
          {
            loader: devMode ? 'style-loader' : MiniCssExtract.loader
          },
          {
            loader: 'css-loader',    // 放在后面的先被解析
            options: {
              // minimize: true,
              modules: { // 开启命名前缀
                localIdentName: "[path][name]-[local]-[hash:5]"
              },
              importLoaders: 1 // 保证和postcss不冲突
            }
          },
          {
            loader:'postcss-loader',
            // options: { // 移动端使用
            //   ident: 'postcss',
            //   plugins: ()=>[
            //     px2rem({ remUnit: 75 }) // 设置1rem是多少
            //   ]
            // }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: ['file-loader']//1.把你的资源移动到输出目录2.返回最终引入资源的url
      },
      {
        test: /\.(mp4|mp3)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240
          // name: utils.assetsPath('media/[name].[ext]?[hash:7]')
        }
      }
      // {  // 加载jQuery
      //   test: path.resolve(__dirname, 'src/app.js'),
      //   use: [
      //     {
      //       loader: 'imports-loader',
      //       options: {
      //         $: 'jquery'
      //       }
      //     }
      //   ]
      // }

    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // 默认是async 设置为all就能拆出第三方包
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 使用自定义模板来生成 HTML 文件
      template: './index.html'
    }),
    new MiniCssExtract({
      // 从 .js文件中提出出来.css文件的名称  放入到dist下的css文件目录下
      filename: devMode ? '[name].css' : "css/[name]_[contenthash:8].css",  // 生成后放到 dist/css   原来的css文件名 加上 8位随机生成的hash数值
      chunkFilename: "[id].css"
    }),
  ]
}
module.exports = config;