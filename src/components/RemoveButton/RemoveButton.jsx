import React from 'react';
import { PropTypes } from 'prop-types';
import { removeButton, removedAnimation } from './RemoveButton.module.css';

export default class RemoveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { removed: false };
  }

  removeTask = (event) => {
    event.stopPropagation();

    const { removeTaskFromList, markTaskAsRemoved } = this.props;
    const { id } = event.target.parentNode;

    markTaskAsRemoved();
    this.setState({ removed: true });

    setTimeout(() => removeTaskFromList(id), 250);
  }

  render() {
    const { removed } = this.state;
    return (
      <div
        role="button"
        tabIndex="-1"
        className={`
          ${removeButton}
          ${removed ? removedAnimation : ''}
        `}
        onClick={this.removeTask}
        onKeyDown={() => {}}
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
