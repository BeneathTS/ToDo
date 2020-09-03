import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { removeTaskFromListAction } from '../actions/actions';
import '../styles/RemoveButton.css';

const putStoreToRemoveButton = (state) => {
  const { tasks } = state;

  return (
    { tasks }
  );
};

const putActionsToRemoveButton = (dispatch) => ({
  removeTaskFromList: bindActionCreators(removeTaskFromListAction, dispatch),
});

class RemoveButton extends React.Component {
  removeTask = (event) => {
    const targetTask = event.target.parentNode;
    const { removeTaskFromList } = this.props;

    removeTaskFromList(targetTask.id);
  }

  render() {
    return (
      <div
        role="button"
        tabIndex="-1"
        className="removeButton"
        onClick={this.removeTask}
        onKeyDown={this.removeTask}
      >
        x
      </div>
    );
  }
}

RemoveButton.propTypes = {
  removeTaskFromList: PropTypes.func.isRequired,
};

export default connect(
  putStoreToRemoveButton,
  putActionsToRemoveButton,
)(RemoveButton);
