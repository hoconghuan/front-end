var http = require('http');
const url = require('url');

http.createServer(function (request, response) {
  
  let url = new URL(request.url,'http://127.0.0.1')
  // console.log(url); //打印request请求
  
  console.log(url.pathname);
  console.log(url.searchParams.get('key'));
   console.log(url.searchParams.get('num'));
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

// requst传参.
