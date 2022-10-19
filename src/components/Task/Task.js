import React, { useState, useEffect, useRef } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Task = ({
  timeInSeconds,
  editing,
  text,
  completed,
  deleteTask,
  completeTask,
  createdDate,
}) => {
  const [secondsFromCreated, setSecondsFromCreated] = useState(0);
  const [timerCountDownInSeconds, setTimerCountDownInSeconds] = useState(timeInSeconds);

  const countDownTimerId = useRef(null);
  const updateCreatedIntervalId = useRef(null);

  useEffect(() => {
    updateCreatedIntervalId.current = setInterval(
      () => setSecondsFromCreated((prevSeconds) => prevSeconds + 5),
      5000
    );

    return () => {
      clearInterval(countDownTimerId.current);
      clearInterval(updateCreatedIntervalId.current);
    };
  }, []);

  useEffect(() => {
    if (timerCountDownInSeconds <= 0) {
      clearInterval(countDownTimerId.current);
    }
  }, [timerCountDownInSeconds]);

  useEffect(() => {
    return () => {};
  }, [secondsFromCreated]);

  const timerStart = () => {
    if (!countDownTimerId.current && timerCountDownInSeconds > 0) {
      countDownTimerId.current = setInterval(
        () => setTimerCountDownInSeconds((prevSeconds) => prevSeconds - 1),
        1000
      );
    }
  };

  const timerPause = () => {
    clearInterval(countDownTimerId.current);
    countDownTimerId.current = null;
  };

  const taskClass = classNames({
    completed,
    editing,
  });

  return (
    <li className={taskClass}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={completeTask} />
        <label>
          <span className="title">{text}</span>
          <span className="description">
            <button className="icon icon-play" onClick={timerStart}></button>
            <button className="icon icon-pause" onClick={timerPause}></button>
            <span>{`${Math.floor(timerCountDownInSeconds / 60)}:${
              timerCountDownInSeconds % 60
            }`}</span>
          </span>
          <span className="description">
            {formatDistanceToNow(createdDate, { includeSeconds: true })}
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={() => {
            deleteTask();
            clearInterval(updateCreatedIntervalId.current);
            clearInterval(countDownTimerId.current);
          }}
        ></button>
      </div>
      {editing && <input type="text" className="edit" value={text} />}
    </li>
  );
};

Task.defaultProps = {
  editing: false,
  text: '',
  completed: false,
  deleteTask: () => {},
  completeTask: () => {},
  createdDate: new Date(),
};

Task.propTypes = {
  editing: PropTypes.bool,
  text: PropTypes.string,
  completed: PropTypes.bool,
  deleteTask: PropTypes.func,
  completeTask: PropTypes.func,
  createdDate: PropTypes.object,
  timeInSeconds: PropTypes.number,
};

export default Task;
