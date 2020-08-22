"use strict";

let tasks;

function addSavedTaskToTaskList(savedTask)	{
	let taskList = document.querySelector("ul.Tasks");
	let task = document.createElement("li");

	addTaskName(task, savedTask.taskName);
	addActionButtons(task);

	if (savedTask.status == "complete")
		task.setAttribute("class", "completeTaskStatus");

	taskList.appendChild(task);	
}

function loadTasks()	{
	tasks = JSON.parse(sessionStorage.getItem("TaskList")) || [];
	
	if (!tasks)	return ;

	for (let index in tasks)
	{
		addSavedTaskToTaskList(tasks[index]);
	}
}

document.addEventListener("DOMContentLoaded", loadTasks);