import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import MainMenu from './components/MainMenu';
import TaskListInfo from './components/TaskListInfo';
import TaskList from './components/TaskList';

function App()  {
  return (
    <div className="app">
      <MainMenu />
      <TaskListInfo />
      <TaskList />
    </div>
  );
}

ReactDOM.render(
 <App />,
  document.getElementById('toDoList')
);

