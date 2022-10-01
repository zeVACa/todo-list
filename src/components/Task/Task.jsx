import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

class Task extends Component {
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
