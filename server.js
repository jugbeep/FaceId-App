const request = require('request');
const express = require('express');
const app = express();

app.get('/', function (req, res){
	res.send('hello from root get');
});

app.listen(process.env.PORT || 3000, function() {
 		console.log('listening on port 3000');
})