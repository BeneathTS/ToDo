function saveNewTask(taskInputField) {
	let targetTask;
	let taskName;
	let taskIndex;
	let taskList;

	targetTask = document.getElementById("EditTaskField").parentNode;

	taskName = document.createElement("span");

	taskName.setAttribute("class", "Task");
	taskName.setAttribute("onclick", "putInputField(this)");

	targetTask.removeAttribute("class");

	taskName.textContent = taskInputField.value;
	targetTask.replaceChild(taskName, taskInputField);

	taskList = document.querySelector("ul.Tasks");

	taskIndex = Array.prototype.indexOf.call(taskList.children, targetTask);

	tasks[taskIndex].task = taskName.textContent;
	sessionStorage.setItem("TaskList", JSON.stringify(tasks));
}

function changeTask(event) {
	if (event.key != 'Enter') return;

	saveNewTask(document.getElementById("EditTaskField"));
}

function putInputField(taskName) {
	let selectedTask;
	let taskInputField;

	selectedTask = document.querySelector(".Tasks li:hover");
	taskInputField = document.createElement("input");

	taskInputField.setAttribute("type", "text");
	taskInputField.setAttribute("onblur", "saveNewTask(this)");
	taskInputField.setAttribute("onkeypress", "changeTask(event)");
	taskInputField.setAttribute("id", "EditTaskField");
	taskInputField.setAttribute("value", taskName.textContent);

	selectedTask.replaceChild(taskInputField, taskName);
	taskInputField.focus();
}