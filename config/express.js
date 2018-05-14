var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
 	res.header("Access-Control-Allow-Origin", "*");
	 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	 res.header("Access-Control-Allow-Origin", "https://guilhermetog.github.io");
 	next();
 });

consign({cwd: 'app'})
	.include('api')
	.then('routes')
	.into(app);

module.exports = app;
