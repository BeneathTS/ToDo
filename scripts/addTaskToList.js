"use strict";

function resetInputFieldValue(inputField) {
	inputField.value = '';
}

function addTaskName(task, taskName) {
	let taskNameField = document.createElement("span");
	
	taskNameField.classList.add("task");
	taskNameField.textContent = taskName;

	taskNameField.addEventListener("click", putInputField);

	task.appendChild(taskNameField);
}

function setButtonAction(button) {
	switch (button.getAttribute("class")) {
		case "removeButton":
			button.addEventListener("click", removeTask);
			break;
	}
}

function setButtonType(button, buttonType) {
	button.classList.add(buttonType);
}

function addActionButtons(task) {
	let removeButton = document.createElement("div");

	setButtonType(removeButton, "removeButton");
	setButtonAction(removeButton);

	removeButton.textContent = 'x';

	task.appendChild(removeButton);
}

function addTaskToList() {
	if (event.key !== 'Enter') return;

	event.preventDefault();

	let inputField = document.getElementById("inputTask");

	if (!inputField.value) return;

	let tasksList = document.querySelector("ul.tasks");
	let lastTask = document.querySelector(".tasks li");
	let newTask = document.createElement("li");

	addTaskName(newTask, inputField.value);
	addActionButtons(newTask);

	newTask.addEventListener("click", changeTaskStatus);

	tasksList.insertBefore(newTask, lastTask);
	
	saveTask(newTask);

	resetInputFieldValue(inputField);
}