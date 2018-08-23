1. http module
2. url module - parse(), resolve()
3. supervisor -- watch mode of node `npm install supervisor -g`

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


CommonJS



--------------
npm install package
npm uninstall package@1.1.1
npm info package


---------
FS module
fs.stat(name, function(err, stats){
  stats.isFile()
  stats.isDirectory()
})
fs.mkdir(name, function(err){})
fs.writeFile(name, content, function(err){})
fs.appendFile(name, content, function(err){})
fs.readFile(name, encoding, function(err){})
fs.readdir(name, function(err){})
fs.rename(name, newName) --> Rename or Move
fs.rmdir(name, function(err){})
fs.unlink(name, function(err){})




-----------------------------
```
fs.readdir('html',function(err, files){
  if(err){

  }
  else{
    // files --> async 
  }
})
```

we can use iife to run code inside async functions