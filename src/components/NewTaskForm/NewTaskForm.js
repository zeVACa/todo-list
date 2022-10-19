import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ addNewTask }) => {
  const [taskValue, setTaskValue] = useState('');
  const [minutesValue, setMinutesValue] = useState('');
  const [secondsValue, setSecondsValue] = useState('');

  const onEnterKeyPress = (e) => {
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
        setTaskValue('');
        setMinutesValue('');
        setSecondsValue('');
      }
    }
  };

  return (
    <form className="new-todo-form">
      <input
        className="new-todo"
        placeholder="Task"
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
        onKeyPress={onEnterKeyPress}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        type="number"
        onChange={(e) => setMinutesValue(e.target.value)}
        value={minutesValue}
        onKeyPress={onEnterKeyPress}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        type="number"
        onChange={(e) => setSecondsValue(e.target.value)}
        value={secondsValue}
        onKeyPress={onEnterKeyPress}
      />
    </form>
  );
};

NewTaskForm.defaultProps = { addNewTask: () => {} };

NewTaskForm.propTypes = { addNewTask: PropTypes.func };

export default NewTaskForm;
