const express = require('express');
const router = express.Router();
const data = require('../data.js');


router.get('/', (req, res) => {
    res.status(200).send("Welcome to the Google Clone");
})

// route for retrieving all search results
router.get('/:query', (req, res) => {
    let query = req.params.query;
    console.log(query);
    res.status(200).send(searchTerm(query));
});

router.get('/:query/:id', (req, res) => {
    let query = req.params.query;
    let id = parseInt(req.params.id);
    let term = searchTerm(query);
    res.status(200).send(searchResult(term, id));
});

function searchTerm(query) {
    query.toLowerCase();
    return data.filter(item => item.id === query);
}

function searchResult(contentArr, id) {
    let resultsArr = contentArr[0]   // obj not arr
    let obj = resultsArr.results;   //actual arr
    return obj.filter(item => item.resNo == id)
}


module.exports = router;
