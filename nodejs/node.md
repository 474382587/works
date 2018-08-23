1. http module
2. url module - parse(), resolve()
3. supervisor -- watch mode of node

```
var http = require('http'); 

http.createServer(function (request, response) { 
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK 
    //设置HTTP头部，状态码是200，文件类型是html，字符集是utf8 
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"}); 
  
    // 发送响应数据 "Hello World" 
    res.end("哈哈哈哈，我买了一个iPhone" + (1+2+3) + "s"); 
  }).listen(8888); 
  // 终端打印如下信息 
  console.log('Server running at http://127.0.0.1:8888/');
```