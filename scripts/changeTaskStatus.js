"use strict";

function setTaskStatus(selectedTask)	{
	if (!selectedTask.getAttribute("class")) {
		selectedTask.setAttribute("class", "completeTaskStatus");
		return;
	}
	selectedTask.removeAttribute("class");
}

function saveTaskStatus(task)	{
	let taskList = document.querySelector("ul.Tasks");
	let taskIndex = Array.prototype.indexOf.call(taskList.children, task);

	if (task.getAttribute("class") == "completeTaskStatus")
		tasks[taskIndex].status = "complete";
	else
		tasks[taskIndex].status = null;

	localStorage.setItem("TaskList", JSON.stringify(tasks));
}

function changeTaskStatus()	{
	if (event.target.getAttribute("class") == "Task" ||
		event.target.getAttribute("id") == "EditTask") return;

	let task = document.querySelector(".Tasks li:hover");

	if (!task) return;
	
	setTaskStatus(task);

	saveTaskStatus(task);
}