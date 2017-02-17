var server = require('./../server');
var Session = require('./../models/session')
var q = require('q')

var findquery = function(model, data, cb){
	model.find({'presenter': data}, function(error, response){
		if (error){
			cb(null, error)
		}
		cb(null, response)
	});

	
}

var createnew = function(model, cb){
	model.save(function(err, response) {
	    if (err){
	    	console.log("error",err);
	    }
	    cb(null, response)	
	});
	
}

var findbyId = function(model, data, cb){
	
	model.findById({'_id': data}, function(error, response) {
		  if(error){
		  	cb(error)
		  }
		  cb(null, response)
		  
	});
}


module.exports = {
	findquery : findquery,
	findbyId : findbyId,
	createnew : createnew
}