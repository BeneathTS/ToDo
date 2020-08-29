import React from 'react';
import TaskList from './TaskList';
import NewTaskInputField from './NewTaskInputField';
import '../styles/TaskListScreen.css';

export default class TaskListScreen extends React.Component {
	constructor(){
		super();
		this.taskID = 0;
		this.state = ({
			tasks: []
		});
	}

	addSubmittedTask = (submittedTaskName) => {
		const { tasks } = this.state;

		tasks.unshift({
			id: this.taskID++, 
			taskName: submittedTaskName
		});
		this.setState(tasks);
	}

	removeTaskFromList = (targetTask) => {
		const { tasks } = this.state;
		let targetTaskIndex = tasks.findIndex((task) =>	{
				return(task.taskName === targetTask.children[0].textContent);
			});

		tasks.splice(targetTaskIndex, 1);
		this.setState(tasks);
	}

	render() {
		
		return (
			<div className="taskListScreen">
				<NewTaskInputField
					addSubmittedTask={this.addSubmittedTask}
				/>
				<TaskList 
					tasks={this.state.tasks}
					removeTaskFromList={this.removeTaskFromList}
				/>
			</div>
		);
	}
}