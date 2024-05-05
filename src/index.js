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

    stageUp() {
        this.stage++
    }

    stageDown() {
        this.stage--
    }
}

export { Task }