var http = require('http');
const url = require('url');

http.createServer(function (request, response) {
    // console.log(request)

    // console.log(request.url);
    let pas = url.parse(request.url, true);
    // console.log(pas);
    let pathname = pas.pathname;
    let query = pas.query;
    let { key, num } = query;
    console.log(pathname);
    console.log(key, num);

  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

// requst传参.