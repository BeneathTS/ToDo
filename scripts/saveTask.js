"use strict";

function saveTask(taskNode)	{
	let taskName = taskNode.getElementsByTagName("span")[0].textContent;
	let taskStatus = taskNode.getAttribute("class");
	
	tasks.unshift({
		taskName,
		taskStatus
	});

	localStorage.setItem("TaskList", JSON.stringify(tasks));
}