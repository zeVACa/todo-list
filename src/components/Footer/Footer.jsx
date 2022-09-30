import React, { Component } from 'react';
import TasksFilter from '../TasksFilter';

class Footer extends Component {
  render() {
    const {
      setActiveFilterCategory,
      activeFilterCategory,
      deleteCompletedTasks,
      uncompletedTasksCount,
    } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{uncompletedTasksCount} items left</span>
        <TasksFilter
          setActiveFilterCategory={setActiveFilterCategory}
          activeFilterCategory={activeFilterCategory}
        />
        <button className="clear-completed" onClick={deleteCompletedTasks}>
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
