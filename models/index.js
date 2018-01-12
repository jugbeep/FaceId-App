/// set up image schema ///
const mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/Face-App' );

module.exports.Recognize = require('./faces.js');
module.exports.User = require('./user.js')
