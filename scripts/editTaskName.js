
function saveNewTaskName(taskNameField, targetTask)	{
	let taskList = document.querySelector("ul.tasks");
	let taskIndex = Array.prototype.indexOf.call(taskList.children, targetTask);

	tasks[taskIndex].taskName = taskNameField.textContent;

	localStorage.setItem("TaskList", JSON.stringify(tasks));
}

function updateTaskName()	{
	let targetTask = event.target.parentNode;
	let taskNameField = document.createElement("span");

	taskNameField.setAttribute("class", "task");
	taskNameField.textContent = event.target.value;
	event.target.removeEventListener("blur", updateTaskName);

	targetTask.replaceChild(taskNameField, event.target);

	saveNewTaskName(taskNameField, targetTask);
}

function changeTask()	{
	if (event.key !== 'Enter') return;

	updateTaskName();
}

function initInputField(taskName)	{
	let inputField = document.createElement("input");
	
	inputField.setAttribute("type", "text");
	inputField.setAttribute("id", "editTaskField");
	inputField.setAttribute("value", taskName.textContent);
	inputField.addEventListener("keypress", changeTask);
	inputField.addEventListener("blur", updateTaskName);

	return (inputField);
}

function putInputField()	{
	if (event.target.tagName != "SPAN") return ;

	let selectedTask = event.target.parentNode;
	let taskInputField = initInputField(event.target);

	selectedTask.replaceChild(taskInputField, event.target);
	taskInputField.focus();
}