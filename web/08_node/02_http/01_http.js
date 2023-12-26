const  http = require('http');
http.createServer(function (request, response) {
 response.setHeader('Content-Type', 'text/plain;charset=utf-8');//中文会乱码，需要在响应头中设置utf-8
  response.end('Hello World,你好node');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');


