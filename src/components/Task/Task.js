/* eslint-disable */
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
        <label>
          <span className="title">{text}</span>
          <span className="description">
            <button className="icon icon-play"></button>
            <button className="icon icon-pause"></button>
            12:25
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
    // <li className="editing">
    //   <div className="view">
    //     <input className="toggle" type="checkbox" />
    //     <label>
    //       <span className="title">fw</span>
    //       <span className="description">
    //         <button className="icon icon-play"></button>
    //         <button className="icon icon-pause"></button>
    //         12:25
    //       </span>
    //       <span className="description">created 5 minutes ago</span>
    //     </label>
    //     <button className="icon icon-edit"></button>
    //     <button className="icon icon-destroy"></button>
    //   </div>
    //   <input type="text" className="edit" />
    // </li>
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
