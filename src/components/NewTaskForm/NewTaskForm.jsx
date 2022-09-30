import React, { Component } from 'react';

class NewTaskForm extends Component {
  render() {
    const { newTaskInputValue, onInputChangeHandle } = this.props;

    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={newTaskInputValue}
        onKeyPress={onInputChangeHandle}
        onChange={() => {}}
      />
    );
  }
}

export default NewTaskForm;
