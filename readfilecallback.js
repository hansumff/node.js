// readfilecallback.js

function readFileCallback(err, data) {
	if(err) {
		console.log(err);
	} else {
		console.log(data);
	}
}

var fs = require('fs');
fs.readFile('file.txt', 'utf-8', readFileCallback);
console.log('end.');