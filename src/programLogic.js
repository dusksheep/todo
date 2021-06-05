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
  let tasksObj;

  const createTasksObj = () => {
    if (typeof tasksObj == "undefined") {
      tasksObj = {};
      console.log("tasksObj created");
    } else {
      console.log("tasksObj already exist");
    }
  }

  const deleteTask = (taskName) => {
    delete tasksObj[taskName];
  }

  const getTasksObj = () => {
    return tasksObj;
  }

  const addToTasksObj = (task) => {
    tasksObj[task.name] = task;
  }

  const printTasksObj = () => {
    for (let key in tasksObj) {
      console.log("key from tasksObj " + key);
    }
  }
  //const copyFromLocalStorage = () => {
  //  tasks.tasks = Object.assign({}, localStorage.getItem("tasks"));
  //  return tasks.tasks;
  //}

  //const pushToLocalStorage = () => {
  /*  localStorage.setItem("tasks", tasks.tasks);
    console.log("tasks updated");
    tasks.printTasks();
    storage.printLocalStorage();
  }

  */

  return {
    createTasksObj,
    getTasksObj,
    addToTasksObj,
    printTasksObj,
    deleteTask,
    //copyFromLocalStorage,
    //pushToLocalStorage,

  }
})();

/*const storage = (() => {

  const downloadTasks = () => {
    if (localStorage.getItem("tasks") != undefined) {
      tasks.copyFromLocalStorage();
      console.log("tasks downloaded");

    }
  }

  const printLocalStorage = () => {
    console.log("printing local storage >>>>");
    for (let property in localStorage.getItem("tasks")) {
      console.log("local storage task " + property);
    }
  }

  return {

    downloadTasks,
    printLocalStorage
  }
})();
*/

const saveTask = (inputText) => {
  let task = taskFactory(inputText);
  tasks.addToTasksObj(task);
  tasks.printTasksObj();
  renderer.renderTask(task);
}

const cleanAll = () => {
  console.log("local storage is cleared");
  storage.printLocalStorage();

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
  tasks
};