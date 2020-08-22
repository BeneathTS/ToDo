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
	let taskList;
	let taskIndex;

	if (event.target.getAttribute("class") == "Task" ||
		event.target.getAttribute("id") == "EditTask") return;

	taskList = document.querySelector("ul.Tasks");

	task = document.querySelector(".Tasks li:hover");

	taskIndex = Array.prototype.indexOf.call(taskList.children, task);


	if (!task) return;

	setTaskStatus(task);

	if (task.getAttribute("class") == "completeTaskStatus")
		tasks[taskIndex].status = "complete";
	else
		tasks[taskIndex].status = null;
	

	sessionStorage.setItem("TaskList", JSON.stringify(tasks));
}