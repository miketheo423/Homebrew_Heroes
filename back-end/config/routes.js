const express = require('express');
const router = express.Router();
const path = require('path');

const beerController = require('../controllers/beer');


/////////////////////
/// Auth Routes /////
/////////////////////





/////////////////////
/// User Routes /////
/////////////////////







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