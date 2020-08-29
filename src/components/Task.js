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

	changeTaskStatus = (event) => {
		if (event.target.tagName !== "LI") return;

		const newStatus = !this.state.taskStatus ? "completeTaskStatus" : null;
		this.setState({taskStatus: newStatus});
	};

	render() {
		return (
			<li className={this.state.taskStatus} onClick={this.changeTaskStatus}>
				<span className="task">{this.state.taskName}</span>
				<RemoveButton removeTaskFromList={this.props.removeTask}/>
			</li>
		);
	}
}
