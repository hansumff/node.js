var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>Node.js</h1>')
	res.end('<p>Hello World</p>');
}).listen(8124, "127.0.0.1");