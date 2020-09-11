import React, { Component, createRef } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  changeTaskNameAction,
} from '../../actions/actions';
import './EditTaskNameField.module.css';

const putStoreToEditTaskNameField = ({ tasks }) => ({ tasks });

const putActionsToEditTaskNameField = (dispatch) => ({
  changeTaskName: bindActionCreators(changeTaskNameAction, dispatch),
});

class EditTaskNameField extends Component {
  constructor(props) {
    super(props);
    this.editFieldRef = createRef();
  }

  componentDidMount() {
    this.editFieldRef.current.focus();
  }

  submitEditedTaskNameBySubmit = (event) => {
    event.preventDefault();

    const { changeTaskName, toggleEditMode } = this.props;
    const { id } = event.target.parentNode;
    const { value: newTaskName } = event.target.editTaskNameField;

    changeTaskName(id, newTaskName);
    toggleEditMode(event);
  }

  submitEditedTaskNameByBlur = (event) => {
    const { changeTaskName, toggleEditMode } = this.props;
    const { id } = event.target.parentNode.parentNode;
    const { value: newTaskName } = event.target;

    changeTaskName(id, newTaskName);
    toggleEditMode(event);
  }

  render() {
    const { taskName } = this.props;
    return (
      <form onSubmit={this.submitEditedTaskNameBySubmit}>
        <input
          ref={this.editFieldRef}
          type="text"
          id="editTaskNameField"
          name="editTaskNameField"
          defaultValue={taskName}
          onBlur={this.submitEditedTaskNameByBlur}
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
