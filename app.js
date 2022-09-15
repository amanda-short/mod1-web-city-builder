/* Imports */

/* Get DOM Elements */
const cityArticle = document.getElementById('city-article');
const cityInput = document.getElementById('city-input');
const climateSelect = document.getElementById('climate-select');
const architectureSelect = document.getElementById('architecture-select');
const attractionList = document.getElementById('attraction-list');
const attractionInput = document.getElementById('attraction-input');
const addButton = document.getElementById('add-button');
const cityName = document.getElementById('city-name');
const climateImage = document.getElementById('climate-image');
const architectureImage = document.getElementById('architecture-image');


/* State */
let city = {
    name: 'Somewhere',
    climate: 'forest',
    architecture: 'rustic',
    attractions: [],
};

/* Events */
cityInput.addEventListener('input', () => {
    city.name = cityInput.value;
    displayCity();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCity();
});

architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    displayCity();
});

addButton.addEventListener('click', () => {
    const attractions = attractionInput.value;
    city.attractions.push(attractions);
    displayAttractions();
    attractionInput.value = '';

});

function displayCity() {
    cityArticle.classList.value = city.theme;
    cityName.textContent = city.name;
    climateImage.src = 'assets/climate/' + city.climate + '.jpeg';
    architectureImage.src = 'assets/architecture/' + city.architecture + '.jpeg';

}

function displayAttractions() {
    attractionList.innerHTML = '';

    for (let attractions of city.attractions) {
        const li = document.createElement('li');
        li.textContent = attractions;
        attractionList.append(li); 
    }
}



/* Display Functions */
// function displayCity() {
//     cityArticle.classList.value = city.climate;
//     city
// }

// (don't forget to call any display functions you want to run on page load!)
