const express = require('express');
const router = express.Router();
const request = require('request');
const getKeys = require('../env.js');
const key = getKeys.key;
const id = getKeys.id;


var options = {
	url: 'http://api.kairos.com/v2/media/b33ca3c50170b07ab05922c3',
	headers: {
	'app_id': id,
	'app_key': key,
	JSON: true
	}
}

function hello(err, res, body) {

	request.get(options,  function(error, response, body){
	    console.log('error is ',err);
		console.log(body);
		res.send(body);
	});
}
module.exports = {
	hello: hello
}