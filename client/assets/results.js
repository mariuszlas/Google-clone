const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchTerm = urlParams.get('search');

if(urlParams.get("lucky")) {
    fetch(`http://localhost:5500/${searchTerm}/3`)
    .then(resp => resp.json())
    .then(resp => {   
    // const results = resp[0].results
    console.log(resp);
    document.createElement("SECTION")
})} else {
    fetch(`http://localhost:5500/${searchTerm}`)
    .then(resp => resp.json())
    .then(resp => {
    const results = resp[0].results
    console.log("results", results)
    for (result of results) {
        console.log(result)
        //create a function to add to if statement
    const section = document.createElement("section");
    const header = document.createElement("h1");                       
    const name = document.createTextNode(result.content.name);
    const para = document.createTextNode(result.content.description);
    document.getElementById("returnResults").appendChild(section); 
    section.appendChild(header).setAttribute();   
    section.appendChild(name);
    section.appendChild(para); 

}

    
})
}









