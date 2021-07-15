/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _programLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programLogic */ \"./src/programLogic.js\");\n/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface */ \"./src/userInterface.js\");\n\n\n\n\n\n\n\nwindow.addEventListener(\"load\", _programLogic__WEBPACK_IMPORTED_MODULE_0__.tasks.createTasksObj);\nconsole.log(\"testing31\");\n_userInterface__WEBPACK_IMPORTED_MODULE_1__.default.renderBones();\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/programLogic.js":
/*!*****************************!*\
  !*** ./src/programLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveTask\": () => (/* binding */ saveTask),\n/* harmony export */   \"taskFactory\": () => (/* binding */ taskFactory),\n/* harmony export */   \"projectFactory\": () => (/* binding */ projectFactory),\n/* harmony export */   \"cleanAll\": () => (/* binding */ cleanAll),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var _userInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userInterface */ \"./src/userInterface.js\");\n\n\nconst taskFactory = (name, dueTime, project, status, priority) => {\n\n  const getTask = () => {\n    console.log(`task: ${name}, \n    duetime:${dueTime}, \n    project ${project},\n    status ${status}, \n    priority ${priority}`);\n  }\n\n  return {\n    name,\n    dueTime,\n    project,\n    status,\n    priority,\n    getTask\n  }\n}\n\nconst projectFactory = (projectName, goal) => {\n  const tasks = [];\n  const addTask = (task) => tasks.push(task);\n  const getTasks = () => {\n    console.log(`Project ${projectName}`)\n    tasks.forEach((task) => {\n      console.log(`${task.name} \\n`)\n    })\n  }\n  return {\n    projectName    ,\n    goal,\n    addTask,\n    getTasks,\n  }\n}\n\nconst tasks = (() => {\n  let tasksObj;\n\n  const createTasksObj = () => {\n\n    if (storage.downloadTasks() === null) {\n      tasksObj = new Object();\n      console.log(\"tasksObj created\");\n    } else {\n      tasksObj = storage.downloadTasks();\n      console.log(\"tasksObj downloaded\")\n      _userInterface__WEBPACK_IMPORTED_MODULE_0__.default.renderObject(tasksObj);\n    }\n  }\n\n  const deleteTask = (taskName) => {\n    delete tasksObj[taskName];\n  }\n\n  const getTasksObj = () => {\n    return tasksObj;\n  }\n\n  const addToTasksObj = (task) => {\n    console.log(\"addidn a task to tasksObj type \" + tasksObj)\n    tasksObj[task.name] = task;\n  }\n\n  const printTasksObj = () => {\n    for (let key in tasksObj) {\n      console.log(\"key from tasksObj \" + key);\n    }\n  }\n\n  return {\n    createTasksObj,\n    getTasksObj,\n    addToTasksObj,\n    printTasksObj,\n    deleteTask,\n  }\n})();\n\nconst storage = (() => {\n\n  const downloadTasks = () => {\n    if (localStorage.getItem(\"tasks\") === null) {\n    return null;  \n    } \n    let retrievedTasksObj = JSON.parse(localStorage.getItem(\"tasks\"))\n    return retrievedTasksObj\n  }\n\n  const uploadToLocalStorage = () => {\n    console.log(\"typeof tasksObj \" + typeof tasks.getTasksObj());\n    if (typeof tasks.getTasksObj() === \"object\") {\n      localStorage.setItem(\"tasks\", JSON.stringify(tasks.getTasksObj()))\n\n    }\n    printLocalStorage();\n  }\n\n  const printLocalStorage = () => {\n    let retrievedTasksObj = localStorage.getItem(\"tasks\")\n    console.log(\"retrieve OBJ 1 \" + typeof retrievedTasksObj);\n  }\n\n  return {\n\n    downloadTasks,\n    printLocalStorage,\n    uploadToLocalStorage\n  }\n})();\n\n\nconst saveTask = (inputText) => {\n  if (inputText) {\n    let task = taskFactory(inputText);\n    tasks.addToTasksObj(task);\n    tasks.printTasksObj();\n    _userInterface__WEBPACK_IMPORTED_MODULE_0__.default.renderTask(task);\n\n  }\n\n}\n\nconst cleanAll = () => {\nlocalStorage.clear();\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo/./src/programLogic.js?");

/***/ }),

/***/ "./src/userInterface.js":
/*!******************************!*\
  !*** ./src/userInterface.js ***!
  \******************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (106:2)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|   }\\n| \\n>   const renderBones = () => {\\n|     \\n|     const cleanAllButton = document.createElement(\\\"button\\\");\");\n\n//# sourceURL=webpack://todo/./src/userInterface.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;