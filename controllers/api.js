const express = require('express');
const router = express.Router();
const request = require('request');
const getKeys = require('../env.js');
const key = getKeys.key;
const id = getKeys.id;


var options = {
	url: 'https://api.kairos.com/v2/media?source=https://image.ibb.co/dSMRCR/F5_F38570_8_E29_41_CB_A143_D1_F1_C7_A65_D2_E.jpg',
	headers: {
	'app_id': id,
	'app_key': key,
	JSON: true
	}
}


function hello(err, res, body) {
	request.get(options,  function(error, response, body) {
	    console.log('error is ',err);
		console.log(body);
		res.send(body);
	});
}

function submit(err, res, body) {

	request.post(options, function(error, response, body) {
		console.log('you have an error:',error);
		console.log('res is: ',response);
		console.log('body is ',body);
		res.send(body);
	})
}
module.exports = {
	submit: submit,
	hello: hello
}
