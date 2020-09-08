import React from 'react';
import { NewTaskInputField } from '../../../src/components/NewTaskInputField';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

describe('NewTaskInputField tests', () => {
  it ('Snapshot test', () => {
    const mockFn = jest.fn();
    const NewTaskInputFieldComponent = renderer.create(<NewTaskInputField addSubmittedTaskName={mockFn} />).toJSON();

    expect(NewTaskInputFieldComponent).toMatchSnapshot();
  });

});