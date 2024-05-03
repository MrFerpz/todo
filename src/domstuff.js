import { Task } from "./index.js";

let toDoContainer = document.querySelector("#todo");
let toDoButton = document.querySelector("#to-do-button");
let toDoNameInput = document.querySelector("#to-do-name-input");
let toDoDescInput = document.querySelector("#to-do-desc-input");

function addToList(x) {
    toDoContainer.appendChild(x)
}

toDoButton.addEventListener("click", () => {
    let test = new Task(toDoNameInput.value, toDoDescInput.value, 1);
    let entry = document.createElement("div");
    entry.innerHTML = test.evaluation;
    addToList(entry);
})
