import React from 'react';
import '../styles/TaskListInfo.css';

export default class TaskListInfo extends React.Component {
	render() {
		return (
			<div className="taskListInfo">
				<span className="taskListNameStub">Today</span>
				<div id="TaskListInfoBG" href="../images/dayInfoBG.jpg"/>
			</div>
		);
	}
}