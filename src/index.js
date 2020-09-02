import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
<<<<<<< HEAD
import './styles/index.css';
=======
import { Provider } from 'react-redux';
>>>>>>> f6e3ead19acc7775c9e564d346072f52edf1cbcf
import MainMenu from './components/MainMenu';
import TaskListInfo from './components/TaskListInfo';
import TaskListScreen from './components/TaskListScreen';
import { taskListScreenReducer } from './reducers/taskListScreenReducer';
<<<<<<< HEAD
import { Provider, connect } from 'react-redux';

// const rootReducer = combineReducers({
//   taskListScreenReducer
// });

const putTasksToTaskListScreen = (state) => {
  const { tasks } = state;

  console.log("connection task to TaskListScreen");
  console.log(state);
  return (
    { tasks }
  );

}

const store = createStore(taskListScreenReducer, { tasks: [{id: 0, taskName: "qwer", editMode: false, taskStatus: null},] }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const WrappedTaskListScreenComponent = connect(putTasksToTaskListScreen)(TaskListScreen);

function App()  {
  return (<>
    {/* <MainMenu />
    <TaskListInfo /> */}
=======
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
>>>>>>> f6e3ead19acc7775c9e564d346072f52edf1cbcf
  </>);
    
}

ReactDOM.render(
  <Provider store={store}>
<<<<<<< HEAD
    {/* <App /> */}
    <TaskListScreen />
=======
    <App />
>>>>>>> f6e3ead19acc7775c9e564d346072f52edf1cbcf
  </Provider>,
  document.getElementById('toDoList')
);
