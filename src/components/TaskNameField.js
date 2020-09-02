import React, { Component } from 'react';
import '../styles/Task.css'

export default class TaskNameField extends Component {
	render() {
		const { taskName, toggleEditMode} = this.props;

		return (
			<span
				className="task"
				onClick={toggleEditMode}
			>
				{taskName}
			</span>
		);
	}
}