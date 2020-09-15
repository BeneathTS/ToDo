import {
  ADD_SUBMITTED_TASK,
  CHANGE_TASK_STATUS,
  CHANGE_TASK_NAME,
  REMOVE_TASK_FROM_LIST,
} from '../types';
import { store } from '../store';

export const addSubmittedTaskAction = (submittedTask) => {
  const { tasks: oldState } = store.getState();
  const taskID = oldState[0] ? oldState[0].id : -1;

  const newState = Array.prototype.concat({
    id: `${Number(taskID) + 1}`,
    taskName: submittedTask,
    complete: false,
  },
  oldState);

  return ({
    type: ADD_SUBMITTED_TASK,
    payload: newState,
  });
};

export const changeTaskStatusAction = (taskID) => {
  const { tasks: oldState } = store.getState();

  const newState = oldState.map((task) => {
    if (task.id === taskID)
      task.complete = !task.complete;

    return(task);
  });

  return ({
    type: CHANGE_TASK_STATUS,
    payload: newState,
  });
};

export const changeTaskNameAction = (id, newTaskName) => {
  const { tasks: oldState } = store.getState();

  const newState = oldState.map((task) => {
    if (task.id === id)
      task.taskName = newTaskName;

    return (task);
  });

  return ({
    type: CHANGE_TASK_NAME,
    payload: newState,
  });
};

export const removeTaskFromListAction = (taskID) => {
  const { tasks: oldState } = store.getState();

  const newState = oldState.filter(({ id }) => (
    id === taskID ? false : true
  ));

  return ({
    type: REMOVE_TASK_FROM_LIST,
    payload: newState,
  });
};
