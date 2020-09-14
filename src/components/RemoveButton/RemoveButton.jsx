import React from 'react';
import { PropTypes } from 'prop-types';
import { removeButton } from './RemoveButton.module.css';

export default class RemoveButton extends React.Component {
  removeTask = (event) => {
    event.stopPropagation();

    const { removeTaskFromList, markTaskAsRemoved } = this.props;
    const { id } = event.target.parentNode;

    markTaskAsRemoved();

    setTimeout(() => removeTaskFromList(id), 250);
  }

  render() {
    return (
      <button
        type="button"
        className={removeButton}
        onClick={this.removeTask}
      >
        x
      </button>
    );
  }
}

RemoveButton.propTypes = {
  removeTaskFromList: PropTypes.func.isRequired,
  markTaskAsRemoved: PropTypes.func.isRequired,
};
