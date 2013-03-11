var HTTP_LISTEN_PORT = 8080;

// init MongoDB connection
var mongoose = require('mongoose');
db = mongoose.createConnection('localhost', 'admin');
db.on('error', console.error.bind(console, 'connection error:'));

// init HTTP server
var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  
  
  response.end('Hello Node ...\n');
}).listen(HTTP_LISTEN_PORT);

console.log('Server running at http://127.0.0.1:' + HTTP_LISTEN_PORT + '/');
