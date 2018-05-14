var http = require('http');
var app = require('./config/express');

http.createServer(app).listen(process.env.PORT || 5000, function() {
	console.log('Servidor iniciado');
});
