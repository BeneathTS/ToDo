"use strict";

function removeTask()	{
	let task = event.target.parentNode;
	let taskList = document.querySelector("ul.tasks");
	let taskIndex = Array.prototype.indexOf.call(taskList.children, task);
	
	taskList.removeChild(task);

	tasks.splice(taskIndex, 1);

	localStorage.setItem("TaskList", JSON.stringify(tasks));
}