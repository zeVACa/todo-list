import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  static propTypes = { addNewTask: PropTypes.func };

  static defaultProps = { addNewTask: () => {} };

  onEnterKeyPress = (e) => {
    const { inputValue } = this.state;
    const { addNewTask } = this.props;

    if (e.key === 'Enter') {
      if (inputValue === '') {
        return;
      }

      addNewTask(inputValue);
      this.setState({
        inputValue: '',
      });
    }
  };

  onInputChangeHandle = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={inputValue}
        onKeyPress={this.onEnterKeyPress}
        onChange={this.onInputChangeHandle}
      />
    );
  }
}

export default NewTaskForm;
