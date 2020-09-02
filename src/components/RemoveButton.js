import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeTaskFromListAction } from '../actions/actions';
import '../styles/RemoveButton.css';

const putStoreToRemoveButton = (state) => {
	const { tasks } = state;

	return (
		{ tasks }
	);
}

const putActionsToRemoveButton = (dispatch) => {
	return ({
		removeTaskFromList: bindActionCreators(removeTaskFromListAction, dispatch)
	});
}

class RemoveButton extends React.Component {

	removeTask = (event) => {
		const targetTask = event.target.parentNode;
		const { removeTaskFromList } = this.props;

		removeTaskFromList(targetTask.id);
	}

	render() {
		return (
			<div className="removeButton" onClick={this.removeTask}>x</div>
		);
	}
}


export default connect (
	putStoreToRemoveButton,
	putActionsToRemoveButton)
	(RemoveButton);