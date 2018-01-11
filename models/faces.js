const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let faceSchema = ({
	name: String,
	photoUrl: String,
	likes: String,
	dislikes: String,
	hometown: String,
	specialRequests: String,
	significantOther: String,
	kids: String,
	birthday: Number,
	favoriteTeam: String,
	miscNotes: String
});

let Recongnize = mongoose.model('Recongnize', faceSchema);

module.exports = Recongnize;