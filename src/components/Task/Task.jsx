import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

class Task extends Component {
  static defaultProps = {
    editing: false,
    text: '',
    completed: false,
    deleteTask: () => {},
    id: 1,
    completeTask: () => {},
    createdDate: new Date(),
  };

  static propTypes = {
    editing: PropTypes.bool,
    text: PropTypes.string,
    completed: PropTypes.bool,
    deleteTask: PropTypes.func,
    id: PropTypes.number,
    completeTask: PropTypes.func,
    createdDate: PropTypes.object,
  };

  render() {
    const {
      editing,
      text,
      completed,
      deleteTask,
      id,
      completeTask,
      createdDate,
    } = this.props;

    return (
      <li
        className={`${completed ? 'completed' : ''} ${
          editing ? 'editing' : ''
        }`}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => completeTask(id)}
          />
          <label>
            <span className="description">{text}</span>
            <span className="created">
              {formatDistanceToNow(createdDate, { includeSeconds: true })}
            </span>
          </label>
          <button className="icon icon-edit"></button>
          <button
            className="icon icon-destroy"
            onClick={() => deleteTask(id)}
          ></button>
        </div>
        {editing ? <input type="text" className="edit" value={text} /> : null}
      </li>
    );
  }
}

export default Task;
