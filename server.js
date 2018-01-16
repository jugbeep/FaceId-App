
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./config/routes');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static('public'));

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(session({secret: 'hey' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

app.use(function (req, res, next) {
	res.locals.currentUser = req.user;
	next();
})


app.use(routes);


/// setting up port to listen ///
app.listen(process.env.PORT || 3000, function() {
 		console.log('listening on port 3000');
});


