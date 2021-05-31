import {
  saveTask
} from "./programLogic"

import {
  cleanAll
} from "./programLogic"

import {
  deleteTaskLabel
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
    submit.addEventListener("click", ()=>{content.removeChild(form)})
    

    form.appendChild(inputLabel);
    form.appendChild(inputText);
    form.appendChild(submit);
    form.appendChild(cancel);
    content.appendChild(form);
  }

  const renderTask = (task) => {
      
      let taskLabel = document.createElement("label");
      taskLabel.setAttribute("class", "taskLabel");
      taskLabel.innerHTML = task.name;

      let deleteButton = document.createElement("button");
      deleteButton.setAttribute("class", "taskButton");
      deleteButton.innerHTML = "Remove";
      deleteButton.addEventListener("click", () =>{deleteTaskLabel(taskLabel)});

      let completeButton = document.createElement("button");
      completeButton.setAttribute("class", "taskButton");
      completeButton.innerHTML = "Done";
      completeButton.addEventListener("click", () =>{deleteTaskLabel(taskLabel)});
      
      taskLabel.appendChild(completeButton);
      taskLabel.appendChild(deleteButton);
      content.appendChild(taskLabel);
  }

  const renderBones = () => {
    const addTaskButton = document.createElement("button");
    const cleanAllButton = document.createElement("button");
    const wrapper = document.createElement("div");

    cleanAllButton.setAttribute("class", "cleanButton");
    wrapper.setAttribute("class", "wrapper");  
    addTaskButton.setAttribute("id", "addTaskButton");
  
    addTaskButton.innerHTML = "+";  
    cleanAllButton.innerHTML = "Clean All";

    addTaskButton.addEventListener("click", renderForm);
    addTaskButton.addEventListener("click", ()=>{addTaskButton.disabled = true});
    cleanAllButton.addEventListener("click", cleanAll);
    

    content.appendChild(cleanAllButton);
    content.appendChild(addTaskButton);
    
    
  }

  return {
    renderForm,
    renderBones,
    removeForm,
    renderTask,
  };
})();


export default renderer;