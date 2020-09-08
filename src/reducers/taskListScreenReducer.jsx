import {
  ADD_SUBMITTED_TASK,
  CHANGE_TASK_STATUS,
  CHANGE_TASK_NAME,
  REMOVE_TASK_FROM_LIST,
} from '../types';

const initialState = (
  JSON.parse(localStorage.getItem('TaskList'))
  || { tasks: [] }
);

export default function taskListScreenReducer(state = initialState, action) {
  const tasks = [...state.tasks];
  let taskID;
  let targetTaskIndex;

  switch (action.type) {
    case ADD_SUBMITTED_TASK:
      taskID = tasks[0] ? tasks[0].id : -1;

      tasks.unshift({
        id: `${+taskID + 1}`,
        taskName: action.payload,
        complete: false,
      });

      return ({ ...state, tasks });

    case CHANGE_TASK_STATUS:
      targetTaskIndex = tasks.findIndex((task) => (task.id === action.payload));

      tasks[targetTaskIndex].complete = (
        tasks[targetTaskIndex].complete
          ? false
          : true
      );

      return ({ ...state, tasks });

    case CHANGE_TASK_NAME:
      targetTaskIndex = tasks.findIndex((task) => (task.id === action.payload.id));

      tasks[targetTaskIndex].taskName = action.payload.newTaskName;

      return ({ ...state, tasks });

    case REMOVE_TASK_FROM_LIST:
      targetTaskIndex = tasks.findIndex((task) => (task.id === action.payload));

      tasks.splice(targetTaskIndex, 1);

      return ({ ...state, tasks });
    default:
      return (state);
  }
}
