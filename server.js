//const request = require('request');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./config/routes');


//app.use(express.static(__dirname + '../../public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);


/// setting up port to listen ///
app.listen(process.env.PORT || 3000, function() {
 		console.log('listening on port 3000');
});

