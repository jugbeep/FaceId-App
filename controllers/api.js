const express = require('express');
const router = express.Router();
const request = require('request');
//const getKeys = require('../env.js');
// const key = getKeys.key;
// const id = getKeys.id;

console.log(process.env.key)



function hello(req, res) {
	request.get(options,  function(error, response, body) {
	    console.log('error is ',err);
		console.log(body);
		res.send(body);
	});
}

function submit(req, res) {
	
	let newSub = req.body.photo;
	let name = req.body.name;
	let collection = req.body.collection;
	
	let body = JSON.stringify({'subject_id': 'name',
		'gallery_name': 'collection'})

	var options = {
		url: "https://api.kairos.com/v2/media?source=" + newSub,
		headers: {
		'app_id': process.env.id,
		'app_key': process.env.key,
		JSON: true
		}
	}

	request.post(options, function(error, response, body) {
		res.render('success', {body : body});
	})
}

module.exports = {
	submit: submit,
	hello: hello
}
