"use strict";

let tasks;

function getTasksNum()
{
	let ct = 0;

	while (tasks[ct++]);

	return (ct - 1);
}

function addSavedTaskToTaskList(savedTask)	{
	let taskList;
	let task;

	taskList = document.querySelector("ul.Tasks");
	task = document.createElement("li");
	addTaskName(task, savedTask);

	taskList.appendChild(task);	
}

function loadTasks()	{
	tasks = JSON.parse(sessionStorage.getItem("TaskList"));
	
	if (!tasks){
		tasks = []; 
		return ;
	}

	let index = getTasksNum();

	while(--index > -1)
	{
		addSavedTaskToTaskList(tasks[index].task);
	}
}
