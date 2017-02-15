var server = require('./../server');
var Session = require('./../models/coffee-shop')
var jwt = require('jwt-simple');

var secret = '123456';

var sessionlistcontrol = function(req, res){
	token = req.headers['authorization']
	user = jwt.decode(token, secret)['email'];
	console.log(user)
	Session.find({'presenter': user}, function(err, response) {
		  if (err) {
		  	res.error('Data Not Found')
		  }

		  // show the admins in the past month
		  res.json({'message': 'Listing Successful', 'result': response})
	});
	
}


var sessioncreatecontrol = function(req, res){
	token = req.headers['authorization']
	user = jwt.decode(token, secret);
	var session = Session()
	session.serialno = req.body.serialno
	session.title = req.body.title
	session.presenter = req.body.presenter
	session.description = req.body.description
	session.category = req.body.category
	session.duration = req.body.duration
	session.url = req.body.url
	session.updatedon = new Date(2013,11,20,2,35)
	session.createdon = new Date(2013,11,10,2,35)
	session.save(function(err) {
		    if (err){
		    	console.log("error",err);
		    }	
		});
	console.log(req.body)
	res.json('Creation Successful')
}

// Updated Entry by using ID 
var sessionupdatecontrol = function(req, res){
	token = req.headers['authorization']
	user = jwt.decode(token, secret);
	Session.findById({'_id': req.params['id']}, function(err, sess) {
		  if (err) {
		  	res.error('Data Not Found')
		  }
		  sess.serialno = req.body.serialno
		  console.log(sess)
		  sess.save(function(err, response){
		  		if(err){
		  			console.log('Error')
		  		}
		  		res.json({'message': 'Listing Successful', 'result': response})
		  });
		  // show the admins in the past month
		  
	});
}

module.exports = {
	sessionlistcontrol : sessionlistcontrol,
	sessioncreatecontrol: sessioncreatecontrol,
	sessionupdatecontrol: sessionupdatecontrol,
};