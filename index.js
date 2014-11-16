var express = require('express');
var app = express();
var pg = require('pg');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get(function (req, res){
    console.log("REQ is "+req);
});

app.get('/', function(request, response){
	response.send("Hello world!");
});

var server = app.listen(app.get('port'), function (){
	console.log("Capit Node.js is running on localhost:" + app.get('port'));
});
