//http server
var http = require('http');
var fs = require('fs');
// the file below is the file you need to create for this assignment.
// NOTE!!!  The '.' in the filepath below just refers to the location of the current file, in this case
// the file is app.js.  Thus the path './modules/static.js' just refers to a folder called modules which 
// is in the same directory as app.js and the file within modules called 'static.js'


var static_contents = require('./modules/static.js');

//creating a server
server = http.createServer(function (request, response){
	response.writeHead(200, {'Content-type': 'text/html'});
	static_contents(request, response);

});
server.listen(8000);


console.log("Running in localhost at port 8000");