/// set up image schema ///
const mongoose = require('mongoose');
const db = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI || 'mongodb://localhost/Face-App';
mongoose.connect(url)


//find db item by query :name
function find(req, res) {
	let name = req.query.name;
	db.connect(url, function(err, db) {

		let collection = db.collection('recognizes');
		collection.findOne({'name': name }, function(err, doc) {
			if (err) console.log(err)	
			console.log(doc)
			res.render('personDoc', { doc : doc });
		
		})
	})
};	

// find db item by qurery name, and save updates
function update(req, res) {
	name = req.query.name;
	photoUrl = req.query.photoUrl;
	likes = req.query.likes;
	dislikes = req.query.dislikes;
	hometown = req.query.hometown;
	specialRequests = req.query.specialRequests;
	sigificantOther = req.query.sigificantOther;
	kids = req.query.kids;
	birthday = req.query.birthday;
	favoriteTeam = req.query.favoriteTeam;
	miscNotes = req.query.miscNotes;

	db.connect(url, function(err, db) {
		let collection = db.collection('recognizes');

		collection.findOne({'name': name}, function(err, doc) {
			
			doc.name = name;
			doc.photoUrl = photoUrl;
			doc.likes = likes;
			doc.dislikes = dislikes;
			doc.hometown = hometown;
			doc.specialRequests = specialRequests;
			doc.sigificantOther = sigificantOther;
			doc.kids = kids;
			doc.birthday = birthday;
			doc.favoriteTeam = favoriteTeam;
			doc.miscNotes = miscNotes;

			collection.update(doc);

			res.send(doc);
		})
		
	})	
}	
module.exports = {
	find: find,
	update: update
}


module.exports.Recognize = require('./faces.js');
module.exports.User = require('./user.js');
