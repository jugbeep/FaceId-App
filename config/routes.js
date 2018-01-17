const router = require('express').Router();
const path = require('path');

const passport = require('passport');
const bodyParser = require('body-parser');
const usersController = require('../controllers/users');
const staticController = require('../controllers/static');
const apiController = require('../controllers/api');
const dbController = require('../models/index')

function authenticatedUser(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/')
}

//home page post route
router.route('/')
	.get(staticController.home)
	.post(apiController.hello)

//db person
router.route('/dbperson')
	.get(dbController.find)

//signup route
router.route('/signup')
	.get(usersController.getSignup)
	.post(usersController.postSignup)

//log in route
router.route('/login')
  	.get(usersController.getLogin)
  	.post(usersController.postLogin)

//log out route
router.route("/logout")
 	.get(usersController.getLogout)

//api get
router.route('/api/post')
	.post(apiController.submit)




module.exports = router;
