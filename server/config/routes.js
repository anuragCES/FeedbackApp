'use strict'
var home = require('./../controllers/HomeController');

module.exports = function(app){

	app.get('/', function(req,res){
		home.sampleAction(req,res);
	});

	// API for Login
	app.post('/login', function(req, res){
		home.Login(req, res);
	});

	//API for Signup
	app.post('/signup', function(req, res){
		home.Signup(req, res);
	});
}