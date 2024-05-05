import { Task } from "./index.js";

let toDoContainer = document.querySelector(".to-do-container");
let toDoButton = document.querySelector(".to-do-button");
let toDoNameInput = document.querySelector("#to-do-name-input");
let toDoDescInput = document.querySelector("#to-do-desc-input");

function addToList(x) {
    toDoContainer.appendChild(x)
}

toDoButton.addEventListener("click", () => {
    event.preventDefault();
    let test = new Task(toDoNameInput.value, toDoDescInput.value, 1);
    let entry = document.createElement("div");
    entry.setAttribute("style", "width: 90%; background: lightgray; margin: 10px 10px 10px 10px")
    entry.innerHTML = test.evaluation;
    addToList(entry);
})
