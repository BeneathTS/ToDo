import React from 'react';
import { PropTypes } from 'prop-types';

export default function TaskNameField(props) {
  const { taskName, toggleEditMode } = props;

  return (
    <span
      className="taskName"
      role="textbox"
      tabIndex="-1"
      onClick={toggleEditMode}
      onKeyPress={()=>{}}
    >
      {taskName}
    </span>
  );
}

TaskNameField.propTypes = {
  taskName: PropTypes.string.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
};
