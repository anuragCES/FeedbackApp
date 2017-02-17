var server = require('./../server');
var jwt = require('jwt-simple');

var secret = '123456';

var authentication = function(req, res, next){
	try{
		token = req.headers['authorization'];
		user = jwt.decode(token, secret);
		req.user = user;
	}
	catch(err)
	{
		res.status(401).json({'message': 'Please enter a valid Token'})
	}
	next();
	////res.status(200).send('User authenticated')

}

module.exports = {
	authentication : authentication
}