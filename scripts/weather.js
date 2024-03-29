// Set up variables for temp. icon, and description
const currentTemp = document.querySelector('.temp');
const weatherIcon = document.querySelector('.weather-icon');
const desc = document.querySelector('.desc');

// set up API variables and url
const apiKey = "0dc2835c1f834a1874a6f13e7e20ccc9";
const latlong = [40.6643, -73.7085]; // Valley Stream NY
const lat = latlong[0];
const lon = latlong[1];
const units = "imperial"; //(default = kelvin) Fahrenheit=imperial, Celsius=metric
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// params after ? lat=lattitude lon=longitude appid=apiKey units=imperial separate with & character
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
console.log(url);

// Fetch weather data from openweathermao.org

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
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    desc.textContent = ` - ${titleCase(data.weather[0].description)}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    //captionDesc.textContent = `${desc}`;
}

 
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}