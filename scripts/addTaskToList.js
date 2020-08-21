"use strict";

function ressetInputFieldValue(inputField) {
	inputField.value = '';
}

function addTaskName(task, taskName) {
	let taskNameField;

	taskNameField = document.createElement("span");

	taskNameField.setAttribute("class", "Task");
	taskNameField.setAttribute("onclick", "putInputField(this)");

	taskNameField.textContent = taskName;

	task.appendChild(taskNameField);
}

function setButtonAction(button) {
	switch (button.getAttribute("class")) {
		case "removeButton":
			button.setAttribute("onclick", "removeTask()");
			break;
	}
}

function setButtonType(button, buttonType) {
	button.setAttribute("class", buttonType);
}

function addActionButtons(task) {
	let buttonsField = document.createElement("div");
	let removeButton = document.createElement("div");

	buttonsField.setAttribute("class", "actionButtons");
	setButtonType(removeButton, "removeButton");
	setButtonAction(removeButton);

	removeButton.textContent = 'x';

	buttonsField.appendChild(removeButton);
	task.appendChild(buttonsField);
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
	addActionButtons(newTask);

	tasksList.insertBefore(newTask, lastTask);

	ressetInputFieldValue(inputField);
}