const tempObject = document.querySelector(".temp");
const humidityObject = document.querySelector(".humidity");
const windObject = document.querySelector(".wind");
const cityObject = document.querySelector(".city");
const weatherIcon = document.querySelector('.weather-icon');
const conditions = document.querySelector('.conditions');
const apiKey = "0dc2835c1f834a1874a6f13e7e20ccc9";
const lat = "40.6643";
const lon = "-73.7085";
const units = "imperial";
// const urlBase = `https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=imperial`;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
// console.log(url);
const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
// console.log(url2);
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
    
    const temp = data.main.temp;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', conditions);
    const humidity = data.main.humidity;
    const wSpeed = data.wind.speed;
    conditions.textContent = `${titleCase(data.weather[0].description)}`;
    const windchillObject = document.querySelector(".windchill");
    const wChill = Number(windchillObject.textContent);
    const wChillCol = document.getElementById("wchill");

if (data.main.temp <= 50 && data.wind.speed >= 3){
    let windChillcalc= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
    let windChill = Math.round(windChillcalc);
    // console.log(windChill);
    cityObject.textContent = data.name;
    humidityObject.textContent = humidity;
    tempObject.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    windObject.textContent = wSpeed;
    windchillObject.textContent = windChill;
} else {
    humidityObject.textContent = humidity;
    tempObject.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    windObject.textContent = wSpeed;
    console.log(wChillCol)
    windchillObject.textContent = "n/a";
}
}

async function foreFetch() {
    try {
        const foreResponse = await fetch(url2);
        if (foreResponse.ok) {
            const foreData = await foreResponse.json();
            //console.log(foreData);
            displayForecast(foreData);
        } else {
            throw Error(await foreResponse.txt());
        }
    }   catch (error) {
        console.log(error);
    }
}
foreFetch();

function displayForecast(foreData) { 
    const dailyTemperatures = {};
    foreData.list.forEach((item) => {
        const date = new Date((item.dt-14000) * 1000);
        const dateString = date.toDateString();
        const timeString = date.getHours();
        const temperature = item.main.temp;
        console.log(`${dateString} ${timeString}:00 EDT; Temp - ${temperature}°F`);
        
        let forecast = document.querySelector(`.forecast`);
        const p = document.createElement("p");
        p.textContent = `${dateString} ${timeString}:00 EDT; Temp: ${temperature}°F`;
        forecast.appendChild(p);
     });

}

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
