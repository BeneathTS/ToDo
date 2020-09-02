import React from 'react';
import TaskList from './TaskList';
import NewTaskInputField from './NewTaskInputField';
import '../styles/TaskListScreen.css';

export default class TaskListScreen extends React.Component {
	render() {
		return (
			<div className="taskListScreen">
				<NewTaskInputField />
				<TaskList />
			</div>
		);
	}
}
