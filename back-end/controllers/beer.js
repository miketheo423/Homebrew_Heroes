const DB = require('../models').models;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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

/** BEER PROFILE (SHOW) **/
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
	let userId = req.user.id;
	console.log(userId);
	let newBeer = req.body;
	newBeer.userId = req.user.id;
	DB.Beer.create(newBeer)
	.then(beer => {
		if (!beer) res.status(500).send('Beer could not be created');
		
		console.log('New Beer Added!');
		res.json(beer);
	});
};

/** BEER UPDATE **/
/* update beer by ID and return the updated */
module.exports.update = (req, res) => {
	DB.Beer.findById(req.params.id)
	.then(beer => {
		if(!beer) res.status(404).send('Beer not found');
		return beer.updateAttributes(req.body); /* update */
	}).then(beer => res.json(beer)); /* resond with updated beer */
};

/** BEER DELETE **/
/* Delete the beer given in the url */
module.exports.delete = (req, res) => {
	DB.Beer.findById(req.params.id)
	.then(beer => {
		if (!beer) res.status(404).send('Beer not found!');
		
		console.log('Deleting a beer!');
		return beer.destroy();
	}).then(res.json({"message":"Beer deleted"}));
};

/** SEARCH BEER **/
/* Finds beers to match the search bar parameters */
module.exports.index2 = (req, res) => {
	console.log(req.query.id);
	let style = req.query.id;
	DB.Beer.findAll({
		where: { style: style},
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


