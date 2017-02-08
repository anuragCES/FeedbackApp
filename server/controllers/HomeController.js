var server = require('./../server');
var User = require('./../models/users');
var bcrypt = require('bcrypt')
var passport = require('passport-local').Strategy;


const saltRounds = 10;

var sampleAction = function (req,res){

	res.json("Sample Response from Home Controller ")
};

var login = function(req, res){
	console.log(req.body);

	res.json('Login Successful')
};

var signup = function(req, res){
	var users = new User();
	users.firstname= req.body.firstname;
	users.lastname= req.body.lastname;
	bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
		if(err){
			console.log('Hash Error', err);
		}
		console.log('Password Hasing Successful', hash)
		users.password = hash
		users.email= req.body.email;
		users.save(function(err) {
		    if (err){
		    	console.log("error",err);
		    }	
		});
		response = {'firstname': users.firstname, 'lastname': users.lastname, 'email': users.email}
		res.json(response)
	});

};

module.exports = {
	sampleAction : sampleAction,
	login  : login,
	signup : signup
};