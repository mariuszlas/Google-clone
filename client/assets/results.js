const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchTerm = urlParams.get('search');

if(urlParams.get("lucky")) {
    fetch(`http://localhost:5000/${searchTerm}/3`)
    .then(resp => resp.json())
    .then(resp => {   
    // const results = resp[0].results
    console.log(resp);
})} else {
    fetch(`http://localhost:5000/${searchTerm}`)
    .then(resp => resp.json())
    .then(resp => {
    const results = resp[0].results
    console.log("results", results)
    for (result of results) {
        console.log(result)
    }
})
}






