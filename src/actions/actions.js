// import React from 'react';
import { ADD_SUBMITTED_TASK, CHANGE_TASK_STATUS, CHANGE_TASK_NAME, ACTIVATE_EDIT_MODE, REMOVE_TASK_FROM_LIST } from '../types';

export const addSubmittedTaskNameAction = (submittedTaskName) =>{
	console.log(submittedTaskName);
	return({
		type: ADD_SUBMITTED_TASK,
		payload: submittedTaskName
	});
}

export const changeTaskStatusAction = (taskID) =>{
	return ({
		type: CHANGE_TASK_STATUS,
		payload: taskID
	})
}

export const changeTaskNameAction = (newTaskName) => {
	return ({
		type: CHANGE_TASK_NAME,
		payload: newTaskName
	});
}

export const activateEditModeAction = (taskID) => {
	return({
		type: ACTIVATE_EDIT_MODE,
		payload: taskID
	});
}

export const removeTaskFromListAction = (taskID) => {
	return ({
		type: REMOVE_TASK_FROM_LIST,
		payload: taskID
	});
}
