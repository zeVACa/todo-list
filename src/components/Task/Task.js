import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsFromCreated: 0,
      timerCountDownInSeconds: props.timeInSeconds,
    };

    this.countDownTimerId = null;
    this.updateCreatedIntervalId = null;
  }

  componentDidMount() {
    this.updateCreatedIntervalId = setInterval(this.updateCreatedTime, 5000);
  }

  updateCreatedTime = () => {
    this.setState((state) => ({ secondsFromCreated: state.secondsFromCreated + 5 }));
  };

  componentDidUpdate() {
    console.log('update');
    const { timerCountDownInSeconds } = this.state;
    if (timerCountDownInSeconds <= 0) {
      clearInterval(this.countDownTimerId);
    }
  }

  timerStart = () => {
    if (!this.countDownTimerId && this.state.timerCountDownInSeconds > 0) {
      this.countDownTimerId = setInterval(
        () =>
          this.setState((state) => ({
            timerCountDownInSeconds: state.timerCountDownInSeconds - 1,
          })),
        1000
      );
    }
  };

  timerPaused = () => {
    clearInterval(this.countDownTimerId);
    this.countDownTimerId = null;
  };

  componentWillUnmount() {
    clearInterval(this.countDownTimerId);
  }

  render() {
    const { editing, text, completed, deleteTask, completeTask, createdDate } = this.props;
    const { timerCountDownInSeconds } = this.state;

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
              clearInterval(this.updateCreatedIntervalId);
            }}
          ></button>
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
  timeInSeconds: PropTypes.number,
};

export default Task;
