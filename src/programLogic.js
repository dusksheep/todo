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
    if (typeof storage.downloadTasks() == "undefined") {
      tasksObj = {};
      console.log("tasksObj created");
    } else {
      tasksObj = storage.downloadTasks();
      //renderer + define when taksObj should be uploaded to localStorage
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

  return {
    createTasksObj,
    getTasksObj,
    addToTasksObj,
    printTasksObj,
    deleteTask,
  }
})();

const storage = (() => {

  const downloadTasks = () => {
    if (localStorage.getItem("tasks") != undefined) {
      let retrievedTasksObj = JSON.parse(localStorage.getItem("tasks"))
      return retrievedTasksObj
    }
    return undefined;
}

  const uploadToLocalStorage = (tasksObj) => {
    localStorage.setItem("tasks", JSON.stringify(tasksObj))
    printLocalStorage();
  }

  const printLocalStorage = () => {
    let retrievedTasksObj = localStorage.getItem("tasks")
    console.log("retrieve OBJ 1 " + typeof retrievedTasksObj);  
  }

  return {

    downloadTasks,
    printLocalStorage,
    uploadToLocalStorage
  }
})();


const saveTask = (inputText) => {
  if(inputText) {
  let task = taskFactory(inputText);
  tasks.addToTasksObj(task);
  tasks.printTasksObj();
  renderer.renderTask(task);
  
  }
  
}

const cleanAll = () => {
  
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
export {
  storage
};