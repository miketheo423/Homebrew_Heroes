const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
let User = require('../models/user');
const bCrypt = require('brcrypt-nodejs');

module.exports = function(passport) {

	passport.serializUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		User.findbyId(id, (err, user) => {
			done(err, user);
		});
	});


	/////////////////////
	// Google Strategy //
	/////////////////////

	passport.use(new GoogleStrategy ({
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: process.env.BASE_URL + '/auth/google/callback',
		passReqToCallback: true
	}, (request, profile, done) => {
		User.findOne({where: {'google.id': profile.id}}, (err, user) => {
			if (err) return done(err);

			if (user) {
				console.log('logging in user');
			} else {
				console.log('creating new user');
				User.create({
					email: profile.email,
					google: {id: profile.id}
				}, (err, user) => {
					if (err) return console.log(err);
					console.log('new user created');
					return done(null, user);
				});
			}
		});
	}));


	///////////////////////
	// Facebook Strategy //
	///////////////////////

	passport.use(new FacebookStrategy ({
		clientID: process.env.FACEBOOK_CLIENT_ID,
		clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		callbackURL: process.env.BASE_URL + '/auth/facebook/callback',
		passReqToCallback: true
	}, (request, profile, done) => {
		User.findOne({where: {'facebook.id': profile.id}}, (err, user) => {
			if (err) return done(err);

			if (user) {
				console.log('logging in user');
			} else {
				console.log('creating new user');
				User.create({
					email: profile.emails[0].value,
					facebook: {id: profile.id}
				}, (err, user) => {
					if (err) return console.log(err);
					console.log('new user created');
					return done(null, user);
				});
			}
		});
	}));

	////////////////////
	// Local Strategy //
	////////////////////


	// Local signup
	passport.use('local-signup', new LocalStrategy (
			{
				usernameField : 'username',
				emailField : 'email',
				passwordField : 'password',
				passReqToCallback : true
			}, (req, username, email, password, done) => {
				let generateHash = (password) => {
					return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
				};
				User.findOne({ where: { email: email }}).then((user) => {
					if (user) {
						return done(null, false);
					} else {
						let userPassword = generateHash(password);
						let data = {
							username: username,
							email: email,
							password: userPassword
						};
				User.create(data).then((newUser, create) => {
					if (!newUser) {
						return done(null, false);
					}
					if (newUser) {
						return done(null, newUser);
					}
				});
					}
				});
			}
	));

	// Local login
	passport.use('local-login', new LocalStrategy (
			{
				usernameField: 'username',
				emailField: 'email',
				passwordField: 'password',
				passReqToCallback: true
			}, (req, username, email, password, done) => {
				let User = user;
				let isValidPassword = (userpass, password) => {
					return bCrypt.compareSync(password, userpass);
				};
			User.findOne({ where: { email: email}}).then((user) => {
				if (!user) {
					return done(null, false);
				}
				if (!isValidPassword(user.password, password)) {
					return done(null, false);
				}
				let userinfo = user.get();
				return done(null, userinfo);
			}).catch((err) => {
				console.log("Error: ", err);
				return done(null, false);
			});
		}
));
};