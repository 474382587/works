// var http = require('http');
// var url = require('url');
// var sd = require('silly-datetime')


// // request and response
// // 请求 和 响应
// http.createServer(function (req, res) {
//   // console.log(req.url)
//   if (req.url !== '/favicon.ico') {
//     // req.url ==> 获取 url
//     var query = url.parse(req.url, true)
//     console.log(query.query.hello)
//     res.writeHead(200, {
//       "Content-Type": "text/html;charset='utf-8'"
//     });
//   }

//   var date = sd.format(new Date(), 'YYYY-MM-DD HH:mm')

//   res.write('Hello Node.js');
//   res.write(date);
//   res.end();
// }).listen(8001)


var fs = require('fs')
function getFile(items, index, length) {
  if(index === length){
    console.log('all finished')
    return false;
  }
  fs.stat('test/' + items[index], function (err, detail) {
    if (err) {
      console.log('error: ' + err);
    } else {
      if (detail.isFile()) {
        console.log('file')
      } else {
        console.log('folder');
      }
    }
    getFile(items, index+1, length)
  })
}
fs.readdir('test', function (err, items) {
  if (err) {
    return false;
  } else {
    console.log(items[0])
    getFile(items, 0, items.length)
  }
})