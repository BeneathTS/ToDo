import React from 'react';
import TaskList from '../TaskList/TaskList';
import NewTaskInputField from '../NewTaskInputField/NewTaskInputField';
import { taskListScreen } from './TaskListScreen.module.css';

export default function TaskListScreen() {
  return (
    <div className={taskListScreen}>
      <NewTaskInputField />
      <TaskList />
    </div>
  );
}
