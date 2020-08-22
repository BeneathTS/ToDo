"use strict";

function removeTask()	{
	let task = document.querySelector(".Tasks li:hover");
	let taskList = document.querySelector("ul.Tasks");
	let taskIndex = Array.prototype.indexOf.call(taskList.children, task);
	
	taskList.removeChild(task);

	tasks.splice(taskIndex, 1);

	localStorage.setItem("TaskList", JSON.stringify(tasks));
}