import React from 'react';
import { Task } from '../Task';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Task tests', () => {
  let props, TaskComponent;

  beforeEach(() => {
    props = {
      id: "0",
      taskName: "TestValue",
      complete: false,
      changeTaskStatus: jest.fn(() => {return("lox!")}),
      removeTaskFromList: jest.fn(),
    };
    TaskComponent = shallow(<Task {...props} />);
  })

  it('Snapshot check', () => {
    const TaskComponent = renderer.create(<Task {...props} />).toJSON();

    expect(TaskComponent).toMatchSnapshot();
  })

  it('Task has \'completeTasksStatus\' class if get \'complete: true\' prop', () => {
    TaskComponent.setProps({complete: true});

    expect(TaskComponent.hasClass('completeTaskStatus')).toBeTruthy();
  });

  it('Task hasn\'t \'completeTasksStatus\' if get \'complete: false\' prop', () => {
    expect(TaskComponent.hasClass('completeTaskStatus')).toBeFalsy();
  });

  
  it('Task has TaskNameField if !editMode', () => {
    expect(TaskComponent.find('TaskNameField').exists()).toBeTruthy();
  });

  it('Task hasn\'t EditTaskNameField(connected to store) if !editMode', () => {
    expect(TaskComponent.find('Connect(EditTaskNameField)').exists()).toBeFalsy();
  });

  it('Task has EditTaskNameField(connected to store) if editMode', () => {
    const NewStateTaskComponent = TaskComponent.setState({ editMode: true });

    expect(NewStateTaskComponent.find('Connect(EditTaskNameField)').exists()).toBeTruthy();
  });

  it('Task hasn\'t TaskNameField if editMode', () => {
    const NewStateTaskComponent = TaskComponent.setState({ editMode: true });

    expect(NewStateTaskComponent.find('TaskNameField').exists()).toBeFalsy();
  });

  it('Task should call changeStatus fnc by click and only 1', () => {
    const spy = jest.spyOn(TaskComponent.instance(), 'changeStatus');
    TaskComponent.instance().forceUpdate();

    TaskComponent.simulate('click', { target: { id: '0' } });

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
