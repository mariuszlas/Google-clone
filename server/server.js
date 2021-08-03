const express = require('express');
const app = express();
const musicians = require('./data.js');

// ensure corect CORS headers
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Google Clone');
})

//const routes = require('./controllers/routes.js')

//app.use('/musicians', routes);

module.exports = app;
