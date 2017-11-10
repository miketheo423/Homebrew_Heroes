const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const bCrypt = require('bcrypt-nodejs');
const DB = require('../models').models;
require('dotenv').config();

module.exports = function(passport) {

	passport.serializeUser((user, done) => {
		done(null, user);
	});

	// passport.deserializeUser((id, done) => {
	// 	console.log('deserializeUser');
	// 	DB.User.findById(id).then((user) => {
	// 		if(user) {
				
	// 			done(null, user.get());
	// 		} else {
	// 			done(user.errors, null);
	// 		}
	// 	});
	// });

	passport.deserializeUser((obj, done) => {
		done(null, obj);
	});

	/////////////////////
	// Google Strategy //
	/////////////////////

	passport.use(new GoogleStrategy ({
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: process.env.BASE_URL + '/auth/google/callback',
		passReqToCallback: true
	}, (request, at, rt, profile, done) => {
		DB.User.find({where: {'googleId': profile.id}}).then((user, err) => {
			if (err)  return done(err);

			if (user) {
				console.log('logging in user');
				
				return done(null, user);
			} else {
				console.log('creating new user');
				DB.User.create({
					username: 'brewer' + Math.floor(Math.random()*100000),
					email: profile.email,
					googleId: profile.id
				}).then((user) => {
					console.log('new user created');
					return done(null, user);
				});
			}
		});
	}));


	///////////////////////
	// Facebook Strategy //
	// ///////////////////////

	passport.use(new FacebookStrategy ({
		clientID: process.env.FACEBOOK_CLIENT_ID,
		clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		callbackURL: process.env.BASE_URL + '/auth/facebook/callback',
	}, (at, rt, profile, done) => {
		console.log(profile);
		DB.User.find({where: {'facebookId': profile.id}}).then((user, err) => {
			if (err) return done(err);
			if (user) {
				console.log('logging in user');
				return done(null, user);
			} else {
				console.log('creating new user');
				DB.User.create({
					username: 'brewer' + Math.floor(Math.random()*100000),
					facebookId: profile.id
				}).then((user) => {
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
				usernameField : 'email',
				passwordField : 'password',
				passReqToCallback : true
			}, (req, email, password, done) => {
				let generateHash = (password) => {
					return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
				};
				DB.User.findOne({ where: { email: email }}).then((user) => {
					if (user) {
						return done(null, false);
					} else {
						let userPassword = generateHash(password);
						let data = {
							username: 'brewer' + Math.floor(Math.random()*100000),
							email: email,
							password: userPassword
						};
				DB.User.create(data).then((newUser, create) => {
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
				usernameField: 'email',
				passwordField: 'password',
				passReqToCallback: true
			}, (req, email, password, done) => {
				// let User = user;
				let isValidPassword = (userpass, password) => {
					return bCrypt.compareSync(password, userpass);
				};
			DB.User.findOne({ where: { email: email}}).then((user) => {
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