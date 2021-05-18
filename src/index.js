import {taskFactory} from "./programLogic"
import {projectFactory} from "./programLogic"
import renderer from "./userInterface"

console.log("testing3");
const feedYoda = taskFactory("feed yoda", "1 day", "pets forever", "always pending", "high priority");
feedYoda.getTask();

const petsWillConquerTheWorld = projectFactory("awesome pets", "have awesome pets");
petsWillConquerTheWorld.addTask(feedYoda);
petsWillConquerTheWorld.getTasks();
renderer