import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainMenu from './components/MainMenu/MainMenu';
import TaskListInfo from './components/TaskListInfo/TaskListInfo';
import TaskListScreen from './components/TaskListScreen/TaskListScreen';
import { store } from './store';
import './index.css';

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
