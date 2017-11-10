const DB = require('../models').models;


getInfo = (req, res) => {
	console.log(req.user.email);
	DB.User.findOne({where: {email: req.user.email}}).then((user) => {
		console.log(user);
		res.json(user);
	});
};





module.exports = {
	getInfo,

};