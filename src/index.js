import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import MainMenu from './components/MainMenu';
import TaskListInfo from './components/TaskListInfo';
import TaskListScreen from './components/TaskListScreen';

function App()  {
  return (
    <div className="app">
      <MainMenu />
      <TaskListInfo />
      <TaskListScreen />
    </div>
  );
}

ReactDOM.render(
 <App />,
  document.getElementById('toDoList')
);

