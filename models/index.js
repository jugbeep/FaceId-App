/// set up image schema ///
const mongoose = require('mongoose');
const db = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI || 'mongodb://localhost/Face-App';
mongoose.connect(url)

//new person
function newPerson(req, res) {

	//define a new person here
	name = req.body.name,
	photoUrl = req.body.photoUrl,
	likes = req.body.likes,
	dislikes = req.body.dislikes,
	hometown = req.body.hometown,
	specialRequests = req.body.specialRequests,
	sigificantOther = req.body.specialRequests,
	kids = req.body.kids,
	birthday = req.body.birthday,
	favoriteTeam = req.body.favoriteTeam,
	miscNotes = req.body.favoriteTeam

	//now go to the db to save
	db.connect(url, function(err, db) {
		let collection = db.collection('recognizes');
		collection.insert({
			name: name,
			photoUrl: photoUrl,
			likes: likes,
			dislikes: dislikes,
			hometown: hometown,
			specialRequests: specialRequests,
			sigificantOther: sigificantOther,
			kids: kids,
			birthday: birthday,
			favoriteTeam: favoriteTeam,
			miscNotes: miscNotes 
		})
	})
	res.render('uploadComplete')
}

//find db item by query :name
function find(req, res) {
	let name = req.query.name;
	console.log(name);
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

function deletePerson(req, res) {
	let name = req.query.delName;
	console.log(name);
	
	db.connect(url, function(err, db) {
		var collection = db.collection('recognizes');

		collection.findOne({'name': name}, function(err, doc) {
			console.log(err);
			console.log('this is the doc: ', doc);
			console.log(doc +"deleted!")
			collection.remove(doc);
		res.end('deleted!');
		})
	})
}	

module.exports = {
	find: find,
	update: update,
	newPerson: newPerson,
	deletePerson: deletePerson
}


module.exports.Recognize = require('./faces.js');
module.exports.User = require('./user.js');
