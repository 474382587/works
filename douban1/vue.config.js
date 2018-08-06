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
