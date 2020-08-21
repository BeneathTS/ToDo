"use strict";

function ressetInputFieldValue(inputField) {
	inputField.value = '';
}

function addTaskName(task, taskName) {
	let taskNameField;

	taskNameField = document.createElement("span");

	taskNameField.setAttribute("class", "Task");

	taskNameField.textContent = taskName;

	task.appendChild(taskNameField);
}

function addTaskToList() {
	if (event.key != 'Enter') return;

	event.preventDefault();

	let inputField = document.getElementById("InputTask");

	if (!inputField.value) return;

	let tasksList = document.querySelector("ul.Tasks");
	let lastTask = document.querySelector(".Tasks li");
	let newTask = document.createElement("li");

	addTaskName(newTask, inputField.value);

	tasksList.insertBefore(newTask, lastTask);

	ressetInputFieldValue(inputField);
}