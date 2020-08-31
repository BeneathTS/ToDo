import React from 'react';
import TaskList from './TaskList';
import NewTaskInputField from './NewTaskInputField';
import '../styles/TaskListScreen.css';

export default class TaskListScreen extends React.Component {
	constructor(){
		super();
		this.state = (
			JSON.parse(localStorage.getItem('TaskList')) ||
			{ tasks: []	}
			);
		this.taskID = (
			this.state.tasks[0] ? 
			this.state.tasks[0].id :
			-1
		);

	}

	addSubmittedTask = (submittedTaskName) => {
		const { tasks } = this.state;

		tasks.unshift({
			id: ++this.taskID, 
			taskName: submittedTaskName,
			taskStatus: null,
			editMode: false
		});
		this.setState(tasks);
		localStorage.setItem('TaskList', JSON.stringify(this.state));
	}

	removeTaskFromList = (targetTask) => {
		const { tasks } = this.state;
		let targetTaskIndex = tasks.findIndex((task) =>	{
				return(task.taskName === targetTask.children[0].textContent);
			});

		tasks.splice(targetTaskIndex, 1);
		this.setState(tasks);
		localStorage.setItem('TaskList', JSON.stringify(this.state));
	}

	changeTaskName = (oldTaskName, newTaskName) => {
		const { tasks } = this.state;
		let targetTaskIndex = tasks.findIndex((task) => {
			return (task.taskName === oldTaskName);
		});

		tasks[targetTaskIndex].taskName = newTaskName;
		tasks[targetTaskIndex].editMode = false;
		this.setState(tasks);
		localStorage.setItem('TaskList', JSON.stringify(this.state));
	}

	activateEditMode = (event) => {
		const { tasks } = this.state;
		let targetTaskIndex = tasks.findIndex((task) => {
			return (task.taskName === event.target.textContent);
		});

		tasks[targetTaskIndex].editMode = true;
		this.setState(tasks);
		localStorage.setItem('TaskList', JSON.stringify(this.state));
	}

	changeTaskStatus = (event) => {
		if (event.target.tagName !== "LI") return;

		const { tasks } = this.state;
		let targetTaskIndex = tasks.findIndex((task) => {
			return (task.taskName === event.target.children[0].textContent);
		});

		tasks[targetTaskIndex].taskStatus = !tasks[targetTaskIndex].taskStatus ? "completeTaskStatus" : null;
		this.setState(tasks);
		localStorage.setItem('TaskList', JSON.stringify(this.state));
	};

	render() {
		return (
			<div className="taskListScreen">
				<NewTaskInputField
					addSubmittedTask={this.addSubmittedTask}
				/>
				<TaskList 
					tasks={this.state.tasks}
					changeTaskName={this.changeTaskName}
					activateEditMode={this.activateEditMode}
					changeTaskStatus={this.changeTaskStatus}
					removeTaskFromList={this.removeTaskFromList}
				/>
			</div>
		);
	}
}