import "./style.css";
import "./domstuff.js";

class Task {
    constructor(name, description, stage) {
        this.name = name;
        this.description = description;
        this.stage = stage;
    }

    get evaluation() {
        return `${this.name} task: ${this.description}`
    }
}

export { Task }