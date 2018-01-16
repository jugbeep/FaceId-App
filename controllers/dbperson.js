const db = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI || 'mongodb://localhost/Face-App'

function find(req, res) {

	db.connect(url, function(err, db) {
		let collection = db.collection('recognizes');

		collection.findOne({'name': 'Patrick'}, function(err, doc) {
			if (err) console.log(err)
			
			res.render('personDoc', {doc:doc});
		})
	})
};		
module.exports = {
	find: find
}