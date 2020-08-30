import React, { Component } from 'react';

export default class EditTaskNameField extends Component{
	submitEditedTaskName = (event) => {
		event.preventDefault();

		this.props.changeTaskName(this.props.taskName, event.target.newTaskName.value);
	}

	render() {
		return (
			<form onSubmit={this.submitEditedTaskName}>
				<input
					type="text"
					id="editTaskNameField"
					name="newTaskName"
					defaultValue={this.props.taskName}
				/>
			</form>
		);
	}
}