import React from 'react';
import { PropTypes } from 'prop-types';

const TaskNameField = ({ taskName }) => (
  <span role="textbox" tabIndex="-1">
    {taskName}
  </span>
);

TaskNameField.propTypes = {
  taskName: PropTypes.string.isRequired,
};

export default TaskNameField;
