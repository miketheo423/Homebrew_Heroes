module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("user", {
		username: Sequelize.STRING, 
		email: Sequelize.STRING,
		firstName: Sequelize.STRING,
		lastName: Sequelize.STRING,
		zipcode: Sequelize.STRING,
		photoUrl: Sequelize.STRING,
		password: Sequelize.STRING,
		facebookId: Sequelize.STRING,
		googleId: Sequelize.STRING,
	});
	return model;
};