//console.log('hi');

const baseURL = 'https://api.spacexdata.com/v2/rockets';
const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

// eventListener
searchForm.addEventListener('submit', fetchSpace);
// fetch function
function fetchSpace(e) {
    e.preventDefault(); // will stop the refresh by our browser
    //console.log('clicked');
    fetch(baseURL) // starts the fetch process
        .then(results => {
            //console.log(results);
            return results.json(); //takes in a reponse (results), reads to completion and returns results as json
        })
        .then(json => {
            displayRockets(json);
        })
}
//display function
function displayRockets(data) {
    console.log('Display Rockets: ', data);

    let rockets = data.forEach(r => {
        console.log(r);
        let rocket = document.createElement('li');
        //rocket.innerText = r.name;
        rocket.innerText =`${r.name} costs ${r.cost_per_launch} to launch!`;
        spaceShips.appendChild(rocket);
    })
}