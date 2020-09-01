// import React from 'react';

import { ADD_SUBMITTED_TASK, CHANGE_TASK_STATUS, CHANGE_TASK_NAME, ACTIVATE_EDIT_MODE, REMOVE_TASK_FROM_LIST } from "../types";


export const taskListScreenReducer = (state, action) => {	
	// console.log(state);
	// console.log(action);

	switch (action.type) {

		case ADD_SUBMITTED_TASK:
			console.log("debug: SUBMIT_TASK");

			const { tasks } = state;
			const taskID = tasks[0] ? tasks[0].id : -1;

			tasks.unshift({
				id: taskID + 1, 
				taskName: action.payload,
				taskStatus: null,
				editMode: false
			});
			// localStorage.setItem('TaskList', JSON.stringify(this.state));

			console.log(tasks);
			return ({ tasks });
			// return (state);

		case CHANGE_TASK_STATUS:
			console.log("debug: CHANGE_STATUS");
			// if (event.target.tagName !== "LI") return;

			// const { tasks } = this.state;
			// let targetTaskIndex = tasks.findIndex((task) => {
			// 	return (task.taskName === event.target.children[0].textContent);
			// });

			// tasks[targetTaskIndex].taskStatus = !tasks[targetTaskIndex].taskStatus ? "completeTaskStatus" : null;
			// this.setState(tasks);
			// localStorage.setItem('TaskList', JSON.stringify(this.state));
			return (state);

		case CHANGE_TASK_NAME:
			console.log("debug: CHANGE_NAME")
			// const { tasks } = this.state;
			// let targetTaskIndex = tasks.findIndex((task) => {
			// 	return (task.taskName === oldTaskName);
			// });

			// tasks[targetTaskIndex].taskName = newTaskName;
			// tasks[targetTaskIndex].editMode = false;
			// this.setState(tasks);
			// localStorage.setItem('TaskList', JSON.stringify(this.state));
			return (state);

		case ACTIVATE_EDIT_MODE:
			console.log("debug: EDIT_MODE");
			// const { tasks } = this.state;
			// let targetTaskIndex = tasks.findIndex((task) => {
			// 	return (task.taskName === event.target.textContent);
			// });

			// tasks[targetTaskIndex].editMode = true;
			// this.setState(tasks);
			// localStorage.setItem('TaskList', JSON.stringify(this.state));
			return (state);

		case REMOVE_TASK_FROM_LIST:
			console.log("debug: REMOVE_TASK");
			// const { tasks } = this.state;
			// let targetTaskIndex = tasks.findIndex((task) => {
			// 	return (task.taskName === targetTask.children[0].textContent);
			// });

			// tasks.splice(targetTaskIndex, 1);
			// this.setState(tasks);
			// localStorage.setItem('TaskList', JSON.stringify(this.state));
			return (state);
		default: 
			console.log("ti gde-to ob'egorilsya!");
			return (state);
	}
}