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
		successRedirect: process.env.FE_BASE_URL,
		failureRedirect: process.env.FE_BASE_URL + '/welcome'
	});
	return authCallbackStrategy(req, res, next);
};

///////// FACEBOOK CONTROLLERS ////////

const facebookLogin = (req, res, next) => {
	console.log('login route hit');
	let loginStrategy = passport.authenticate('facebook', {
		scope: 'email'
	});
	return loginStrategy(req, res, next);
};

const facebookCallback = (req, res, next) => {
	console.log('callback route hit');
		let authCallbackStrategy = passport.authenticate('facebook', {
		successRedirect: process.env.FE_BASE_URL,
		failureRedirect: process.env.FE_BASE_URL + '/welcome'
	});
	return authCallbackStrategy(req, res, next);
};


//////// LOCAL USER CONTROLLERS /////////

// POST /auth/signup 
// const postSignup = (req, res, next) => {
// 	let signupStrategy = passport.authenticate('local-signup', {
// 		successRedirect: process.env.FE_BASE_URL,
// 		failureRedirect: process.env.FE_BASE_URL + '/welcome'
// 	});
// 	return signupStrategy(req, res, next);
// };


// POST /auth/signup 
const postSignup = (req, res, next) => {
	let signupStrategy = passport.authenticate('local-signup', (err, newUser) => {
		if (err) { return next(err); }
		if (!newUser) { return res.json( {message: 'User already exists'}); }
		req.logIn(newUser, (err) => {
			if (err) {return next(err);}
			return res.redirect(process.env.FE_BASE_URL);
		});
	});
	return signupStrategy(req, res, next);
};

// POST /auth/login 
const postLogin = (req, res, next) => {
	let loginStrategy = passport.authenticate('local-login', {
		successRedirect: process.env.FE_BASE_URL,
		failureRedirect: process.env.FE_BASE_URL + '/welcome'
	});
	return loginStrategy(req, res, next);
};

// GET /auth/logout
const getLogout = (req, res) => {
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