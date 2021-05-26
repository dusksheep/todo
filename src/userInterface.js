import {
  saveTask
} from "./programLogic"

const renderer = (() => {
  'use strict';
  const content = document.getElementById("content");

  const removeForm = () => {
    let form = document.getElementById("form");
    content.removeChild(form);
  }

  const renderForm = () => {
    const form = document.createElement("form");
    const inputLabel = document.createElement("label");
    const inputText = document.createElement("input");
    const submit = document.createElement("input");
    const cancel = document.createElement("input");

    form.setAttribute("id", "form");
    inputLabel.setAttribute("for", "inputText");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("id", "inputText");
    inputText.setAttribute("name", "inputText");
    submit.setAttribute("type", "button");
    cancel.setAttribute("type", "button");
    submit.setAttribute("value", "Submit");
    cancel.setAttribute("value", "Cancel");

    inputLabel.innerHTML = "Task:";

    cancel.addEventListener("click", removeForm);
    submit.addEventListener("click", saveTask);

    form.appendChild(inputLabel);
    form.appendChild(inputText);
    form.appendChild(submit);
    form.appendChild(cancel);
    content.appendChild(form);
  }

  const renderTask = () => {
    Object.keys(localStorage).forEach(key => {
      let taskLabel = document.createElement("label");
      taskLabel.innerHTML = key;
      content.appendChild(taskLabel);});
  }

  const renderBones = () => {
    const addTaskButton = document.createElement("button");
    const taskLabel = document.createElement("div");
    const wrapper = document.createElement("div");

    wrapper.setAttribute("class", "wrapper");
    taskLabel.setAttribute("class", "taskLabel");
    addTaskButton.setAttribute("id", "addTaskButton");

    addTaskButton.innerHTML = "+";
    taskLabel.innerHTML = "this is a label";

    addTaskButton.addEventListener("click", renderForm);


    content.appendChild(addTaskButton);
    content.appendChild(taskLabel);
  }

  return {
    renderForm,
    renderBones,
    removeForm,
    renderTask,
  };
})();


export default renderer;