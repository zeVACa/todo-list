import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskValue: '',
      minutesValue: '',
      secondsValue: '',
    };
  }

  static propTypes = { addNewTask: PropTypes.func };

  static defaultProps = { addNewTask: () => {} };

  onEnterKeyPress = (e) => {
    const { taskValue, minutesValue, secondsValue } = this.state;
    const { addNewTask } = this.props;

    if (e.key === 'Enter') {
      if (taskValue === '') {
        return;
      }

      addNewTask(taskValue, parseInt(minutesValue), parseInt(secondsValue));
      this.setState({
        taskValue: '',
        minutesValue: '',
        secondsValue: '',
      });
    }
  };

  onInputChange = (property, e) => {
    this.setState({
      [property]: e.target.value,
    });
  };

  render() {
    const { taskValue, minutesValue, secondsValue } = this.state;

    return (
      <form className="new-todo-form">
        <input
          className="new-todo"
          placeholder="Task"
          value={taskValue}
          onChange={(e) => this.onInputChange('taskValue', e)}
          autoFocus
          onKeyPress={this.onEnterKeyPress}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          type="number"
          onChange={(e) => this.onInputChange('minutesValue', e)}
          value={minutesValue}
          onKeyPress={this.onEnterKeyPress}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          type="number"
          onChange={(e) => this.onInputChange('secondsValue', e)}
          value={secondsValue}
          onKeyPress={this.onEnterKeyPress}
        />
      </form>
    );
  }
}

export default NewTaskForm;
