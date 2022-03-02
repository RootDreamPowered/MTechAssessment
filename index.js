const fs = require('fs');
require('http').createServer((request, response) => {
	let uri = request.url;
	const fileNotFound = (error) => {
		response.writeHead(404);
		response.end('404 - File not found');
	};
	if('/test-data.json' === uri) {
		try {
			fs.createReadStream('./test-data.json').pipe(response);
		} catch(error) {fileNotFound(error);}
	} else if(!uri || '/' === uri || uri.startsWith('index')) {
		try {
			fs.createReadStream('./index.html').pipe(response);
		} catch(error) {fileNotFound(error);}
	} else {
		fileNotFound();
	}
}).listen(3000);
