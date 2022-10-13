import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task.js';

class TaskList extends Component {
  render() {
    const { deleteTask, completeTask, tasks } = this.props;

    return (
      <ul className="todo-list">
        {tasks.map((task) => {
          return (
            <Task
              text={task.text}
              completed={task.completed}
              editing={task.editing}
              key={task.id}
              deleteTask={() => deleteTask(task.id)}
              completeTask={() => completeTask(task.id)}
              createdDate={task.createdDate}
              timeInSeconds={task.timeInSeconds}
            />
          );
        })}
      </ul>
    );
  }
}

TaskList.defaultProps = {
  deleteTask: () => {},
  completeTask: () => {},
  activeFilterCategory: 'all',
  tasks: [],
};

TaskList.propTypes = {
  deleteTask: PropTypes.func,
  completeTask: PropTypes.func,
  activeFilterCategory: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
};

export default TaskList;
