var mongoose = require('mongoose')

var RatingSchema = mongoose.Schema({
	'topic' : {	
		type : String, 
		required : true
	},
	'presenter'  : { 
		type : String
	},
	'userrating' : {	
		type : String, 
		required : true
	}
});


var Rating = module.exports = mongoose.model('Rating', RatingSchema);