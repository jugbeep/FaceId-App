const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./config/routes');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const cookieParser = require('cookie-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

///render EJS ///
app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

///passport and session setup//
app.use(session({secret: 'hey' }));
app.use(passport.initialize());
app.use(passport.session());

///flash messages, (does not seem to be working)///
app.use(flash());

require('./config/passport')(passport);
/// set local user
app.use(function (req, res, next) {
	res.locals.currentUser = req.user;
	next();
})
app.use(routes);

/// setting up port to listen ///
app.listen(process.env.PORT || 3000, function() {
 		console.log('listening on port 3000');
});


