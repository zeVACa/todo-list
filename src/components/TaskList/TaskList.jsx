import React, { Component } from 'react';
import Task from '../Task/Task';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
    };
  }

  tick = () => {
    this.setState((state) => ({ seconds: state.seconds + 1 }));
  };

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { deleteTask, completeTask, activeFilterCategory, tasks } =
      this.props;

    return (
      <ul className="todo-list">
        {tasks
          .filter((task) => {
            if (activeFilterCategory === 'all') {
              return task;
            }

            if (activeFilterCategory === 'completed') {
              return task.completed;
            }

            if (activeFilterCategory === 'active') {
              return !task.completed;
            }

            return task;
          })
          .map((task) => {
            return (
              <Task
                text={task.text}
                completed={task.completed}
                editing={task.editing}
                key={task.id}
                deleteTask={deleteTask}
                id={task.id}
                completeTask={completeTask}
                createdDate={task.createdDate}
              />
            );
          })}
      </ul>
    );
  }
}

export default TaskList;
