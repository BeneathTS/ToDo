"use strict";

function removeTask() {
	let task;
	let taskList;
	let taskIndex;

	task = document.querySelector(".Tasks li:hover");
	taskList = document.querySelector("ul.Tasks");

	taskIndex = Array.prototype.indexOf.call(taskList.children, task);

	tasks.splice(taskIndex, 1);
	sessionStorage.setItem("TaskList", JSON.stringify(tasks));

	taskList.removeChild(task);
}