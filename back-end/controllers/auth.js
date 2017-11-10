const passport = require('passport');

//////// GOOGLE CONTROLLERS ////////

const googleLogin = (req, res, next) => {

	let loginStrategy = passport.authenticate('google', {
			scope: [
				'profile',
				'email'
			]
	});
	return loginStrategy(req, res, next);
};

const googleCallback = (req, res, next) => {
	let authCallbackStrategy = passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/?ERROR=FAM'
	});
	return authCallbackStrategy(req, res, next);
};

///////// FACEBOOK CONTROLLERS ////////

const facebookLogin = (req, res, next) => {
	let loginStrategy = passport.authenticate('facebook', {
		scope: [
			'profile',
			'email'
		]
	});
	return loginStrategy(req, res, next);
};

const facebookCallback = (req, res, next) => {
		let authCallbackStrategy = passport.authenticate('facebook', {
		successRedirect: '/',
		failureRedirect: '/welcome'
	});
	return authCallbackStrategy(req, res, next);
};


//////// LOCAL USER CONTROLLERS /////////

// POST /auth/signup 
const postSignup = (req, res, next) => {
	let signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/welcome'
	});
	return signupStrategy(request, response, next);
};

// POST /auth/login 
const postLogin = (req, res, next) => {
	let loginStrategy = passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/welcome'
	});
};

// GET /auth/logout
const getLogout = (req, res) => {
	console.log(req.user);
	req.logout();
	res.redirect('/');
};

module.exports = {
	googleLogin,
	googleCallback,
	facebookLogin,
	facebookCallback,
	postSignup,
	postLogin,
	getLogout
};