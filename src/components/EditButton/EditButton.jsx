import React from 'react';
import { PropTypes } from 'prop-types';
import { editButton } from './EditButton.module.css';

const EditButton = ({ toggleEditMode }) => (
  <button
    type="button"
    className={editButton}
    onClick={toggleEditMode}
  >
    e
  </button>
);

EditButton.propTypes = {
  toggleEditMode: PropTypes.func.isRequired,
};

export default EditButton;
