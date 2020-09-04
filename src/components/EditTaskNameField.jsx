import React, { Component, createRef } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  changeTaskNameOnSubmitAction,
  changeTaskNameOnBlurAction,
} from '../actions/actions';

const putStoreToEditTaskNameField = ({ tasks }) => ({ tasks });

const putActionsToEditTaskNameField = (dispatch) => ({
  changeTaskNameOnBlur: bindActionCreators(changeTaskNameOnBlurAction, dispatch),
  changeTaskNameOnSubmit: bindActionCreators(changeTaskNameOnSubmitAction, dispatch),
});

export class EditTaskNameField extends Component {
  constructor(props) {
    super(props);
    this.editTaskNameField = createRef();
  }

  componentDidMount() {
    this.editTaskNameField.current.focus();
    this.editTaskNameField.current.select();
  }

  submitEditedTaskNameBySubmit = (event) => {
    event.preventDefault();

    const { changeTaskNameOnSubmit, toggleEditMode } = this.props;
    const newTaskName = event.target.newTaskName.value;
    const targetTaskID = event.target.parentNode.id;

    changeTaskNameOnSubmit({ id: targetTaskID, name: newTaskName });
    toggleEditMode();
  }

  submitEditedTaskNameByBlur = (event) => {
    const { changeTaskNameOnBlur, toggleEditMode } = this.props;
    const targetTaskID = event.target.parentNode.parentNode.id;
    const newTaskName = event.target.value;

    changeTaskNameOnBlur({ id: targetTaskID, name: newTaskName });
    toggleEditMode();
  }

  render() {
    const { taskName } = this.props;
    return (
      <form onSubmit={this.submitEditedTaskNameBySubmit}>
        <input
          ref={this.editTaskNameField}
          type="text"
          id="editTaskNameField"
          name="newTaskName"
          defaultValue={taskName}
          onBlur={this.submitEditedTaskNameByBlur}
        />
      </form>
    );
  }
}

EditTaskNameField.propTypes = {
  taskName: PropTypes.string.isRequired,
  changeTaskNameOnSubmit: PropTypes.func.isRequired,
  changeTaskNameOnBlur: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
};

export default connect(
  putStoreToEditTaskNameField,
  putActionsToEditTaskNameField,
)(EditTaskNameField);
