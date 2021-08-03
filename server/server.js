const express = require('express');
const app = express();
const musicians = require('./data.js');
const routes = require('./controllers/routes.js')

// ensure corect CORS headers
const cors = require('cors');
app.use(cors());

app.use('/', routes);

module.exports = app;
