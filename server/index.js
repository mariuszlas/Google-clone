const app = require('./server');

const host = 'localhost';
const port = 3000;

// start up the server
app.listen(port, () => console.log(`Server is listening on http://${host}:${port}/`));
