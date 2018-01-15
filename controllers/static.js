// GET /
function home(req, res) {  
  res.sendFile('public/index.html');
}

module.exports = {
  home: home,
}
