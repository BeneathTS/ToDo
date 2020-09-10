import React from 'react';
import NewTaskInputField from '../../../src/components/NewTaskInputField';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

describe('NewTaskInputField tests', () => {
  const mockStore = configureMockStore();
  let props, store;

  beforeEach(() => {
    store = mockStore();
    props = {
      addSubmittedTaskName: jest.fn(),
    }
  });

  it ('Snapshot check', () => {
    const NewTaskInputFieldComponent = renderer.create(
      <Provider store={store}>
        <NewTaskInputField {...props}/>).toJSON()
      </Provider>);

    expect(NewTaskInputFieldComponent).toMatchSnapshot();
  });

});