import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Task({ editing, text, completed, deleteTask, completeTask, createdDate }) {
  const taskClass = classNames({
    completed,
    editing,
  });

  return (
    <li className={taskClass}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={completeTask} />
        <label id="task">
          <span className="description">{text}</span>
          <span className="created">
            {formatDistanceToNow(createdDate, { includeSeconds: true })}
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={deleteTask}></button>
      </div>
      {editing ? <input type="text" className="edit" value={text} /> : null}
    </li>
  );
}

Task.defaultProps = {
  editing: false,
  text: '',
  completed: false,
  deleteTask: () => {},
  id: 1,
  completeTask: () => {},
  createdDate: new Date(),
};

Task.propTypes = {
  editing: PropTypes.bool,
  text: PropTypes.string,
  completed: PropTypes.bool,
  deleteTask: PropTypes.func,
  id: PropTypes.number,
  completeTask: PropTypes.func,
  createdDate: PropTypes.object,
};

export default Task;
