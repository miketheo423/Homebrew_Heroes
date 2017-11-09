const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
let User = require('../models/user');

passport.serializUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findbyId(id, (err, user) => {
		done(err, user);
	});
});

// Google Strategy

new GoogleStrategy({
	clientID
});



