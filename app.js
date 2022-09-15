/* Imports */

/* Get DOM Elements */
const cityArticle = document.getElementById('city-article');
const cityInput = document.getElementById('city-input');
const climateSelect = document.getElementById('climate-select');
const architectureSelect = document.getElementById('architecture-select');
const attractionList = document.getElementById('attraction-list');
const attractionInput = document.getElementById('attraction-input');
const addButton = document.getElementById('add-button')


/* State */
let city = {
    name: 'Whoville',
    climate: 'forest',
    architecture: 'rustic',
    attraction: [],
};

/* Events */
cityInput.addEventListener('input', () => {
    city.name = cityInput.value;
    // displayCity();
})

/* Display Functions */
function displayCity() {
    cityArticle.classList.value = city.climate;
    city
}

// (don't forget to call any display functions you want to run on page load!)
