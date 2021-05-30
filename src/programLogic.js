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

const saveTask = () => {
  const inputText = document.getElementById("inputText");
  if(!saveTask.tasks) {
    saveTask.tasks = {}
  }
  
  saveTask.tasks[taskFactory(inputText.value).name] = taskFactory(inputText.value);
  let task = taskFactory(inputText.value);
  localStorage[task] = task;
  renderer.renderTask(task);
  inputText.value = "";

  addTaskButton = document.getElementById("addTaskButton");
  addTaskButton.disabled = false;
}

const deleteTaskLabel = (taskLabel) => {
  content.removeChild(taskLabel);
}

const cleanAll = () => {
  
  saveTask.task = {};
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