import { Task } from "./index.js";

// This gives me a list of the containers, which I can access with
// index [0], [1], [2]
let toDoContainerList = document.querySelectorAll(".to-do-container");

// I'll do the same for the buttons
let toDoButtonList = document.querySelectorAll(".to-do-button");

// And the same for the new entry containers 
let newEntryContainerList = document.querySelectorAll(".new-entries-container");

// Let's do something similar with the input fields - I could do the same but I want to experiment!
let toDoNameInput = document.querySelector("#to-do-name-input");
let toDoDescInput = document.querySelector("#to-do-desc-input");
let doingNameInput = document.querySelector("#doing-name-input");
let doingDescInput = document.querySelector("#doing-desc-input");
let doneNameInput = document.querySelector("#done-name-input");
let doneDescInput = document.querySelector("#done-desc-input");

// Making my own lists of the nodes
let nameInputList = [toDoNameInput, doingNameInput, doneNameInput];
let descInputList = [toDoDescInput, doingDescInput, doneDescInput];

// I want the addToList to add to a different container depending on its stage
function addToList(x, stage) {
    newEntryContainerList[stage].appendChild(x)
}

// Setting up event listeners for each button, corresponding to the correct container and answers
for (let i = 0; i < toDoButtonList.length; i++) {
    toDoButtonList[i].addEventListener("click", () => {

        // Make a new task using the user's input
        let toDo = new Task(nameInputList[i].value, descInputList[i].value, toDoButtonList[i]);

        let toDoLine = document.createElement("div");
        let leftBtn = document.createElement("button");
        let removeBtn = document.createElement("button");
        let rightBtn = document.createElement("button");

        // Create a styled div with the evaluation as the text
        let entry = document.createElement("div");
        entry.setAttribute("style", "width: 90%; background: lightgray; margin: 10px 10px 10px 10px")
        entry.innerHTML = toDo.evaluation;

        // Append the div to the corresponding place
        function appendEntry() {
            addToList(entry, i);
            addToList(leftBtn, i);
            addToList(removeBtn, i);
            addToList(rightBtn, i);
        }

        function moveToRight() {
            addToList(entry, i+1);
            addToList(leftBtn, i+1);
            addToList(removeBtn, i+1);
            addToList(rightBtn, i+1);
        }

        rightBtn.addEventListener("click", moveToRight);
        
        appendEntry();
        // Stop the page refreshing lol
        event.preventDefault();
    })}

