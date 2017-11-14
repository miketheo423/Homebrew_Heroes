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
	res.json({'message': 'Error, user not signed in'});
}

router.route('/auth/currentUser')
				.get(authenticatedUser, userControllers.getInfo);

/* User Index - For user search */
router.get('/api/users', userControllers.index);

/* User Show - For user profile pages */ //TODO: change ID to username once unique usernames are enforced
router.get('/api/users/:id', userControllers.show);

/* User Edit - User can update their profile info */
router.put('/api/users/:id', authenticatedUser, userControllers.update);


/////////////////////
/// Beer Routes /////
/////////////////////

/* beer feed */
router.get('/api/beers', beerController.index); // TODO: pages for infinite scroll/lazy loading

/* create a beer */
router.post('/api/beers', authenticatedUser, beerController.create);

router.route('/api/beers/:id')
	/* beer profile view */
	.get(beerController.show)
	/* edit a beer */
	.put(authenticatedUser, beerController.update)
	/* delete a beer */
	.delete(authenticatedUser, beerController.delete);

/* search beer */
router.get('/api/searchBeer', beerController.index2);


// Serving up front end 

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

module.exports = router;