// server is imported into here and started when this file is run
const app = require('./server');

const host = 'localhost';
const port = 5000;

// start up the server
app.listen(port, () => console.log(`Server is listening on http://${host}:${port}/`));
