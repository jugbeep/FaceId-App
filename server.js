const request = require('request');
const express = require('express');
const app = express();

app.get('/home', function (req, res){
	res.send('hello from root get');
});

app.listen(process.env.MONGODB_URI || 3000, function() {
 		console.log('listening on port 3000');
})