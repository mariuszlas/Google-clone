// on home page, when you click search load up results page with the string as a query params
// example results.html?search=musicians
//
// on page load send the fetch to the api to populate the search page based on the query param
// 2)

// add extra query param for feeling lucky so result.html?search=musicians&lucky=true

// when you click search button / enter the results page loads with query params
// on the results page it loads up results from the api and displays them
// when you click feeling lucky results page loads and returns one results





function handleSubmit(e) {
    let searchTerm = document.getElementById('searchbar').value;
    e.preventDefault();
    window.location = `./results.html?search=${searchTerm}`;
}
const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function feelingLucky() {
    let searchTerm = document.getElementById('searchbar').value;
    window.location = `./results.html?search=${searchTerm}&lucky=true`;
}

let host = 'localhost';
let port = 5000;


function initBindings() {

    let luckyBbtn = document.querySelector("#lucky-btn")
    let form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault();
        let value = e.target.search.value;
        // console.log(e.target.search.value);
        getData(value);
    })

    luckyBbtn.addEventListener('click', (e) => {
        e.preventDefault();
        getLuckyData();
    })
}


async function getData(value) {

    let url = `http://${host}:${port}/${value}`;
    let response = await fetch(url);
    let data = await response.json();
    updateDOM(data);

    window.location.href = './results.html'
}


function updateDOM(data) {
    // create new HTML elements and add data received from server

    let dataArr = data[0].results;
    let body = document.querySelector('body');

    dataArr.forEach(obj => {
        let section = document.createElement('section');
        let link = document.createElement('a');
        let name = document.createElement('h3');
        let des = document.createElement('p');
        link.setAttribute('href', obj.content.link);
        name.innerText = obj.content.name;
        des.innerText = obj.content.description;
        section.appendChild(link);
        section.appendChild(name);
        section.appendChild(des);
        body.appendChild(section);
    })
}


function getLuckyData() {
    console.log('lucky data')
}



initBindings();
