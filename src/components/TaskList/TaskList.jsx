import React, { Component } from 'react';
import Task from '../Task/Task';

class TaskList extends Component {
  render() {
    const { deleteTask, completeTask } = this.props;

    return (
      <ul className="todo-list">
        {this.props.tasks.map((task) => {
          return (
            <Task
              text={task.text}
              completed={task.completed}
              editing={task.editing}
              key={task.id}
              deleteTask={deleteTask}
              id={task.id}
              completeTask={completeTask}
            />
          );
        })}
      </ul>
    );
  }
}

export default TaskList;
