import { Task } from "./index.js";

// This gives me a list of the containers, which I can access with
// index [0], [1], [2]
let toDoContainerList = document.querySelectorAll(".to-do-container");

// I'll do the same for the buttons
let toDoButtonList = document.querySelectorAll(".to-do-button");

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
    toDoContainerList[stage].appendChild(x)
}

for (let i = 0; i < toDoButtonList.length; i++) {
    toDoButtonList[i].addEventListener("click", () => {
        let test = new Task(nameInputList[i].value, descInputList[i].value, toDoButtonList[i]);
        let entry = document.createElement("div");
        entry.setAttribute("style", "width: 90%; background: lightgray; margin: 10px 10px 10px 10px")
        entry.innerHTML = test.evaluation;
        addToList(entry, i);
        event.preventDefault();
    })}
