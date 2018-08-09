// 解决豆瓣 API 跨域 问题
// CORS 

module.exports = {
  baseUrl: '/',
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
