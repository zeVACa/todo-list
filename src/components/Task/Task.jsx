import React from 'react';

function Task({ text, completed, editing }) {
  console.log('editing', editing);
  return (
    <li
      className={`${completed ? 'completed' : ''} ${editing ? 'editing' : ''}`}
    >
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{text}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      {editing ? (
        <input type="text" className="edit" value="Editing task" />
      ) : null}
    </li>
  );
}

export default Task;
