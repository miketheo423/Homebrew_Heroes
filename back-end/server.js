
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./config/routes');

//CORS setup to allow other ports from this host

//Only needed if not on Heroku/prod
if(!process.env.DYNO) {
	app.use((req, res, next) => {
		res.header("Access-Control-Origin", "http://localhost:4200");
		res.header("Access-Control-Allow-Headers", "Origin X-Requested-Wtih, Content-Type, Accept");
		res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
		next();
	});
}

app.use(express.static(__dirname + '/dist'));

app.use(routes);

let port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});