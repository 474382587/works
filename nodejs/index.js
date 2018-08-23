var http = require('http');
var url = require('url');
// request and response
// 请求 和 响应
http.createServer(function (req, res) {
  // console.log(req.url)
  if (req.url !== '/favicon.ico') {
    // req.url ==> 获取 url
    var query = url.parse(req.url, true)
    console.log(query.query.hello)
    res.writeHead(200, {
      "Content-Type": "text/html;charset='utf-8'"
    });
  }




  res.write('Hello Node.js');
  res.end();
}).listen(8001)