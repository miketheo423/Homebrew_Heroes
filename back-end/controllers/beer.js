const DB = require('../models').models;

/** BEER FEED (INDEX) **/
/* return info for beer preview cards ordered by post date */
module.exports.index = (req, res) => {
	DB.Beer.findAll({
		order: [['createdAt', 'DESC']],
		include: [{
			model: DB.User,
			attributes: ['username', 'id']
		}],
		attributes: ['name', 'photoUrl', 'style', 'id']
	}).then(beers => {
		if (!beers) res.status(500).send('Cant find beers :(');
		res.json({beers: beers});
	});

};

/** BEER SHOW **/
/* return a single beer info by its id and its associated user info */
module.exports.show = (req, res) => {
	DB.Beer.findById(req.params.id, {include: DB.User})
		.then(beer => {
			if (!beer) res.json({"error": "beer not found"});
			res.json(beer.dataValues);
		});
};

/** BEER CREATE **/
/* Create a new beer and respond with that beer */
module.exports.create = (req, res) => {
	DB.Beer.create(req.body)
	.then(beer => {
		if (!beer) res.status(500).send('Beer could not be created');
		console.log('New Beer Added!');
		res.json(beer);
	});
};

/** BEER UPDATE **/
/*  */
module.exports.update = (req, res) => {
	res.json({"message": "update comming soon"});
};

/** BEER DELETE **/
/* Delete the beer given in the url */
module.exports.delete = (req, res) => {
	DB.Beer.findById(req.params.id)
	.then(beer => {
		if (!beer) res.status(403).send('Beer not found!');
		console.log('Deleting a beer!');
		return beer.destroy();
	}).then(res.json({"message":"Beer deleted"}))
};
