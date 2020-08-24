"use strict";

function setTaskStatus(selectedTask)	{
	selectedTask.classList.toggle("completeTaskStatus");
}

function saveTaskStatus(task)	{
	let taskList = document.querySelector("ul.tasks");
	let taskIndex = Array.prototype.indexOf.call(taskList.children, task);

	if (task.classList.contains("completeTaskStatus"))
		tasks[taskIndex].status = "complete";
	else
		tasks[taskIndex].status = null;

	localStorage.setItem("TaskList", JSON.stringify(tasks));
}

function changeTaskStatus()	{
	if (!event.target.classList.contains("task") &&
		event.target.tagName !== "LI") return;

	setTaskStatus(event.target);

	saveTaskStatus(event.target);
}