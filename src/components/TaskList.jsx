import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Task from './Task';
import '../styles/TaskList.css';

const putStoreToTaskList = ({ tasks }) => ({ tasks });

class TaskList extends React.Component {
  createTasks = (task) => (
    <Task
      key={task.id}
      id={task.id}
      taskName={task.taskName}
      taskStatus={task.taskStatus}
    />
  )

  render() {
    const { tasks } = this.props;
    const taskList = tasks.map(this.createTasks);

    return (
      <ul className="tasks">
        {taskList}
      </ul>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  putStoreToTaskList,
)(TaskList);
