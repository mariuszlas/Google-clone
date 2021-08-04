const express = require('express');
const app = express();
const musicians = require('./data.js');
const routes = require('./controllers/routes.js')

// ensure corect CORS headers
const cors = require('cors');
app.use(cors());

app.use('/', routes);

app.post('/', (req, res) => {
    res.status(405).send('Icorrect method. POST requests are not supported.');
});


module.exports = app;
