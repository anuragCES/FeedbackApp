var server = require('./../server');
var Session = require('./../models/session');
var services = require('./../services/modelServices');
var jwt = require('jwt-simple');
var q = require('q');

var secret = '123456';

var sessionlistcontrol = function(req, res){
	services.findquery(Session, req.user.email, function(err, output){

		res.json(output);

		}, function(err){
			res.json(err);
	});
}


var sessioncreatecontrol = function(req, res){
	var session = Session();
	console.log(req.body, req)
	session.serialno = req.body.serialno;
	session.title = req.body.title;
	session.presenter = req.body.presenter;
	session.description = req.body.description;
	session.category = req.body.category;
	session.duration = req.body.duration;
	session.url = req.body.url;
	session.updatedon = new Date(2013,11,20,2,35);
	session.createdon = new Date(2013,11,10,2,35);
	
	services.createnew(session, function(err, output){
		if(err){
			res.json({'message': err});
		}
		res.json({'message': 'Session Created Successfully', 'data': output});
	});
}


var sessionupdatecontrol = function(req, res){

	services.findbyId(Session, req.params['id'],function(err, output){
			output.serialno = req.body.serialno;
		  	output.save()
		  	.then(function(response){
		  		res.json({'message': 'Listing Successful', 'result': response});

		  	});

		}, function(err){
			res.json(err);
	});
}

module.exports = {
	sessionlistcontrol : sessionlistcontrol,
	sessioncreatecontrol: sessioncreatecontrol,
	sessionupdatecontrol: sessionupdatecontrol,
};
