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
	res.redirect('/dbperson')
}

//home page post route
router.route('/')
	.get(staticController.login)
	//.post(apiController.hello)

//db person
router.route('/home')
	.get(staticController.home)

router.route('/dbperson')
	.get(dbController.find)
	.post(dbController.newPerson)


//db update	
router.route('/update')
	.get(dbController.update)

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
router.route("/api")
	.post(apiController.submit)
	
router.route('/delete')
	.get(dbController.deletePerson)







module.exports = router;
