import taskListScreenReducer from '../../src/reducers/taskListScreenReducer';
import * as actions from '../../src/actions/actions';
import * as types from '../../src/types';

const testInitialState = {
  tasks: [],
};

const multItemsState = {
  tasks: [
    { id: "2", taskName: "TestValue", complete: false, },
    { id: "1", taskName: "TestValue", complete: false, },
    { id: "0", taskName: "TestValue", complete: false, },
  ]
}

describe('taskListScreenReducer tests', () => {
  
  it('Set Intital State in Store', () => {
    expect(taskListScreenReducer(testInitialState, 'No_Action')
    ).toEqual(testInitialState);
  })

  it(`${types.ADD_SUBMITTED_TASK}: submit 1 task`, () => {
    const initialTestStore = JSON.parse(JSON.stringify(testInitialState));
    const expectedTestStore = {
      tasks: [
        {id: "0", taskName: "TestValue", complete: false,},
      ]
    }

    expect(taskListScreenReducer(initialTestStore, actions.addSubmittedTaskAction("TestValue"))
    ).toEqual(expectedTestStore);
  })

  it(`${types.ADD_SUBMITTED_TASK}: submit 3 tasks`, () => {
    let initialTestStore = JSON.parse(JSON.stringify(testInitialState));
    const expectedTestStore = JSON.parse(JSON.stringify(multItemsState));

    const doSubmitThreeTasks = (initialTestStore) => {
      let ct = -1;
      while (++ct < 3)
        initialTestStore = taskListScreenReducer(initialTestStore, actions.addSubmittedTaskAction("TestValue"));
      return(initialTestStore);
    }

    expect(doSubmitThreeTasks(initialTestStore)
    ).toEqual(expectedTestStore);
  })

  it(`${types.CHANGE_TASK_STATUS}: change task w/ id 1 status`, () => {
    const initialTestStore = JSON.parse(JSON.stringify(multItemsState));
    const expectedTestStore = {
      tasks: [
        { id: "2", taskName: "TestValue", complete: false, },
        { id: "1", taskName: "TestValue", complete: true, },
        { id: "0", taskName: "TestValue", complete: false, },
      ]
    }

    expect(taskListScreenReducer(initialTestStore, actions.changeTaskStatusAction("1"))
    ).toEqual(expectedTestStore);
  })

  it(`${types.CHANGE_TASK_STATUS}: change task w/ id 2 status`, () => {
    const initialTestStore = JSON.parse(JSON.stringify(multItemsState));
    const expectedTestStore = {
      tasks: [
        { id: "2", taskName: "TestValue", complete: true, },
        { id: "1", taskName: "TestValue", complete: false, },
        { id: "0", taskName: "TestValue", complete: false, },
      ]
    }

    expect(taskListScreenReducer(initialTestStore, actions.changeTaskStatusAction("2"))
    ).toEqual(expectedTestStore);
  })
  
  it(`${types.REMOVE_TASK_FROM_LIST}: remove task w/ id 1`, () => {
    const initialTestStore = JSON.parse(JSON.stringify(multItemsState));
    const expectedTestStore = {
      tasks: [
        { id: "2", taskName: "TestValue", complete: false, },
        { id: "0", taskName: "TestValue", complete: false, },
      ]
    }

    expect(taskListScreenReducer(initialTestStore, actions.removeTaskFromListAction('1'))
    ).toEqual(expectedTestStore);
  })

  it (`${types.REMOVE_TASK_FROM_LIST}: remove task w/ id 2`, () => {
    const initialTestStore = JSON.parse(JSON.stringify(multItemsState));
    const expectedTestStore = {
      tasks: [
        { id: "1", taskName: "TestValue", complete: false, },
        { id: "0", taskName: "TestValue", complete: false, },
      ]
    }

    expect(taskListScreenReducer(initialTestStore, actions.removeTaskFromListAction('2'))
    ).toEqual(expectedTestStore);
  })

  it(`${types.CHANGE_TASK_NAME}: edit task name w/ id 2 on submit`, () => {
    const initialTestStore = JSON.parse(JSON.stringify(multItemsState));
    const expectedTestStore = {
      tasks: [
        { id: "2", taskName: "EditedName", complete: false, },
        { id: "1", taskName: "TestValue", complete: false, },
        { id: "0", taskName: "TestValue", complete: false, },
      ]
    }

    expect(taskListScreenReducer(initialTestStore, actions.changeTaskNameOnSubmitAction({id: '2', newTaskName: "EditedName"}))
    ).toEqual(expectedTestStore);
  })

  it(`${types.CHANGE_TASK_NAME}: edit task name w/ id 1 on blur`, () => {
    const initialTestStore = JSON.parse(JSON.stringify(multItemsState));
    const expectedTestStore = {
      tasks: [
        { id: "2", taskName: "TestValue", complete: false, },
        { id: "1", taskName: "EditedName", complete: false, },
        { id: "0", taskName: "TestValue", complete: false, },
      ]
    }

    expect(taskListScreenReducer(initialTestStore, actions.changeTaskNameOnBlurAction({ id: '1', newTaskName: "EditedName" }))
    ).toEqual(expectedTestStore);
  })

});