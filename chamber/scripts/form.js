//Range value
const rangevalue = document.getElementById("rangevalue");
const membership = document.getElementById("level");

// RANGE event listener
membership.addEventListener('change', displayMembershipValue);
membership.addEventListener('input', displayMembershipValue);

function displayMembershipValue() {
    if (membership.value == "1") {
        rangevalue.innerHTML = "NP Membership (free)";
    } else if (membership.value == "2") {
        rangevalue.innerHTML = "Bronze Membership";
    } else if (membership.value == "3") {
        rangevalue.innerHTML = "Silver Membership";
    } else {
        rangevalue.innerHTML = "Gold Membership";
    }
    
}
// add dateTime to hidden field
const dateTimeToday = document.querySelector('#curDateTime');
dateTimeToday.value = new Date().getTime();
// console.log(dateTimeToday.value);