function initBindings() {

    let luckyBbtn = document.querySelector("#lucky-btn")
    let form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault();
        let value = e.target.search.value;
        //when you click search button / enter the results page loads with query params
        window.location = `./results.html?search=${value}&lucky=false`;   // add extra query param for feeling lucky so result.html?search=musicians&lucky=true
    })

    luckyBbtn.addEventListener('click', (e) => {
        e.preventDefault();
        // when you click feeling lucky results page loads and returns one results
        window.location = `./results.html?search=${value}&lucky=true`;
    })
}


initBindings();
