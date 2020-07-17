const baseConfig = require('./webpack.base.config.js')
const developmentConfig = require('./webpack.dev.config.js')
const productionConfig = require('./webpack.pro.config.js')
const {merge} = require('webpack-merge')

module.exports = (env)=>{
  let config = {}
  if(env === 'development'){
    config = merge(baseConfig,developmentConfig)
  } else if (env === 'production') {
    config = merge(baseConfig,productionConfig)
  }
  return config
}