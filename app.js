const userName = prompt("Insert here your NAME...");

//console.log(userName)

const userSurname = prompt("Insert here your SURNAME...");

//console.log(userSurname)

const userColor = prompt("Insert here you favorite COLOR...");

//console.log(userColor)

const userPass = (userName) + (userSurname) + (userColor) + "21";

//console.log(userPass)

document.getElementById("password").innerHTML += (userPass);