import React from 'react';
import Task from '../Task/Task';

function TaskList() {
  const tasks = [
    { completed: true, editing: false, text: 'Completed task' },
    { completed: false, editing: true, text: 'Editing task' },
    { completed: false, editing: false, text: 'Active task' },
  ];

  return (
    <ul className="todo-list">
      {tasks.map((task) => {
        return (
          <Task
            text={task.text}
            completed={task.completed}
            editing={task.editing}
          />
        );
      })}
    </ul>
  );
}

export default TaskList;
