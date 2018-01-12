const express = require('express');
const router = require.router();
const request = require('request');
const getKeys = require('./env.js');
const key = getKeys.key;
const id = getKeys.id;

let headers = {
	url: 'https://api.kairos.com/v2/media/',
	headers: {
		'app_id': id,
		'app_key': key
	}
};

function get(faceId) {

	request(headers, function(err, res, body) {
		let resData = JSON.parse(body);
		console.log(resData);
	});
};

module.exports = get;

