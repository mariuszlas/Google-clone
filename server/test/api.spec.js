const request = require('supertest');
const server = require('../server.js');
const data = require('../data.js');

describe('API server', () => {

    beforeAll( () => {
        // start the server and store it in the api variable
        api = server.listen(4000, () =>
            console.log('Test server running on port 4000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('Stopping test server');
        api.close(done);
    });

    it('responds to GET / with status code 200 and a correct message', (done) => {
        request(api).get('/').expect(200).expect("Welcome to the Google Clone", done);
    });

    it('responds to GET /musicians with status 200', (done) => {
        request(api).get('/musicians').expect(200, done);
    });

    it('responds to non existing paths with 404', (done) => {
        request(api).get('/not').expect(404, done);
    });

    it('responds to non existing id with 404', (done) => {
        request(api).get('/musicians/18').expect(404, done);
    });

    it('responds to invalid method request with 405', (done) => {
        request(api).post('/').expect(405, done);
    });
});
