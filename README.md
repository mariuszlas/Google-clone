# Lap One Code Challenge

## Installation & usage
### Installation
* Clone or download the repo.
* Open the terminal and navigate to `google-clone` folder
* `cd` into the `server` folder and run `npm install` to install dependencies

### Usage
#### Server
* In the `server` folder run `npm test` to launch the test suite
* Run `npm coverage` to check the coverage
* Run `npm start` to launch the server

#### Client
* Open the `index.html` file in the `client` folder in your preferred browser.
* Try searching for one of the following terms: `musicians`, `painters` or, if you feel lucky, use the appropriate button to get a random result.

## Changelog
server/data.js server/controllers/routes.js
[x] Added data structure to data.js

server/data.js
[x] Added data to database.

client/results.html client/{search.html → lucky.html}  client/index.html client/assets/styles.css
[x] Updated Styles and HTML Files

server/test/api.spec.js
[x] Added tests for API endpoints

## Wins & Challenges
### Wins
* Implemented routing based on the search term which is passed on to the search functions.

### Challenges
* Realised limitations of using JavaScript arrays and objects as a database instead of an SQL database (in terms of searching and sorting data).

