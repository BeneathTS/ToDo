import React from 'react';
import '../styles/TaskListInfo.css';

function TasksListName() {
	return (
		<div className="taskListInfo">
			<span className="taskListNameStub">Сегодня</span>
		</div>
	);
}

export default function TaskListInfo() {
	return (
		<TasksListName />
	);
}