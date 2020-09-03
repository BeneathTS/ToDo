import {
  ADD_SUBMITTED_TASK,
  CHANGE_TASK_STATUS,
  CHANGE_TASK_NAME,
  REMOVE_TASK_FROM_LIST,
} from '../types';

export default function taskListScreenReducer(state, action) {
  const tasks = [...state.tasks];
  let taskID;
  let targetTaskIndex;

  switch (action.type) {
    case ADD_SUBMITTED_TASK:
      taskID = tasks[0] ? tasks[0].id : -1;

      tasks.unshift({
        id: `${+taskID + 1}`,
        taskName: action.payload,
        taskStatus: '',
      });

      localStorage.setItem(
        'TaskList',
        JSON.stringify({ ...state, tasks }),
      );

      return ({ ...state, tasks });

    case CHANGE_TASK_STATUS:
      targetTaskIndex = tasks.findIndex((task) => (task.id === action.payload));

      tasks[targetTaskIndex].taskStatus = (
        tasks[targetTaskIndex].taskStatus
          ? ''
          : 'completeTaskStatus'
      );

      localStorage.setItem(
        'TaskList',
        JSON.stringify({ ...state, tasks }),
      );
      return ({ ...state, tasks });

    case CHANGE_TASK_NAME:
      targetTaskIndex = tasks.findIndex((task) => (task.id === action.payload.id));

      tasks[targetTaskIndex].taskName = action.payload.name;

      localStorage.setItem(
        'TaskList',
        JSON.stringify({ ...state, tasks }),
      );
      return ({ ...state, tasks });

    case REMOVE_TASK_FROM_LIST:
      targetTaskIndex = tasks.findIndex((task) => (task.id === action.payload));

      tasks.splice(targetTaskIndex, 1);

      localStorage.setItem(
        'TaskList',
        JSON.stringify({ ...state, tasks }),
      );
      return ({ ...state, tasks });
    default:
      return (state);
  }
}
