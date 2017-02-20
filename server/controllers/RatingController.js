var server = require('./../server');
var Rating = require('./../models/rating');
var services = require('./../services/modelServices')

var addrate = function(req, res){
	var rating = new Rating();
	rating.topic = req.body.topic;
	rating.presenter = req.body.presenter;
	rating.userrating = req.body.userrating;
	console.log('rating', JSON.parse('{"name": "sdsdsd"}'));
	console.log(req.body.userrating);
	services.createnew(rating, function(err, output){
		if(err){
			res.json({'message': err});
		}
		res.json({'message': 'Rating Created Successfully', 'data': output});
	});
	//res.json('sdsd')
}

var getrate = function(req, res){
	services.findbyId(Rating, req.params['id'], function(err, response){
		if (err){
			console.log(err);
		}
		console.log(JSON.parse(response));
		res.json({'data': response});
	});
}

module.exports = {
	addrate : addrate,
	getrate : getrate
}