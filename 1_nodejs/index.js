var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {'content-type': 'text/plain'});
    response.end('hello world Mugundhan k v - 7376222IT203\n');
}).listen(3100);

console.log('Server running at http://127.0.0.1:3100/');
