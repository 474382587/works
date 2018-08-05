// 引入绝对地址 --> __dirname
// 引入 node function "path.join()"
const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'), //文件所在位置的 public folder
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader', 
          'css-loader', 
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './public',
    port: 8081
  }
}
// loader
