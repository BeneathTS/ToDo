import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTaskStatusAction, removeTaskFromListAction } from '../actions/actions';
import RemoveButton from './RemoveButton';
import TaskNameField from './TaskNameField';
import EditTaskNameField from './EditTaskNameField';
import { task, completeTaskStatus } from  '../styles/Task.module.css';

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
    };
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

  setTaskStatus = () => (
    this.props.complete ? completeTaskStatus : ''
  );

  changeStatus = ({target}) => {
    const { changeTaskStatus } = this.props;
    changeTaskStatus(target.id);
  }

  render() {
    const { id, removeTaskFromList } = this.props;

    return (
      <li
        id={id}
        role="presentation"
        className={`${task} ${this.setTaskStatus()}`}
        onClick={this.changeStatus}
        onKeyDown={()=>{}}
      >
        {this.displayTaskField()}
        <RemoveButton removeTaskFromList={removeTaskFromList}/>
      </li>
    );
  }
}

Task.propTypes = {
  taskName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  changeTaskStatus: PropTypes.func.isRequired,
};

export default connect(
  putStoreToTask,
  putActionsToTask,
)(Task);
