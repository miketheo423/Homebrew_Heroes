module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("beer", {
		photoUrl: Sequelize.STRING, 
		name: Sequelize.STRING,
		style: Sequelize.STRING,
		abv: Sequelize.STRING,
		ibus: Sequelize.STRING,
		description: Sequelize.TEXT,
		recipe: Sequelize.TEXT,
	});
	return model;
};