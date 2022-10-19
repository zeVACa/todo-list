import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ addNewTask }) => {
  const [taskValue, setTaskValue] = useState('');
  const [minutesValue, setMinutesValue] = useState('');
  const [secondsValue, setSecondsValue] = useState('');

  return (
    <form
      className="new-todo-form"
      onSubmit={(e) => {
        e.preventDefault();
        addNewTask(taskValue, parseInt(minutesValue), parseInt(secondsValue));
        setTaskValue('');
        setMinutesValue('');
        setSecondsValue('');
      }}
    >
      <input
        className="new-todo"
        placeholder="Task"
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
        required
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        type="number"
        onChange={(e) => setMinutesValue(e.target.value)}
        value={minutesValue}
        step={1}
        required
        min={0}
        max={10000}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        type="number"
        onChange={(e) => setSecondsValue(e.target.value)}
        value={secondsValue}
        step={1}
        required
        min={0}
        max={59}
      />
      <button type="submit" style={{ display: 'none' }}></button>
    </form>
  );
};

NewTaskForm.defaultProps = { addNewTask: () => {} };

NewTaskForm.propTypes = { addNewTask: PropTypes.func };

export default NewTaskForm;
