require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./config/routes');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Sets up body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({ secret: 'Homebrew Heroes' })); 
app.use(passport.initialize());
app.use(passport.session()); 

//CORS setup to allow other ports from this host

//Only needed if not on Heroku/prod
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Credentials", 'true');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});

// Serve up front end
app.use(express.static(__dirname + '/dist'));

// Require passport
require('./config/passport')(passport);

// Tracks the current user
app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	next();
});

// Use routes
app.use(routes);

// Start server
let port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});