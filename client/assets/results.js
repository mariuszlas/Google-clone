const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchTerm = urlParams.get('search');
const isLucky = urlParams.get('lucky');
const host = 'localhost';
const port = 5000;

function redirect(isLucky) {

    if (isLucky === true) {
        getLuckyData()
    } else {
        getData(searchTerm);
    }
}


async function getData(value) {

    let url = `http://${host}:${port}/${value}`;
    let response = await fetch(url);
    let data = await response.json();
    updateDOM(data);

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


redirect(isLucky);

//
// if(urlParams.get("lucky")) {
//     fetch(`http://localhost:5500/${searchTerm}`)
//     .then(resp => resp.json())
//     .then(resp => {
//     // const results = resp[0].results
//     console.log(resp);
//     document.createElement("SECTION")
// })} else {
//     fetch(`http://localhost:5500/${searchTerm}`)
//     .then(resp => resp.json())
//     .then(resp => {
//     const results = resp[0].results
//     console.log("results", results)
//     for (result of results) {
//         console.log(result)
//         //create a function to add to if statement
//     const section = document.createElement("section");
//     const header = document.createElement("h1");
//     const name = document.createTextNode(result.content.name);
//     const para = document.createTextNode(result.content.description);
//     document.getElementById("returnResults").appendChild(section);
//     section.appendChild(header).setAttribute();
//     section.appendChild(name);
//     section.appendChild(para);
//
// }
//
//
// })
// }
