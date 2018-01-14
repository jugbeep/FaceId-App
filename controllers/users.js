var passport = require("passport")

//GET signup 
function getSignup(req, res) {
	res.render('signup.ejs', { message: req.flash('signupMessage') });
}

//POST signup
function postSignup(req, res, next) {
	let signupStragegy = passport.authenticate('local-signup', {
		successRedirect : '/',
		failureRedirect : '/login',
		failureFlash : true
	});

	return signupStragegy(req, res, next);
}

// GET login
function getLogin(req, res, next) {
	res.render('login.ejs', {message: req.flash('loginMessage') });
}

//POST login
function postLogin(req, res, next) {
	let loginStrategy = passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	});

	return loginStrategy(req, res, next);
}

//GET logout
function getLogout(req, res) {
	req.logout();
	res.redirect('/');
}

module.exports = {
	getSignup: getSignup,
	postSignup: postSignup,
	getLogin: getLogin,
	postLogin: postLogin,
	getLogout: getLogout
}