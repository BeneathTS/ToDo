import {
  ADD_SUBMITTED_TASK,
  CHANGE_TASK_STATUS,
  CHANGE_TASK_NAME,
  REMOVE_TASK_FROM_LIST,
} from '../types';

export const addSubmittedTaskNameAction = (submittedTaskName) => ({
  type: ADD_SUBMITTED_TASK,
  payload: submittedTaskName,
});

export const changeTaskStatusAction = (taskID) => ({
  type: CHANGE_TASK_STATUS,
  payload: taskID,
});

export const changeTaskNameOnSubmitAction = (editFieldData) => ({
  type: CHANGE_TASK_NAME,
  payload: editFieldData,
});

export const changeTaskNameOnBlurAction = (editFieldData) => ({
  type: CHANGE_TASK_NAME,
  payload: editFieldData,
});

export const removeTaskFromListAction = (taskID) => ({
  type: REMOVE_TASK_FROM_LIST,
  payload: taskID,
});
