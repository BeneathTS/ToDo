import React from 'react';
import TaskList from './TaskList';
import NewTaskInputField from './NewTaskInputField';
import '../styles/TaskListScreen.css';
import { addSubmittedTaskNameAction } from '../actions/actions';
import { connect } from 'react-redux';

// const putTasksToTaskList = (state) => {
// 	const { tasks } = state;

// 	console.log("connection task to TaskList");
// 	console.log(state);
// 	return (
// 		{ tasks }
// 	);

// }
const putTasksToTaskListScreen = (state) => ({
	tasks: state.tasks
})

const matchDistoProps = {
	addTasks: addSubmittedTaskNameAction
}
//const WrappedTaskList = connect(putTasksToTaskList)(TaskList);

class TaskListScreen extends React.Component {
	constructor(props){
		super(props);
		this.dispatch = this.props.dispatch;

	}

	addSubmittedTask = (submittedTaskName) => {
	//	console.log(this.props.tasks);
		this.props.addTasks(submittedTaskName);
	//	this.dispatch(addSubmittedTaskNameAction(submittedTaskName));

	}

	removeTaskFromList = (targetTask) => {
		console.log(this.props.tasks);
	}

	changeTaskName = (oldTaskName, newTaskName) => {
		console.log(this.props.tasks);
	}

	activateEditMode = (event) => {
		console.log(this.props.tasks);
	}

	changeTaskStatus = (event) => {
		console.log(this.props.tasks);
	};

	render() {
		console.log("render screen");
		return (
			<div className="taskListScreen">
				<NewTaskInputField
					addSubmittedTask={this.addSubmittedTask}
				/>
				<TaskList tasks={this.props.tasks}/>
			</div>
		);
	}
}

export default connect(putTasksToTaskListScreen, matchDistoProps)(TaskListScreen);