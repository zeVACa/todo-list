import React, { Component } from 'react';
import Task from '../Task/Task';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = props.deleteTask;
  }

  render() {
    return (
      <ul className="todo-list">
        {this.props.tasks.map((task) => {
          return (
            <Task
              text={task.text}
              completed={task.completed}
              editing={task.editing}
              key={task.id}
              deleteTask={this.deleteTask}
              id={task.id}
            />
          );
        })}
      </ul>
    );
  }
}

export default TaskList;
