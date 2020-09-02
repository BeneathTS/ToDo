import React from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import '../styles/TaskList.css';
import { connect } from 'react-redux';

<<<<<<< HEAD
// const putTasksToTaskList = (state) => ({
// 	tasks: state.tasks
// })
=======
const putStoreToTaskList = (state) => {
	const { tasks } = state;

	return (
		{ tasks }
	);

}
>>>>>>> f6e3ead19acc7775c9e564d346072f52edf1cbcf

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
<<<<<<< HEAD
		console.log("TaskList_dbg");
		console.log(this.props.tasks);
		console.log(this.props.tasks[0]);
		let taskList = this.props.tasks.map(this.createTasks); 
=======
		const taskList = this.props.tasks.map(this.createTasks); 
>>>>>>> f6e3ead19acc7775c9e564d346072f52edf1cbcf

		return (
			<ul className="tasks">
				{taskList}
			</ul>
		);
	}
}

<<<<<<< HEAD
export default TaskList//connect(putTasksToTaskList)(TaskList);
=======
export default connect(
	putStoreToTaskList)
	(TaskList);
>>>>>>> f6e3ead19acc7775c9e564d346072f52edf1cbcf
