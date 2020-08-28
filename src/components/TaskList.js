import React from 'react';
import Task from './Task';
import '../styles/TaskList.css';

export default class TaskList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: this.props.tasks
		};
	}

	createTasks(task) {
		return (
			<Task key={task.id} taskName={task.taskName} taskStatus={task.taskStatus}/>
		);
	}

	render() {
		let taskList = this.state.tasks.map(this.createTasks);
		console.log(taskList);
		return (
			<ul className="tasks">
				{taskList}
			</ul>
		);
	}
}