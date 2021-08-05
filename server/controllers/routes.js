const express = require('express');
const router = express.Router();
const data = require('../data.js');

router.get('/', (req, res) => {
    res.status(200).send("Welcome to the Google Clone");
});

// route for retrieving all search results for a given search term
router.get('/:query', (req, res) => {
    let query = req.params.query;
    let termArray;
    query === 'random' ? termArray = randomTerm(data): termArray = searchTerm(query);
    sendResponse(res, termArray);
});

function sendResponse(res, searchResults) {
    // send different response based on search results
    if (searchResults.length !== 0) {
        res.status(200).send(searchResults);
    } else {
        res.status(404).send('Results not found!');
    }
}

function searchTerm(query) {
    // search for term in data base
    query.toLowerCase();
    return data.filter(item => item.id === query);
}

function randomTerm(data) {
    // find a random search result in the whole data base
    termNo = data.length;
    termIdx = Math.floor(Math.random() * (termNo - 1) + 1);
    term = data[termIdx];
    resLegth = term.results.length;
    resIdx = Math.floor(Math.random() * (resLegth - 1) + 1);
    result = term.results[resIdx];
    return result;
}

module.exports = router;
