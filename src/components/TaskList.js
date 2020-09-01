import React from 'react';
import Task from './Task';
import '../styles/TaskList.css';
import { connect } from 'react-redux';

// const putTasksToTaskList = (state) => ({
// 	tasks: state.tasks
// })

class TaskList extends React.Component {
	createTasks = (task) => {
		return (
			<Task
				key={task.id}
				taskName={task.taskName}
				editMode={task.editMode}
				taskStatus={task.taskStatus}
				removeTask={this.props.removeTaskFromList}
				changeTaskName={this.props.changeTaskName}
				changeTaskStatus={this.props.changeTaskStatus}
				activateEditMode={this.props.activateEditMode}
			/>
		);
	}

	render() {
		console.log("TaskList_dbg");
		console.log(this.props.tasks);
		console.log(this.props.tasks[0]);
		let taskList = this.props.tasks.map(this.createTasks); 

		return (
			<ul className="tasks">
				{taskList}
			</ul>
		);
	}
}

export default TaskList//connect(putTasksToTaskList)(TaskList);