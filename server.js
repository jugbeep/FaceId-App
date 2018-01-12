//const request = require('request');
const express = require('express');
const app = express();
bodyParser = require('body-parser')

const db = require('./models');

app.use(bodyParser.urlencoded({ extended: true }));

/// home path get ///
app.get('/home', function (req, res){
	res.send('hello from root get');
});
app.get('/home/face/', function(req, res) {
	let getAll = db.Recognize.find();
	console.log(getAll);
	res.json(getAll);

})
app.get('/home/face/:id', function(req, res) {
	let reqId = req.params.id;
	console.log(reqId);
	db.Recognize.findById(reqId, function(err, doc) {
		if (err) throw err
		res.json(doc);

	});
});


/// setting up port to listen ///
app.listen(process.env.PORT || 3000, function() {
 		console.log('listening on port 3000');
})