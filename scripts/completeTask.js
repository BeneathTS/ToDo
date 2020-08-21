"use strict";

function setTaskStatus(selectedTask) {
	if (!selectedTask.getAttribute("class")) {
		selectedTask.setAttribute("class", "completeTaskStatus");
		return;
	}
	selectedTask.removeAttribute("class");
}

function changeTaskStatus() {
	let task;

	if (event.target.getAttribute("class") == "Task" ||
		event.target.getAttribute("id") == "EditTask") return;

	task = document.querySelector(".Tasks li:hover");

	if (!task) return;

	setTaskStatus(task);
}