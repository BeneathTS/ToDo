import {	ADD_SUBMITTED_TASK,
			CHANGE_TASK_STATUS,
			CHANGE_TASK_NAME,
			REMOVE_TASK_FROM_LIST } from "../types";


export const taskListScreenReducer = (state, action) => {
	let tasks = [...state.tasks];
	let targetTaskIndex;

	switch (action.type) {
		case ADD_SUBMITTED_TASK:
			console.log("debug: SUBMIT_TASK");

			const taskID = tasks[0] ? tasks[0].id : -1;

			tasks.unshift({
				id: `${+taskID + 1}`, 
				taskName: action.payload,
				taskStatus: null
			});

			localStorage.setItem(
				'TaskList',
				JSON.stringify({ ...state, tasks })
			);

			return ({ ...state, tasks });

		case CHANGE_TASK_STATUS:
			console.log("debug: CHANGE_STATUS");
			
			targetTaskIndex = tasks.findIndex((task) => {
				return (task.id === action.payload);
			});

			tasks[targetTaskIndex].taskStatus = (
				tasks[targetTaskIndex].taskStatus ?
				null : 
				"completeTaskStatus"
			);

			localStorage.setItem(
				'TaskList',
				JSON.stringify({ ...state, tasks })
			);
			return ({ ...state, tasks });

		case CHANGE_TASK_NAME:
			console.log("debug: CHANGE_NAME")

			targetTaskIndex = tasks.findIndex((task) => {
				return (task.id === action.payload.id);
			});

			tasks[targetTaskIndex].taskName = action.payload.name;

			localStorage.setItem(
				'TaskList',
				JSON.stringify({ ...state, tasks })
			);
			return ({ ...state, tasks });

		case REMOVE_TASK_FROM_LIST:
			console.log("debug: REMOVE_TASK");
			
			targetTaskIndex = tasks.findIndex((task) => {
				return (task.id === action.payload);
			});
	
			tasks.splice(targetTaskIndex, 1);

			localStorage.setItem(
				'TaskList',
				JSON.stringify({ ...state, tasks })
			);
			return ({ ...state, tasks });
		default: 
			console.log("debug: setInitialState");
			return (state);
	}
}