import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './styles/index.css';
import MainMenu from './components/MainMenu';
import TaskListInfo from './components/TaskListInfo';
import TaskListScreen from './components/TaskListScreen';
import { taskListScreenReducer } from './reducers/taskListScreenReducer';
import { Provider, connect } from 'react-redux';

// const rootReducer = combineReducers({
//   taskListScreenReducer
// });

const store = createStore(taskListScreenReducer, { tasks: [] }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
