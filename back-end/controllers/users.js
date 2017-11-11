const DB = require('../models').models;

/* Get Current User's profile info */
module.exports.getInfo = (req, res) => {
	console.log(req.user.email);
	DB.User.findOne({where: {email: req.user.email}}).then((user) => {
		console.log(user);
		res.json(user);
	});
};

/* Index all users (for search) */
module.exports.index = (req, res) => {
	DB.User.findAll({attributes: ['username', 'id', 'photoUrl']}).then(users => res.json(users));
};

/* Show a single user (profile) */
module.exports.show = (req, res) => {
	// TODO: validate id is a number - crashes if non integer is passed...
	DB.User.findById(req.params.id,{
		attributes: ['username', 'createdAt', 'updatedAt', 'firstName', 'lastName', 'photoUrl'],
		include: [{
			model: DB.Beer,
			attributes: ['name', 'photoUrl', 'style', 'id']
		}]
	}).then(user => {
		if (!user) res.status(404).send('User Not Found');
		res.json(user);
	});
};