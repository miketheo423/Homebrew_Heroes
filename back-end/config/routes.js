const express = require('express');
const router = express.Router();
const path = require('path');


/////////////////////
/// Auth Routes /////
/////////////////////





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