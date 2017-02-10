var server = require('./../server');
var session = require('./../models/session')

var sessionlistcontrol = function(req, res){
	console.log(req.headers)
	res.json('Listing Successful')
}

module.exports = {
	sessionlistcontrol : sessionlistcontrol,
};