import React, { Component } from 'react';

export default class EditTaskNameField extends Component{
	submitEditedTaskName = (event) => {
		event.preventDefault();
		const oldTaskName = this.props.taskName;
		const newTaskName = event.type === "submit" ?
			event.target.newTaskName.value :
			event.target.value;

		this.props.changeTaskName(oldTaskName, newTaskName);
	}

	componentDidMount() {
		const editTaskNameField = document.getElementById("editTaskNameField");

		editTaskNameField.focus();
		editTaskNameField.select();
	}

	render() {
		return (
			<form onSubmit={this.submitEditedTaskName}>
				<input
					type="text"
					id="editTaskNameField"
					name="newTaskName"
					defaultValue={this.props.taskName}
					onBlur={this.submitEditedTaskName}
				/>
			</form>
		);
	}
}