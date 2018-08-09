// 解决豆瓣 API 跨域 问题
// CORS 

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/dist/'
  : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.douban.com/v2',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
