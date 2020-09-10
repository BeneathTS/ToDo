import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainMenu from './components/MainMenu';
import TaskListInfo from './components/TaskListInfo';
import TaskListScreen from './components/TaskListScreen';
import {store} from './store';
import './styles/index.css';

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
