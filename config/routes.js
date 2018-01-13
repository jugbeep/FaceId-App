const router = require('express').Router();
const db = require('../models');
const path = require('path');
const getKeys = require('../env.js');
const key = getKeys.key;
const id = getKeys.id;
const passport = require('passport');
	

/// home path get ///
router.get('/', function (req, res){
	res.sendFile(path.join(__dirname + '/../public/index.html'));
});
/// get all ///

router.post('/signup', function(req, res, next) {
	console.log('posted!')
	//res.send(req.body);
	let signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: 'signup',
		failureFlash: true
	});

	return signupStrategy(req, res, next);
});

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

router.get('/signup', function(req, res) {
	res.render('signup.ejs');
});




module.exports = router;
