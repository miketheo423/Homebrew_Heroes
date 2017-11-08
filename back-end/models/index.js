// Connect
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

const User = sequelize.import('./user');
const Beer = sequelize.import('./beer');

Beer.belongsTo(User);
User.hasMany(Beer);

module.exports.models = {
	User: User,
	Beer: Beer
};
