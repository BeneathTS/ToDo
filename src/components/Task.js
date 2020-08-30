import React from 'react';
import RemoveButton from './RemoveButton';
import TaskNameField from './TaskNameField';
import EditTaskNameField from './EditTaskNameField';
import '../styles/Task.css';

export default class Task extends React.Component{
	displayTaskField = () => {
		if (this.props.editMode){
			return (
				<EditTaskNameField 
					taskName={this.props.taskName}
					changeTaskName={this.props.changeTaskName}
				/>
			);
		}
		return(
			<TaskNameField
				taskName={this.props.taskName}
				activateEditMode={this.props.activateEditMode}
			/>	
		);
	}

	render() {
		return (
			<li className={this.props.taskStatus} onClick={this.props.changeTaskStatus}>
				{this.displayTaskField()}
				<RemoveButton removeTaskFromList={this.props.removeTask}/>
			</li>
		);
	}
}
