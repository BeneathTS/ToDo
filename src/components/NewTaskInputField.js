import React from 'react';
import '../styles/NewTaskInputField.css';

export default class NewTaskIputField extends React.Component {
	render() {
		return (
			<form className="inputField">
				<input type="text" id="newTaskInputField" placeholder="Что будем делать?" />
			</form>
		);
	}

}