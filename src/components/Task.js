import React from 'react';
import RemoveButton from './RemoveButton';
import '../styles/Task.css';

export default class Task extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			taskName: props.taskName || "TaskDefaultName",
			taskStatus: null
		};
	}

	changeTaskStatus() {
		const newStatus = !this.state.taskStatus ? "completeTaskStatus" : null;

		this.setState({taskStatus: newStatus});
	};

	render() {
		return (
			<li className={this.state.taskStatus} onClick={() => this.changeTaskStatus(this)}>
				<span className="task">{this.state.taskName}</span>
				<RemoveButton />
			</li>
		);
	}
}
