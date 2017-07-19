var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var patientRouter=require('./patientRouter');


var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/patients',patientRouter);

app.use(express.static(path.join(__dirname + '/public')));
//app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
	console.log('Server running at http://'+hostname+':'+port);
});