
function saveNewTaskName(taskNameField, targetTask)	{
	let taskList = document.querySelector("ul.Tasks");
	let taskIndex = Array.prototype.indexOf.call(taskList.children, targetTask);

	tasks[taskIndex].taskName = taskNameField.textContent;

	localStorage.setItem("TaskList", JSON.stringify(tasks));
}

function updateTaskName(taskInputField)	{
	let targetTask = document.getElementById("EditTaskField").parentNode;
	let taskNameField = document.createElement("span");

	addTaskName(taskNameField, taskInputField.value);

	targetTask.replaceChild(taskNameField, taskInputField);

	saveNewTaskName(taskNameField, targetTask);
}

function changeTask(event)	{
	if (event.key != 'Enter') return;

	updateTaskName(document.getElementById("EditTaskField"));
}

function initInputField(taskName)	{
	let inputField = document.createElement("input");
	
	inputField.setAttribute("type", "text");
	inputField.setAttribute("onblur", "updateTaskName(this)");
	inputField.setAttribute("onkeypress", "changeTask(event)");
	inputField.setAttribute("id", "EditTaskField");
	inputField.setAttribute("value", taskName.textContent);

	return (inputField);
}

function putInputField(taskName)	{
	let selectedTask = document.querySelector(".Tasks li:hover");
	let taskInputField = initInputField(taskName);

	selectedTask.replaceChild(taskInputField, taskName);
	taskInputField.focus();
}