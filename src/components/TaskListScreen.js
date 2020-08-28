import React from 'react';
import TaskList from './TaskList';
import NewTaskInputField from './NewTaskInputField';
import '../styles/TaskListScreen.css';

export default class TaskListScreen extends React.Component {
	constructor(){
		super();
		this.state = ({
			tasks: []
		});
	}

	getSubmittedTask = (submittedTaskName) => {
		const oldTaskList = this.state.tasks;

		oldTaskList.unshift({
			id: oldTaskList.length + 1, 
			taskName: submittedTaskName
		});

		this.setState(oldTaskList);
	}

	render() {
		
		return (
			<div className="taskListScreen">
				<NewTaskInputField getSubmittedTask={this.getSubmittedTask} />
				<TaskList tasks={this.state.tasks} />
			</div>
		);
	}
}