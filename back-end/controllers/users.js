const passport = require('passport');
const session = require('express-session');


module.exports = {
	postSignup: postSignup,
	postLogin: postLogin,
	getLogout: getLogout
};