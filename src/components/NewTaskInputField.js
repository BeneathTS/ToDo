import React from 'react';
// import TaskList from './TaskList';
import '../styles/NewTaskInputField.css';

export default class NewTaskIputField extends React.Component {
	constructor(){
		super();
		this.placeholder = "What we gonna do?";
	}

	submitNewTask = (event) => {
		event.preventDefault();
		
		if (!event.target.taskName.value) return;

		this.props.getSubmittedTask(event.target.taskName.value);
		event.target.taskName.value = '';
	}

	render() {
		return (
			<form className="inputField" onSubmit={this.submitNewTask}>
				<input type="text" id="newTaskInputField" name="taskName" placeholder={this.placeholder} />
			</form>
		);
	}

}