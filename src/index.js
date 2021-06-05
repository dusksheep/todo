import {taskFactory} from "./programLogic"
import {projectFactory} from "./programLogic"

import {tasks} from "./programLogic"
import renderer from "./userInterface"

//window.addEventListener("load", storage.downloadTasks);
window.addEventListener("load", tasks.createTasksObj);
console.log("testing19");
renderer.renderBones();