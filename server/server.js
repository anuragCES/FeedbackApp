var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/* Configuaration Files
 * 1. development = dev_config
 * 2. production = prod_config
 */
var dev_config = require('./config/dev_config'); 
var prod_config = require('./config/prod_config');

//TODO
//Assign config with prod_config when moving to production and vice-versa
var config = dev_config;

// Checks Database Connection
mongoose.connect(config.mongo.server+':'+config.mongo.server+'/'+config.mongo.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to Database')
});

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./config/routes')(app);

// START THE SERVER
// =============================================================================
var server = app.listen(config.port, function () {
  var host = config.server;
  console.log('App listening at : ' + host);
});

