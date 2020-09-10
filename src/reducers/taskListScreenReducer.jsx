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

export default function taskListScreenReducer(state = initialState, { type, payload: tasks }) {
  switch (type) {
    case ADD_SUBMITTED_TASK:
      return ({ ...state, tasks });
    case CHANGE_TASK_STATUS:
      return ({ ...state, tasks });
    case CHANGE_TASK_NAME:
      return ({ ...state, tasks });
    case REMOVE_TASK_FROM_LIST:
      return ({ ...state, tasks });
    default:
      return (state);
  }
}
