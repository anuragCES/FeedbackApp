var mongoose = require('mongoose');
// var Schema = mongoose.Schema,
    // ObjectId = Schema.ObjectId;

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
		required: true
	}
});


// Making it accessible from any modules

var User = module.exports = mongoose.model('User', UserSchema);
