const currentTemp = document.querySelector('.temp');
const weatherIcon = document.querySelector('.weather-icon');
//const captionDesc = document.querySelector('figcaption');
const apiKey = "0dc2835c1f834a1874a6f13e7e20ccc9";
const latlong = [40.6643, -73.7085]; // Valley Stream NY
const lat = latlong[0];
const lon = latlong[1];
const units = "imperial";
const urlBase = `https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=imperial`;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
console.log(url);

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.txt());
        }
    }   catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    currentTemp.textContent = `${Math.round(data.main.temp)}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    //captionDesc.textContent = `${desc}`;
}