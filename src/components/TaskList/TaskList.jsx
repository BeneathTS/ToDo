/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PropTypes } from 'prop-types';
import Task from '../Task/Task';
import styles from './TaskList.module.css';

export default class TaskList extends React.Component {
  createTasks = (task) => (<Task key={task.id} {...task} />);

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
