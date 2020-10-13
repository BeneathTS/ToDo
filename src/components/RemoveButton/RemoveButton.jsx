import React from 'react';
import { PropTypes } from 'prop-types';
import { removeButton } from './RemoveButton.module.css';

export default class RemoveButton extends React.Component {
  removeTask = (event) => {
    event.stopPropagation();
    const { markTaskAsRemoved } = this.props;

    markTaskAsRemoved();
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
  markTaskAsRemoved: PropTypes.func.isRequired,
};
