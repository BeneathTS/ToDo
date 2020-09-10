import { createStore } from 'redux';
import taskListScreenReducer from './reducers/taskListScreenReducer';

export const store = createStore(
  taskListScreenReducer,
);

store.subscribe(() => (
  localStorage.setItem(
    'TaskList',
    JSON.stringify(store.getState()),
  )));