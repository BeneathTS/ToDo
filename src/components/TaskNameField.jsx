import React from 'react';
import { PropTypes } from 'prop-types';

export default function TaskNameField(props) {
  const { taskName, toggleEditMode } = props;

  return (
    <span
      className="taskName"
      role="textbox"
      tabIndex="-1" // meh
      onClick={toggleEditMode}
      onKeyPress={toggleEditMode}
    >
      {taskName}
    </span>
  );
}

TaskNameField.propTypes = {
  taskName: PropTypes.string.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
};
