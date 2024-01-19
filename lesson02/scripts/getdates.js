const today1 = document.querySelector('#curyear');
const today2 = document.querySelector('#lastModified');
const options1 = {
    year: "numeric"
};
const options2 = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};
const copyDate = new Date().toLocaleDateString("en-US", options1)
today1.innerHTML = `&copy; ${copyDate} - Michael R. Bourdet - New York, United States`;
const dateLastModified = document.lastModified;
today2.innerHTML = `Last modified on ${dateLastModified}`