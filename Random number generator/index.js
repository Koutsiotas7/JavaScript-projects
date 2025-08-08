// let randomNum = Math.floor(Math.random() * 6); number between 0-5

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNumber;

myButton.onclick = function(){
    randomNumber = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNumber;
}