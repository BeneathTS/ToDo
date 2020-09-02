import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTaskNameAction } from '../actions/actions';

const putStoreToEditTaskNameField = (state) => {
	const { tasks } = state;

	return (
		{ tasks }
	);
}

const putActionsToEditTaskNameField = (dispatch) => ({
	changeTaskName: bindActionCreators(changeTaskNameAction, dispatch)
});

class EditTaskNameField extends Component{
	submitEditedTaskName = (event) => {
		event.preventDefault();
		const { changeTaskName, toggleEditMode } = this.props;

		const newTaskName = ( event.type === "submit" ?
			event.target.newTaskName.value :
			event.target.value
		);
		const targetTaskID = (event.type === "submit" ?
			event.target.parentNode.id:
			event.target.parentNode.parentNode.id
		);

		changeTaskName({id: targetTaskID, name: newTaskName});
		toggleEditMode();
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

export default connect(
	putStoreToEditTaskNameField,
	putActionsToEditTaskNameField)
	(EditTaskNameField)