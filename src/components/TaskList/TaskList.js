import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState((state) => ({ seconds: state.seconds + 1 }));
  };

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
