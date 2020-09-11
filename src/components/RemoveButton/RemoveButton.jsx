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
      <div
        role="button"
        tabIndex="-1"
        className={removeButton}
        onClick={this.removeTask}
        onKeyDown={() => {}} // meh
      >
        x
      </div>
    );
  }
}

RemoveButton.propTypes = {
  removeTaskFromList: PropTypes.func.isRequired,
  markTaskAsRemoved: PropTypes.func.isRequired,
};
