import React from 'react';
import { PropTypes } from 'prop-types';
import { removeButton } from '../styles/RemoveButton.module.css';

export default class RemoveButton extends React.Component {
  removeTask = (event) => {
    event.stopPropagation();

    const { removeTaskFromList } = this.props;
    const { id } = event.target.parentNode;

    removeTaskFromList(id);
  }

  render() {
    return (
      <div
        role="button"
        tabIndex="-1"
        className={removeButton}
        onClick={this.removeTask}
        onKeyDown={()=>{}}
      >
        x
      </div>
    );
  };
}

RemoveButton.propTypes = {
  removeTaskFromList: PropTypes.func.isRequired,
};
