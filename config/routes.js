const routes = require('express').Router();

const db = require('../models');

/// home path get ///
routes.get('/', function (req, res){
	res.send('hello from root get');
});
routes.get('/home/face/', function(req, res) {
	let getAll = db.Recognize.find();
	console.log(getAll);
	res.json(getAll);
})
/// get one by id ///
routes.get('/home/face/:id', function(req, res) {
	let reqId = req.params.id;
	console.log(reqId);
	db.Recognize.findById(reqId, function(err, doc) {
		if (err) throw err
		res.json(doc);

	});
});

module.exports = routes;
