var fs = require('fs');
var path = require('path');
var fs = require('fs');

module.exports = function static_contents(request, response)
{

	fs.exists("public"+request.url, function(exists){
		if(exists){
			fs.readFile("public"+request.url, 'utf8', function (err, data) {
				response.write(data);
      			response.end();
			});
		}
	})


};
