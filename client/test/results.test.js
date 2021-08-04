const fs = require('fs');        // 'fs' and 'path' modules import the HTML file into js file
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const results = require('../assets/results.js');

global.fetch = require('jest-fetch-mock');   // create mock of the 'fetch' function as a global variable

describe('main functionality', () => {

  beforeEach( () => {
    fetch.resetMocks();  //cear out all mocks before each test
   });

  it('makes a fetch to API', async () => {
    results.getData('musicians');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost:5000/musicians');
  })

})
