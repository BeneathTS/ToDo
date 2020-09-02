import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSubmittedTaskNameAction } from '../actions/actions';
import '../styles/NewTaskInputField.css';

const putStoreToNewTaskInputField = (state) => {
	const { tasks } = state;

	return (
		{ tasks }
	);

}

const putActionsToNewTaskInputField = (dispatch) => ({
		addSubmittedTaskName: bindActionCreators(addSubmittedTaskNameAction, dispatch)
});

class NewTaskIputField extends React.Component {
		placeholder = "What we gonna do?";
	
	submitNewTask = (event) => {
		event.preventDefault();

		const { addSubmittedTaskName } = this.props;
		const submittedTaskName = event.target.taskName.value;		
		if (!submittedTaskName) return;
		
		addSubmittedTaskName(submittedTaskName);
		event.target.taskName.value = '';
	}
	
	render() {
		return (
			<form className="inputField" onSubmit={this.submitNewTask}>
				<input
					type="text"
					id="newTaskInputField"
					name="taskName"
					placeholder={this.placeholder}
				/>
			</form>
		);
	}

}

export default connect (
	putStoreToNewTaskInputField,
	putActionsToNewTaskInputField)
	(NewTaskIputField);