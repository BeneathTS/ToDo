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
  </>);
    
}

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    <TaskListScreen />
  </Provider>,
  document.getElementById('toDoList')
);
