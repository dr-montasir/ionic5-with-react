var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(morgan('dev'));
app.use(bodyParser.url({'extended':'true'}));
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", 'DELETE, PUT');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
	next();
});

app.use(express.static('public'));
app.set('port', process.env.PORT || 8100);
app.listen(app.get('port'), function() ) {
	console.log("App listening on port" + app.get('port'));
});