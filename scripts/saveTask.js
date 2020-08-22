"use strict";

function saveTask(taskNode)	{
	let task;
	let taskStatus;
	
	task = taskNode.getElementsByTagName("span")[0].textContent;
	taskStatus = taskNode.getAttribute("class");
	
	
	tasks.push({
		task: task,
		taskStatus: taskStatus
	});

	sessionStorage.setItem("TaskList", JSON.stringify(tasks));
}