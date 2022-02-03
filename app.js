let userName = prompt("Insert here your NAME...");

console.log(userName)

let userSurname = prompt("Insert here your SURNAME...");

console.log(userSurname)

let userColor = prompt("Insert here you favorite COLOR...");

console.log(userColor)

let userPass = (userName) + (userSurname) + (userColor) + "21";

console.log(userPass)

document.getElementById(password).innerHTML += (userPass);