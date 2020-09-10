import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainMenu from './components/MainMenu';
import TaskListInfo from './components/TaskListInfo';
import TaskListScreen from './components/TaskListScreen';
import taskListScreenReducer from './reducers/taskListScreenReducer';
import './styles/index.css';

export const store = createStore(
  taskListScreenReducer,
);

store.subscribe (() => (
  localStorage.setItem(
    'TaskList',
    JSON.stringify(store.getState()),
)));

function App() {
  return (
    <>
      <MainMenu />
      <TaskListInfo />
      <TaskListScreen />
    </>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('toDoList'),
);
