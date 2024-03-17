const options = {weekday: "short"};
// const eventDate = new Date(Date.UTC(2024, 3, 11, 3, 0, 0)).toLocaleDateString("en-US", options);
const eventDate = new Date().toLocaleDateString("en-US", options);
let validDays = ["Mon", "Tue", "Wed"];
const popupContainer = document.querySelector('.popup-container');
const showPopup = document.querySelector('.show-popup');
if (validDays.includes(eventDate)){
    popupContainer.classList.add("active");
}
const closeBtn = document.querySelector('.close-btn');
closeBtn.onclick = () => {
    popupContainer.classList.remove("active");
}
// showPopup.onclick = () => {
//     popupContainer.classList.add("active");
// }