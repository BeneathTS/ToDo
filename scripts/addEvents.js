"use strict";

function addChangeTaskStatusEvent()	{
	let taskList = document.querySelector("ul.tasks");

	taskList.addEventListener("click", changeTaskStatus);
}

function addInputTaskFieldEvent()	{
	let inputTaskField = document.getElementById("inputTask");

	inputTaskField.addEventListener("keypress", addTaskToList);
}

document.addEventListener("DOMContentLoaded", loadTasks);
document.addEventListener("DOMContentLoaded", addInputTaskFieldEvent);
