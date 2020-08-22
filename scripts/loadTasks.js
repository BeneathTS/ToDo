"use strict";

let tasks;

function addSavedTaskToTaskList(savedTask)	{
	let taskList;
	let task;

	taskList = document.querySelector("ul.Tasks");
	task = document.createElement("li");

	addTaskName(task, savedTask.task);
	addActionButtons(task);

	if (savedTask.status == "complete")
		task.setAttribute("class", "completeTaskStatus");

	taskList.appendChild(task);	
}

function loadTasks()	{
	tasks = JSON.parse(sessionStorage.getItem("TaskList"));
	
	if (!tasks){
		tasks = []; 
		return ;
	}

	let index = -1;

	while(tasks[++index])
	{
		addSavedTaskToTaskList(tasks[index]);
	}
}
