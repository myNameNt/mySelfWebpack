module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  watch: true,
  watchOptions: {  //监控的选项
    poll: 1000,       //每1000毫秒监控1次
    aggregateTimeout: 500,  //防抖，保存空闲事件超过500毫秒才进行打包
    ignored: /node_modules/, //忽略哪个文件夹
  },
}