import React from 'react';
import { Task } from '../../../src/components/Task';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Task tests', () => {
  let props;

  beforeEach(() => {
    props = {
      id: "0",
      taskName: "TestValue",
      complete: false,
      changeTaskStatus: jest.fn(),
      removeTaskFromList: jest.fn()
    }
  })

  it('Snapshot check', () => {
    const TaskComponent = renderer.create(<Task {...props} />).toJSON();

    expect(TaskComponent).toMatchSnapshot();
  })

  it('Task has \'completeTasksStatus\' class if get \'complete: true\' prop', () => {
    const TaskContainer = shallow(<Task {...props} complete={true} />);

    expect(TaskContainer.hasClass('completeTaskStatus')).toBeTruthy();
  });

  it('Task hasn\'t \'completeTasksStatus\' if get \'complete: false\' prop', () => {
    const TaskContainer = shallow(<Task {...props}  />);

    expect(TaskContainer.hasClass('completeTaskStatus')).toBeFalsy();
  });

  
  it('Task has TaskNameField if !editMode', () => {
    const TaskContainer = shallow(<Task {...props} />);

    expect(TaskContainer.find('TaskNameField').exists()).toBeTruthy();
  });

  it('Task hasn\'t EditTaskNameField(connected to store) if !editMode', () => {
    const TaskContainer = shallow(<Task {...props} />);

    expect(TaskContainer.find('Connect(EditTaskNameField)').exists()).toBeFalsy();
  });

  it('Task has EditTaskNameField(connected to store) if editMode', () => {
    const TaskContainer = shallow(<Task {...props} />);
    const NewStateTaskContainer = TaskContainer.setState({ editMode: true });

    expect(NewStateTaskContainer.find('Connect(EditTaskNameField)').exists()).toBeTruthy();
  });

  it('Task hasn\'t TaskNameField if editMode', () => {
    const TaskContainer = shallow(<Task {...props} />);
    const NewStateTaskContainer = TaskContainer.setState({ editMode: true });

    expect(NewStateTaskContainer.find('TaskNameField').exists()).toBeFalsy();
  });
});