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
    let { taskValue, minutesValue, secondsValue } = this.state;
    const { addNewTask } = this.props;

    if (e.key === 'Enter') {
      if (taskValue === '') {
        return;
      }

      if (
        minutesValue &&
        secondsValue &&
        minutesValue >= 0 &&
        minutesValue <= 10000 &&
        secondsValue >= 0 &&
        secondsValue <= 59 &&
        Number.isInteger(Number(minutesValue)) &&
        Number.isInteger(Number(secondsValue))
      ) {
        addNewTask(taskValue, parseInt(minutesValue), parseInt(secondsValue));
        this.setState({
          taskValue: '',
          minutesValue: '',
          secondsValue: '',
        });
      }
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
          onKeyPress={this.onEnterKeyPress}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          type="number"
          onChange={(e) => this.onInputChange('minutesValue', e)}
          value={minutesValue}
          onKeyPress={this.onEnterKeyPress}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
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
