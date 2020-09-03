import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { addSubmittedTaskNameAction } from '../actions/actions';
import '../styles/NewTaskInputField.css';

const putStoreToNewTaskInputField = ({ tasks }) => ({ tasks });

const putActionsToNewTaskInputField = (dispatch) => ({
  addSubmittedTaskName: bindActionCreators(addSubmittedTaskNameAction, dispatch),
});

class NewTaskIputField extends React.Component {
  placeholder = 'What we gonna do?';

  submitNewTask = (event) => {
    event.preventDefault();

    const { addSubmittedTaskName } = this.props;
    const { target } = event;
    const submittedTaskName = event.target.taskName.value;
    if (!submittedTaskName) return;

    addSubmittedTaskName(submittedTaskName);
    target.taskName.value = '';
  }

  render() {
    return (
      <form className="inputField" onSubmit={this.submitNewTask}>
        <input
          type="text"
          id="newTaskInputField"
          name="taskName"
          placeholder={this.placeholder}
        />
      </form>
    );
  }
}

NewTaskIputField.propTypes = {
  addSubmittedTaskName: PropTypes.func.isRequired,
};

export default connect(
  putStoreToNewTaskInputField,
  putActionsToNewTaskInputField,
)(NewTaskIputField);
