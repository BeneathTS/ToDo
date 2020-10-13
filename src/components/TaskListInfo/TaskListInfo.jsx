import React from 'react';
import {
  taskListInfo,
  taskListNameStub,
} from './TaskListInfo.module.css';

const TaskListInfo = () => (
  <div className={taskListInfo}>
    <span className={taskListNameStub}>Today</span>
  </div>
);

export default TaskListInfo;
