// GET /
function login(req, res) {  
	console.log('made it HOME!');
	res.render('login.ejs');
}

function home(req, res) {  
	console.log('made it HOME!');
	res.render('index.ejs');
}

module.exports = {
  home: home,
  login: login
}
