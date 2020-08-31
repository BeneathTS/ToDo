import React, { Component } from 'react';
import '../styles/Task.css'

export default class TaskNameField extends Component {
	render() {
		return (
			<span
				className="task"
				onClick={this.props.activateEditMode}
			>
				{this.props.taskName}
			</span>
		);
	}
}