import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { addSubmittedTaskAction } from '../actions/actions';
import styles from '../styles/NewTaskInputField.module.css';

const putStoreToNewTaskInputField = ({ tasks }) => ({ tasks });

const putActionsToNewTaskInputField = (dispatch) => ({
  addSubmittedTask: bindActionCreators(addSubmittedTaskAction, dispatch),
});

export class NewTaskInputField extends React.Component {
  placeholder = 'What we gonna do?';

  submitNewTask = (event) => {
    event.preventDefault();

    const { addSubmittedTask } = this.props;
    const { newTaskInputField } = event.target;
    const submittedTask = newTaskInputField.value;
    if (!submittedTask) return;

    addSubmittedTask(submittedTask);
    newTaskInputField.value = '';
  }

  render() {
    return (
      <form className={styles.inputField} onSubmit={this.submitNewTask}>
        <input
          type="text"
          id="newTaskInputField"
          name="newTaskInputField"
          placeholder={this.placeholder}
        />
      </form>
    );
  }
}

NewTaskInputField.propTypes = {
  addSubmittedTask: PropTypes.func.isRequired,
};

export default connect(
  putStoreToNewTaskInputField,
  putActionsToNewTaskInputField,
)(NewTaskInputField);
