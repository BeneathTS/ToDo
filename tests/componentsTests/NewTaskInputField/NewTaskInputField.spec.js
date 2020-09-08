import React from 'react';
import { NewTaskInputField } from '../../../src/components/NewTaskInputField';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('NewTaskInputField tests', () => {
  let props;

  beforeEach(() => {
    props = {
      addSubmittedTaskName: jest.fn(),
    }
  });

  it ('Snapshot check', () => {
    const NewTaskInputFieldComponent = renderer.create(<NewTaskInputField {...props} />).toJSON();

    expect(NewTaskInputFieldComponent).toMatchSnapshot();
  });

});