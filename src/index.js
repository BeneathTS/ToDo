import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainMenu from './components/MainMenu';
import TaskListInfo from './components/TaskListInfo';
import TaskListScreen from './components/TaskListScreen';
import { taskListScreenReducer } from './reducers/taskListScreenReducer';
import './styles/index.css';

// const rootReducer = combineReducers({
//   taskListScreenReducer
// });

const initialState = (
  JSON.parse(localStorage.getItem('TaskList')) || 
  { tasks: [] }
);

const store = createStore(
  taskListScreenReducer, 
  initialState
);

function App()  {
  return (<>
    <MainMenu />
    <TaskListInfo />
    <TaskListScreen />
  </>);
    
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('toDoList')
);
