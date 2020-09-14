import React from 'react';
import { PropTypes } from 'prop-types';
import { inputField, newTaskInputField} from './NewTaskInputField.module.css';

export default class NewTaskInputField extends React.Component {
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
      <form className={inputField} onSubmit={this.submitNewTask}>
        <input
          type="text"
          className={newTaskInputField}
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
