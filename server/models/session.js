var mongoose = require('mongoose')

var SessionSchema = mongoose.Schema({

	'serialno' : {
			type: String,
			required: true
	},
	'title' : {
			type: String,
			required: true
	},
	'presenter' : {
		type: String,
		required: true
	},
	'description' : {
		type: String,
		required: true
	},
	'category' : {
		type: String,
		required: true
	},
	'duration' : {
		type: Number,
		required: true
	},
	'url': {
		type: String
	},
	'updatedon' : {
		type: Date,
		default: Date.now
	},
	'createdon' : {
		type: Date,
	} 
})

var Session = module.exports = mongoose.model('Session', SessionSchema)