const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchTerm = urlParams.get('search');
const isLucky = urlParams.get('lucky');
const host = 'localhost';
const port = 5000;

function redirect(isLucky) {
    isLucky === 'true' ? getLuckyData(): getData(searchTerm);
}

async function getData(value) {
    // retrieve data from server based on search result
    try {
        let response = await fetch(`http://${host}:${port}/${value}`);
        let data = await response.json();
        let dataArr = data[0].results;
        dataArr.forEach(obj => createElement(obj));
    } catch (err) {
        console.log(err);
    }
}

function createElement(obj) {
    // create HTML elements do display data received from Server
    let results = document.querySelector('#returnResults') ;
    let section = document.createElement('section');
    let link = document.createElement('a');
    let name = document.createElement('h3');
    let des = document.createElement('p');
    link.setAttribute('href', '#');
    name.innerText = obj.content.name;
    des.innerText = obj.content.description;
    link.innerText = obj.content.link;
    section.appendChild(link);
    section.appendChild(name);
    section.appendChild(des);
    results.appendChild(section);
}

async function getLuckyData() {
    // retrieve data for only one random search result
    try {
        let response = await fetch(`http://${host}:${port}/random`);
        let data = await response.json();
        console.log(data);
        createElement(data);
    } catch (err) {
        console.log(err);
    }
}

redirect(isLucky);

module.exports = { redirect, getData, getLuckyData, createElement }
