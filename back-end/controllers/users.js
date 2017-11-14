const DB = require('../models').models;

/* Get Current User's profile info */
module.exports.getInfo = (req, res) => {
	DB.User.findOne({where: {email: req.user.email}}).then((user) => {
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
		attributes: ['username', 'createdAt', 'updatedAt', 'firstName', 'lastName', 'photoUrl', 'zipcode'],
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
	/* Lookup using the ID of the currently logged in user */
	DB.User.findById(req.user.id).then(user => { 
		/* handle errors */
		if (!user) res.status(404).json({'message': 'User Not Found'});
		if (user.id !== req.user.id) res.json({'message':'Not authorized to modify this data'})
		/* update user and respond with success message */
		return user.updateAttributes(req.body);
	}).then(user => res.json({'message': 'User Info Updated!'}));
};
