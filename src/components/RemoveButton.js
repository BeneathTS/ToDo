import React from 'react';
import '../styles/RemoveButton.css';

export default class RemoveButton extends React.Component {

	removeTask = (event) => {
		const targetTask = event.target.parentNode;

		this.props.removeTaskFromList(targetTask);
	}

	render() {
		return (
			<div className="removeButton" onClick={this.removeTask}>x</div>
		);
	}
}
