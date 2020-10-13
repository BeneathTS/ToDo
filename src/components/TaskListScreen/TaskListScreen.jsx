import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import TaskList from '../TaskList/TaskList';
import NewTaskInputField from '../NewTaskInputField/NewTaskInputField';
import { addSubmittedTaskAction } from '../../actions/actions';
import { taskListScreen } from './TaskListScreen.module.css';

const putStoreToTaskListScreen = ({ tasks }) => ({ tasks });
const putActionsToTaskListScreen = (dispatch) => ({
  addSubmittedTask: bindActionCreators(addSubmittedTaskAction, dispatch),
});

const TaskListScreen = ({ tasks, addSubmittedTask }) => (
  <div className={taskListScreen}>
    <NewTaskInputField addSubmittedTask={addSubmittedTask} />
    <TaskList tasks={tasks} />
  </div>
);

TaskListScreen.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  addSubmittedTask: PropTypes.func.isRequired,
};

export default connect(
  putStoreToTaskListScreen,
  putActionsToTaskListScreen,
)(TaskListScreen);
