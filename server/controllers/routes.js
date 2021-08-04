const express = require('express');
const router = express.Router();
const data = require('../data.js');


router.get('/', (req, res) => {
    res.status(200).send("Welcome to the Google Clone");
});

// route for retrieving all search results for a given search term
router.get('/:query', (req, res) => {
    let query = req.params.query;
    let termArray = searchTerm(query);
    sendResponse(res, termArray);
});

//route for retrieving a single search result for given search term
router.get('/:query/:id', (req, res) => {
    let query = req.params.query;
    let id = parseInt(req.params.id);
    let searchArray = searchResult(searchTerm(query), id);
    sendResponse(res, searchArray);
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

function searchResult(obj, id) {
    // search for a single result (based on its number) in an array
    let contentArr = obj[0].results;
    return contentArr.filter(item => item.resNo == id)
}


module.exports = router;
