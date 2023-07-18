let userName = prompt("Name");
let userSurname = prompt("Surname");
let userColor = prompt("Favourite Color");

let sumInformations = userName + userSurname + userColor;

document.getElementById("userPreferences").innerHTML = sumInformations;
