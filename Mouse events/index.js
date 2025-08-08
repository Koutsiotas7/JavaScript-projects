/* eventListener: Listen for specific events to create interactive
   web pages.
   events: click, mouseover, mouseout
   .addEventListener(event, callback); */

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

function changeColor(event){
    event.target.style.backgroundColor = "red"; //target:Where we clicked. It is provided automatically.
    event.target.textContent = "Nooooo!";
}

myBox.addEventListener("click", changeColor);

myBox.addEventListener("mouseover", (event) =>{
    event.target.style.backgroundColor = "orange";
    event.target.textContent = "You are close!";
});

myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "lightyellow";
    event.target.textContent = "Click me!";
});

myButton.addEventListener("click", (event) => {
    myBox.style.backgroundColor = "pink";
    myBox.textContent = "Clicked the button.";
});

myButton.addEventListener("mouseover", (event) => {
    myBox.style.backgroundColor = "blue";
    myBox.textContent = "Moving over the button.";
});

myButton.addEventListener("mouseout", (event) => {
    myBox.style.backgroundColor = "purple";
    myBox.textContent = "Left the button.";
});