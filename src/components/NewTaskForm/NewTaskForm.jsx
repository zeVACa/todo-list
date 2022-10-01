import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewTaskForm extends Component {
  static defaultProps = {
    newTaskInputValue: '',
    onInputChangeHandle: () => {},
    onEnterKeyPress: () => {},
  };

  static propTypes = {
    newTaskInputValue: PropTypes.string,
    onInputChangeHandle: PropTypes.func,
    onEnterKeyPress: PropTypes.func,
  };

  render() {
    const { newTaskInputValue, onInputChangeHandle, onEnterKeyPress } =
      this.props;

    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={newTaskInputValue}
        onKeyPress={onEnterKeyPress}
        onChange={onInputChangeHandle}
      />
    );
  }
}

export default NewTaskForm;
