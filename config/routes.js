const router = require('express').Router();
const db = require('../models');
const path = require('path');

const passport = require('passport');
const bodyParser = require('body-parser');
const usersController = require('../controllers/users');
const staticController = require('../controllers/static');
const apiController = require('../controllers/api')

function authenticatedUser(req, res, next) {
	if (req.isAuthenticated()) return next();

	res.redirect('/login')
}
/// home path get ///
router.get('/', function(req, res) {
	console.log('hit the home path')
	res.redirect('/login')
})
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
//home page post route
router.route('/home')
	.get(staticController.home)
	.post(apiController.hello)


module.exports = router;
