const mongoose = require("mongoose"),
Schema = mongoose.Schema;

let faceSchema = new Schema ({
	name: String,
	photoUrl: String,
	likes: String,
	dislikes: String,
	hometown: String,
	specialRequests: String,
	significantOther: String,
	kids: String,
	birthday: String,
	favoriteTeam: String,
	miscNotes: String
});

let Recognize = mongoose.model('Recognize', faceSchema);

module.exports = Recognize;