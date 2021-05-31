import renderer from "./userInterface"

const taskFactory = (name, dueTime, project, status, priority) => {

  const getTask = () => {
    console.log(`task: ${name}, 
    duetime:${dueTime}, 
    project ${project},
    status ${status}, 
    priority ${priority}`);
  }

  return {
    name,
    dueTime,
    project,
    status,
    priority,
    getTask
  }
}

const projectFactory = (projectName, goal) => {
  const tasks = [];
  const addTask = (task) => tasks.push(task);
  const getTasks = () => {
    console.log(`Project ${projectName}`)
    tasks.forEach((task) => {
      console.log(`${task.name} \n`)
    })
  }
  return {
    projectName,
    goal,
    addTask,
    getTasks,
  }
}

const tasks = (() => {
  const getTasks = () => {
    if (!tasks.tasks) {
      console.log("tasks created");
      tasks.tasks = {};
      return tasks.tasks;
    }
    return tasks.tasks
  }

  const addTask = (task) => {
    tasks.tasks[task.name] = task;
  }

  const printTasks = () => {
    for(let task in tasks.tasks) {
      console.log(task);
    }
  }
  
  return {
    getTasks,
    addTask,
    printTasks
  }

})();


const saveTask = () => {
  const inputText = document.getElementById("inputText");
  
  tasks.getTasks();
  let task = taskFactory(inputText.value);
  tasks.addTask(task);
  tasks.printTasks();
  localStorage["tasks"] = tasks.getTasks();

  renderer.renderTask(task);
  inputText.value = "";

  addTaskButton = document.getElementById("addTaskButton");
  addTaskButton.disabled = false;
}

const deleteTaskLabel = (taskLabel) => {
  const content = document.getElementById("content");
  content.removeChild(taskLabel);
}

const cleanAll = () => {

  localStorage.clear();
  renderer.renderTask();

}

export {
  saveTask
};
export {
  taskFactory
};
export {
  projectFactory
};

export {
  cleanAll
};

export {
  deleteTaskLabel
};