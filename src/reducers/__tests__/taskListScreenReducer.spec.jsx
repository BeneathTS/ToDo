import taskListScreenReducer from '../taskListScreenReducer';
import * as types from '../../types';

const testInitialState = {
  tasks: [ ]
};

const payload = [
    { id: "0", taskName: "TestValue", complete: false, },
];

describe('taskListScreenReducer tests', () => {
  
  it('Set Intital State in Store', () => {
    expect(taskListScreenReducer(undefined, {})
    ).toEqual(testInitialState);
  })

  it(`${types.ADD_SUBMITTED_TASK}`, () => {
    const type = types.ADD_SUBMITTED_TASK;

    expect(taskListScreenReducer(testInitialState, {type, payload})
    ).toEqual({tasks: payload});
  })

  it(`${types.CHANGE_TASK_STATUS}`, () => {
    const type = types.CHANGE_TASK_STATUS;

    expect(taskListScreenReducer(testInitialState, { type, payload })
    ).toEqual({tasks: payload});
  })
  
  it(`${types.REMOVE_TASK_FROM_LIST}`, () => {
    const type = types.REMOVE_TASK_FROM_LIST;

    expect(taskListScreenReducer(testInitialState, {type, payload})
    ).toEqual({tasks: payload});
  })

  it(`${types.CHANGE_TASK_NAME}: edit task name w/ id 2 on submit`, () => {
    const type = types.CHANGE_TASK_NAME;

    expect(taskListScreenReducer(testInitialState, {type, payload})
    ).toEqual({tasks: payload});
  })

});