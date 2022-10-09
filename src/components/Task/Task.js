import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Task extends Component {
  timerStart = () => {
    const { tickTask } = this.props;
    if (!this.intervalId) {
      this.intervalId = setInterval(tickTask, 1000);
    }
  };

  timerPaused = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { editing, text, completed, deleteTask, completeTask, createdDate, timeInSeconds } =
      this.props;

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
              <button className="icon icon-play" onClick={this.timerStart}></button>
              <button className="icon icon-pause" onClick={this.timerPaused}></button>
              <span>{`${Math.floor(timeInSeconds / 60)}:${timeInSeconds % 60}`}</span>
            </span>
            <span className="description">
              {formatDistanceToNow(createdDate, { includeSeconds: true })}
            </span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={deleteTask}></button>
        </div>
        {editing && <input type="text" className="edit" value={text} />}
      </li>
    );
  }
}

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
  tickTask: PropTypes.func.isRequired,
};

export default Task;
