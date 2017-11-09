const request = require('request');
const expect = require('chai').expect;

describe('Beer API', () => {

	/* show route */
	describe('show route', () => {
		let response;
		let responseBody;
		before((done) => {
			request.get('http://localhost:3000/api/beers/1', (err, res, body) => {
				if (err) console.log(err);
				response = res;
				responseBody = JSON.parse(body);
				done();
			});
			
		});
		it('should have a satus code of 200', () => {
			expect(response.statusCode).to.equal(200);
		});
		it('should return an object', () => {
			expect(responseBody).to.be.an('object');
		});
		it('should have a name', () => {
			expect(responseBody).to.have.property('name');
		});
		it('should have a user', () => {
			expect(responseBody.user).to.be.an('object');
		});
	});

	/* index route */
	describe('index route', () => {
		let response;
		let responseBody;
		before((done) => {
			request.get('http://localhost:3000/api/beers', (err, res, body) => {
				if (err) console.log(err);
				response = res;
				responseBody = JSON.parse(body);
				done();
			});
			
		});
		it('should have a satus code of 200', () => {
			expect(response.statusCode).to.equal(200);
		});
		it('should return an object', () => {
			expect(responseBody).to.be.an('object');
		});
		it('should return multiple beers');
	});

	/* create and delete route */
	describe('create and delete routes', () => {
		let createResponse;
		let createResponseBody;
		let deleteResponse;
		let deleteResponseBody;
		let beerId;
		let newBeer = {
			photoUrl: 'http://www.iconarchive.com/download/i97927/flat-icons.com/flat/Beer.ico', 
			name: 'Test Beer',
			style: 'Stout',
			abv: '7.2',
			ibus: '24',
			description: 'test',
			recipe: 'test',
			userId: 1
		};

		before((done) => {
			/* add a beer */
			request({
				url: 'http://localhost:3000/api/beers',
				method: 'post',
				json: newBeer
				}, (err, res, body) => {
				if (err) console.log(err);
				createResponse = res;
				createResponseBody = body;
				beerId = createResponseBody.id;
				console.log('ID: ' + beerId);
				/* delete the beer */
				request.delete('http://localhost:3000/api/beers/' + beerId, (err, res, body) => {
					deleteResponse = res;
					deleteResponseBody = JSON.parse(body);
					done();
				});
			});
			
		});

		describe('create beer', () => {
			it('should have a satus code of 200', () => {
				expect(createResponse.statusCode).to.equal(200);
			});
			it('should return an object', () => {
				expect(createResponseBody).to.be.an('object');
			});
			it('should return the created beer with the correct name', () => {
				expect(createResponseBody.name).to.equal(newBeer.name);
			});
			it('should have a userId', () => {
				expect(createResponseBody).to.have.property('userId');
			});
			it('should have an id', () => {
				expect(createResponseBody).to.have.property('id');
			});
		});

		describe('delete beer', () => {
			it('should have a satus code of 200', () => {
				expect(deleteResponse.statusCode).to.equal(200);
			});
			it('should return a message confirming the beer was deleted', () => {
				expect(deleteResponseBody.message).to.equal('Beer deleted');
			});
		});
	});
});