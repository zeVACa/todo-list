/* eslint-disable */
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

  onInputChange = (property, e) => {
    this.setState({
      [property]: e.target.value,
    });
  };

  render() {
    const { taskValue, minutesValue, secondsValue } = this.state;
    const { addNewTask } = this.props;

    return (
      <form
        className="new-todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(1);
          addNewTask(taskValue, parseInt(minutesValue), parseInt(secondsValue));
          this.setState({
            taskValue: '',
            minutesValue: '',
            secondsValue: '',
          });
        }}
      >
        <input
          className="new-todo"
          placeholder="Task"
          required
          value={taskValue}
          onChange={(e) => this.onInputChange('taskValue', e)}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          required
          type="number"
          min={0}
          max={10000}
          onChange={(e) => this.onInputChange('minutesValue', e)}
          value={minutesValue}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          required
          type="number"
          min={0}
          max={59}
          onChange={(e) => this.onInputChange('secondsValue', e)}
          value={secondsValue}
        />
        <button type="submit" style={{ display: 'none' }}>
          отправить
        </button>
      </form>
    );
  }
}

export default NewTaskForm;
