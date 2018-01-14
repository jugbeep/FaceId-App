const router = require('express').Router();
const db = require('../models');
const path = require('path');
const getKeys = require('../env.js');
const key = getKeys.key;
const id = getKeys.id;
const passport = require('passport');
const bodyParser = require('body-parser');
const usersController = require('../controllers/users');

function authenticatedUser(req, res, next) {
	if (req.isAuthenticated()) return next();

	res.redirect('/')
}

/// home path get ///
router.get('/', function (req, res){
	res.sendFile('./index.html');
});

router.route('/signup')
	.get(usersController.getSignup)
	.post(usersController.postSignup)

router.route('/login')
  	.get(usersController.getLogin)
  	.post(usersController.postLogin)

router.route("/logout")
 	 .get(usersController.getLogout)

/// get all ///

router.get('/home', function(req, res) {
	console.log('hit home page req');	
})

router.post('/', function (req, res) {
	console.log(req.params);
	res.json(req.params);
})

router.get('/home/face/', function(req, res) {
	let getAll = db.Recognize.find();
	console.log(getAll);
	res.json(getAll);
})
/// get one by id ///
router.get('/home/face/:id', function(req, res) {
	let reqId = req.params.id;
	console.log(reqId);
	db.Recognize.findById(reqId, function(err, doc) {
		if (err) throw err
		res.json(doc);

	});
});
///log in, signup and redirects ///	
router.post('/signup', function(req, res, next) {
	//res.send(req.body);
	let signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: 'signup',
		failureFlash: true
	});
	console.log('hit auth on post')
	return signupStrategy(req, res, next);
});








module.exports = router;
