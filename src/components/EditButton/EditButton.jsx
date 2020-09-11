import React from 'react';
import { PropTypes } from 'prop-types';
import { editButton } from './EditButton.module.css';

const EditButton = ({ toggleEditMode }) => (
  <div
    role="button"
    tabIndex="-1"
    className={editButton}
    onClick={toggleEditMode}
    onKeyPress={() => {}} // meh
  >
    e
  </div>
);

EditButton.propTypes = {
  toggleEditMode: PropTypes.func.isRequired,
};

export default EditButton;
