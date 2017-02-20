var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
var jwt = require('jwt-simple');
// var Schema = mongoose.Schema,
    // ObjectId = Schema.ObjectId;
var secret = '123456';

var UserSchema = mongoose.Schema({
	'firstname' : {	
		type : String, 
		required : true
	},
	'lastname'  : { 
		type : String
	},
	'email' : {	
		type : String, 
		required : true
	},
	'password'  : {	
		type : String, 
		required : true
	},
	'token'		: { 
		type : String,
	}
});


UserSchema.methods.comparePassword = function (passw, user_password, user, cb) {
	var user_details = user
    bcrypt.compare(passw, user_password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        console.log(isMatch)
        if (!user_details.token){
	        var token = jwt.encode(user_details, secret);
	        user_details.update({'token': token }, function(err, output){
	        	if (err){
	        		console.log('erprprprppr', err)
	        	}

	        });
    	}
    	else
    	{
    	token = user_details.token
    	}
    	cb(null, isMatch, token);
    });
};

// Making it accessible from any modules

var User = module.exports = mongoose.model('User', UserSchema);
