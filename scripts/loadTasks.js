"use strict";

let tasks;

function addSavedTaskToTaskList(savedTask)	{
	let taskList = document.querySelector("ul.tasks");
	let task = document.createElement("li");

	addTaskName(task, savedTask.taskName);
	addActionButtons(task);

	if (savedTask.status == "complete")
		task.classList.add("completeTaskStatus");

	taskList.appendChild(task);	
}

function loadTasks()	{
	tasks = JSON.parse(localStorage.getItem("TaskList")) || [];

	for (let index in tasks)
	{
		addSavedTaskToTaskList(tasks[index]);
	}
}
