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

export {
  taskFactory
};
export {
  projectFactory
};