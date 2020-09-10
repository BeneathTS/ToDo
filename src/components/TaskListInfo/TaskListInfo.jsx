import React from 'react';
import {
  taskListInfo,
  taskListNameStub,
} from './TaskListInfo.module.css';

export default function TaskListInfo() {
  return (
    <div className={taskListInfo}>
      <span className={taskListNameStub}>Today</span>
    </div>
  );
}
