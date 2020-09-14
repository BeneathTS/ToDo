import {
  ADD_SUBMITTED_TASK,
  CHANGE_TASK_STATUS,
  CHANGE_TASK_NAME,
  REMOVE_TASK_FROM_LIST,
} from '../types';
import { store } from '../store';

export const addSubmittedTaskAction = (submittedTask) => {
  const state = store.getState();
  const tasks = [...state.tasks];
  const taskID = tasks[0] ? tasks[0].id : -1;

  tasks.unshift({
    id: `${Number(taskID) + 1}`,
    taskName: submittedTask,
    complete: false,
  });

  return ({
    type: ADD_SUBMITTED_TASK,
    payload: tasks,
  });
};

export const changeTaskStatusAction = (taskID) => {
  const state = store.getState();
  const tasks = [...state.tasks];
  const targetTaskIndex = tasks.findIndex((task) => (task.id === taskID));

  tasks[targetTaskIndex].complete = (
    !tasks[targetTaskIndex].complete
  );

  return ({
    type: CHANGE_TASK_STATUS,
    payload: tasks,
  });
};

export const changeTaskNameAction = (id, newTaskName) => {
  const state = store.getState();
  const tasks = [...state.tasks];
  const targetTaskIndex = tasks.findIndex((task) => (task.id === id));

  tasks[targetTaskIndex].taskName = newTaskName;

  return ({
    type: CHANGE_TASK_NAME,
    payload: tasks,
  });
};

export const removeTaskFromListAction = (taskID) => {
  const state = store.getState();
  const tasks = [...state.tasks];
  const targetTaskIndex = tasks.findIndex((task) => (task.id === taskID));

  tasks.splice(targetTaskIndex, 1);

  return ({
    type: REMOVE_TASK_FROM_LIST,
    payload: tasks,
  });
};
