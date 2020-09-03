import React, { Component, createRef } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTaskNameAction } from '../actions/actions';

const putStoreToEditTaskNameField = ({ tasks }) => ({ tasks });

const putActionsToEditTaskNameField = (dispatch) => ({
  changeTaskName: bindActionCreators(changeTaskNameAction, dispatch),
});

class EditTaskNameField extends Component {
  constructor(props) {
    super(props);
    this.editTaskNameField = createRef();
  }

  componentDidMount() {
    this.editTaskNameField.current.focus();
    this.editTaskNameField.current.select();
  }

  submitEditedTaskName = (event) => {
    event.preventDefault();
    const { changeTaskName, toggleEditMode } = this.props;

    const newTaskName = (event.type === 'submit'
      ? event.target.newTaskName.value
      : event.target.value
    );
    const targetTaskID = (event.type === 'submit'
      ? event.target.parentNode.id
      : event.target.parentNode.parentNode.id
    );

    changeTaskName({ id: targetTaskID, name: newTaskName });
    toggleEditMode();
  }

  render() {
    const { taskName } = this.props;
    return (
      <form onSubmit={this.submitEditedTaskName}>
        <input
          ref={this.editTaskNameField}
          type="text"
          id="editTaskNameField"
          name="newTaskName"
          defaultValue={taskName}
          onBlur={this.submitEditedTaskName}
        />
      </form>
    );
  }
}

EditTaskNameField.propTypes = {
  taskName: PropTypes.string.isRequired,
  changeTaskName: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
};

export default connect(
  putStoreToEditTaskNameField,
  putActionsToEditTaskNameField,
)(EditTaskNameField);
