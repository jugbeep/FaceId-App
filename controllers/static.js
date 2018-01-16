// GET /
function home(req, res) {  
	console.log('made it HOME!');
	res.render('index.ejs');
}

module.exports = {
  home: home,
}
