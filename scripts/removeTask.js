"use strict";

function removeTask() {
	let task;
	let taskList;

	task = document.querySelector(".Tasks li:hover");
	taskList = document.querySelector("ul.Tasks");

	taskList.removeChild(task);
}