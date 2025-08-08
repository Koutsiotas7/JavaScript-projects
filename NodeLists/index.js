/* NodeList: Static collection of HTML elements (id, class, element).
   Can be created by using querySelectorAll()
   Similar to an array, but not (map, filter, reduce).
   NodeList won't update to automatically reflect changes. */

let buttons = document.querySelectorAll(".myButtons");

//ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.style.fontSize = "5rem";
});

//Click event listener

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "red";
    });
});

//Mouseover + Mouseout event listener

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "blue";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "aqua";
    });
});

//Add an element

const newButton = document.createElement("button"); //Step 1
//Step 2
newButton.textContent = "Button 5";
newButton.classList = "myButtons";

//Step 3: Append the newButton to DOM
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");

console.log(buttons); //button 5 added

//Remove an element

/*
buttons.forEach(button => {
    button.addEventListener("click", event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons"); //Update NodeList
    });
});
*/