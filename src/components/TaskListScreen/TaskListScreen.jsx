import React from 'react';
import TaskList from '../TaskList/TaskList';
import NewTaskInputField from '../NewTaskInputField/NewTaskInputField';
import { taskListScreen } from './TaskListScreen.module.css';

const TaskListScreen = () => (
  <div className={taskListScreen}>
    <NewTaskInputField />
    <TaskList />
  </div>
);

export default TaskListScreen;
