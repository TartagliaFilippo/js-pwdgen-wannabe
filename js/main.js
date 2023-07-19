const userName = prompt("Name");
const userSurname = prompt("Surname");
const userColor = prompt("Favourite Color");

const sumInformations = userName + userSurname + userColor + "21";

document.getElementById("userPreferences").innerHTML = sumInformations;
