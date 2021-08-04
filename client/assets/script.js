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

// function searchResult(contentArr, id) {
//     let resultsArr = contentArr[0]   // obj not arr
//     let obj = resultsArr.results;   //actual arr
//     return obj.filter(item => item.resNo == id)
// }
