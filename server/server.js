var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

/* Configuaration Files
 * 1. development = dev_config
 * 2. production = prod_config
 */
var dev_config = require('./config/dev_config'); 
var prod_config = require('./config/prod_config');

//TODO
//Assign config with prod_config when moving to production and vice-versa
var config = dev_config;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req,res){
	home.sampleAction(req,res);
});

// START THE SERVER
// =============================================================================
var server = app.listen(config.port, function () {
  var host = config.server;
  var port = config.port;
  console.log('App listening at : ' + host);
});

var home = require('./controllers/HomeController');
