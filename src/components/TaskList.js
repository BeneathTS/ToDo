import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import '../styles/TaskList.css';

const putStoreToTaskList = (state) => {
	const { tasks } = state;

	return (
		{ tasks }
	);

}

class TaskList extends React.Component {
	createTasks = (task) => {
		return (
			<Task
				key={task.id}
				id={task.id}
				taskName={task.taskName}
				taskStatus={task.taskStatus}
			/>
		);
	}

	render() {
		const taskList = this.props.tasks.map(this.createTasks); 

		return (
			<ul className="tasks">
				{taskList}
			</ul>
		);
	}
}

export default connect(
	putStoreToTaskList)
	(TaskList);