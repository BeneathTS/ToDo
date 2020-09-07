import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Task from './Task';
import styles from '../styles/TaskList.module.css';

const putStoreToTaskList = ({ tasks }) => ({ tasks });

export class TaskList extends React.Component {
  createTasks = (task) => (<Task {...task} />);

  render() {
    const { tasks } = this.props;
    const taskListItems = tasks.map(this.createTasks);

    return (
      <ul className={styles.tasks}>
        {taskListItems}
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
