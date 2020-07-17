module.exports = {
  plugins: [
      require('autoprefixer')() // 这里需要写一个 browserslist 但是推荐的做法是在package.json添加 browserslist
  ]
}