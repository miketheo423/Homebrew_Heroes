module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("user", {
		username: Sequelize.STRING, 
		email: Sequelize.STRING,
		firstName: Sequelize.STRING,
		lastName: Sequelize.STRING,
		zipcode: Sequelize.STRING,
		photoUrl: Sequelize.STRING
	});
	return model;
};