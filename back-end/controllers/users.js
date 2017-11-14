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
	DB.User.findAll({attributes: ['username', 'id', 'photoUrl', 'zipcode']}).then(users => res.json(users));
};

/* Show a single user and their beers (profile) */
module.exports.show = (req, res) => {
	// TODO: validate id is a number - crashes if non integer is passed...
	DB.User.findById(req.params.id,{
		attributes: ['id', 'username', 'createdAt', 'updatedAt', 'firstName', 'lastName', 'photoUrl', 'zipcode'],
		include: [{
			model: DB.Beer,
			attributes: ['name', 'photoUrl', 'style', 'id']
		}]
	}).then(user => {
		if (!user) res.status(404).send('User Not Found'); /* 404 if user not found */
		res.json(user);
	});
};

/* Update user profile info */
module.exports.update = (req, res) => {
	DB.User.findById(req.user.id).then(user => { /* Lookup using the ID of the currently logged in user */
		if (!user) res.setatus(404).send('User Not Found');
		return user.updateAttributes(req.body);
	}).then(user => res.json(user));
};
