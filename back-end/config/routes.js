const express = require('express');
const router = express.Router();
const path = require('path');
const controllers = require('../controllers');


/////////////////////
/// Auth Routes /////
/////////////////////


////// Google Routes ///////

router.route('/auth/google')
				.get(controllers.auth.googleLogin);

router.route('/auth/google/callback')
				.get(controllers.auth.googleCallback);


////// Facebook Routes ///////

router.route('/auth/facebook')
					.get(controllers.auth.facebookLogin);

router.route('/auth/facebook/callback')
				.get(controllers.auth.facebookCallback);


//////// Local User Routes ///////
router.route('/auth/login')
				.post(controllers.auth.postLogin);

router.route('/auth/signup')
				 .post(controllers.auth.postSignup);


// Logout Route
router.route('/auth/logout')
				.get(controllers.auth/getLogout);


/////////////////////
/// User Routes /////
/////////////////////







/////////////////////
/// Beer Routes /////
/////////////////////





// Serving up front end 

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

module.exports = router;