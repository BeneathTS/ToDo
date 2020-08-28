import React from 'react';
import '../styles/TaskListInfo.css';

export default class TaskListInfo extends React.Component {
	render() {
		return (
			<div className="taskListInfo">
				<span className="taskListNameStub">Сегодня</span>
			</div>
		);
	}
}