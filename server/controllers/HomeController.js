var server = require('./../server');
var User = require('./../models/users');
var bcrypt = require('bcrypt')
//var jwt = require('express-jwt')
var jwt = require('jwt-simple');
//var jsontoken    = require('jsonwebtoken');

// Used got bcrypt library
var saltRounds = 10;

var sampleAction = function (req,res){
	res.json("Sample Response from Home Controller ")
};

var login = function(req, res){

	User.findOne({ 'email': req.body.email }, function(err, user) {
		if (err) {
			console.log('error', err);
		};
		if(!user){
				res.json({'message': 'User with this email is not found in database',
						  'email': req.body.email})
			}
		else if (user)
		{
			// compares password with hashed one stored in database
			user.comparePassword(req.body.password, user.password, user, function (err, isMatch, token) {
				if (err){
					throw err;
				}
				res.json({'message': 'Login Successful', 'token': token, 'firstname': user.firstname, 
					'lastname': user.lastname, 'email': user.email})
			});
			
		}
		else{
			res.json({'message': 'Authentication Failed'})
		}
		
	});

	//res.json({'message': 'Authentication Failed'})	
};

var signup = function(req, res){
	var users = new User();
	users.firstname= req.body.firstname;
	users.lastname= req.body.lastname;
	bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
		if(err){
			console.log('Hash Error', err);
		}
		console.log('Password Hashing Successful', hash)
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
	Login  : login,
	Signup : signup
};