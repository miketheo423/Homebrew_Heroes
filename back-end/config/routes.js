const express = require('express');
const router = express.Router();
const path = require('path');
const authControllers = require('../controllers/auth');
const userControllers = require('../controllers/users');

const beerController = require('../controllers/beer');


/////////////////////
/// Auth Routes /////
/////////////////////


////// Google Routes ///////

router.route('/auth/google')
				.get(authControllers.googleLogin);

router.route('/auth/google/callback')
				.get(authControllers.googleCallback);


////// Facebook Routes ///////

router.route('/auth/facebook')
					.get(authControllers.facebookLogin);

router.route('/auth/facebook/callback')
				.get(authControllers.facebookCallback);


//////// Local User Routes ///////
router.route('/auth/login')
				.post(authControllers.postLogin);

router.route('/auth/signup')
				 .post(authControllers.postSignup);


// Logout Route
router.route('/auth/logout')
				.get(authControllers.getLogout);


/////////////////////
/// User Routes /////
/////////////////////

function authenticatedUser(req, res, next) {
	// If user is authenticated then continue execution
	if (req.isAuthenticated()) return next();
	// Otherwise direct request back to the homepage
	res.send('Error, user not signed in');
}

router.route('/auth/currentUser')
				.get(authenticatedUser, userControllers.getInfo);




/////////////////////
/// Beer Routes /////
/////////////////////

/* beer feed */
router.get('/api/beers', beerController.index); // TODO: pages for infinite scroll/lazy loading

/* create a beer */
router.post('/api/beers', beerController.create);

/* beer profile view */
router.get('/api/beers/:id', beerController.show);

/* edit a beer */
router.put('/api/beers/:id', beerController.update);

/* delete a beer */
router.delete('/api/beers/:id', beerController.delete);


// Serving up front end 

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

module.exports = router;