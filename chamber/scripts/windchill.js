const tempObject = document.getElementsByClassName("temp");
const temp = Number("26"); // Type in the temperature
const humidityObject = document.getElementsByClassName("humidity");
const humidity = Number("72"); // Type in the humidity
const windObject = document.getElementsByClassName("wind");
const wSpeed = Number("11"); // Type in the wind speed
const windchillObject = document.getElementsByClassName("windchill");
const wChill = Number(windchillObject[0].textContent);
const wChillCol = document.getElementById("wchill");

if (temp <= 50 && wSpeed >= 3){
    let windChillcalc= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
    let windChill = Math.round(windChillcalc);
    // console.log(windChill);
    humidityObject[0].textContent = humidity;
    tempObject[0].textContent = temp;
    windObject[0].textContent = wSpeed;
    windchillObject[0].textContent = windChill;
} else {
    humidityObject[0].textContent = humidity;
    tempObject[0].textContent = temp;
    windObject[0].textContent = wSpeed;
    console.log(wChillCol)
    windchillObject[0].textContent = "n/a";
}
