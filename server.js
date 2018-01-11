//const request = require('request');
const express = require('express');
const app = express();

/// set up image schema ///
let mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/Face-App' );

let Schema = mongoose.Schema;

let faceSchema = ({
	name: String,
	photoUrl: String,
	likes: [ String ],
	dislikes: [ String ],
	hometown: String,
	specialRequests: String,
	significantOther: [ String ],
	kids: String,
	birthday: Number,
	favoriteTeam: String,
	miscNotes: String
});

let Recongnize = mongoose.model('Recongnize', faceSchema);


/// home path get ///
app.get('/home', function (req, res){
	res.send('hello from root get');
});


/// setting up port to listen ///
app.listen(process.env.PORT || 3000, function() {
 		console.log('listening on port 3000');
})