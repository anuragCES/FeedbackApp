'use strict'
var home = require('./../controllers/HomeController');
var middleware = require('./../config/middleware')

var sessioncontrol = require('./../controllers/SessionController');

module.exports = function(app){

	app.get('/', middleware.authentication, function(req,res){
		console.log(req.user)
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

	//API for Sessions Listing

	app.get('/sessions', middleware.authentication, function(req, res){
		sessioncontrol.sessionlistcontrol(req, res);
	});

	//API for Listing User Session
	app.post('/create-session', middleware.authentication, function(req, res){
		sessioncontrol.sessioncreatecontrol(req, res);
	});

	//API for Updating User Session
	app.post('/update-session/:id', middleware.authentication, function(req, res){
		sessioncontrol.sessionupdatecontrol(req, res);
	});
}