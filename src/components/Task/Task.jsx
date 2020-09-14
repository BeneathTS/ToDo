import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { changeTaskStatusAction, removeTaskFromListAction } from '../../actions/actions';
import EditButton from '../EditButton/EditButton';
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
      : <TaskNameField taskName={taskName} />
    );
  }

  setTaskStatus = (complete) => (
    complete ? completeTaskStatus : ''
  );

  changeStatus = ({ currentTarget }) => {
    const { changeTaskStatus } = this.props;
    changeTaskStatus(currentTarget.id);
  }

  render() {
    const { id, removeTaskFromList, complete } = this.props;
    const { removed } = this.state;
    const taskClasses = classNames(
      task,
      this.setTaskStatus(complete),
      removed ? '' : taskHover,
      removed ? removedAnimation : '',
    );

    return (
      <li
        id={id}
        role="presentation"
        className={taskClasses}
        onClick={this.changeStatus}
        onKeyDown={() => {}} // meh
      >
        {this.displayTaskField()}
        <RemoveButton
          removeTaskFromList={removeTaskFromList}
          markTaskAsRemoved={this.markTaskAsRemoved}
        />
        <EditButton toggleEditMode={this.toggleEditMode} />
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
