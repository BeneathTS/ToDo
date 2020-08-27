import React from 'react';
import Task from './Task';
import NewTaskInputField from './NewTaskInputField';
import '../styles/TaskList.css';

export default class TaskList extends React.Component {
	// constructor(props) {
	// 	this.state.tasks = [{ taskName: "Test Task 1" }, { taskName: "Test Task 2" } ];
	// }

	addNewTaskToList() {
		alert("Lox!");
	};

	render() {
		return (
			<div className="toDoList">
				<NewTaskInputField />
				<ul className="tasks">
					<Task taskName="Test Task 1" />
					<Task taskName="Test Task 2" />
				</ul>
			</div>
		);
	}
}