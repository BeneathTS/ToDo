import {	ADD_SUBMITTED_TASK, 
			CHANGE_TASK_STATUS,
			CHANGE_TASK_NAME,
			REMOVE_TASK_FROM_LIST } from '../types';

export const addSubmittedTaskNameAction = (submittedTaskName) => {
	return({
		type: ADD_SUBMITTED_TASK,
		payload: submittedTaskName
	});
}

export const changeTaskStatusAction = (taskID) => {
	return ({
		type: CHANGE_TASK_STATUS,
		payload: taskID
	});
}

export const changeTaskNameAction = (editFieldData) => {
	return ({
		type: CHANGE_TASK_NAME,
		payload: editFieldData
	});
}

export const removeTaskFromListAction = (taskID) => {
	return ({
		type: REMOVE_TASK_FROM_LIST,
		payload: taskID
	});
}
