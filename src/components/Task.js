import React , { Component }from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTaskStatusAction } from '../actions/actions';
import RemoveButton from './RemoveButton';
import TaskNameField from './TaskNameField';
import EditTaskNameField from './EditTaskNameField';
import '../styles/Task.css';

const putStoreToTask = (state) => {
	const { tasks } = state;

	return (
		{ tasks }
	);
}

const putActionsToTask = (dispatch) => ({
		changeTaskStatus: bindActionCreators(changeTaskStatusAction, dispatch),
});

class Task extends Component {
	state = {
		editMode: false
	};

	toggleEditMode = () => {
		this.setState({ editMode: !this.state.editMode});
	}

	displayTaskField = () => {
		const { taskName } = this.props
		return ( this.state.editMode ? 
			<EditTaskNameField
				taskName={taskName}
				toggleEditMode={this.toggleEditMode}

			/> :
			<TaskNameField
				taskName={taskName}
				toggleEditMode={this.toggleEditMode}
			/>	
		);
	}

	changeStatus = (event) => {
		if (event.target.tagName !== "LI") return;

		const { changeTaskStatus } = this.props;
		changeTaskStatus(event.target.id);
	}

	render() {
		const {id, taskStatus} = this.props;

		return (
			<li id={id} className={taskStatus} onClick={this.changeStatus}>
				{this.displayTaskField()}
				<RemoveButton />
			</li>
		);
	}
}

export default connect (
	putStoreToTask,
	putActionsToTask)
	(Task);