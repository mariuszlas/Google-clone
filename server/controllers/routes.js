const express = require('express');
const router = express.Router();
const data = require('../data.js');

// route for retrieving all search results
router.get('/', (req, res) => {
    res.status(200).send(data[0].content);
});


// route for retrieving a single search result
router.get('/:index', (req, res) => {

    let idx = parseInt(req.params.index);
    if (idx >= 1 && idx <= 10) {
        res.status(200).send(data[idx-1].content.b);
    } else {
        res.status(404).send("Page not found. Incorrect index.");
    }
});


module.exports = router;
