(() => {
  const renderer = (() => {
    const content = document.getElementById("content");
    const addTaskButton = document.createElement("button");
    const taskLabel = document.createElement("div");

    taskLabel.setAttribute("class", "taskLabel");
    addTaskButton.setAttribute("id", "addTaskButton");

    addTaskButton.innerHTML = "+";
    taskLabel.innerHTML = "this is a label";

    content.appendChild(addTaskButton);
    content.appendChild(taskLabel);
  })();
})();

export default renderer;