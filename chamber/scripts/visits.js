// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;

document.addEventListener("DOMContentLoaded", function() {
    const lastVisit = localStorage.getItem("lastVisit");
    const currentDate = new Date().getTime();
    if (!lastVisit) {
        localStorage.setItem("lastVisit", currentDate);
        document.getElementById("message").innerText = "Welcome! Let us know if you have any questions.";
    } else {
        let timeDifference = currentDate - lastVisit;
        let daysDifference = Math.floor(timeDifference / msToDays);
        if (daysDifference < 1) {
            document.getElementById("message").innerText = "Back so soon! Awesome!";
        } else {
            var message = daysDifference === 1 ? "day" : "days";
            document.getElementById("message").innerText = "You last visited " + daysDifference + " " + message + " ago.";
        }
        localStorage.setItem("lastVisit", currentDate);
    }
});