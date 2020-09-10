import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTaskStatusAction, removeTaskFromListAction } from '../../actions/actions';
import RemoveButton from '../RemoveButton/RemoveButton';
import TaskNameField from '../TaskNameField/TaskNameField';
import EditTaskNameField from '../EditTaskNameField/EditTaskNameField';
import {
  task, completeTaskStatus, removedAnimation, taskHover,
} from './Task.module.css';

const putStoreToTask = ({ tasks }) => ({ tasks });

const putActionsToTask = (dispatch) => ({
  changeTaskStatus: bindActionCreators(changeTaskStatusAction, dispatch),
  removeTaskFromList: bindActionCreators(removeTaskFromListAction, dispatch),
});

export class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      removed: false,
    };
  }

  markTaskAsRemoved = () => {
    this.setState({ removed: true });
  }

  toggleEditMode = (event) => {
    event.stopPropagation();

    const { editMode } = this.state;
    this.setState({ editMode: !editMode });
  }

  displayTaskField = () => {
    const { taskName } = this.props;
    const { editMode } = this.state;

    return (editMode
      ? (
        <EditTaskNameField
          taskName={taskName}
          toggleEditMode={this.toggleEditMode}
        />
      )
      : (
        <TaskNameField
          taskName={taskName}
          toggleEditMode={this.toggleEditMode}
        />
      )
    );
  }

  setTaskStatus = (complete) => (
    complete ? completeTaskStatus : ''
  );

  changeStatus = ({ target }) => {
    const { changeTaskStatus } = this.props;
    changeTaskStatus(target.id);
  }

  render() {
    const { id, removeTaskFromList, complete } = this.props;
    const { removed } = this.state;
    return (
      <li
        id={id}
        role="presentation"
        className={`
          ${task}
          ${this.setTaskStatus(complete)}
          ${removed ? '' : taskHover}
          ${removed ? removedAnimation : ''}
        `}
        onClick={this.changeStatus}
        onKeyDown={() => {}}
      >
        {this.displayTaskField()}
        <RemoveButton
          removeTaskFromList={removed
            ? () => {}
            : removeTaskFromList}
          markTaskAsRemoved={this.markTaskAsRemoved}
        />
      </li>
    );
  }
}

Task.propTypes = {
  taskName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  changeTaskStatus: PropTypes.func.isRequired,
  removeTaskFromList: PropTypes.func.isRequired,
};

export default connect(
  putStoreToTask,
  putActionsToTask,
)(Task);
