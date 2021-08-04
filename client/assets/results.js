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

    try {
        let response = await fetch(`http://${host}:${port}/${value}`);
        let data = await response.json();
        let dataArr = data[0].results;
        dataArr.forEach(obj => createElement(obj));
    } catch (err) {
        console.log(err);
        handleError();
    }
}

function createElement(obj) {

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

    let termIdx = Math.floor(Math.random() * (2 - 1) + 1);
    let terms = ['musicians', 'painters']
    let term = terms[termIdx-1];
    let search = terms[term];
    let resIdx = Math.floor(Math.random() * (10 - 1) + 1);

    try {
        let response = await fetch(`http://${host}:${port}/${term}/${resIdx}`);
        let data = await response.json();
        createElement(data[0]);
    } catch (err) {
        console.log(err);
        handleError();
    }
}

redirect(isLucky);
